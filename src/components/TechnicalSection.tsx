import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Lock, Server, ShieldCheck, Scale, Layers, Brain, Globe, Cpu, KeyRound } from 'lucide-react';

export const TechnicalSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'compare' | 'core'>('compare');

  // Concurrency counter
  const concRef = useRef<HTMLDivElement>(null);
  const isConcVisible = useInView(concRef, { once: true, amount: 0.3 });
  const [concurrency, setConcurrency] = useState(0);

  useEffect(() => {
    if (!isConcVisible || activeTab !== 'core') return;
    const end = 1200000;
    const duration = 2500;
    const startTime = performance.now();
    const animate = (time: number) => {
      const p = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setConcurrency(Math.round(eased * end));
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isConcVisible, activeTab]);

  // Microservices counter
  const [svcCount, setSvcCount] = useState(0);
  const svcRef = useRef<HTMLDivElement>(null);
  const isSvcVisible = useInView(svcRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isSvcVisible || activeTab !== 'core') return;
    const end = 47;
    const duration = 1800;
    const startTime = performance.now();
    const animate = (time: number) => {
      const p = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setSvcCount(Math.round(eased * end));
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isSvcVisible, activeTab]);

  const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const cardAnim: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(3px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: smoothEase } },
  };

  const coreSystems = [
    { icon: Server, title: 'High-Concurrency Distributed Systems', desc: 'Horizontally scalable, cloud-native infrastructure engineered to handle millions of concurrent workflows.', accent: '#0222F1' },
    { icon: ShieldCheck, title: 'Secure Financial & Payment Architecture', desc: 'Bank-grade payment orchestration supporting subscriptions, competitions, SaaS billing, and cross-border payouts.', accent: '#27E2D8' },
    { icon: Scale, title: 'Deterministic Fairness & Transparency Engines', desc: 'Algorithmic integrity systems ensuring auditable outcomes and transparent distribution logic.', accent: '#FCAE04' },
    { icon: Layers, title: 'Modular SaaS Microservices Framework', desc: 'Composable, API-first architecture enabling rapid deployment of new products.', accent: '#27E2D8' },
    { icon: Brain, title: 'AI Orchestration & Intelligence Layer', desc: 'Centralized orchestration of multiple AI models, LLMs, and generative engines.', accent: '#0222F1' },
    { icon: Globe, title: 'Data Sovereignty & Regional Compliance', desc: 'Architecture designed to respect jurisdictional data laws and user privacy standards.', accent: '#F53A0F' },
  ];

  const governanceItems = [
    { icon: Lock, title: 'Privacy-First Architecture' },
    { icon: KeyRound, title: 'Regulatory Alignment' },
    { icon: ShieldCheck, title: 'Age Assurance & User Protection' },
    { icon: Cpu, title: 'AI-Assisted Moderation & Safety Systems' },
  ];

  const svcs = ['Auth','API GW','Model Serve','Prompt Eng','Media Enc','CDN Route','Stream Mux','DRM Mgr','Analytics','Billing','Search','Queue','Cache','Config','Health','Log Agg','Metrics','Trace','Notify','Storage','Rate Limit','Circuit','DNS','TLS','Load Bal','Sched','Pipeline','Audit','Key Mgr','Policy','Fairness','Draw Eng','Reputation','Crawler','Filter','Asset','Thumb','Transcode','AB Test','Feature','Deploy','Rollback','Vault','Node','Mesh','Edge','Cold Start','WAF'];

  return (
    <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto" id="infrastructure">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs font-mono font-semibold tracking-[0.2em] text-brand-aqua uppercase mb-3">Defensibility & System Architecture</p>
        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white mb-4">Vertical Integration Creates Structural Defensibility.</h2>
        <p className="text-base text-white/70 max-w-xl mx-auto leading-relaxed">
          Unlike single-layer platforms, Starrgu operates across intelligence, distribution, monetization, and intellectual property — controlling the full digital value chain.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-center border-b border-white/10 mb-10 gap-4">
        <button
          onClick={() => setActiveTab('compare')}
          className={`text-sm px-5 py-3 border-b-2 transition-all duration-300 font-medium ${activeTab === 'compare' ? 'text-white border-brand-blue' : 'text-white/50 border-transparent hover:text-white/80'}`}
        >
          Architecture Comparison
        </button>
        <button
          onClick={() => setActiveTab('core')}
          className={`text-sm px-5 py-3 border-b-2 transition-all duration-300 font-medium ${activeTab === 'core' ? 'text-white border-brand-blue' : 'text-white/50 border-transparent hover:text-white/80'}`}
        >
          The Starrgu Core
        </button>
      </div>

      {/* TAB: Compare */}
      {activeTab === 'compare' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Fragmented */}
          <motion.div variants={cardAnim} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ef4444] shadow-[0_0_10px_rgba(239,68,68,0.45)]" />
              <h3 className="text-sm font-semibold text-white">Traditional Fragmented Stack</h3>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { title: '3rd-Party AI / LLM Vendor', desc: 'API dependencies, zero hardware control, potential data leakage.' },
                { title: 'Public Cloud Hosting', desc: 'Shared hypervisors, unpredictable noisy neighbors, high egress costs.' },
                { title: 'External Global CDN', desc: 'Non-optimized routing paths, high payload latencies, multi-vendor contract.' },
              ].map((item, i) => (
                <React.Fragment key={i}>
                  <div className="bg-white/[0.015] border border-white/5 rounded-xl px-4 py-3">
                    <div className="text-xs font-semibold text-white/80">{item.title}</div>
                    <div className="text-[10px] text-white/40 mt-1">{item.desc}</div>
                  </div>
                  {i < 2 && <div className="h-px border-t-2 border-dashed border-[#ef4444]/20 mx-4" />}
                </React.Fragment>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {['Noisy Neighbors', 'Egress Fees', 'Latency Amplification'].map((t) => (
                <span key={t} className="text-[9px] bg-[#ef4444]/5 border border-[#ef4444]/15 rounded-md px-2.5 py-1 text-[#ef4444] font-mono">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Starrgu Unified */}
          <motion.div variants={cardAnim} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card border-brand-blue/15">
            <div className="card-glow" style={{ '--card-accent': '#0222F1' } as React.CSSProperties} />
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-status-pulse" />
              <h3 className="text-sm font-semibold text-white">Starrgu Unified System</h3>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-gradient-to-br from-brand-blue/5 to-transparent border border-brand-blue/15 rounded-xl px-4 py-3">
                <div className="text-xs font-semibold text-white mb-2">Infrastructure & Intelligence Control</div>
                <div className="text-[10px] text-white/50">Owned operating systems, AI engines, and data layers powering creation, automation, and analytics.</div>
              </div>
              <div className="h-px border-t-2 border-solid border-brand-blue/15 mx-4" />
              <div className="bg-gradient-to-br from-brand-aqua/5 to-transparent border border-brand-aqua/15 rounded-xl px-4 py-3">
                <div className="text-xs font-semibold text-white mb-2">Owned Distribution Channels</div>
                <div className="text-[10px] text-white/50">Proprietary streaming, competitive entertainment, and social platforms. Audience access is direct, not rented.</div>
              </div>
              <div className="h-px border-t-2 border-solid border-brand-aqua/15 mx-4" />
              <div className="bg-gradient-to-br from-brand-gold/5 to-transparent border border-brand-gold/15 rounded-xl px-4 py-3">
                <div className="text-xs font-semibold text-white mb-2">Monetization Architecture</div>
                <div className="text-[10px] text-white/50">Revenue systems across subscriptions, competitions, SaaS, and digital transactions — designed and processed in-house.</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {['IP & Data Ownership', 'Full Value Chain', 'Sub-12ms p99'].map((t) => (
                <span key={t} className="text-[9px] bg-[#22c55e]/5 border border-[#22c55e]/15 rounded-md px-2.5 py-1 text-[#22c55e] font-mono">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* TAB: Starrgu Core */}
      {activeTab === 'core' && (
        <div>
          {/* Core Systems Grid */}
          <div ref={concRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {coreSystems.map((system, i) => (
              <motion.div
                key={system.title}
                custom={i}
                variants={cardAnim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="glass-card hover:-translate-y-2 group"
              >
                <div className="card-glow" style={{ '--card-accent': system.accent } as React.CSSProperties} />
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80">
                    <system.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-white leading-snug">{system.title}</h3>
                </div>
                <p className="text-xs text-white/50 leading-relaxed">{system.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Scale Metrics */}
          <motion.div variants={cardAnim} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card text-center py-10 px-8 mb-8 relative overflow-hidden">
            <div className="card-glow" style={{ '--card-accent': '#27E2D8' } as React.CSSProperties} />
            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter mb-2">{concurrency.toLocaleString()}</div>
            <div className="text-sm text-white/40 mb-8">concurrent user sessions sustained globally</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
              <div className="bg-gradient-to-b from-brand-blue/5 to-transparent border border-brand-blue/10 rounded-2xl p-5">
                <div className="text-lg font-bold text-brand-blue">12ms</div>
                <div className="text-[9px] text-white/40 mt-1 uppercase tracking-wider">p99 Core Latency</div>
              </div>
              <div className="bg-gradient-to-b from-brand-aqua/5 to-transparent border border-brand-aqua/10 rounded-2xl p-5">
                <div className="text-lg font-bold text-brand-aqua">99.997%</div>
                <div className="text-[9px] text-white/40 mt-1 uppercase tracking-wider">SLA Availability</div>
              </div>
              <div className="bg-gradient-to-b from-brand-gold/5 to-transparent border border-brand-gold/10 rounded-2xl p-5">
                <div className="text-lg font-bold text-brand-gold">0</div>
                <div className="text-[9px] text-white/40 mt-1 uppercase tracking-wider">Cascading Failures</div>
              </div>
            </div>
          </motion.div>

          {/* Modular SaaS Framework */}
          <motion.div ref={svcRef} variants={cardAnim} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-brand-aqua/10 border border-brand-aqua/20 flex items-center justify-center text-brand-aqua">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Modular SaaS Microservices Framework</h3>
                <p className="text-[10px] text-white/40 mt-0.5">Composable, API-first architecture enabling rapid deployment of new products.</p>
              </div>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2 mb-6">
              {svcs.map((name, i) => (
                <div key={i} className="bg-white/[0.01] border border-white/[0.04] rounded-lg p-1.5 text-center transition-all duration-200 hover:scale-105 hover:border-white/10 cursor-default">
                  <div className="text-[7px] sm:text-[8px] text-white/60 leading-tight truncate" title={name}>{name}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {[
                { val: svcCount, label: 'Active Microservices', color: 'text-white' },
                { val: '99.997%', label: 'SLA Uptime', color: 'text-[#22c55e]' },
                { val: '<2min', label: 'Zero-Downtime Deploy', color: 'text-brand-blue' },
              ].map((m, i) => (
                <React.Fragment key={m.label}>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${m.color}`}>{m.val}</div>
                    <div className="text-[9px] text-white/40 uppercase tracking-wider mt-1">{m.label}</div>
                  </div>
                  {i < 2 && <div className="h-8 w-px bg-white/5 hidden sm:block" />}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* Governance & Compliance */}
          <motion.div variants={cardAnim} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card p-8 relative overflow-hidden">
            <div className="card-glow" style={{ '--card-accent': '#F53A0F' } as React.CSSProperties} />
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Governance & Compliance</h3>
                  <p className="text-[10px] text-white/40 mt-0.5 italic">Infrastructure without integrity is fragile.</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#22c55e] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-status-pulse" />
                UK GDPR · Global Standards Aligned
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {governanceItems.map((item) => (
                <div key={item.title} className="bg-white/[0.02] border border-white/5 rounded-xl p-4 hover:border-brand-aqua/20 transition-colors duration-300">
                  <item.icon className="w-4 h-4 text-brand-aqua mb-2.5" />
                  <div className="text-[10px] font-semibold text-white leading-snug">{item.title}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-1.5 mt-6 text-[10px] text-white/40">
              <Lock className="w-3 h-3 text-brand-blue" />
              Data never crosses regional boundaries without explicit orchestration policies
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
