import React, { Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { LazyAbout, LazySkills, LazyProjects, LazyContact } from './components/LazyComponents';
import './App.css';

// Composant de fallback pour le loading
const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <LazyAbout />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <LazySkills />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <LazyProjects />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <LazyContact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
