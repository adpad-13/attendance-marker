import React, { useState } from 'react';
import { Play } from 'lucide-react';

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('user@labproject.edu');
  const [password, setPassword] = useState('password123');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-[#0B0C10] text-white animate-fadeIn">
      
      {/* Left Side: Cinematic Area */}
      <div className="hidden md:flex md:w-2/3 relative items-center justify-center overflow-hidden bg-[#151A22]">
        <img 
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop" 
          alt="Cinematic Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B0C10]"></div>
        
        <div className="absolute bottom-16 left-16 max-w-xl z-10">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
            Stop Scrolling.<br />
            <span className="text-[#66FCF1]">Start Experiencing.</span>
          </h1>
          <p className="text-[#C5C6C7] text-lg lg:text-xl max-w-md leading-relaxed">
            Curated recommendations tailored to your mind, with built-in health tracking to keep your viewing balanced.
          </p>
        </div>
      </div>

      {/* Right Side: Login Panel */}
      <div className="w-full md:w-1/3 flex items-center justify-center p-8 lg:p-12 relative bg-[#0B0C10] z-20">
        <div className="w-full max-w-md">
          <div className="mb-12">
            <div className="w-14 h-14 rounded-2xl bg-[#66FCF1] mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(102,252,241,0.3)]">
              <Play fill="#0B0C10" color="#0B0C10" size={28} className="ml-1" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
            <p className="text-[#C5C6C7]">Enter your details to access your dashboard.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex flex-col group">
              <label className="text-xs font-semibold text-[#45A29E] tracking-wider uppercase mb-2 group-focus-within:text-[#66FCF1] transition-colors">
                Email Address
              </label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-b-2 border-[#45A29E] text-white text-lg py-2 focus:outline-none focus:border-[#66FCF1] transition-all"
                required
              />
            </div>
            
            <div className="flex flex-col group">
              <label className="text-xs font-semibold text-[#45A29E] tracking-wider uppercase mb-2 group-focus-within:text-[#66FCF1] transition-colors">
                Password
              </label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent border-b-2 border-[#45A29E] text-white text-lg py-2 focus:outline-none focus:border-[#66FCF1] transition-all"
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-[#66FCF1] text-[#0B0C10] font-bold text-lg py-4 rounded-full mt-8 hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(102,252,241,0.3)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)] transform hover:-translate-y-1"
            >
              Enter Dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;