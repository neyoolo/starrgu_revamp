import React from 'react';
import { Globe, MessageCircle, Send } from 'lucide-react';
import { LOGO } from '../lib/assets';
import type { LegalPage } from './LegalModal';

interface FooterProps {
  onOpenDrawer: () => void;
  onOpenLegal: (page: LegalPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDrawer, onOpenLegal }) => {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] pt-14 pb-10 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
        <div className="flex flex-col gap-3 lg:col-span-1">
          <img src={LOGO} alt="Starrgu" className="h-6 w-auto self-start" />
          <p className="text-xs text-white/40 leading-relaxed">
            AI Infrastructure & Media Technology.<br />Registered in England & Wales, London, United Kingdom.
          </p>
          <div className="flex items-center gap-1.5 text-[10px] text-white/40 px-2.5 py-1 rounded-full border border-white/5 bg-white/[0.02] self-start mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-status-pulse" />
            All systems operational
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30 mb-4">Platforms</h4>
          <ul className="flex flex-col gap-2">
            {['Ayeeva', 'Nexus Draws', 'Starrgu Stream', 'Starrgu Studios', 'ToronQ AI', 'Starrgu Social'].map((item) => (
              <li key={item}>
                <a href="#platforms" className="text-xs text-white/60 hover:text-white transition-colors duration-200">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30 mb-4">Legal</h4>
          <ul className="flex flex-col gap-2">
            {([
              ['Privacy Policy', 'privacy'],
              ['Terms of Service', 'terms'],
              ['Cookie Policy', 'cookies'],
              ['DPA', 'dpa'],
            ] as const).map(([label, page]) => (
              <li key={page}>
                <button
                  onClick={() => onOpenLegal(page)}
                  className="text-xs text-white/60 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer text-left p-0"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30 mb-4">Company</h4>
          <ul className="flex flex-col gap-2">
            <li><a href="#company" className="text-xs text-white/60 hover:text-white transition-colors duration-200">About</a></li>
            <li><a href="#technology" className="text-xs text-white/60 hover:text-white transition-colors duration-200">Technology</a></li>
            <li><a href="#infrastructure" className="text-xs text-white/60 hover:text-white transition-colors duration-200">Architecture</a></li>
            <li><a href="#partners" className="text-xs text-white/60 hover:text-white transition-colors duration-200">Partners</a></li>
            <li>
              <button onClick={onOpenDrawer} className="text-xs text-white/60 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer text-left p-0">
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30 mb-4">Contact</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="mailto:info@starrgu.com" className="text-xs text-white/60 hover:text-white transition-colors duration-200">
                General Enquiries<br />
                <span className="text-white/40">info@starrgu.com</span>
              </a>
            </li>
            <li>
              <a href="mailto:support@starrgu.com" className="text-xs text-white/60 hover:text-white transition-colors duration-200">
                Support<br />
                <span className="text-white/40">support@starrgu.com</span>
              </a>
            </li>
            <li className="text-[9px] text-white/30 font-mono">Mon–Fri · 9am–5pm</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.06] pt-5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-white/30">
          © 2026 Starrgu Ltd. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a 
            href="https://linkedin.com/company/starrgu" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/30 hover:text-white transition-colors duration-200" 
            aria-label="LinkedIn"
          >
            <Globe className="w-4 h-4" />
          </a>
          <a 
            href="https://twitter.com/starrgu" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/30 hover:text-white transition-colors duration-200" 
            aria-label="Twitter"
          >
            <Send className="w-4 h-4" />
          </a>
          <a 
            href="https://facebook.com/starrgu" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/30 hover:text-white transition-colors duration-200" 
            aria-label="Facebook"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};