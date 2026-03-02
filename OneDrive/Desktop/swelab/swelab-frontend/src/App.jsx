import React, { useState } from 'react';
import LoginScreen from './pages/login';
import HomeScreen from './pages/homepage';

export default function App() {
  const [currentView, setCurrentView] = useState('login'); 

  return (
    <div className="min-h-screen w-full bg-[#0B0C10] text-white font-sans overflow-x-hidden">
      {currentView === 'login' && (
        <LoginScreen onLogin={() => setCurrentView('home')} />
      )}
      
      {currentView === 'home' && (
        <HomeScreen onLogout={() => setCurrentView('login')} />
      )}
    </div>
  );
}