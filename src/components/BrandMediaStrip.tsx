import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../lib/assets';

export const BrandMediaStrip: React.FC = () => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 pb-12" aria-label="Starrgu media previews">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Main wide tile */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="relative md:col-span-6 lg:col-span-6 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-[0_20px_55px_rgba(0,0,0,0.5)] group h-[280px] sm:h-[360px]"
        >
          <img
            src={IMAGES.stt1}
            alt="Starrgu Stream broadcast studio preview"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        {/* Second tile */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative md:col-span-3 lg:col-span-3 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-[0_20px_55px_rgba(0,0,0,0.5)] group h-[280px] sm:h-[360px]"
        >
          <img
            src={IMAGES.stt2}
            alt="Ayeeva AI creator operating system live preview"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        {/* Third tile */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative md:col-span-3 lg:col-span-3 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-[0_20px_55px_rgba(0,0,0,0.5)] group h-[280px] sm:h-[360px]"
        >
          <img
            src={IMAGES.stt4}
            alt="Starrgu Studios interactive media production preview"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </div>
    </section>
  );
};
