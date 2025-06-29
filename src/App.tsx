import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import LearningModules from './components/LearningModules';
import Community from './components/Community';
import Statistics from './components/Statistics';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Features />
        <LearningModules />
        <Community />
        <Statistics />
        <CallToAction />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;