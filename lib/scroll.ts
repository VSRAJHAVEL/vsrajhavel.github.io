import type Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenisInstance = instance;
}

export function getLenis() {
  return lenisInstance;
}

export function getScrollY() {
  return lenisInstance?.scroll ?? window.scrollY;
}

export function getVelocity() {
  return lenisInstance?.velocity ?? 0;
}
