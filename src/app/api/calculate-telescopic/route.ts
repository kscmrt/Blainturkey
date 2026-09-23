import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { calculateTelescopicOptions } from '@/lib/calculator';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { inputs } = body;

    if (!inputs) {
      return NextResponse.json({ error: 'Missing inputs' }, { status: 400 });
    }

    // Fetch base data
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

    // Call the calculator engine server-side so Supabase requests for yoke and prices happen securely
    const teleOptions = await calculateTelescopicOptions(
      inputs,
      teleCyls.data || [],
      rules.data || [],
      trafficMap,
      catalogValues
    );

    return NextResponse.json({ options: teleOptions });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
