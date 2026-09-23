import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { calculateTelescopicOptions, performEngineeringCalculation, CylinderSpec } from '@/lib/calculator';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { inputs } = body;

    if (!inputs) {
      return NextResponse.json({ error: 'Missing inputs' }, { status: 400 });
    }

    const isTelescopic = inputs.cylinderType === 'telescopic';

    // Fetch base data based on type
    const [teleCyls, standardCyls, rules, traffic, pumps] = await Promise.all([
      isTelescopic ? supabase.from('telescopic_cylinders').select('*').order('diameter_mm') : Promise.resolve({ data: [] }),
      !isTelescopic ? supabase.from('cylinder_dimensions').select('*').order('ram_diameter') : Promise.resolve({ data: [] }),
      isTelescopic ? supabase.from('reserve_stroke_rules').select('*') : Promise.resolve({ data: [] }),
      supabase.from('traffic_usage_factors').select('*'),
      supabase.from('pump_catalog').select('*')
    ]);

    let trafficMap: any = {};
    if (traffic.data) {
      traffic.data.forEach(t => trafficMap[t.building_type_key] = t);
    }

    let catalogValues: number[] = [];
    if (pumps.data) {
      catalogValues = pumps.data.map(p => Number(p.flow_lpm)).sort((a, b) => a - b);
    }

    if (isTelescopic) {
      const teleOptions = await calculateTelescopicOptions(
        inputs,
        teleCyls.data || [],
        rules.data || [],
        trafficMap,
        catalogValues
      );
      return NextResponse.json({ options: teleOptions, isTelescopic: true });
    } else {
      // Standard Cylinders Loop
      const cylinderList = standardCyls.data || [];
      const results = cylinderList.map(cyl => {
        const spec: CylinderSpec = {
          d: cyl.ram_diameter,
          t: cyl.wall_thickness,
          mcm: cyl.mcm,
          mco: cyl.mco,
          g_val: cyl.g_val,
          c1: cyl.c1,
          c2: cyl.c2,
          type: `Piston Ø${cyl.ram_diameter}x${cyl.wall_thickness}`
        };
        const cylinderDimension = { p_max_mpa: cyl.p_max_mpa, inertia_cm4: cyl.inertia_cm4 };
        const res = performEngineeringCalculation(inputs, spec, undefined, trafficMap, catalogValues, cylinderDimension);
        
        const pEmpty = parseFloat(res.pressureEmpty as string);
        const pFull = parseFloat(res.pressureFull as string);
        const pLimit = cyl.p_max_mpa ? cyl.p_max_mpa * 10 : 59;
        
        let isBucklingSafe = res.isBucklingSafe && pEmpty >= 12 && pFull <= pLimit && (cyl.ram_diameter > 0);
        let reason = "";
        if (!res.isBucklingSafe) {
          reason = `Burkulma güvenliği yetersiz (Narinlik λ=${res.lambda || 'N/A'})`;
        } else if (pEmpty < 12) {
          reason = `Statik boş basınç çok düşük (${pEmpty.toFixed(1)} < 12 bar)`;
        } else if (pFull > pLimit) {
          reason = `Maksimum çalışma basıncı aşıldı (${pFull.toFixed(1)} > ${pLimit} bar)`;
        } else if (res.warnings && res.warnings.length > 0) {
          reason = res.warnings[0];
          isBucklingSafe = false;
        }

        return {
          ...res,
          isViable: isBucklingSafe,
          reason,
          pLimit,
          originalSpec: spec
        };
      });

      return NextResponse.json({ options: results, isTelescopic: false });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
