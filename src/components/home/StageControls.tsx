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
  isDockOpen: boolean;
  onValveChange: (id: ValveId) => void;
  onMaterialChange: (id: MaterialId) => void;
  onToggleDock: () => void;
};

/**
 * Sahnenin üzerinde yüzen cam kontrol paneli. Ziyaretçiye hikâyeyi izlerken
 * modeli ve yüzeyi değiştirme imkânı verir. Mobilde kompakt ve parmak dostu.
 */
export default function StageControls({
  valveId,
  materialId,
  isDockOpen,
  onValveChange,
  onMaterialChange,
  onToggleDock,
}: StageControlsProps) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-4 z-[60] flex flex-col items-center gap-2 px-3 sm:bottom-10 sm:gap-3 sm:px-4">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {/* Parça ve Ayar Rehberi Aç/Kapa Düğmesi */}
        <button
          type="button"
          onClick={onToggleDock}
          aria-pressed={isDockOpen}
          title={isDockOpen ? "Rehberi gizle" : "Valf parça ve ayar rehberini aç"}
          className={`pointer-events-auto flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[0.74rem] font-semibold shadow-glass backdrop-blur-xl transition-all duration-300 sm:gap-2 sm:px-4 sm:py-2 sm:text-[0.78rem] ${
            isDockOpen
              ? "border-brand-500 bg-brand-600 text-white shadow-glow"
              : "border-white/60 bg-white/70 text-steel-700 hover:bg-white dark:border-steel-700 dark:bg-steel-800/80 dark:text-steel-200"
          }`}
        >
          <span
            className={`size-2 rounded-full transition-colors ${
              isDockOpen ? "animate-ping bg-white" : "bg-brand-500"
            }`}
          />
          <span>{isDockOpen ? "Ayar Rehberi: Açık" : "Ayar & Parça Rehberi"}</span>
        </button>

        {/* Yüzey seçici */}
        <fieldset className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1.5 shadow-glass backdrop-blur-xl sm:gap-3 sm:px-4 sm:py-2 dark:border-steel-700 dark:bg-steel-800/80">
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
                className={`size-5 rounded-full transition-all duration-300 ease-brand sm:size-6 ${
                  isActive
                    ? "ring-2 ring-brand-600 ring-offset-2 ring-offset-white dark:ring-offset-steel-900"
                    : "ring-1 ring-steel-900/10 hover:scale-110"
                }`}
              />
            );
          })}
        </fieldset>
      </div>

      {/* Model seçici */}
      <div
        role="group"
        aria-label="Valf modeli"
        className="pointer-events-auto flex max-w-full justify-center gap-1 overflow-x-auto rounded-full border border-white/60 bg-white/80 p-1 shadow-glass backdrop-blur-xl scrollbar-none sm:p-1.5 dark:border-steel-700 dark:bg-steel-800/80 sm:w-auto"
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
              className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1 text-[0.72rem] font-semibold transition-colors duration-300 sm:px-3.5 sm:py-1.5 sm:text-[0.85rem] ${
                isActive
                  ? "bg-brand-600 text-white"
                  : "text-steel-600 hover:bg-steel-100 dark:text-steel-300 dark:hover:bg-steel-700/50"
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
