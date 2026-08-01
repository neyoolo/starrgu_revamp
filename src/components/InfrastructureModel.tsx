import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Radio, Gamepad2 } from 'lucide-react';

const LAYERS = [
  {
    num: '01',
    title: 'AI & Intelligence Layer',
    platforms: 'ToronQ AI · Ayeeva AI',
    desc: 'The foundational intelligence engine powering automation, analytics, monetization optimization, and operational scale.',
    capabilities: [
      'Generative AI systems',
      'Business intelligence & workflow automation',
      'Reputation & growth infrastructure',
      'Data ownership & intelligence control',
    ],
    tag: 'Starrgu owns the intelligence layer.',
    icon: Brain,
    accent: 'brand-blue',
  },
  {
    num: '02',
    title: 'Distribution & Platform Layer',
    platforms: 'Nexus Draws · Starrgu Stream · Starrgu Social',
    desc: 'Proprietary global platforms designed for content delivery, community engagement, monetization, and digital interaction at scale.',
    capabilities: [
      'Owned distribution channels',
      'Direct audience access',
      'Transparent monetization systems',
      'Cross-platform ecosystem integration',
    ],
    tag: 'Starrgu controls the audience layer.',
    icon: Radio,
    accent: 'brand-aqua',
  },
  {
    num: '03',
    title: 'IP & Interactive Media Layer',
    platforms: 'Starrgu Studios',
    desc: 'Original intellectual property development across gaming, streaming, and interactive digital experiences.',
    capabilities: [
      'Proprietary media & gaming IP',
      'Long-term asset ownership',
      'High-margin content production',
      'Cross-platform franchise expansion',
    ],
    tag: 'Starrgu owns the content layer.',
    icon: Gamepad2,
    accent: 'brand-gold',
  },
];

const accentStyles: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
  'brand-blue': { bg: 'bg-brand-blue/5', border: 'border-brand-blue/20', text: 'text-brand-blue', iconBg: 'bg-brand-blue/10 border-brand-blue/20' },
  'brand-aqua': { bg: 'bg-brand-aqua/5', border: 'border-brand-aqua/20', text: 'text-brand-aqua', iconBg: 'bg-brand-aqua/10 border-brand-aqua/20' },
  'brand-gold': { bg: 'bg-brand-gold/5', border: 'border-brand-gold/20', text: 'text-brand-gold', iconBg: 'bg-brand-gold/10 border-brand-gold/20' },
};

export const InfrastructureModel: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} id="technology" className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-xs font-mono font-semibold tracking-[0.2em] text-brand-aqua uppercase mb-3">
          Strategic Infrastructure Architecture
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white mb-4">
          Three layers. Full digital lifecycle.
        </h2>
        <p className="text-base text-white/70 max-w-xl mx-auto leading-relaxed">
          We operate across three vertically integrated layers — controlling intelligence, distribution, and intellectual property to capture value across the full digital lifecycle.
        </p>
      </div>

      <div className="flex flex-col gap-5 max-w-4xl mx-auto">
        {LAYERS.map((layer, i) => {
          const style = accentStyles[layer.accent];
          return (
            <div key={layer.num}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`glass-card bg-gradient-to-br ${style.bg} to-transparent relative group`}
              >
                <div className="card-glow" style={{ '--card-accent': layer.accent === 'brand-blue' ? '#0222F1' : layer.accent === 'brand-aqua' ? '#27E2D8' : '#FCAE04' } as React.CSSProperties} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Number + Icon + Title */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-11 h-11 rounded-xl ${style.iconBg} border flex items-center justify-center ${style.text} flex-shrink-0`}>
                        <layer.icon className="w-5 h-5" />
                      </div>
                      <span className={`text-2xl font-bold font-mono ${style.text} opacity-40`}>{layer.num}</span>
                    </div>
                    <h3 className="text-base font-semibold text-white">{layer.title}</h3>
                    <p className="text-[10px] font-mono text-white/50 mt-1">{layer.platforms}</p>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-4">
                    <p className="text-xs text-white/60 leading-relaxed">{layer.desc}</p>
                  </div>

                  {/* Capabilities */}
                  <div className="lg:col-span-4">
                    <div className="flex flex-wrap gap-2">
                      {layer.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="text-[9px] font-mono text-white/70 bg-white/[0.03] border border-white/10 rounded-full px-3 py-1.5"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                    <div className={`mt-3 text-[10px] font-mono font-semibold ${style.text}`}>
                      ▸ {layer.tag}
                    </div>
                  </div>
                </div>
              </motion.article>

              {/* Connector Arrow */}
              {i < LAYERS.length - 1 && (
                <div className="flex justify-center py-1" aria-hidden="true">
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                    className="w-px h-8 bg-gradient-to-b from-white/20 to-white/5"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
