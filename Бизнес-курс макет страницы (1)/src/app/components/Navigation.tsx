import { Cpu, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  onHomeClick: () => void;
}

export function Navigation({ onHomeClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <button 
          onClick={onHomeClick}
          className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <span className="font-bold text-lg sm:text-xl text-white">TRIZ VIP</span>
            <div className="text-xs text-cyan-400 hidden sm:block">AI-Powered Platform</div>
          </div>
        </button>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <button onClick={onHomeClick} className="text-white/80 hover:text-cyan-400 transition-colors">
              Главная
            </button>
          </li>
          <li>
            <a href="#" className="text-white/80 hover:text-cyan-400 transition-colors">
              Функции
            </a>
          </li>
          <li>
            <a href="#" className="text-white/80 hover:text-cyan-400 transition-colors">
              О проекте
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-white"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0F172A] border-t border-white/10">
          <ul className="px-4 py-4 space-y-3">
            <li>
              <button 
                onClick={() => {
                  onHomeClick();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-white/80 hover:text-cyan-400 transition-colors py-2"
              >
                Главная
              </button>
            </li>
            <li>
              <a href="#" className="block text-white/80 hover:text-cyan-400 transition-colors py-2">
                Функции
              </a>
            </li>
            <li>
              <a href="#" className="block text-white/80 hover:text-cyan-400 transition-colors py-2">
                О проекте
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}