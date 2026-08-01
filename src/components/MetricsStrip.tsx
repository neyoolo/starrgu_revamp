import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AlertTriangle, Layers, Quote } from 'lucide-react';

export const MetricsStrip: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });
  const [tam, setTam] = useState(0);
  const [creators, setCreators] = useState(0);

  // $250B+ Total Addressable Market counter
  useEffect(() => {
    if (!isInView) return;

    const end = 250;
    const duration = 2200;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = progress * (2 - progress);
      setTam(Math.round(easedProgress * end));
      if (progress < 1) requestAnimationFrame(animate);
      else setTam(end);
    };

    requestAnimationFrame(animate);
  }, [isInView]);

  // 200M+ Global Creators counter
  useEffect(() => {
    if (!isInView) return;

    const end = 200;
    const duration = 2400;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = progress * (2 - progress);
      setCreators(Math.round(easedProgress * end));
      if (progress < 1) requestAnimationFrame(animate);
      else setCreators(end);
    };

    requestAnimationFrame(animate);
  }, [isInView]);

  const structuralChallenges = [
    'Platform-dependent',
    'Revenue-fragmented',
    'Data-siloed',
    'Infrastructure-leased',
  ];

  const starrguModel = [
    'Unified Operating Infrastructure',
    'AI-Native Intelligence Layer',
    'Platform & IP Ownership',
    'Transparent Monetization Systems',
    'Global Distribution Capability',
  ];

  return (
    <section ref={containerRef} className="relative z-10 px-6 py-14 max-w-7xl mx-auto" aria-label="Market thesis and context">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(3px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        transition={{ duration: 0.8 }}
        className="bg-void-elevated backdrop-blur-[24px] border border-white/10 rounded-[24px] p-6 sm:p-10 relative overflow-hidden"
      >
        <div className="card-glow" style={{ '--card-accent': '#27E2D8' } as React.CSSProperties} />

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-mono font-semibold tracking-[0.2em] text-brand-aqua uppercase mb-3">
            Market Thesis & Context
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-bold tracking-tight text-white mb-5 leading-tight max-w-3xl mx-auto">
            The Digital Creator Economy Is Expanding Rapidly — But Ownership, Infrastructure, and Intelligence Are Fragmented.
          </h2>

          {/* Thesis Quote */}
          <div className="flex items-center gap-3 justify-center max-w-xl mx-auto">
            <Quote className="w-4 h-4 text-brand-aqua/60 flex-shrink-0" />
            <p className="text-sm sm:text-base text-white/70 italic leading-relaxed text-center">
              "We are transitioning from the era of isolated platforms to the era of vertically integrated digital ecosystems."
            </p>
            <Quote className="w-4 h-4 text-brand-aqua/60 flex-shrink-0 rotate-180" />
          </div>
        </div>

        {/* Market Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-10">
          {/* TAM */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl lg:text-[2.7rem] font-bold text-white tracking-tight">
              ${tam}B<span className="text-brand-aqua">+</span>
            </div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest mt-2">
              Total Addressable Market
            </div>
          </div>

          {/* Creators */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl lg:text-[2.7rem] font-bold text-white tracking-tight">
              {creators}M<span className="text-brand-gold">+</span>
            </div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest mt-2">
              Global Creators & Digital Entrepreneurs
            </div>
          </div>
        </div>

        {/* Structural Challenge & Starrgu Model */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Structural Challenge */}
          <div className="bg-white/[0.015] border border-white/[0.06] rounded-2xl p-6 sm:p-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#ef4444]/10 border border-[#ef4444]/20 flex items-center justify-center text-[#ef4444]">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">The Structural Challenge</h3>
                <p className="text-[10px] text-white/40 mt-0.5">Most companies build single platforms. Few build systems.</p>
              </div>
            </div>
            <p className="text-xs text-white/50 leading-relaxed mb-4">
              Today's digital landscape is fragmented across every dimension:
            </p>
            <div className="grid grid-cols-2 gap-2.5 mb-4">
              {structuralChallenges.map((item) => (
                <div
                  key={item}
                  className="bg-[#ef4444]/[0.03] border border-[#ef4444]/15 rounded-xl px-3.5 py-2.5 text-center"
                >
                  <span className="text-[10px] font-mono text-[#ef4444]/90">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-white/60 leading-relaxed font-medium">
              Creators, businesses, and media brands are forced to rent their growth.
            </p>
          </div>

          {/* The Starrgu Model */}
          <div className="bg-gradient-to-br from-brand-blue/[0.04] to-transparent border border-brand-blue/15 rounded-2xl p-6 sm:p-7 relative overflow-hidden">
            <div className="card-glow" style={{ '--card-accent': '#0222F1' } as React.CSSProperties} />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand-aqua/10 border border-brand-aqua/20 flex items-center justify-center text-brand-aqua">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">The Starrgu Model</h3>
                <p className="text-[10px] text-white/40 mt-0.5">We don't just build platforms. We architect ecosystems.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5 mb-4">
              {starrguModel.map((item, i) => (
                <span
                  key={item}
                  className="text-[10px] font-mono text-white/70 bg-white/[0.03] border border-white/10 rounded-full px-3.5 py-1.5"
                >
                  <span className="text-brand-aqua mr-1.5">{String(i + 1).padStart(2, '0')}</span>
                  {item}
                </span>
              ))}
            </div>
            <p className="text-xs text-white/60 leading-relaxed font-medium">
              Five interlocking capabilities that create structural ownership across the full digital value chain.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
