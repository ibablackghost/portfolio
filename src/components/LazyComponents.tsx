import { lazy } from 'react';

// Lazy loading des composants pour améliorer les performances
export const LazyAbout = lazy(() => import('./About'));
export const LazySkills = lazy(() => import('./Skills'));
export const LazyProjects = lazy(() => import('./Projects'));
export const LazyContact = lazy(() => import('./Contact'));