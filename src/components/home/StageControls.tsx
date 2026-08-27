"use client";

import {
  MATERIAL_IDS,
  VALVE_MATERIALS,
  VALVE_MODELS,
  type MaterialId,
  type ValveId,
} from "./valveCatalog";

type StageControlsProps = {
  valveId: ValveId;
  materialId: MaterialId;
  onValveChange: (id: ValveId) => void;
  onMaterialChange: (id: MaterialId) => void;
};

/**
 * Sahnenin üzerinde yüzen cam kontrol paneli. Ziyaretçiye hikâyeyi izlerken
 * modeli ve yüzeyi değiştirme imkânı verir — anlatı pasif değil, elle
 * denenebilir hale gelir.
 */
export default function StageControls({
  valveId,
  materialId,
  onValveChange,
  onMaterialChange,
}: StageControlsProps) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-6 z-[60] flex flex-col items-center gap-3 px-4 sm:bottom-10">
      {/* Yüzey seçici */}
      <fieldset className="pointer-events-auto flex items-center gap-3 rounded-full border border-white/60 bg-white/70 px-4 py-2 shadow-glass backdrop-blur-xl">
        <legend className="sr-only">Yüzey işlemi</legend>

        {MATERIAL_IDS.map((id) => {
          const preset = VALVE_MATERIALS[id];
          const isActive = id === materialId;

          return (
            <button
              key={id}
              type="button"
              onClick={() => onMaterialChange(id)}
              title={preset.label}
              aria-label={preset.label}
              aria-pressed={isActive}
              style={{ backgroundColor: preset.swatch }}
              className={`size-6 rounded-full transition-all duration-300 ease-brand ${
                isActive
                  ? "ring-2 ring-brand-600 ring-offset-2 ring-offset-white"
                  : "ring-1 ring-steel-900/10 hover:scale-110"
              }`}
            />
          );
        })}
      </fieldset>

      {/* Model seçici */}
      <div
        role="group"
        aria-label="Valf modeli"
        className="pointer-events-auto flex w-full max-w-sm justify-center gap-1 rounded-full border border-white/60 bg-white/80 p-1.5 shadow-glass backdrop-blur-xl sm:w-auto sm:max-w-none"
      >
        {VALVE_MODELS.map((model) => {
          const isActive = model.id === valveId;

          return (
            <button
              key={model.id}
              type="button"
              onClick={() => onValveChange(model.id)}
              aria-pressed={isActive}
              title={model.caption}
              className={`flex-1 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[0.78rem] font-semibold transition-colors duration-300 sm:flex-none sm:text-[0.85rem] ${
                isActive
                  ? "bg-brand-600 text-white"
                  : "text-steel-600 hover:bg-steel-100"
              }`}
            >
              {model.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
