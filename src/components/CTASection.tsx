import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  onOpenDrawer: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenDrawer }) => {
  return (
    <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(3px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-[760px] mx-auto"
      >
        <article className="glass-card text-center py-12 px-8 relative overflow-hidden">
          <div className="card-glow" style={{ '--card-accent': '#0222F1' } as React.CSSProperties} />

          {/* Ambient glow behind CTA */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />

          <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-bold tracking-tight text-white mb-4 relative z-10">
            Let's build the rails together.
          </h2>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-md mx-auto mb-6 relative z-10">
            General Enquiries: <a href="mailto:info@starrgu.com" className="text-brand-aqua hover:underline">info@starrgu.com</a>
            <br />
            Support: <a href="mailto:support@starrgu.com" className="text-brand-aqua hover:underline">support@starrgu.com</a>
            <span className="block text-[10px] text-white/40 mt-1 font-mono">Mon–Fri · 9am–5pm</span>
          </p>
          <div className="flex gap-3 justify-center flex-wrap relative z-10">
            <a href="mailto:info@starrgu.com" className="btn-primary">
              Email General Enquiries →
            </a>
            <button onClick={onOpenDrawer} className="btn-ghost">
              Open Contact Form
            </button>
          </div>
        </article>
      </motion.div>
    </section>
  );
};
