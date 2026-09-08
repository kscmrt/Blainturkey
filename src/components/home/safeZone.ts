"use client";

import { useSyncExternalStore } from "react";

import { STORY_CHAPTERS, type StoryChapterData } from "./story";

/**
 * Valfin masaüstünde metne değmemesi için dışlama alanı (`clip-path`).
 */
export const TEXT_BAND_CSS = "(min(30rem, 84vw) + 2.5rem)";

const DESKTOP_QUERY = "(min-width: 1024px)";

export type AxisBreakpoints = { xs: number[]; ys: number[] };

export function buildGuardTimeline(align: StoryChapterData["align"]): AxisBreakpoints {
  const xs: number[] = [0];
  const ys: number[] = [0];

  for (const chapter of STORY_CHAPTERS) {
    if (chapter.align !== align) continue;

    const [enter, settled, leaving, exit] = chapter.range;
    xs.push(enter, settled, leaving, exit);
    ys.push(0, 1, 1, 0);
  }

  xs.push(1);
  ys.push(0);

  return { xs, ys };
}

function subscribe(onChange: () => void) {
  const query = window.matchMedia(DESKTOP_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

const getServerSnapshot = () => false;
const getClientSnapshot = () => window.matchMedia(DESKTOP_QUERY).matches;

export function useIsDesktopLayout(): boolean {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
}
