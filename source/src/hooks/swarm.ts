import { useEffect } from 'react';

/**
 * Swarm build: named cursors draw the home page box by box, type its text,
 * then dissolve into the real page. Engine: public/swarm-engine.js
 * (from github.com/TejasLamba2006/swarm-page-builder, based on Joel Califa's
 * Swarm and DhvanilPatel/swarm-cursors).
 *
 * It runs once per browser session, after the home screen has finished its entrance.
 */

type SwarmApi = { start: () => void; restart: () => void; abort: () => void };
declare global {
  interface Window {
    __swarmRebuild?: SwarmApi;
    __swarmModels?: { name: string; color: string }[];
    __swarmMaxHeight?: number;
  }
}

const BUILT_KEY = 'portfolio-built-paths-v1';
/** Wait for the hero's entrance animation to settle before the page is measured. */
const SETTLE_MS = 2200;
/** How many screens of the page the swarm builds before handing over to the real page.
 *  Raise it to build more of the page (the build gets longer). */
const BUILD_SCREENS = 2;

// Names and colours for the cursors.
const CURSORS = [
  { name: 'Claude', color: '#d97757' },
  { name: 'GPT', color: '#10a37f' },
  { name: 'Gemini', color: '#4285f4' },
  { name: 'Llama', color: '#a855f7' },
  { name: 'Mistral', color: '#ff7000' },
  { name: 'DeepSeek', color: '#4d6bfe' },
  { name: 'Grok', color: '#f59e0b' },
  { name: 'Qwen', color: '#ff3d5a' },
];

let loading: Promise<SwarmApi | null> | null = null;

function loadEngine(): Promise<SwarmApi | null> {
  if (window.__swarmRebuild) return Promise.resolve(window.__swarmRebuild);
  if (loading) return loading;
  loading = new Promise((resolve) => {
    const s = document.createElement('script');
    if (import.meta.env.MODE === 'single') {
      // Single-file build: the engine is bundled in, so add it as inline script text.
      import('../../public/swarm-engine.js?raw').then(({ default: code }) => {
        s.text = code;
        document.head.appendChild(s);
        resolve(window.__swarmRebuild ?? null);
      }, () => resolve(null));
      return;
    }
    s.src = `${import.meta.env.BASE_URL}swarm-engine.js`;
    s.onload = () => resolve(window.__swarmRebuild ?? null);
    s.onerror = () => resolve(null);
    document.head.appendChild(s);
  });
  return loading;
}

function alreadyBuilt() {
  try {
    const v = JSON.parse(sessionStorage.getItem(BUILT_KEY) || '[]');
    return Array.isArray(v) && v.includes(location.pathname);
  } catch {
    return false;
  }
}

const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

export function useSwarmBuild(active: boolean) {
  useEffect(() => {
    if (!active || reducedMotion() || alreadyBuilt()) return;
    const html = document.documentElement;
    html.setAttribute('data-swarm-init', 'true'); // cover the page while it settles
    window.__swarmModels = CURSORS;
    window.__swarmMaxHeight = Math.round(window.innerHeight * BUILD_SCREENS);
    let cancelled = false;
    const t = window.setTimeout(async () => {
      window.scrollTo(0, 0);
      const api = await loadEngine();
      if (cancelled) return;
      if (!api) {
        html.removeAttribute('data-swarm-init');
        return;
      }
      api.start();
    }, SETTLE_MS);
    return () => {
      cancelled = true;
      clearTimeout(t);
      html.removeAttribute('data-swarm-init');
    };
  }, [active]);
}

/** Replays the build from the top of the page. */
export async function replaySwarm() {
  if (reducedMotion()) return;
  window.__swarmModels = CURSORS;
  window.__swarmMaxHeight = Math.round(window.innerHeight * BUILD_SCREENS);
  window.scrollTo(0, 0);
  const api = await loadEngine();
  api?.restart();
}
