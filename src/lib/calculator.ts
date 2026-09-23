/**
 * Engineering Calculator Module (v2)
 * Refactored for Next.js + TypeScript
 */

import { supabase } from '@/lib/supabase';

export const CONSTANTS = {
    GRAVITY: 9.81,
    EXTRA_WEIGHT: 50,           // Cable/Pulley assumption in kg
    DENSITY_OIL: 870,           // kg/m^3
    SPECIFIC_HEAT_OIL: 2.0,     // kJ/(kg*C)
    STEEL_E_MODULUS: 210000,    // N/mm^2
    STEEL_YIELD_STRENGTH: 355,  // N/mm^2 (S355)
    SAFETY_FACTOR_DYNAMIC: 1.4, // Safety factor for dynamic loads
    SAFETY_FACTOR_BUCKLING_CATALOG: 2.0, // COAM Catalog baseline
    BUCKLING_SAFETY_THRESHOLD: 1.15, // 15% margin over catalog limit required for 'suitable'
    TELESCOPIC_SALES_FACTOR: 1.508,
    TELESCOPIC_FIXED_ADDITION: 42,
    RAM_WEIGHT_FACTOR: 40.55,   // Weight factor for steel pipe divisor
    BUCKLING_LIMIT_LAMBDA: 100, // Slenderness ratio limit for Euler
    EULER_FACTOR: 0.64          // Factor for ram weight in buckling
};

const getC = (key: keyof typeof CONSTANTS, dynamic?: Record<string, number>) => {
    return dynamic?.[key] ?? CONSTANTS[key];
};

export let VALVE_GUIDE_RULES: Record<string, any[]> = {
    "0,75": [
        { flow: 8, rules: [{ guide: "1" }] },
        { flow: 12, rules: [{ guide: "1" }] },
        { flow: 16, rules: [{ guide: "1" }] },
        { flow: 20, rules: [{ max: 25, guide: "2" }, { min: 25, guide: "1" }] },
        { flow: 25, rules: [{ max: 15, guide: "3" }, { min: 15, max: 30, guide: "2" }, { min: 30, guide: "1" }] },
        { flow: 30, rules: [{ max: 20, guide: "3" }, { min: 20, max: 40, guide: "2" }, { min: 40, guide: "1" }] },
        { flow: 43, rules: [{ max: 15, guide: "4" }, { min: 15, max: 38, guide: "3" }, { min: 38, guide: "2" }] },
        { flow: 55, rules: [{ max: 30, guide: "4" }, { min: 30, guide: "3" }] },
        { flow: 75, rules: [{ max: 24, guide: "5" }, { min: 24, guide: "4" }] },
        { flow: 100, rules: [{ max: 23, guide: "6" }, { min: 23, guide: "5" }] },
        { flow: 125, rules: [{ max: 35, guide: "6" }, { min: 35, guide: "5" }] }
    ],
    "1,5": [
        { flow: 125, rules: [{ max: 15, guide: "2" }, { min: 15, max: 35, guide: "1" }, { min: 35, guide: "0" }] },
        { flow: 150, rules: [{ max: 20, guide: "2" }, { min: 20, guide: "1" }] },
        { flow: 180, rules: [{ max: 15, guide: "3" }, { min: 15, max: 30, guide: "2" }, { min: 30, guide: "1" }] },
        { flow: 210, rules: [{ max: 18, guide: "3" }, { min: 18, max: 30, guide: "2" }, { min: 30, guide: "1" }] },
        { flow: 250, rules: [{ max: 14, guide: "4" }, { min: 14, max: 25, guide: "3" }, { min: 25, guide: "2" }] },
        { flow: 270, rules: [{ max: 15, guide: "4" }, { min: 15, max: 30, guide: "3" }, { min: 30, guide: "2" }] },
        { flow: 300, rules: [{ max: 18, guide: "4" }, { min: 18, max: 30, guide: "3" }, { min: 30, guide: "2" }] },
        { flow: 340, rules: [{ max: 22, guide: "4" }, { min: 22, guide: "3" }] },
        { flow: 360, rules: [{ max: 24, guide: "4" }, { min: 24, guide: "3" }] },
        { flow: 420, rules: [{ max: 17, guide: "5" }, { min: 17, max: 33, guide: "4" }, { min: 33, guide: "3" }] },
        { flow: 500, rules: [{ max: 24, guide: "5" }, { min: 24, guide: "4" }] },
        { flow: 600, rules: [{ max: 15, guide: "6" }, { min: 15, max: 30, guide: "5" }, { min: 30, guide: "4" }] },
        { flow: 720, rules: [{ max: 27, guide: "6" }, { min: 27, guide: "5" }] }
    ],
    "2,0": [
        { flow: 125, rules: [{ max: 15, guide: "2" }, { min: 15, max: 35, guide: "1" }, { min: 35, guide: "0" }] },
        { flow: 150, rules: [{ max: 20, guide: "2" }, { min: 20, guide: "1" }] },
        { flow: 180, rules: [{ max: 15, guide: "3" }, { min: 15, max: 30, guide: "2" }, { min: 30, guide: "1" }] },
        { flow: 210, rules: [{ max: 18, guide: "3" }, { min: 18, max: 30, guide: "2" }, { min: 30, guide: "1" }] },
        { flow: 250, rules: [{ max: 14, guide: "4" }, { min: 14, max: 25, guide: "3" }, { min: 25, guide: "2" }] },
        { flow: 270, rules: [{ max: 15, guide: "4" }, { min: 15, max: 30, guide: "3" }, { min: 30, guide: "2" }] },
        { flow: 300, rules: [{ max: 18, guide: "4" }, { min: 18, max: 30, guide: "3" }, { min: 30, guide: "2" }] },
        { flow: 340, rules: [{ max: 22, guide: "4" }, { min: 22, guide: "3" }] },
        { flow: 360, rules: [{ max: 24, guide: "4" }, { min: 24, guide: "3" }] },
        { flow: 420, rules: [{ max: 17, guide: "5" }, { min: 17, max: 33, guide: "4" }, { min: 33, guide: "3" }] },
        { flow: 500, rules: [{ max: 24, guide: "5" }, { min: 24, guide: "4" }] },
        { flow: 600, rules: [{ max: 15, guide: "6" }, { min: 15, max: 30, guide: "5" }, { min: 30, guide: "4" }] },
        { flow: 720, rules: [{ max: 27, guide: "6" }, { min: 27, guide: "5" }] }
    ],
    "2,5": [
        { flow: 400, rules: [{ max: 5, guide: "9" }, { min: 5, guide: "8" }] },
        { flow: 600, rules: [{ max: 5, guide: "10" }, { min: 5, max: 23, guide: "9" }, { min: 23, guide: "8" }] },
        { flow: 800, rules: [{ max: 10, guide: "10" }, { min: 10, max: 45, guide: "9" }, { min: 45, guide: "8" }] },
        { flow: 1000, rules: [{ max: 16, guide: "10" }, { min: 16, guide: "9" }] },
        { flow: 1200, rules: [{ max: 22, guide: "10" }, { min: 22, guide: "9" }] },
        { flow: 1400, rules: [{ max: 29, guide: "10" }, { min: 29, guide: "9" }] },
        { flow: 1600, rules: [{ max: 35, guide: "10" }, { min: 35, guide: "9" }] }
    ],
    "KV": [
        { flow: 8, rules: [{ max: 10, guide: "20" }, { min: 10, guide: "10" }] },
        { flow: 15, rules: [{ max: 12, guide: "20" }, { min: 12, max: 25, guide: "10" }, { min: 25, guide: "10" }] },
        { flow: 25, rules: [{ max: 15, guide: "40" }, { min: 15, max: 35, guide: "20-40" }, { min: 35, guide: "20" }] },
        { flow: 35, rules: [{ max: 10, guide: "80" }, { min: 10, max: 40, guide: "40" }, { min: 40, guide: "20-40" }] },
        { flow: 50, rules: [{ max: 20, guide: "80" }, { min: 20, max: 55, guide: "40-80" }, { min: 55, guide: "40" }] },
        { flow: 66, rules: [{ max: 25, guide: "80" }, { min: 25, max: 70, guide: "40-80" }, { min: 70, guide: "40" }] },
        { flow: 85, rules: [{ max: 35, guide: "80" }, { min: 35, guide: "40-80" }] },
        { flow: 100, rules: [{ max: 50, guide: "80" }, { min: 50, guide: "40-80" }] },
        { flow: 130, rules: [{ max: 80, guide: "80" }, { min: 80, guide: "40-80" }] }
    ]
};

export let VALVE_TECHNICAL_SPECS: Record<string, { minFlow: number, maxFlow: number, minPressure: number, maxPressure: number, burstPressure: number }> = {
    "0,75":      { minFlow: 10,  maxFlow: 125,  minPressure: 8, maxPressure: 100, burstPressure: 575 },
    "1,5":       { minFlow: 30,  maxFlow: 800,  minPressure: 8, maxPressure: 100, burstPressure: 505 },
    "2,0":       { minFlow: 30,  maxFlow: 800,  minPressure: 8, maxPressure: 100, burstPressure: 505 },
    "2,5":       { minFlow: 500, maxFlow: 1530, minPressure: 8, maxPressure: 68,  burstPressure: 340 },
    "KV":        { minFlow: 5,   maxFlow: 80,   minPressure: 8, maxPressure: 100, burstPressure: 575 },
    // EV40 (VVVF-driven): same flow range as EV100 but lower max pressure (70 bar vs 100 bar)
    "EV40-0,75": { minFlow: 10,  maxFlow: 125,  minPressure: 8, maxPressure: 70,  burstPressure: 575 },
    "EV40-1,5":  { minFlow: 30,  maxFlow: 800,  minPressure: 8, maxPressure: 70,  burstPressure: 505 },
    "EV40-2,0":  { minFlow: 30,  maxFlow: 800,  minPressure: 8, maxPressure: 70,  burstPressure: 505 },
    "EV40-2,5":  { minFlow: 500, maxFlow: 1530, minPressure: 8, maxPressure: 68,  burstPressure: 340 },
};

// Standard Pump Flow Rates (L/min) at 50Hz
// Based on Blain Hydraulic Pump Catalog
export let PUMP_CATALOG = [
    8, 12, 16, 20, 25, 30, 35, 40, 43, 50, 55, 60, 75, 77, 96, 100, 125, 150, 180, 210, 250, 280, 300, 360, 380, 420, 500, 600, 720, 800, 960
];

// Usage-based factors from provided table
export let STARTS_PER_HOUR_DATA: Record<string, { tankFactor: number, generation: number, dissipation: number, motorStart: number, loadTravel: number }> = {
    "<5": { tankFactor: 1.2, generation: 0.5, dissipation: 1.0, motorStart: 5, loadTravel: 10 },
    "5-15": { tankFactor: 1.5, generation: 0.55, dissipation: 1.05, motorStart: 10, loadTravel: 25 },
    "16-25": { tankFactor: 2.0, generation: 0.6, dissipation: 1.1, motorStart: 20, loadTravel: 50 },
    "26-35": { tankFactor: 2.5, generation: 0.7, dissipation: 1.2, motorStart: 30, loadTravel: 75 },
    "36+": { tankFactor: 3.0, generation: 0.8, dissipation: 1.3, motorStart: 40, loadTravel: 100 }
};

export async function hydrateCalculatorConstants() {
    try {
        const [pumps, rules, specs, traffic] = await Promise.all([
            supabase.from('raw_pumps').select('flow_rate'),
            supabase.from('valve_selection_rules').select('*').order('flow_lpm'),
            supabase.from('valve_technical_specs').select('*'),
            supabase.from('traffic_usage_factors').select('*')
        ]);

        if (pumps.data) {
            const flows = new Set<number>();
            pumps.data.forEach((p: any) => { if (p.flow_rate) flows.add(Number(p.flow_rate)); });
            if (flows.size > 0) {
                PUMP_CATALOG.length = 0;
                PUMP_CATALOG.push(...Array.from(flows).sort((a, b) => a - b));
            }
        }

        if (rules.data && rules.data.length > 0) {
            const grouped: Record<string, any[]> = {};
            rules.data.forEach((r: any) => {
                if (!grouped[r.valve_series]) grouped[r.valve_series] = [];
                let fObj = grouped[r.valve_series].find(x => x.flow === r.flow_lpm);
                if (!fObj) {
                    fObj = { flow: r.flow_lpm, rules: [] };
                    grouped[r.valve_series].push(fObj);
                }
                const ruleDetail: any = { guide: r.recommended_guide };
                if (r.pressure_min) ruleDetail.min = r.pressure_min;
                if (r.pressure_max) ruleDetail.max = r.pressure_max;
                fObj.rules.push(ruleDetail);
            });
            Object.keys(VALVE_GUIDE_RULES).forEach(k => delete VALVE_GUIDE_RULES[k]);
            Object.assign(VALVE_GUIDE_RULES, grouped);
        }

        if (specs.data && specs.data.length > 0) {
            const sm: any = {};
            specs.data.forEach((s: any) => {
                sm[s.valve_series] = {
                    minFlow: s.min_flow_lpm ?? s.min_flow,
                    maxFlow: s.max_flow_lpm ?? s.max_flow,
                    minPressure: s.min_pressure_bar ?? s.min_pressure,
                    maxPressure: s.max_pressure_bar ?? s.max_pressure,
                    burstPressure: s.burst_pressure_bar ?? s.burst_pressure
                };
            });
            Object.keys(VALVE_TECHNICAL_SPECS).forEach(k => delete VALVE_TECHNICAL_SPECS[k]);
            Object.assign(VALVE_TECHNICAL_SPECS, sm);
        }

        if (traffic.data && traffic.data.length > 0) {
            const tm: Record<string, any> = {};
            traffic.data.forEach((t: any) => {
                tm[t.building_type_key] = {
                    tankFactor: t.tank_factor,
                    generation: t.generation,
                    dissipation: t.dissipation,
                    motorStart: t.motor_start,
                    loadTravel: t.load_travel
                };
            });
            Object.keys(STARTS_PER_HOUR_DATA).forEach(k => delete STARTS_PER_HOUR_DATA[k]);
            Object.assign(STARTS_PER_HOUR_DATA, tm);
        }
    } catch (err) {
        console.error("Hydration error in calculator.ts", err);
    }
}

// --- Interfaces ---
export interface RamProperties {
    weight: number;
    area: number;
    inertia: number;
    radiusOfGyration: number;
    innerDiameter: number;
}

export interface BucklingResult {
    f_crit: number;
    lambda: number;
    method: string;
}

export interface EngineeringInputs {
    customerName?: string;
    projectRef?: string;
    regulation?: string;
    buildingType?: string;
    capacity: number | string;
    carcassWeight: number | string;
    travelDistance: number | string;
    buffer: number | string;
    cylinderCount: number | string;
    powerUnitCount?: number | string; // Güç Ünitesi Sayısı
    suspension: '1:1' | '2:1' | 'scissor';
    scissorAngle?: number | string; // Starting angle in degrees (e.g., 23)
    mountingType?: 'side' | 'central'; // New field: Side (RS) or Central (VE)
    speed: number | string;
    tripsPerHour?: number | string;
    cylinderType?: 'standard' | 'telescopic';
    stages?: number;
    isEkli?: boolean; // New field for "Attachment" option in standard cylinders
    isSplit?: boolean; // New field for "Two-Piece" cylinder option
    pitDepth?: number | string; // Kuyu Dibi
    topFloor?: number | string; // Son Kat (Overhead)
    isExisting?: boolean; // Mevcut Silindir
    accessoriesFlags?: any; // Dışarıdan gelen tekliflerdeki aksesuar bayrakları
    existingRamDiameter?: number | string; // Mevcut Piston Çapı
    existingWallThickness?: number | string; // Mevcut Et Kalınlığı
    // New Fields for Detailed PDF
    ropeWeight?: number | string; // Halat/Kasnak Ağırlığı
    maxAmbientTemp?: number | string; // Maks Ortam Sıcaklığı
    startsPerHour?: number | string; // Motor Kalkış Sayısı
    travelFactor?: number | string; // Seyahat Sıklığı (%)
    oilViscosity?: string; // Yağ Viskozitesi (32, 46, 68)
}

export interface CylinderSpec {
    d?: number | string;
    t?: number | string;
    type?: string;
    mcm?: number | string;
    mco?: number | string; // New field for custom ram weight per meter
    g_val?: number | string; // New field for closed length calculation
    c1?: number | string; // New field for custom oil volume factor 1
    c2?: number | string; // New field for custom oil volume factor 2
}

// --- Pure Functions ---

export function calculateRamProperties(D: number, t: number, stroke: number, tableMcm: number | null = null, overrides?: Record<string, number>): RamProperties {
    if (!D || !stroke) return { weight: 0, area: 0, inertia: 0, radiusOfGyration: 0, innerDiameter: 0 };

    const ramWeightFactor = getC('RAM_WEIGHT_FACTOR', overrides);
    const weightPerMeter = tableMcm ? Number(tableMcm) : (((D - t) * t) / ramWeightFactor);
    const weight = weightPerMeter * (stroke / 1000);
    const d_inner = t > 0 ? (D - 2 * t) : 0;
    const area = Math.PI * (Math.pow(D, 2) - Math.pow(d_inner, 2)) / 4;
    const inertia = (Math.PI * (Math.pow(D, 4) - Math.pow(d_inner, 4))) / 64;
    const radiusOfGyration = area > 0 ? Math.sqrt(inertia / area) : 0;

    return { weight, area, inertia, radiusOfGyration, innerDiameter: d_inner };
}

export function calculatePressure(loadKg: number, areaMm2: number, overrides?: Record<string, number>): number {
    if (!areaMm2 || areaMm2 <= 0) return 0;
    const gravity = getC('GRAVITY', overrides);
    const forceN = loadKg * gravity;
    return (forceN * 10) / areaMm2;
}

export function calculateBuckling(lengthMm: number, inertia: number, area: number, radiusOfGyration: number, overrides?: Record<string, number>): BucklingResult {
    if (!radiusOfGyration) return { f_crit: 0, lambda: 0, method: 'N/A' };

    const bucklingLimit = getC('BUCKLING_LIMIT_LAMBDA', overrides);
    const yieldStrength = getC('STEEL_YIELD_STRENGTH', overrides);
    const eModulus = getC('STEEL_E_MODULUS', overrides);

    const lambda = lengthMm / radiusOfGyration;
    let f_crit: number;
    let method: string;

    if (lambda >= bucklingLimit) {
        f_crit = (Math.pow(Math.PI, 2) * eModulus * inertia) / (2 * Math.pow(lengthMm, 2));
        method = 'Euler (Elastic)';
    } else {
        f_crit = (area / 2) * (yieldStrength - (yieldStrength - 210) * Math.pow(lambda / 100, 2));
        method = 'Tetmajer (Plastic)';
    }

    return { f_crit, lambda, method };
}

export function calculateStandardCylinderPrice(
    basePrice: number,
    perMeterPrice: number,
    strokeMm: number,
    additionalPrice: number = 0,
    isEkli: boolean = false
): number {
    const strokeM = strokeMm / 1000;
    const price = (basePrice || 0) + (strokeM * (perMeterPrice || 0)) + (isEkli ? (additionalPrice || 0) : 0);
    return Math.max(0, Number(price.toFixed(2)));
}

export function calculatePumpFlow(speedMs: number, areaMm2: number, suspension: number | string = 1): number {
    const suspensionRatio = typeof suspension === 'string' ? (suspension === '1:1' ? 1 : 2) : suspension;
    const v_cyl = speedMs / suspensionRatio;
    return v_cyl * areaMm2 * 0.06;
}

export function calculateMotorPower(pressureBar: number, flowLpm: number, efficiencyOverride?: number): number {
    // η ≈ 0.77 (1/1.3) — conservative estimate from Blain catalog
    // Use efficiencyOverride for SEIM catalog-based precision
    const factor = efficiencyOverride ? (1 / efficiencyOverride) : 1.3;
    const p = isNaN(pressureBar) ? 0 : pressureBar;
    const f = isNaN(flowLpm) ? 0 : flowLpm;
    return (p * f * factor) / 600;
}

// SEIM PA/PAVE screw pump performance curves (pressure→flow,power at 2750rpm/25cSt)
// Source: knowledge/raw/seim-pompa-katalogu-full.md
export const SEIM_PUMP_CURVES: Record<string, { bar: number; lpm: number; kw: number }[]> = {
    "PA016": [
        { bar: 10, lpm: 15.4, kw: 0.4 }, { bar: 30, lpm: 14.0, kw: 1.0 },
        { bar: 50, lpm: 12.7, kw: 1.6 }, { bar: 70, lpm: 11.3, kw: 2.2 }
    ],
    "PA025": [
        { bar: 10, lpm: 23.8, kw: 0.6 }, { bar: 30, lpm: 21.9, kw: 1.5 },
        { bar: 50, lpm: 20.2, kw: 2.4 }, { bar: 70, lpm: 18.4, kw: 3.3 }
    ],
    "PA040": [
        { bar: 10, lpm: 38.5, kw: 0.9 }, { bar: 30, lpm: 35.5, kw: 2.3 },
        { bar: 50, lpm: 32.7, kw: 3.7 }, { bar: 70, lpm: 29.9, kw: 5.1 }
    ],
    "PA063": [
        { bar: 10, lpm: 61.0, kw: 1.4 }, { bar: 30, lpm: 56.4, kw: 3.7 },
        { bar: 50, lpm: 51.8, kw: 5.9 }, { bar: 70, lpm: 47.2, kw: 8.1 }
    ],
    "PA100": [
        { bar: 10, lpm: 97.0, kw: 2.2 }, { bar: 30, lpm: 89.6, kw: 5.9 },
        { bar: 50, lpm: 82.2, kw: 9.4 }, { bar: 70, lpm: 74.8, kw: 13.0 }
    ]
};

/**
 * Returns volumetric efficiency of a SEIM pump at a given operating pressure.
 * Interpolates linearly between the catalog data points.
 */
export function getSeimPumpEfficiency(model: string, pressureBar: number): number {
    const curve = SEIM_PUMP_CURVES[model];
    if (!curve || curve.length === 0) return 0.77; // fallback to default

    const sorted = [...curve].sort((a, b) => a.bar - b.bar);

    // Clamp to range
    if (pressureBar <= sorted[0].bar) {
        const p = sorted[0];
        return (p.bar * p.lpm) / (p.kw * 600);
    }
    if (pressureBar >= sorted[sorted.length - 1].bar) {
        const p = sorted[sorted.length - 1];
        return (p.bar * p.lpm) / (p.kw * 600);
    }

    // Interpolate
    for (let i = 0; i < sorted.length - 1; i++) {
        const lo = sorted[i], hi = sorted[i + 1];
        if (pressureBar >= lo.bar && pressureBar <= hi.bar) {
            const t = (pressureBar - lo.bar) / (hi.bar - lo.bar);
            const lpm = lo.lpm + t * (hi.lpm - lo.lpm);
            const kw  = lo.kw  + t * (hi.kw  - lo.kw);
            return (pressureBar * lpm) / (kw * 600);
        }
    }
    return 0.77;
}

/**
 * KV valve speed limits per Blain catalog.
 * KV1P/KV1S: max 0.16 m/s  (low-speed positioning valve)
 * KV2P/KV2S: max 1.0  m/s  (full-speed lowering valve)
 * Returns a warning string or null if within limits.
 */
export function validateKVSpeedLimit(valveType: string, speed: number): string | null {
    if (!valveType.toUpperCase().includes("KV")) return null;

    const isKV1 = valveType.toUpperCase().includes("KV1");
    const isKV2 = valveType.toUpperCase().includes("KV2");

    if (isKV1 && speed > 0.16) {
        return `KV1 valfi için max. hız 0.16 m/s'dir (seçilen: ${speed.toFixed(2)} m/s). KV2 veya EV100 kullanılması önerilir.`;
    }
    if ((isKV2 || (!isKV1 && !isKV2)) && speed > 1.0) {
        return `KV valfi için max. hız 1.0 m/s'dir (seçilen: ${speed.toFixed(2)} m/s). EV100 serisine geçiş yapılmalıdır.`;
    }
    return null;
}


export function calculateExtensionTube(
    travelDistance: number,
    pitDepth: number,
    overhead: number,
    cylinderClosedLength: number,
    suspensionRatio: number = 2
): { standHeight: number; warnings: string[] } {
    const warnings: string[] = [];

    // 1. Calculate Required Stroke (Travel + 300mm overrun) / suspension
    // User rule: Seyir + 15cm top + 15cm bottom = Travel + 300
    const requiredStroke = (travelDistance + 300) / suspensionRatio;

    // 2. Calculate "h" (Space occupied by cylinder + pulley when fully open)
    // h = PistonOpeningAmount + ClosedLength + PulleyDiameter(630)
    // PistonOpeningAmount = requiredStroke (G)
    // If 1:1, usually no pulley, but maybe header. For now assuming 0 allowance if not 2:1 or let's keep 630 only for 2:1.
    const pulleyAllowance = suspensionRatio === 2 ? 630 : 0;

    const h = requiredStroke + cylinderClosedLength + pulleyAllowance;

    // 3. Total Shaft Height (Kuyu Toplam Boyu)
    const totalShaftHeight = pitDepth + travelDistance + overhead;

    // 4. Calculate Max Stand Height
    // MaxStand = TotalShaft - h
    const maxStandHeight = totalShaftHeight - h;

    // 5. Ideal Stand Height (minus 50mm safety)
    const idealStandHeight = maxStandHeight - 50;

    if (idealStandHeight < 0) {
        warnings.push("Negatif sehpa boyu! Kuyu ölçüleri bu silindir için yetersiz.");
    }

    return {
        standHeight: Math.max(0, Math.floor(idealStandHeight)),
        warnings
    };
}

export function generateSingleStageCode(diameter: number, wallThickness: number, stroke: number): string {
    // Format: 9-DDD-WW-SSSS
    // 9: Series prefix
    // DDD: Diameter (3 digits, e.g. 090)
    // WW: Wall thickness (Uses comma for decimals, e.g. 7,5 or 05)
    // SSSS: Stroke (Variable length, usually 4)

    const d = diameter.toString().padStart(3, '0');

    // Convert dot to comma and ensure padding for single digits (whole numbers)
    let w = wallThickness.toString().replace('.', ',');
    if (!w.includes(',') && w.length < 2) {
        w = w.padStart(2, '0');
    }

    const s = stroke.toString();

    return `9-${d}-${w}-${s}`;
}

// --- Main Calculation Orchestrator ---

// --- Mock Telescopic Data ---
export const TELESCOPIC_CYLINDERS = [
    // 2 Stage
    { stages: 2, diameters: [60, 40], code: 'T2-60-40', wall: 5 },
    { stages: 2, diameters: [70, 50], code: 'T2-70-50', wall: 5 },
    { stages: 2, diameters: [80, 60], code: 'T2-80-60', wall: 5 },
    { stages: 2, diameters: [90, 70], code: 'T2-90-70', wall: 5 },
    { stages: 2, diameters: [100, 80], code: 'T2-100-80', wall: 6 },
    // 3 Stage
    { stages: 3, diameters: [70, 50, 30], code: 'T3-70-50-30', wall: 5 }, // 30 is very small, maybe unrealistic for elevator but ok for demo
    { stages: 3, diameters: [90, 70, 50], code: 'T3-90-70-50', wall: 5 },
    { stages: 3, diameters: [110, 90, 70], code: 'T3-110-90-70', wall: 6 }
];

export function performEngineeringCalculation(
    inputs: EngineeringInputs,
    cylinderSpec: CylinderSpec,
    overrides?: Record<string, number>,
    trafficOverrides?: Record<string, any>,
    pumpCatalogOverride?: number[],
    cylinderDimension?: { p_max_mpa?: number; inertia_cm4?: number }
) {
    if (!inputs || !cylinderSpec) return {};

    const suspensionStr = inputs.suspension || '1:1';
    const isTelescopic = inputs.cylinderType === 'telescopic';
    const stages = (isTelescopic || suspensionStr === 'scissor') ? (Number(inputs.stages) || 1) : 1;

    let D = cylinderSpec.d ? Number(cylinderSpec.d) : 0;
    let t = cylinderSpec.t ? Number(cylinderSpec.t) : 0;

    // For standard cylinders, parse type if needed
    if (!isTelescopic && !D && cylinderSpec.type) {
        const cleanType = cylinderSpec.type.replace('Ø', '').trim();
        const parts = cleanType.split('x');
        if (parts.length >= 2) {
            D = Number(parts[0]);
            t = Number(parts[1]);
        }
    }

    // Existing Cylinder Override
    if (inputs.isExisting && inputs.existingRamDiameter) {
        D = Number(inputs.existingRamDiameter);
        if (inputs.existingWallThickness) {
            t = Number(inputs.existingWallThickness);
        } else if (cylinderSpec.t) {
            t = Number(cylinderSpec.t);
        }
    } else if (cylinderSpec.d && Number(cylinderSpec.d) > 0) {
        D = Number(cylinderSpec.d);
        t = Number(cylinderSpec.t || 0);
    }

    if (isNaN(D) || D <= 0) return { error: "Invalid Cylinder Dimensions" };

    const capacity = Number(inputs.capacity) || 0;
    const carcass = Number(inputs.carcassWeight) || 0;
    const travel = Number(inputs.travelDistance) || 0;
    const buffer = Number(inputs.buffer) || 0;
    const count = Number(inputs.cylinderCount) || 1;
    let suspension = 1;

    if (suspensionStr === 'scissor') {
        const angle = Number(inputs.scissorAngle) || 23;
        const angleRad = (angle * Math.PI) / 180;
        suspension = stages / (2 * Math.tan(angleRad));
    } else {
        suspension = parseInt(suspensionStr) || 1;
    }

    const speed = Number(inputs.speed) || 0;
    const stroke = (travel + buffer) / suspension;
    const strokePerStage = stroke / stages;

    const mcm = cylinderSpec.mcm ? Number(cylinderSpec.mcm) : null;
    const mco = Number(cylinderSpec.mco || 0);

    const ramProps = calculateRamProperties(D, t, stroke, mcm, overrides);

    const ramWeightFactor = getC('RAM_WEIGHT_FACTOR', overrides);
    const extraWeight = getC('EXTRA_WEIGHT', overrides);
    const safetyFactorDynamic = getC('SAFETY_FACTOR_DYNAMIC', overrides);
    const gravity = getC('GRAVITY', overrides);
    const eulerFactor = getC('EULER_FACTOR', overrides);

    const milWeightPerMeter = ((D - t) * t) / ramWeightFactor;
    const totalWeightPerMeter = milWeightPerMeter + Number(mcm || 0);
    const customRamWeight = totalWeightPerMeter * (stroke / 1000) + mco;

    const loadEmpty = ((carcass * suspension) / count) + customRamWeight + extraWeight;
    const loadFull = (((capacity + carcass) * suspension) / count) + customRamWeight + extraWeight;

    const effectiveArea = Math.PI * Math.pow(D / 2, 2);
    const pressureEmpty = calculatePressure(loadEmpty, effectiveArea, overrides);
    const pressureFull = calculatePressure(loadFull, effectiveArea, overrides);

    const bucklingRes = calculateBuckling(stroke, ramProps.inertia, ramProps.area, ramProps.radiusOfGyration, overrides);

    const systemMass = ((capacity + carcass) * suspension) / count;
    const ramMassTotal = customRamWeight + (isTelescopic ? customRamWeight * 0.5 : 0) + extraWeight;
    const f_acting = safetyFactorDynamic * gravity * (systemMass + eulerFactor * ramMassTotal);
    const bucklingFactor = f_acting > 0 ? (bucklingRes.f_crit / f_acting) : 0;

    const powerUnitCount = Number(inputs.powerUnitCount) || 1;
    const totalPumpFlow = calculatePumpFlow(speed, effectiveArea, suspension) * count;
    const pumpFlowPerUnit = totalPumpFlow / powerUnitCount;
    
    const activePumpCatalog = (pumpCatalogOverride && pumpCatalogOverride.length > 0) ? pumpCatalogOverride : PUMP_CATALOG;
    const selectedPumpFlowPerUnit = selectPump(pumpFlowPerUnit, activePumpCatalog);
    const motorPowerReqPerUnit = calculateMotorPower(pressureFull, selectedPumpFlowPerUnit);
    const actualSpeed = Number((((selectedPumpFlowPerUnit * powerUnitCount) * suspension) / (6 * effectiveArea * count)).toFixed(2));

    let oilVolume = (effectiveArea * stroke) / 1000000;
    if (cylinderSpec.c1 && cylinderSpec.c2) {
        oilVolume = (Number(cylinderSpec.c1) + Number(cylinderSpec.c2)) * (stroke / 1000);
    } else if (isTelescopic) {
        oilVolume = oilVolume * (1 + (stages - 1) * 0.4);
    }

    const usageFactors = trafficOverrides?.[inputs.buildingType || "16-25"] || STARTS_PER_HOUR_DATA[inputs.buildingType || "16-25"] || STARTS_PER_HOUR_DATA["16-25"];

    // Build warnings array
    const warnings: string[] = [];

    // COAM cylinder max pressure check (p_max_mpa from catalog)
    if (cylinderDimension?.p_max_mpa) {
        const catalogMaxBar = cylinderDimension.p_max_mpa * 10;
        if (pressureFull > catalogMaxBar) {
            warnings.push(
                `Silindir çalışma basıncı (${pressureFull.toFixed(1)} bar) COAM katalog sınırını (${catalogMaxBar.toFixed(0)} bar) aşıyor. Daha büyük çap veya daha kalın et seçiniz.`
            );
        }
    }

    return {
        ramWeight: customRamWeight.toFixed(1),
        pressureEmpty: pressureEmpty.toFixed(1),
        pressureFull: pressureFull.toFixed(1),
        staticPressure: pressureFull.toFixed(1),
        dynamicPressure: (pressureFull * 1.1).toFixed(1),
        f_crit: bucklingRes.f_crit.toFixed(0),
        f_acting: f_acting.toFixed(0),
        bucklingFactor: bucklingFactor.toFixed(2),
        isBucklingSafe: bucklingFactor >= 1.0,
        lambda: bucklingRes.lambda.toFixed(1),
        bucklingMethod: bucklingRes.method || 'N/A',
        stroke: stroke.toFixed(0),
        stages,
        closedLen: (strokePerStage + (Number(cylinderSpec.g_val) || 250)).toFixed(0),
        openLen: (stroke + strokePerStage + (Number(cylinderSpec.g_val) || 250)).toFixed(0),
        metalArea: ramProps.area.toFixed(1),
        pistonArea: effectiveArea.toFixed(1),
        area: effectiveArea.toFixed(1),
        powerUnitCount,
        pumpFlow: totalPumpFlow.toFixed(1),
        pumpFlowPerUnit: pumpFlowPerUnit.toFixed(1),
        motorPowerReq: motorPowerReqPerUnit.toFixed(1),
        selectedPumpFlow: selectedPumpFlowPerUnit,
        totalSelectedPumpFlow: selectedPumpFlowPerUnit * powerUnitCount,
        actualSpeed,
        oilVolume: oilVolume.toFixed(1),
        milCap: isTelescopic ? `T${stages}-${D}` : (D - 2 * t).toFixed(1),
        disCap: D,
        etKalinlik: t,
        type: isTelescopic ? `Teleskopik ${stages} Kademe (Ø${D}...)` : cylinderSpec.type,
        isTelescopic,
        usageFactors,
        warnings,
    };
}

// --- Telescopic Selection Logic ---

export interface TelescopicOption {
    model: string;
    orderCode: string; // Example: 3PL -RS/X0- 50/2
    price?: number; // Calculated Price
    closedLength?: number;
    openLength?: number;
    cylinderWeight?: number;
    dimensions?: any;
    stages: number;
    diameter: number;
    area: number; // cm2
    gh: number; // Total Stroke
    pressureEmpty: number;
    pressureFull: number;
    pressureDynamic: number; // Static + 10% for hydraulic losses
    pressureLimit: number; // Model-specific max pressure
    stability: string;
    z_dims?: any;
    isViable: boolean;
    status?: 'suitable' | 'borderline' | 'unsuitable';
    reason?: string;
    details?: any;
    viabilityReason?: string;
    oilVolume: number;
    rh: number;
    // Yoke selection fields
    yokeConfig?: 'X0' | 'Z2' | 'Z3';
    yokeMaxLoad?: number;
    yokeSafetyMargin?: number;
    yokeStatus?: 'suitable' | 'borderline' | 'unsuitable' | 'unknown';
    // Pump selection fields
    requiredFlowLpm?: number;
    requiredFlowPerUnit?: number;
    selectedPumpFlow?: number;
    requiredMotorPower?: number;
    actualSpeed?: number;
    pistonArea?: number;
    usageFactors?: any;
}

export async function calculateTelescopicOptions(
    inputs: EngineeringInputs,
    cylinders: any[], // Pass TelescopicCylinder[]
    rules: any[],     // Pass ReserveStrokeRule[]
    trafficOverrides?: Record<string, any>,
    pumpCatalogOverride?: number[]
): Promise<TelescopicOption[]> {
    const results: TelescopicOption[] = [];

    // Parse Inputs
    const stages = inputs.stages || 2;
    const count = Number(inputs.cylinderCount) || 1;
    const powerUnitCount = Number(inputs.powerUnitCount) || 1;
    const suspensionVal = inputs.suspension === '2:1' ? 2 : 1;
    const speed = Number(inputs.speed) || 0.6;
    const cylinderSpeed = speed / suspensionVal;
    const buffer = Number(inputs.buffer) || 0;

    // 1. Filter Cylinders
    const candidates = cylinders.filter(c => c.stages === stages);

    // 2. Determine RH
    let rh = 0;
    if (rules && rules.length > 0) {
        const matchingRule = rules.find(r =>
            Number(r.stage_count) === Number(stages) &&
            cylinderSpeed >= Number(r.speed_min || 0) &&
            (r.speed_max === null || r.speed_max === undefined || cylinderSpeed < Number(r.speed_max))
        );
        if (matchingRule) rh = Number(matchingRule.rh_value);
    }
    if (rh === 0) {
        rh = stages === 2 ? (cylinderSpeed < 0.5 ? 340 : (cylinderSpeed < 0.85 ? 440 : 540)) 
                          : (cylinderSpeed < 0.5 ? 490 : (cylinderSpeed < 0.85 ? 640 : 790));
    }

    const gh = ((Number(inputs.travelDistance) + buffer) / suspensionVal) + rh;
    const ghMeters = gh / 1000;

    for (const cyl of candidates) {
        const modelName = (cyl.model_name || cyl.model || "").trim();
        const mountingCode = inputs.mountingType === 'side' ? 'RS' : 'VE';
        
        // 1. Calculate Cylinder Weight (Moving Parts)
        const ghMeters = gh / 1000;
        const cylinderWeight = (cyl.weight_base || 0) + ((cyl.weight_factor || 0) * ghMeters);
        
        // 2. Load on Ram: ((Weight * Suspension) / Count) + Extra Weight + Cylinder Moving Parts
        const extraWeight = CONSTANTS.EXTRA_WEIGHT;
        const loadEmptyOnRam = (((Number(inputs.carcassWeight) + (Number(inputs.ropeWeight) || 0)) * suspensionVal) / count) + extraWeight + cylinderWeight;
        const loadFullOnRam = (((Number(inputs.capacity) + Number(inputs.carcassWeight) + (Number(inputs.ropeWeight) || 0)) * suspensionVal) / count) + extraWeight + cylinderWeight;
        
        const areaCm2 = cyl.area_cm2 || 1;
        const pressureEmpty = (loadEmptyOnRam * 0.981) / areaCm2;
        const pressureFull = (loadFullOnRam * 0.981) / areaCm2;
        
        // 3. Buckling Load (P + Q) for Catalog Lookup
        // Catalog graphics typically exclude the cylinder's own weight from the buckling limit charts.
        const bucklingLoadOnRam = (((Number(inputs.capacity) + Number(inputs.carcassWeight) + (Number(inputs.ropeWeight) || 0)) * suspensionVal) / count);

        // Buckling / Yoke suitability check (Using external static load P+Q)
        const yokeSuitability = await checkYokeSuitability(modelName, ghMeters, bucklingLoadOnRam, mountingCode);
        
        // REFINED PRESSURE LIMITS: 3-stage cylinders (3PL series) are limited to ~46 bar based on smallest stage area (35mm).
        // 2-stage cylinders (3PL series) are limited to ~64 bar based on smallest stage area (63mm).
        const maxPressureLimit = cyl.p_stat_max || (stages === 2 ? 64 : 46);

        // Pressure status
        const pressureStatus = pressureFull > maxPressureLimit ? 'unsuitable' : 
                                 pressureFull > (maxPressureLimit * 0.9) ? 'borderline' : 'suitable';

        // Overall technical viability
        const isViable = pressureFull <= maxPressureLimit && yokeSuitability.status !== 'unsuitable';

        // Calculate price if viable
        let calculatedPrice = 0;
        let viabilityReason = '';

        if (isViable) {
            const { data: priceRules } = await supabase
                .from('telescopic_prices')
                .select('*')
                .eq('model', modelName)
                .eq('mounting', mountingCode);

            if (priceRules && priceRules.length > 0) {
                // Try to find exact yoke match, fallback to X0
                let rule = priceRules.find(r => r.yoke === yokeSuitability.config) || 
                           priceRules.find(r => r.yoke === 'X0');

                if (rule) {
                    let rate = ghMeters < 5 ? (rule.price_per_meter_low || 0) :
                               ghMeters < 8 ? (rule.price_per_meter_mid || 0) :
                               (rule.price_per_meter_high || 0);

                    let rawPrice = (rule.base_price || 0) + (ghMeters * rate);
                    
                    // Add extension price if applicable
                    if ((inputs.isEkli || inputs.isSplit) && rule.piston_extension_price) {
                        rawPrice += rule.piston_extension_price;
                    }

                    calculatedPrice = (rawPrice * CONSTANTS.TELESCOPIC_SALES_FACTOR) + CONSTANTS.TELESCOPIC_FIXED_ADDITION;
                }
            }

            // Construct viability reason
            if (pressureStatus === 'borderline') {
                viabilityReason = `Static pressure near limit: ${pressureFull.toFixed(1)} / ${maxPressureLimit} bar`;
            }
        }

        // Pump & Motor Selection
        const areaMm2 = areaCm2 * 100;
        const totalRequiredFlow = calculatePumpFlow(speed, areaMm2, suspensionVal) * count;
        const requiredFlowPerUnit = totalRequiredFlow / powerUnitCount;
        
        const selectedPumpPerUnit = selectPump(requiredFlowPerUnit, pumpCatalogOverride);
        const motorPowerPerUnit = calculateRequiredMotorPower(pressureFull, selectedPumpPerUnit);

        const yokeConfig = yokeSuitability.config;
        const constX = (mountingCode === 'VE' && cyl.constant_x_central) ? cyl.constant_x_central : (cyl.constant_x || 200);
        const factorY = cyl.factor_y || cyl.stages;
        const closedLen = Math.round((gh / factorY) + constX);

        results.push({
            model: modelName,
            orderCode: `3PL -${mountingCode}/${yokeConfig}- ${modelName} - ${gh.toFixed(0)}`,
            price: calculatedPrice > 0 ? Number(calculatedPrice.toFixed(2)) : undefined,
            openLength: Math.round(closedLen + gh),
            closedLength: closedLen,
            cylinderWeight: Math.round(cylinderWeight),
            stages: cyl.stages,
            diameter: cyl.diameter_mm,
            dimensions: cyl.dimensions,
            area: areaCm2,
            gh: gh,
            pressureFull: Number(pressureFull.toFixed(1)),
            pressureEmpty: Number(pressureEmpty.toFixed(1)),
            pressureDynamic: Number((pressureFull * 1.10).toFixed(1)),
            pressureLimit: maxPressureLimit,
            oilVolume: Number(((areaCm2 * (gh / 10)) / 1000).toFixed(1)),
            stability: yokeConfig,
            isViable: isViable,
            status: pressureStatus === 'suitable' && yokeSuitability.status === 'suitable' ? 'suitable' :
                    (pressureStatus === 'unsuitable' || yokeSuitability.status === 'unsuitable') ? 'unsuitable' : 'borderline',
            reason: isViable ? viabilityReason : (pressureFull > maxPressureLimit ? `Basınç Sınırı Aşıldı (${pressureFull.toFixed(1)} > ${maxPressureLimit} bar)` : `Burkulma Sınırı Aşıldı (${bucklingLoadOnRam.toFixed(0)} > ${yokeSuitability.limit}kg)`),
            details: {
                pressure: `${pressureFull.toFixed(1)} bar`,
                maxPressure: `${maxPressureLimit} bar`,
                bucklingLimit: `${yokeSuitability.limit} kg`,
                bucklingMargin: `${Math.round(yokeSuitability.margin * 100)}%`,
                loadBuckling: `${bucklingLoadOnRam.toFixed(0)} kg`,
                loadNominal: `${loadFullOnRam.toFixed(0)} kg`
            },
            yokeConfig: yokeConfig,
            yokeStatus: yokeSuitability.status,
            yokeMaxLoad: yokeSuitability.limit,
            yokeSafetyMargin: Math.round(yokeSuitability.margin * 100),
            requiredFlowLpm: Number(totalRequiredFlow.toFixed(1)),
            requiredFlowPerUnit: Number(requiredFlowPerUnit.toFixed(1)),
            selectedPumpFlow: selectedPumpPerUnit,
            requiredMotorPower: Number(motorPowerPerUnit.toFixed(2)),
            actualSpeed: Number((((selectedPumpPerUnit * powerUnitCount) * suspensionVal) / (6 * areaCm2 * count)).toFixed(2)),
            pistonArea: areaMm2,
            rh: rh,
            usageFactors: trafficOverrides?.[inputs.buildingType || "16-25"] || STARTS_PER_HOUR_DATA[inputs.buildingType || "16-25"] || STARTS_PER_HOUR_DATA["16-25"]
        });
    }

    return results.sort((a, b) => a.pressureFull - b.pressureFull);
}

// --- Yoke Selection Functions ---

export interface YokeSuitability {
    config: 'X0' | 'Z2' | 'Z3';
    maxLoad: number;
    status: 'suitable' | 'unsuitable' | 'unknown';
    safetyMargin: number; // percentage
    limit: number;
    margin: number;
}

/**
 * Interpolate yoke load limit
 */
export async function interpolateYokeLimit(
    model: string,
    stroke_m: number,
    config: 'X0' | 'Z2' | 'Z3',
    mounting: string = 'VE'
): Promise<number> {
    try {
        // Normalize model to prepend '3PL ' if missing (DB has e.g. '3PL 50/2')
        const dbModel = model.startsWith('3PL ') ? model : `3PL ${model}`;
        
        const stages = parseInt(model.split('/')[1]) || 2;

        // Query with mounting filter
        const { data, error } = await supabase
            .from('yoke_selection_limits')
            .select('stroke_m, max_load_kg')
            .eq('model', dbModel)
            .eq('config', config)
            .eq('mounting', mounting)
            .order('stroke_m');

        if (!error && data && data.length > 0) {
            return processInterpolation(data, stroke_m);
        }

        // No mounting-specific data found — try legacy (no mounting column)
        const { data: legacyData, error: legacyError } = await supabase
            .from('yoke_selection_limits')
            .select('stroke_m, max_load_kg')
            .eq('model', dbModel)
            .eq('config', config)
            .order('stroke_m');

        if (!legacyError && legacyData && legacyData.length > 0) {
            return processInterpolation(legacyData, stroke_m);
        }

        // For RS 2-stage with missing data: cautious fallback to VE with 20% penalty
        if (mounting === 'RS' && stages === 2) {
            const veFallback = await interpolateYokeLimit(model, stroke_m, config, 'VE');
            return veFallback > 0 ? Math.round(veFallback * 0.80) : 0;
        }

        return 0;
    } catch (e) {
        console.error("Critical error in interpolateYokeLimit:", e);
        return 0;
    }
}

/**
 * Internal helper to process the interpolation logic.
 * For strokes beyond the last known data point, extrapolates downward
 * using the slope of the last two data points (buckling load decreases
 * with stroke²). Returns 0 if extrapolation gives a negative value.
 */
function processInterpolation(data: any[], stroke_m: number): number {
    const lower = data.filter((d: any) => Number(d.stroke_m) <= stroke_m).pop();
    const upper = data.find((d: any) => Number(d.stroke_m) > stroke_m);

    // Stroke is before first known point — use first known value
    if (!lower) return Number(data[0].max_load_kg);

    // Stroke is beyond last known point — extrapolate downward
    if (!upper) {
        // Need at least 2 points to extrapolate
        if (data.length < 2) return Number(lower.max_load_kg);

        const last = data[data.length - 1];
        // If stroke_m exceeds the last database point by more than 0.05m, it's out of limits.
        if (stroke_m > (Number(last.stroke_m) + 0.05)) {
            return 0;
        }

        const secondLast = data[data.length - 2];
        const s1 = Number(secondLast.stroke_m);
        const s2 = Number(last.stroke_m);
        const v1 = Number(secondLast.max_load_kg);
        const v2 = Number(last.max_load_kg);

        if (s2 === s1) return v2;

        // Linear extrapolation beyond last point
        const slope = (v2 - v1) / (s2 - s1);
        const extrapolated = v2 + slope * (stroke_m - s2);

        // Buckling load cannot be negative
        return Math.max(0, Math.round(extrapolated));
    }

    // Interpolate between lower and upper
    const lowerStroke = Number(lower.stroke_m);
    const upperStroke = Number(upper.stroke_m);

    if (upperStroke === lowerStroke) return Number(lower.max_load_kg);

    const ratio = (stroke_m - lowerStroke) / (upperStroke - lowerStroke);
    return Math.round(Number(lower.max_load_kg) + ratio * (Number(upper.max_load_kg) - Number(lower.max_load_kg)));
}

/**
 * Check yoke suitability for all configurations and return the best one
 */
export async function checkYokeSuitability(
    model: string,
    stroke_m: number,
    load_kg: number,
    mounting: string = 'VE'
): Promise<YokeSuitability> {
    const stages = parseInt(model.split('/')[1]) || 2;
    const configs: ('X0' | 'Z2' | 'Z3')[] = stages === 2 ? ['X0', 'Z2'] : ['X0', 'Z2', 'Z3'];

    let bestSuitability: YokeSuitability = { config: 'X0', status: 'unsuitable', limit: 0, margin: -1, maxLoad: 0, safetyMargin: 0 };

    for (const config of configs) {
        let limit = await interpolateYokeLimit(model, stroke_m, config, mounting);

        if (limit === 0) continue;

        const margin = (limit - load_kg) / limit;
        const status = margin < 0 ? 'unsuitable' : 'suitable';
        const safetyMargin = Math.round(margin * 100);

        // Preference logic:
        // 1. If X0 is suitable, return it immediately (most economical).
        // 2. For Z2 and Z3, return immediately if suitable.
        if (status === 'suitable') {
            return { config, status, limit, margin, maxLoad: limit, safetyMargin };
        }
        
        // Track the one with the best margin if nothing is suitable yet
        if (margin > bestSuitability.margin) {
            bestSuitability = { config, status, limit, margin, maxLoad: limit, safetyMargin };
        }
    }

    return bestSuitability;
}

// --- Helper Functions ---



/**
 * Get recommended yoke configuration
 * Returns the most economical suitable configuration (prefers X0 if suitable)
 */
export async function getRecommendedYokeConfig(
    model: string,
    stroke_m: number,
    load_kg: number
): Promise<YokeSuitability | null> {
    const suitability = await checkYokeSuitability(model, stroke_m, load_kg);

    if (suitability.status === 'unsuitable') return null;

    return suitability;
}

// --- Pump Selection Functions ---

/**
 * Select the nearest suitable pump from the catalog
 * Returns the pump flow rate (L/min)
 */
export function selectPump(requiredFlowLpm: number, catalog?: number[]): number {
    const list = (catalog && catalog.length > 0) ? catalog.filter(v => !isNaN(v) && v !== null && v !== undefined) : PUMP_CATALOG;
    const fallbackList = list.length > 0 ? list : PUMP_CATALOG;
    const pump = fallbackList.find(p => p >= (requiredFlowLpm || 0));
    if (!pump) return fallbackList[fallbackList.length - 1] || 0;
    return pump;
}

/**
 * Calculate required motor power for a given pressure and flow
 * Formula: Power (kW) = (Pressure (bar) * Flow (L/min) * 1.3) / 600
 */
export function calculateRequiredMotorPower(pressureBar: number, flowLpm: number): number {
    const p = isNaN(pressureBar) ? 0 : pressureBar;
    const f = isNaN(flowLpm) ? 0 : flowLpm;
    return (p * f * 1.3) / 600;
}

/**
 * Get the exact standard catalog flanged head outer diameter (B diameter)
 * based on the cylinder's outer tube diameter.
 */
export function getStandardCylinderBDiameter(outerDiameter: number | string, dbBDiameter?: number | string): number | '-' {
    if (dbBDiameter && dbBDiameter !== '-') {
        const cleanDbVal = typeof dbBDiameter === 'string' ? dbBDiameter.replace(',', '.') : dbBDiameter;
        const dbVal = Number(cleanDbVal);
        if (!isNaN(dbVal) && dbVal > 0) {
            return dbVal;
        }
    }
    if (!outerDiameter || outerDiameter === '-') return '-';
    const cleanOd = typeof outerDiameter === 'string'
        ? outerDiameter.replace(',', '.')
        : outerDiameter;
    const od = Number(cleanOd);
    if (isNaN(od)) return '-';
    // Exact catalog values of B diameter (ØB) corresponding to outer diameter (ØC)
    const map: Record<number, number> = {
        82.5: 100,
        95: 114,
        101.6: 120,
        108: 126,
        114.3: 139,
        127: 152,
        139.7: 158,
        152.4: 177,
        168.3: 193,
        193.7: 219,
        219.1: 244,
        244.5: 273,
        273: 310,
        298.5: 340,
        323.9: 370,
        355.6: 400
    };
    return map[od] || '-';
}

