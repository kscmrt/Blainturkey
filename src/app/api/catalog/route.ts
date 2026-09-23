import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const [teleCyls, rules, traffic, pumps] = await Promise.all([
      supabase.from('telescopic_cylinders').select('*').order('diameter_mm'),
      supabase.from('reserve_strokes').select('*'),
      supabase.from('traffic_usage_factors').select('*'),
      supabase.from('pumps').select('*')
    ]);

    let trafficMap: any = {};
    if (traffic.data) {
      traffic.data.forEach(t => trafficMap[t.building_type_key] = t);
    }

    let catalogValues = [];
    if (pumps.data) {
      catalogValues = pumps.data.map(p => Number(p.flow_lpm)).sort((a, b) => a - b);
    }

    return NextResponse.json({
      teleCyls: teleCyls.data || [],
      rules: rules.data || [],
      trafficMap,
      pumpCatalog: catalogValues
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
