import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactDrawer: React.FC<ContactDrawerProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setTimeout(() => setSubmitted(false), 400);
    }, 2800);
  };

  // Close on overlay click (not panel)
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md flex justify-end"
          role="dialog"
          aria-label="Investor & Enterprise Inquiry Form"
        >
          <motion.div
            ref={panelRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="h-full w-full max-w-[440px] bg-[#0c0d14]/95 backdrop-blur-3xl border-l border-white/10 overflow-y-auto"
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">Get in Touch</h3>
                  <p className="text-[11px] text-white/40 mt-1">General Enquiries · Enterprise · Investor Relations</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white/40 hover:text-white transition-colors duration-200 p-1"
                  aria-label="Close form"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="iName" className="block text-[11px] text-white/40 mb-1.5">Full Name</label>
                    <input id="iName" type="text" className="form-input" placeholder="Jane Smith" required />
                  </div>
                  <div>
                    <label htmlFor="iEmail" className="block text-[11px] text-white/40 mb-1.5">Work Email</label>
                    <input id="iEmail" type="email" className="form-input" placeholder="jane@company.com" required />
                  </div>
                  <div>
                    <label htmlFor="iCompany" className="block text-[11px] text-white/40 mb-1.5">Company</label>
                    <input id="iCompany" type="text" className="form-input" placeholder="Company Ltd" />
                  </div>
                  <div>
                    <label htmlFor="iType" className="block text-[11px] text-white/40 mb-1.5">Inquiry Type</label>
                    <select id="iType" className="form-input cursor-pointer" required defaultValue="">
                      <option value="" disabled>Select type...</option>
                      <option>Enterprise Partnership</option>
                      <option>Investor Relations</option>
                      <option>Technical Integration</option>
                      <option>Media & Broadcasting</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="iMsg" className="block text-[11px] text-white/40 mb-1.5">Message</label>
                    <textarea id="iMsg" className="form-input resize-y" rows={4} placeholder="Tell us about your requirements..." />
                  </div>
                  <button type="submit" className="btn-primary justify-center py-3 rounded-xl w-full mt-2">
                    Send Inquiry
                  </button>
                  <p className="text-[9px] text-white/30 text-center leading-relaxed">
                    Your data is processed securely under UK GDPR rules. See our Privacy Policy.
                    <br />
                    For direct support: <a href="mailto:support@starrgu.com" className="text-brand-aqua hover:underline">support@starrgu.com</a> (Mon–Fri · 9am–5pm)
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#22c55e]/10 border border-[#22c55e]/15 flex items-center justify-center mx-auto mb-6 text-[#22c55e]">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Inquiry Received</h4>
                  <p className="text-sm text-white/60">We will respond within 24 business hours.</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
