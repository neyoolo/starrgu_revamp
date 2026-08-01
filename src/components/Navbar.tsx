import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LOGO } from '../lib/assets';

interface NavbarProps {
  onOpenDrawer: () => void;
}

const NAV_LINKS = [
  { href: '#ecosystem', label: 'Ecosystem' },
  { href: '#platforms', label: 'Platforms' },
  { href: '#technology', label: 'Technology' },
  { href: '#infrastructure', label: 'Infrastructure' },
  { href: '#company', label: 'Company' },
  { href: '#partners', label: 'Partners' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenDrawer }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    try {
      if (isDark) document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      // ignore
    }
  }, [isDark]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-5 pointer-events-none"
      >
        <nav
          className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 border rounded-full max-w-[980px] w-full transition-all duration-500 backdrop-blur-2xl pointer-events-auto bg-glass border-glass ${
            scrolled ? 'shadow-2xl' : ''
          }`}
          role="navigation"
          aria-label="Main navigation"
        >
          <a href="#" className="flex items-center gap-2.5 mr-auto group" aria-label="Starrgu Home">
            <img
              src={LOGO}
              alt="Starrgu Logo"
              loading="eager"
              className="h-7 w-auto transition-transform duration-500 group-hover:rotate-180"
            />
            
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs px-3 py-1.5 rounded-lg transition-all duration-300 text-secondary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* <div className="hidden sm:flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full border border-glass bg-glass ml-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-status-pulse" />
            <span className="font-mono uppercase tracking-wider text-secondary"></span>
          </div> */}

          <button
            type="button"
            onClick={() => setIsDark((v) => !v)}
            aria-pressed={isDark}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="hidden sm:flex ml-1 px-3 py-1.5 rounded-full border border-glass bg-transparent items-center justify-center transition-all duration-300"
          >
            <span style={{ fontSize: 14 }} aria-hidden>{isDark ? '☀️' : '🌙'}</span>
          </button>

          <button
            onClick={onOpenDrawer}
            className="hidden lg:inline-flex text-[10px] uppercase font-semibold tracking-wider text-secondary hover:text-primary border border-glass bg-transparent px-3 py-1.5 rounded-full ml-1 transition-all duration-300"
          >
            Investor Relations
          </button>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden ml-1 p-2 rounded-lg text-secondary hover:text-primary transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-black/80 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col h-full p-6 pt-24">
              <button
                onClick={closeMobile}
                className="absolute top-6 right-6 p-2 text-white/60 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>

              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="text-2xl font-semibold text-white py-3 border-b border-white/5"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3">
                <button onClick={() => { closeMobile(); onOpenDrawer(); }} className="btn-primary justify-center w-full">
                  Investor Relations
                </button>
                <button
                  onClick={() => setIsDark((v) => !v)}
                  className="btn-ghost justify-center w-full"
                >
                  {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
