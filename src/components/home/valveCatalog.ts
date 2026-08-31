/** Sahnede gösterilen modeller ve yüzey seçenekleri. */

export const VALVE_MODELS = [
  { id: "EV100_1_5_2", name: '1.5" EV100', caption: "Standart yolcu asansörü" },
  { id: "EV100_3_4", name: '3/4" EV100', caption: "Kompakt / ev tipi" },
  { id: "KV1P", name: "KV1P", caption: "Manuel kontrol valfi" },
] as const;

export type ValveId = (typeof VALVE_MODELS)[number]["id"];

export const VALVE_MATERIALS = {
  standart: {
    label: "Ham Döküm",
    swatch: "#d1d5d8",
    color: "#d1d5d8",
    metalness: 0.6,
    roughness: 0.5,
  },
  kumlu: {
    label: "Kumlanmış Yüzey",
    swatch: "#c0c5c9",
    color: "#c0c5c9",
    metalness: 0.4,
    roughness: 0.8,
  },
  parlak: {
    label: "İşlenmiş Parlak",
    swatch: "#e8ecef",
    color: "#e8ecef",
    metalness: 0.9,
    roughness: 0.15,
  },
} as const;

export type MaterialId = keyof typeof VALVE_MATERIALS;

export const MATERIAL_IDS = Object.keys(VALVE_MATERIALS) as MaterialId[];
