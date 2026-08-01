import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export type LegalPage = 'privacy' | 'terms' | 'cookies' | 'dpa';

interface LegalModalProps {
  page: LegalPage | null;
  onClose: () => void;
}

const CONTENT: Record<LegalPage, { title: string; body: string[] }> = {
  privacy: {
    title: 'Privacy Policy',
    body: [
      'Starrgu Ltd ("we", "us") is committed to protecting your personal data in accordance with UK GDPR and the Data Protection Act 2018.',
      'We collect only the information necessary to respond to inquiries submitted through our contact form: name, email, company, and message content. This data is processed on the basis of legitimate interest and stored securely within UK/EU sovereign regions.',
      'We do not sell, share, or transfer personal data to third parties except where required by law. Data is retained for 24 months after last contact unless you request deletion.',
      'You have the right to access, rectify, erase, or restrict processing of your data. Contact us at privacy@starrgu.com to exercise these rights.',
    ],
  },
  terms: {
    title: 'Terms of Service',
    body: [
      'By accessing starrgu.com you agree to these terms. All content, trademarks, and technology described on this site are the property of Starrgu Ltd.',
      'This website is provided for informational purposes. Product specifications, metrics, and availability are subject to change without notice.',
      'Enterprise services are governed by separate Master Service Agreements. Nothing on this site constitutes a binding offer or contract.',
      'Starrgu Ltd is registered in England & Wales. These terms are governed by English law.',
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    body: [
      'This site uses minimal cookies. We store a single localStorage entry for theme preference (dark/light mode) — no tracking cookies are used.',
      'We do not use third-party analytics, advertising, or social media tracking pixels on this website.',
      'If we introduce analytics in the future, we will update this policy and request consent where required under UK PECR regulations.',
    ],
  },
  dpa: {
    title: 'Data Processing Agreement',
    body: [
      'Starrgu provides enterprise Data Processing Agreements (DPAs) aligned with UK GDPR Article 28 requirements for all B2B customers.',
      'Our DPA covers: processing scope and purpose, sub-processor transparency, data subject rights assistance, breach notification within 72 hours, and audit rights.',
      'All customer data is processed within designated sovereign regions (UK, EU, or US) with cryptographic boundary enforcement. Cross-region transfers require explicit orchestration policies.',
      'To request a DPA for your organisation, use the contact form and select "Enterprise Partnership".',
    ],
  },
};

export const LegalModal: React.FC<LegalModalProps> = ({ page, onClose }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (page) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [page, onClose]);

  const content = page ? CONTENT[page] : null;

  return (
    <AnimatePresence>
      {page && content && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-md flex items-center justify-center p-6"
          role="dialog"
          aria-label={content.title}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card max-w-lg w-full max-h-[80vh] overflow-y-auto p-8 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors p-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold text-white mb-6 pr-8">{content.title}</h3>
            <div className="flex flex-col gap-4">
              {content.body.map((paragraph, i) => (
                <p key={i} className="text-sm text-white/60 leading-relaxed">{paragraph}</p>
              ))}
            </div>
            <p className="text-[10px] text-white/30 mt-6 pt-4 border-t border-white/5">
              Last updated: July 2026 · Starrgu Ltd, United Kingdom
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
