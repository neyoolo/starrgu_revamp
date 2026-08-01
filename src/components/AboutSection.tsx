import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Radio, RefreshCw, Quote, Building2, Rocket, Film, Boxes } from 'lucide-react';

const REVENUE_MODELS = [
  {
    icon: Boxes,
    title: 'Platform Revenue',
    subtitle: 'SaaS & AI Infrastructure',
    desc: [
      'Subscription-based SaaS models',
      'AI credit-based consumption architecture',
      'Enterprise licensing',
    ],
    accent: 'text-brand-blue',
    border: 'border-brand-blue/15',
    bg: 'bg-gradient-to-b from-brand-blue/5 to-transparent',
    iconBg: 'bg-brand-blue/10 border-brand-blue/20',
  },
  {
    icon: Film,
    title: 'Media & IP Revenue',
    subtitle: 'Streaming & Content Licensing',
    desc: [
      'Premium streaming subscriptions',
      'Advertising & ad-tech integrations',
      'Content licensing',
    ],
    accent: 'text-brand-aqua',
    border: 'border-brand-aqua/15',
    bg: 'bg-gradient-to-b from-brand-aqua/5 to-transparent',
    iconBg: 'bg-brand-aqua/10 border-brand-aqua/20',
  },
  {
    icon: TrendingUp,
    title: 'Transactional & Ecosystem Revenue',
    subtitle: 'Competitions, Marketplace & Payments',
    desc: [
      'Skill-based competitive engagement fees',
      'Marketplace & transaction fees',
      'Integrated payment processing',
    ],
    accent: 'text-brand-gold',
    border: 'border-brand-gold/15',
    bg: 'bg-gradient-to-b from-brand-gold/5 to-transparent',
    iconBg: 'bg-brand-gold/10 border-brand-gold/20',
  },
];

const COMPANY_STATS = [
  { value: 'UK', label: 'Registered — England & Wales', icon: Building2, accent: 'text-brand-blue' },
  { value: '6', label: 'Integrated Platforms', icon: Rocket, accent: 'text-brand-aqua' },
  { value: '3', label: 'Revenue Streams', icon: RefreshCw, accent: 'text-brand-gold' },
  { value: '2026', label: 'Launch Year', icon: Radio, accent: 'text-[#22c55e]' },
];

export const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} id="company" className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs font-mono font-semibold tracking-[0.2em] text-brand-aqua uppercase mb-3">
          Business & Revenue Model
        </p>

        {/* Thesis Quote */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex items-start gap-3">
            <Quote className="w-6 h-6 text-brand-aqua/50 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight text-white mb-3 leading-tight">
                "AI Is Reshaping Creation. <span className="text-gradient-blue-aqua">Infrastructure Is the New Power.</span>"
              </h2>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed italic">
                The next decade will not be defined by platforms. It will be defined by who owns the rails.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Model Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
        {REVENUE_MODELS.map((model, i) => (
          <motion.article
            key={model.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className={`glass-card ${model.bg} ${model.border} hover:-translate-y-2 group relative overflow-hidden`}
          >
            <div className="card-glow" style={{ '--card-accent': i === 0 ? '#0222F1' : i === 1 ? '#27E2D8' : '#FCAE04' } as React.CSSProperties} />

            <div className={`w-11 h-11 rounded-xl ${model.iconBg} border flex items-center justify-center mb-4`}>
              <model.icon className={`w-5 h-5 ${model.accent}`} />
            </div>
            <h3 className="text-base font-semibold text-white mb-1">{model.title}</h3>
            <p className={`text-[10px] font-mono ${model.accent} mb-4`}>{model.subtitle}</p>
            <div className="flex flex-col gap-2">
              {model.desc.map((item) => (
                <div key={item} className="flex items-center gap-2 text-[11px] text-white/60 leading-relaxed">
                  <span className="w-1 h-1 rounded-full bg-brand-aqua flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      {/* Company Info + Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card p-8 sm:p-10 relative overflow-hidden"
      >
        <div className="card-glow" style={{ '--card-accent': '#27E2D8' } as React.CSSProperties} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Company blurb */}
          <div className="lg:col-span-5">
            <h3 className="text-lg font-bold text-white mb-3">Starrgu Ltd</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              A UK-registered AI-native technology and media company developing vertically integrated digital
              ecosystems for the global creator economy. From AI systems and platform engineering to media production
              and intellectual property ownership — we build, own, and power the digital rails of the next decade.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-white/50 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-status-pulse" />
              Registered in England & Wales · London, United Kingdom
            </div>
          </div>

          {/* Company stats */}
          <div className="lg:col-span-7 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {COMPANY_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="bg-white/[0.02] border border-white/5 rounded-2xl text-center py-6 px-4 hover:-translate-y-1 hover:border-white/15 transition-all duration-300"
              >
                <stat.icon className={`w-5 h-5 ${stat.accent} mx-auto mb-3 opacity-80`} />
                <div className={`text-xl sm:text-2xl font-bold ${stat.accent} tracking-tight`}>{stat.value}</div>
                <div className="text-[8px] sm:text-[9px] text-white/40 uppercase tracking-wider mt-1.5 leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
