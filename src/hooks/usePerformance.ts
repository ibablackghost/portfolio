// Hook pour détecter les préférences de mouvement réduit
import { useEffect, useState } from 'react';

export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, []);

  return prefersReducedMotion;
};

// Hook pour détecter si l'appareil est bas de gamme
export const useLowEndDevice = () => {
  const [isLowEnd, setIsLowEnd] = useState(false);

  useEffect(() => {
    // Détection basée sur les capacités du navigateur
    const connection = (navigator as any)?.connection;
    const hardwareConcurrency = navigator.hardwareConcurrency || 4;
    const deviceMemory = (navigator as any)?.deviceMemory;

    // Considérer comme bas de gamme si :
    // - Moins de 2 cœurs CPU
    // - Moins de 2GB de RAM
    // - Connexion lente
    const isSlowConnection = connection?.effectiveType === '2g' || connection?.effectiveType === 'slow-2g';
    const isLowCpu = hardwareConcurrency < 2;
    const isLowMemory = deviceMemory && deviceMemory < 2;

    setIsLowEnd(isSlowConnection || isLowCpu || isLowMemory);
  }, []);

  return isLowEnd;
};