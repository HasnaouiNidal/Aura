import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-bgSecondary overflow-hidden pt-40 pb-16 border-t border-textPrimary/[0.02]">
      {/* Cinematic Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none flex items-end justify-center z-0">
        {/* Soft center radial spotlight rising from the bottom */}
        <div className="absolute bottom-0 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_bottom,rgba(var(--app-textPrimary),0.02)_0%,transparent_60%)]" />
        
        {/* Faint corner depth glows */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accentSecondary/[0.015] rounded-full blur-[120px]" />
        <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-textPrimary/[0.01] rounded-full blur-[100px]" />
        
        {/* Extremely subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
        
        {/* Vignette depth fade at the top */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-bgPrimary to-transparent opacity-50" />
      </div>

      <div className="container relative mx-auto px-6 max-w-7xl z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12 mb-32">
          
          <div className="col-span-1 md:col-span-2 flex flex-col items-start pr-10">
            <div className="flex items-center gap-3 mb-12 opacity-50">
              <span className="w-6 h-[1px] bg-textPrimary/30" />
              <p className="text-[9px] uppercase tracking-[0.3em] font-light text-textPrimary">The Architecture Studio</p>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-textPrimary tracking-tight mb-8 font-light">
              NIDAM<span className="text-textSecondary/30 font-sans italic ml-1">.</span>
            </h2>
            <p className="text-[16px] text-textSecondary/60 max-w-sm mb-14 leading-[2.1] font-light">
              We build digital systems that feel calm, clear, and trustworthy. Designed with restraint. Engineered for scale.
            </p>
            
            <div className="flex gap-5">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="group relative w-10 h-10 rounded-full border border-textPrimary/[0.03] bg-surface/10 flex items-center justify-center text-textSecondary/40 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-textPrimary/90 hover:bg-surface/30 hover:border-textPrimary/[0.08] hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.1)]"
                >
                  <div className="absolute inset-0 bg-textPrimary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full pointer-events-none" />
                  <Icon size={15} strokeWidth={1} className="relative z-10" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <h3 className="text-textSecondary/40 font-sans text-[10px] uppercase tracking-[0.25em] mb-10 font-light">Navigation</h3>
            <ul className="space-y-6">
              {['Home', 'About', 'Catalog', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} 
                    className="text-[14px] text-textSecondary/60 hover:text-textPrimary hover:translate-x-1.5 inline-block transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] font-light tracking-wide"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <h3 className="text-textSecondary/40 font-sans text-[10px] uppercase tracking-[0.25em] mb-10 font-light">Legal & Terms</h3>
            <ul className="space-y-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-[14px] text-textSecondary/60 hover:text-textPrimary hover:translate-x-1.5 inline-block transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] font-light tracking-wide"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-textPrimary/[0.02] pt-12 flex flex-col md:flex-row justify-between items-center gap-8 relative">
          <p className="text-textSecondary/40 text-[10px] tracking-[0.3em] uppercase font-light">
            Engineered in Morocco.
          </p>
          
          {/* Central architectural detail */}
          <div className="absolute left-1/2 -top-[17px] -translate-x-1/2 w-[1px] h-8 bg-textPrimary/[0.05]" />
          
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-textSecondary/50 font-light tracking-widest uppercase flex items-center">
              <span className="font-serif italic tracking-normal text-textSecondary/40 mr-2 text-[14px] pt-1">©</span>
              {new Date().getFullYear()} NIDAM
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;