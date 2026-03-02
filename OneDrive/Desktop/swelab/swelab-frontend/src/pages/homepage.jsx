import React, { useState } from 'react';
import { 
  Play, 
  Search, 
  Star, 
  HeartPulse, 
  ArrowRight, 
  Home, 
  Compass, 
  Bookmark, 
  PieChart, 
  Plus,
  User,
  CreditCard,
  LogOut
} from 'lucide-react';

// ==========================================
// COMPONENT 2: BENTO DASHBOARD SCREEN (MODIFIED)
// ==========================================
const HomeScreen = ({ onLogout }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (75 / 100) * circumference;

  return (
    <div className="min-h-screen w-full bg-[#0B0C10] text-white p-4 md:p-8 pb-32 animate-[fadeIn_0.5s_ease-out]">
      <div className="max-w-7xl mx-auto">
        <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop" alt="Decorative Background" className="fixed inset-0 w-full h-full object-cover opacity-30 pointer-events-none" />
      </div>
      
      {/* Top Header */}
      <header className="flex justify-between items-center mb-8 max-w-7xl mx-auto relative z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#66FCF1] flex items-center justify-center">
            <Play fill="#0B0C10" color="#0B0C10" size={20} className="ml-0.5" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Project-Name</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-[#1F2833]/80 border border-white/10 flex items-center justify-center hover:text-[#66FCF1] hover:bg-[#1F2833] transition-colors">
            <Search size={18} />
          </button>
          
          <div className="relative">
            <div 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#66FCF1] cursor-pointer hover:scale-105 transition-transform"
            >
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop" alt="User Profile" className="w-full h-full object-cover" />
            </div>

            {isProfileOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-[#1F2833] rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-50 animate-[fadeIn_0.2s_ease-out] origin-top-right">
                <div className="px-4 py-3 border-b border-white/5 bg-[#0B0C10]/30">
                  <p className="text-sm font-bold text-white">Aditya</p>
                  <p className="text-xs text-[#C5C6C7]">user@labproject.edu</p>
                </div>
                
                <div className="p-2 flex flex-col gap-1">
                  <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-[#C5C6C7] hover:text-white hover:bg-[#0B0C10] rounded-xl transition-colors">
                    <User size={16} className="text-[#66FCF1]" /> My Profile
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-[#C5C6C7] hover:text-white hover:bg-[#0B0C10] rounded-xl transition-colors">
                    <CreditCard size={16} className="text-[#66FCF1]" /> Subscription
                  </button>
                </div>

                <div className="p-2 border-t border-white/5">
                  <button 
                    onClick={onLogout}
                    className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-[#ff4b4b] hover:bg-[#ff4b4b]/10 rounded-xl transition-colors"
                  >
                    <LogOut size={16} /> Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto relative z-10">
        
        <div className="col-span-1 md:col-span-3 lg:col-span-3 row-span-2 rounded-[2rem] overflow-hidden relative min-h-[400px] group cursor-pointer bg-[#1A222C] border border-white/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50">
          <img 
            src="https://image.tmdb.org/t/p/original/pbrkL804c8yAv3zBZR4QPEafpAR.jpg" 
            alt="Interstellar" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/40 to-transparent"></div>
          
          <div className="absolute top-6 left-6 bg-[#1F2833]/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-[#66FCF1] border border-white/10 flex items-center gap-2">
            <Star fill="#66FCF1" size={14} /> 98% Match
          </div>

          <div className="absolute bottom-8 left-8 right-8 z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-white drop-shadow-lg tracking-tight">Interstellar</h2>
            <p className="text-[#C5C6C7] text-sm md:text-base max-w-lg mb-6 line-clamp-2">
              A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-[#66FCF1] text-[#0B0C10] px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white transition-colors shadow-[0_0_15px_rgba(102,252,241,0.4)]">
                <Play fill="#0B0C10" size={18} /> Watch Now
              </button>
              <button className="bg-[#1F2833]/80 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10 text-white">
                <Plus size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-1 lg:col-span-2 bg-[#1F2833] rounded-[2rem] p-6 flex flex-col justify-between border border-white/5 relative overflow-hidden group hover:border-[#66FCF1]/30 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#66FCF1]/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-[#66FCF1]/20 transition-colors"></div>
          
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-1 text-white">
              <HeartPulse className="text-[#66FCF1]" size={20} /> Health Monitor
            </h3>
            <p className="text-xs text-[#C5C6C7]">Daily Screen Time Limit</p>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="relative w-[120px] h-[120px] flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="60" cy="60" r={radius} stroke="#0B0C10" strokeWidth="12" fill="none" />
                <circle 
                  cx="60" cy="60" r={radius} 
                  stroke="#66FCF1" strokeWidth="12" fill="none" 
                  strokeDasharray={circumference} 
                  strokeDashoffset={offset} 
                  strokeLinecap="round" 
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-white">2h</span>
                <span className="text-xs text-[#C5C6C7]">15m</span>
              </div>
            </div>
            
            <div className="w-1/2 pl-4 z-10">
              <p className="text-sm text-[#C5C6C7] leading-relaxed mb-3">You are nearing your 3-hour healthy limit.</p>
              <div className="w-full bg-[#0B0C10] rounded-full h-2">
                <div className="bg-[#66FCF1] h-2 rounded-full shadow-[0_0_10px_rgba(102,252,241,0.5)]" style={{ width: '75%' }}></div>
              </div>
              <p className="text-[10px] text-right mt-1 text-[#45A29E] font-semibold tracking-wider">75% CAPACITY</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#1F2833] rounded-[2rem] p-6 border border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#45A29E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <h3 className="text-xs font-bold text-[#45A29E] mb-4 uppercase tracking-wider">Why we chose this</h3>
          
          <div className="flex gap-4 items-center mb-5">
            <div className="w-16 h-20 rounded-lg overflow-hidden shrink-0 border border-white/10 shadow-lg bg-[#0B0C10]">
              <img src="https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_.jpg" className="w-full h-full object-cover opacity-80" alt="The Martian" />
            </div>
            <div>
              <p className="text-sm text-[#C5C6C7] mb-1">Because you highly rated</p>
              <p className="text-white font-bold text-lg mb-2">The Martian</p>
              <div className="flex gap-2">
                <span className="text-[10px] bg-[#0B0C10] px-2 py-1 rounded-md text-[#C5C6C7] border border-white/5">Sci-Fi</span>
                <span className="text-[10px] bg-[#0B0C10] px-2 py-1 rounded-md text-[#C5C6C7] border border-white/5">Space</span>
              </div>
            </div>
          </div>
          
          <button className="w-full py-2.5 rounded-xl bg-[#0B0C10]/50 border border-white/5 text-sm font-medium text-white hover:bg-[#0B0C10] hover:text-[#66FCF1] transition-colors flex items-center justify-center gap-2">
            More Like This <ArrowRight size={14} />
          </button>
        </div>

        {/* MOOD TAGS CARD */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:col-start-4 bg-[#1F2833] rounded-[2rem] opacity-80 p-6 border border-white/5">
          <h3 className="text-lg font-semibold mb-5 text-white">How are you feeling?</h3>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-full bg-[#0B0C10] text-sm text-[#C5C6C7] hover:border-[#66FCF1] hover:text-white border border-transparent transition-colors">🧠 Mind-bending</button>
            <button className="px-4 py-2 rounded-full bg-[#0B0C10] text-sm text-[#C5C6C7] hover:border-[#66FCF1] hover:text-white border border-transparent transition-colors">😂 Lighthearted</button>
            <button className="px-4 py-2 rounded-full bg-[#0B0C10] text-sm text-[#66FCF1] border border-[#66FCF1] shadow-[0_0_10px_rgba(102,252,241,0.15)] transition-colors">🌃 Late Night</button>
            <button className="px-4 py-2 rounded-full bg-[#0B0C10] text-sm text-[#C5C6C7] hover:border-[#66FCF1] hover:text-white border border-transparent transition-colors">🍿 Action Packed</button>
          </div>
        </div>

        {/* CONTINUE WATCHING TRAY */}
        <div className="col-span-1 md:col-span-4 lg:col-span-5 flex gap-4 overflow-x-auto pb-4 pt-2">
          <h3 className="text-lg font-semibold absolute -mt-8 text-white">Continue Watching</h3>
          
          <div className="min-w-[220px] h-[130px] rounded-2xl relative overflow-hidden group cursor-pointer border border-white/5 bg-[#0B0C10]">
            <img src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100" alt="Movie 1" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#66FCF1]/20 backdrop-blur-sm flex items-center justify-center">
                <Play fill="#66FCF1" color="#66FCF1" size={16} className="ml-0.5" />
              </div>
            </div>
            <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded text-[10px] font-bold">1:45:02</div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0B0C10]">
              <div className="h-full bg-[#66FCF1]" style={{ width: '45%' }}></div>
            </div>
          </div>

          <div className="min-w-[220px] h-[130px] rounded-2xl relative overflow-hidden group cursor-pointer border border-white/5 bg-[#0B0C10]">
            <img src="https://images.unsplash.com/photo-1559583109-3e7968136c99?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100" alt="Movie 2" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#66FCF1]/20 backdrop-blur-sm flex items-center justify-center">
                <Play fill="#66FCF1" color="#66FCF1" size={16} className="ml-0.5" />
              </div>
            </div>
            <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded text-[10px] font-bold">0:12:40</div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0B0C10]">
              <div className="h-full bg-[#66FCF1]" style={{ width: '10%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING BOTTOM NAVIGATION */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#1F2833]/80 backdrop-blur-xl rounded-full px-8 py-4 flex gap-8 z-50 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
        <button className="text-[#66FCF1] flex flex-col items-center gap-1 group">
          <Home size={22} className="group-hover:-translate-y-1 transition-transform" />
          <span className="text-[10px] font-bold">Home</span>
        </button>
        <button className="text-[#C5C6C7] flex flex-col items-center gap-1 group hover:text-white transition-colors">
          <Compass size={22} className="group-hover:-translate-y-1 transition-transform" />
          <span className="text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-0">Discover</span>
        </button>
        <button className="text-[#C5C6C7] flex flex-col items-center gap-1 group hover:text-white transition-colors">
          <Bookmark size={22} className="group-hover:-translate-y-1 transition-transform" />
          <span className="text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-0">List</span>
        </button>
        <button className="text-[#C5C6C7] flex flex-col items-center gap-1 group hover:text-white transition-colors relative">
          <PieChart size={22} className="group-hover:-translate-y-1 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-[#1F2833]"></span>
          <span className="text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-0">Health</span>
        </button>
      </nav>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default HomeScreen;