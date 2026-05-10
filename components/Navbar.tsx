import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { Button } from './UI';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGS } from '../i18n';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  });
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const langRef = useRef<HTMLDivElement>(null);

  const currentLang = SUPPORTED_LANGS.find(l => l.code === i18n.language) ?? SUPPORTED_LANGS[0];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [location]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme !== 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const switchLang = (code: string) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.work'), path: '/catalog' },
    { name: t('nav.caseStudies'), path: '/case-studies' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bgPrimary/80 backdrop-blur-md border-b border-textPrimary/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-textPrimary tracking-tight">
          NIDAM<span className="text-accentPrimary text-3xl leading-none">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}
              className={`text-sm font-medium transition-colors hover:text-accentPrimary ${location.pathname === link.path ? 'text-textPrimary' : 'text-textSecondary'}`}>
              {link.name}
            </Link>
          ))}

          {/* Theme toggle */}
          <button onClick={() => setTheme(p => p === 'dark' ? 'light' : 'dark')}
            className="text-textSecondary hover:text-accentPrimary transition-colors p-2 rounded-full hover:bg-textPrimary/5">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Premium Language Switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(p => !p)}
              className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] font-light text-textSecondary/80 hover:text-textPrimary transition-colors duration-300 border border-textPrimary/10 px-3 py-1.5 hover:border-textPrimary/30"
              aria-label="Switch language"
            >
              <span>{currentLang.label}</span>
              <ChevronDown size={10} className={`transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} />
            </button>

            {langOpen && (
              <div className="absolute top-full right-0 mt-3 bg-bgSecondary border border-textPrimary/8 shadow-2xl overflow-hidden min-w-[140px] z-50">
                {SUPPORTED_LANGS.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => switchLang(lang.code)}
                    className={`w-full text-left px-5 py-3 text-[12px] font-light tracking-wide flex items-center justify-between gap-4 transition-colors duration-200 hover:bg-textPrimary/5 ${lang.code === i18n.language ? 'text-textPrimary' : 'text-textSecondary/70'}`}
                    dir={lang.dir}
                  >
                    <span>{lang.name}</span>
                    {lang.code === i18n.language && <div className="w-1 h-1 rounded-full bg-textPrimary/60" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button variant="primary" to="/contact" className="px-6 py-2 h-10 text-xs">
            {t('nav.cta')}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          {/* Mobile lang switcher (compact) */}
          <div className="relative" ref={undefined}>
            <button onClick={() => setLangOpen(p => !p)}
              className="text-[11px] uppercase tracking-[0.15em] font-light text-textSecondary/80 border border-textPrimary/10 px-3 py-1.5">
              {currentLang.label}
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 bg-bgSecondary border border-textPrimary/8 shadow-2xl z-50 min-w-[130px]">
                {SUPPORTED_LANGS.map(lang => (
                  <button key={lang.code} onClick={() => switchLang(lang.code)}
                    className={`w-full text-left px-4 py-2.5 text-[12px] font-light transition-colors hover:bg-textPrimary/5 ${lang.code === i18n.language ? 'text-textPrimary' : 'text-textSecondary/70'}`}
                    dir={lang.dir}>
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button onClick={() => setTheme(p => p === 'dark' ? 'light' : 'dark')} className="text-textSecondary p-2">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="text-textPrimary" onClick={() => setMobileMenuOpen(p => !p)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bgSecondary border-b border-textPrimary/5 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="text-lg font-medium text-textSecondary hover:text-textPrimary">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;