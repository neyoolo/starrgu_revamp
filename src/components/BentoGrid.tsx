import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Brain, LineChart, ShieldCheck, Radio, Gamepad2, Users, Bolt, Play, CircleCheck, Fingerprint, ArrowRight } from 'lucide-react';
import { IMAGES } from '../lib/assets';

interface StatusBadgeProps {
  phase: string;
  color: 'blue' | 'orange' | 'aqua' | 'gold' | 'frost';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ phase, color }) => {
  const colorMap: Record<string, { bg: string; border: string; text: string; dot: string }> = {
    blue: { bg: 'bg-brand-blue/10', border: 'border-brand-blue/30', text: 'text-brand-blue', dot: 'bg-brand-blue' },
    orange: { bg: 'bg-brand-orange/10', border: 'border-brand-orange/30', text: 'text-brand-orange', dot: 'bg-brand-orange' },
    aqua: { bg: 'bg-brand-aqua/10', border: 'border-brand-aqua/30', text: 'text-brand-aqua', dot: 'bg-brand-aqua' },
    gold: { bg: 'bg-brand-gold/10', border: 'border-brand-gold/30', text: 'text-brand-gold', dot: 'bg-brand-gold' },
    frost: { bg: 'bg-white/[0.06]', border: 'border-white/15', text: 'text-white/70', dot: 'bg-white/60' },
  };
  const c = colorMap[color];

  return (
    <span className={`inline-flex items-center gap-1.5 text-[9px] font-mono ${c.text} border ${c.border} ${c.bg} px-2 py-0.5 rounded-full`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} animate-status-pulse`} />
      {phase}
    </span>
  );
};

interface CapabilityItemProps {
  children: React.ReactNode;
}

const CapabilityItem: React.FC<CapabilityItemProps> = ({ children }) => (
  <div className="flex items-center gap-2 text-[10px] text-white/60 leading-relaxed">
    <span className="w-1 h-1 rounded-full bg-brand-aqua flex-shrink-0" />
    {children}
  </div>
);

export const BentoGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isContainerInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Mouse tilt tracking state for each card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mx', `${x}px`);
    card.style.setProperty('--my', `${y}px`);
  };

  // 1. Ayeeva AI typing and progress simulation
  const [terminalText, setTerminalText] = useState('');
  const [progress, setProgress] = useState(0);
  const termPrompt = 'Generate 4K cinematic showcase with volumetric lighting and shallow depth-of-field...';
  const ayeevaRef = useRef<HTMLDivElement>(null);
  const isAyeevaVisible = useInView(ayeevaRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isAyeevaVisible) return;

    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= termPrompt.length) {
        setTerminalText(termPrompt.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);

    const progressTimeout = setTimeout(() => {
      const end = 73;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (time: number) => {
        const elapsed = time - startTime;
        const p = Math.min(elapsed / duration, 1);
        const easedP = 1 - Math.pow(1 - p, 3);
        setProgress(Math.round(easedP * end));
        if (p < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, 800);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(progressTimeout);
    };
  }, [isAyeevaVisible]);

  // 2. ToronQ AI sparkline visibility
  const toronqRef = useRef<HTMLDivElement>(null);
  const isToronqVisible = useInView(toronqRef, { once: true, amount: 0.3 });

  // 3. Starrgu Stream Video state
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  // Stagger variants
  const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(3px)' },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        delay: custom * 0.1,
        ease: smoothEase,
      },
    }),
  };

  return (
    <section ref={containerRef} className="relative z-10 px-6 py-20 max-w-7xl mx-auto" id="ecosystem">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs font-mono font-semibold tracking-[0.2em] text-brand-aqua uppercase mb-3">
          Product Ecosystem
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white mb-4">
          Starrgu Platforms. One Integrated Digital Architecture.
        </h2>
        <p className="text-base text-white/70 max-w-xl mx-auto leading-relaxed">
          Six platforms sharing a unified intelligence layer, monetization fabric, and owned distribution rail.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[minmax(280px,auto)]">

        {/* 1. Ayeeva AI (Wide Card) */}
        <motion.article
          ref={ayeevaRef}
          custom={0}
          variants={cardVariants}
          initial="hidden"
          animate={isContainerInView ? "visible" : "hidden"}
          onMouseMove={handleMouseMove}
          className="glass-card md:col-span-2 hover:-translate-y-2 group"
          style={{ '--card-accent': '#0222F1' } as React.CSSProperties}
        >
          <div className="card-glow" />

          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Ayeeva</h3>
                <p className="text-[10px] text-white/50">AI-Native Creator Operating System</p>
              </div>
            </div>
            <StatusBadge phase="Strategic Platform · Development Phase" color="blue" />
          </div>

          {/* Interactive Live Terminal */}
          <div className="bg-black/60 border border-white/5 rounded-xl p-4 my-3 font-mono text-[11px] min-h-[130px] flex flex-col justify-between shadow-inner">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
              <span className="w-2 h-2 rounded-full bg-[#eab308]" />
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
              <span className="text-[9px] text-white/30 ml-2 font-mono">ayeeva-terminal</span>
            </div>

            <div className="text-white/40 mb-1">
              <span className="text-brand-blue">~/creator</span> $
            </div>

            <div className="text-white/80 flex-1 leading-relaxed min-h-[44px]">
              <span className={terminalText.length < termPrompt.length ? 'cursor-blink' : ''}>
                {terminalText}
              </span>
            </div>

            <div className="mt-3">
              <div className="flex justify-between items-center text-[10px] mb-1.5">
                <span className="text-white/40">Rendering cinematic sequence...</span>
                <span className="text-brand-aqua font-semibold">{progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/[0.03] rounded-full overflow-hidden border border-white/5">
                <div
                  className="progress-fill h-full bg-gradient-to-r from-brand-blue to-brand-aqua rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          <p className="text-xs text-white/60 leading-relaxed mb-4">
            Modular AI operating system designed to unify the creator lifecycle, from ideation to monetization, under one intelligent infrastructure layer.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
            <CapabilityItem>AI-powered strategy & content planning</CapabilityItem>
            <CapabilityItem>Generative media (scripts, voice, image, video)</CapabilityItem>
            <CapabilityItem>Publishing automation & analytics</CapabilityItem>
            <CapabilityItem>Monetization intelligence & performance tracking</CapabilityItem>
            <CapabilityItem>Multi-market SaaS deployment model</CapabilityItem>
          </div>

          <div className="relative mt-2 rounded-xl overflow-hidden border border-white/5 bg-black/30 aspect-[2.1] max-h-[160px]">
            <img
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-102"
              src={IMAGES.starrgu20}
              alt="Ayeeva AI creator workstation preview"
              loading="lazy"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="card-tag tag-blue">Creator OS</span>
            <span className="text-[10px] text-white/40 italic">Positioning: Flagship Creator OS infrastructure</span>
          </div>
        </motion.article>

        {/* 2. ToronQ AI */}
        <motion.article
          ref={toronqRef}
          custom={1}
          variants={cardVariants}
          initial="hidden"
          animate={isContainerInView ? "visible" : "hidden"}
          onMouseMove={handleMouseMove}
          className="glass-card hover:-translate-y-2 group"
          style={{ '--card-accent': '#F53A0F' } as React.CSSProperties}
        >
          <div className="card-glow" />

          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                <LineChart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">ToronQ AI</h3>
                <p className="text-[10px] text-white/50">Enterprise-Grade Reputation Intelligence</p>
              </div>
            </div>
            <StatusBadge phase="Active Development · Enterprise Launch" color="orange" />
          </div>

          <p className="text-xs text-white/60 leading-relaxed mb-3">
            AI-powered review automation and SEO amplification platform built for global local-service markets.
          </p>

          <div className="relative rounded-xl overflow-hidden border border-white/5 bg-black/20 aspect-[1.8]">
            <img
              className="w-full h-full object-cover opacity-80"
              src={IMAGES.stt5}
              alt="ToronQ AI enterprise reputation intelligence preview"
              loading="lazy"
            />
          </div>

          {/* Sparkline Graph */}
          <div className={`w-full py-1 ${isToronqVisible ? 'sparkline-revealed' : ''}`}>
            <svg className="w-full h-14" viewBox="0 0 200 55" fill="none" preserveAspectRatio="none">
              <path
                className="sparkline-path"
                d="M0,48 Q15,44 30,38 T60,28 T90,18 T120,12 T150,7 T180,4 T200,2"
                stroke="var(--brand-orange)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M0,48 Q15,44 30,38 T60,28 T90,18 T120,12 T150,7 T180,4 T200,2 L200,55 L0,55 Z"
                fill="url(#orangeG)"
                opacity="0.15"
              />
              <defs>
                <linearGradient id="orangeG" x1="0" y1="0" x2="0" y2="55">
                  <stop offset="0%" stopColor="var(--brand-orange)" />
                  <stop offset="100%" stopColor="var(--brand-orange)" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Reputation stats grid */}
          <div className="grid grid-cols-3 gap-2 text-center mb-3">
            <div className="bg-white/[0.02] border border-white/5 rounded-lg py-2.5">
              <div className="text-[13px] font-bold text-[#22c55e] font-mono">+340%</div>
              <div className="text-[9px] text-white/40 uppercase tracking-wider mt-0.5">SEO Visibility</div>
            </div>
            <div className="bg-white/[0.02] border border-white/5 rounded-lg py-2.5">
              <div className="text-[13px] font-bold text-white font-mono">94</div>
              <div className="text-[9px] text-white/40 uppercase tracking-wider mt-0.5">Auth Score</div>
            </div>
            <div className="bg-white/[0.02] border border-white/5 rounded-lg py-2.5">
              <div className="text-[13px] font-bold text-[#22c55e] font-mono">+12%</div>
              <div className="text-[9px] text-white/40 uppercase tracking-wider mt-0.5">Sentiment</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {['Local Service Providers', 'Hospitality', 'Agencies', 'Enterprise'].map((m) => (
              <span key={m} className="text-[8px] font-mono text-white/50 bg-white/[0.02] border border-white/5 rounded-md px-2 py-0.5">
                {m}
              </span>
            ))}
          </div>

          <span className="card-tag tag-orange mt-auto self-start">Reputation Score</span>
        </motion.article>

        {/* 3. Nexus Draws */}
        <motion.article
          custom={2}
          variants={cardVariants}
          initial="hidden"
          animate={isContainerInView ? "visible" : "hidden"}
          onMouseMove={handleMouseMove}
          className="glass-card hover:-translate-y-2 group"
          style={{ '--card-accent': '#27E2D8' } as React.CSSProperties}
        >
          <div className="card-glow" />

          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-aqua/10 border border-brand-aqua/20 flex items-center justify-center text-brand-aqua">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Nexus Draws</h3>
                <p className="text-[10px] text-white/50">Skill-Based Competitive Entertainment</p>
              </div>
            </div>
            <StatusBadge phase="Active Development · Launch Phase" color="aqua" />
          </div>

          <p className="text-xs text-white/60 leading-relaxed mb-3">
            Premium, compliance-first digital competition ecosystem designed to operate transparently across regulated markets.
          </p>

          <div className="relative rounded-xl overflow-hidden border border-white/5 bg-black/20 aspect-[1.8] mb-3">
            <img
              className="w-full h-full object-cover opacity-80"
              src={IMAGES.stt6}
              alt="Nexus Draws verified skill-based competition preview"
              loading="lazy"
            />
          </div>

          {/* Audit Status 1 */}
          <div className="flex items-center gap-3 bg-emerald-500/[0.02] border border-emerald-500/10 rounded-xl p-3 mb-2 shadow-inner">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <CircleCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-semibold text-white">Skill-Verified Competition Mechanics</div>
              <div className="text-[9px] text-[#22c55e] font-mono mt-0.5">Deterministic, Auditable Outcome Logic</div>
            </div>
          </div>

          {/* Audit Status 2 */}
          <div className="flex items-center gap-3 bg-brand-aqua/[0.02] border border-brand-aqua/10 rounded-xl p-3 mb-3 shadow-inner">
            <div className="w-7 h-7 rounded-lg bg-brand-aqua/10 flex items-center justify-center text-brand-aqua flex-shrink-0">
              <Fingerprint className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-semibold text-white">Outside Gambling Classifications</div>
              <div className="text-[9px] text-white/40 font-mono mt-0.5">Multi-Market Compliance Architecture</div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-auto">
            <span className="card-tag tag-aqua">ZK Proof Audited</span>
            <span className="text-[9px] text-white/40 font-mono">Luxury Prize Models</span>
          </div>
        </motion.article>

        {/* 4. Starrgu Stream */}
        <motion.article
          custom={3}
          variants={cardVariants}
          initial="hidden"
          animate={isContainerInView ? "visible" : "hidden"}
          onMouseMove={handleMouseMove}
          className="glass-card hover:-translate-y-2 group"
          style={{ '--card-accent': '#FCAE04' } as React.CSSProperties}
        >
          <div className="card-glow" />

          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                <Radio className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Starrgu Stream</h3>
                <p className="text-[10px] text-white/50">Premium Streaming & Broadcast</p>
              </div>
            </div>
            <StatusBadge phase="Architecture Defined · Development" color="gold" />
          </div>

          <p className="text-xs text-white/60 leading-relaxed mb-3">
            Proprietary digital streaming ecosystem for original programming, exclusive media, and live interactive broadcasts — with full monetization ownership.
          </p>

          <div className="relative border border-white/10 rounded-xl aspect-[1.8] overflow-hidden bg-black flex items-center justify-center shadow-lg shadow-black/40 group/player">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover opacity-80"
              autoPlay
              muted
              loop
              playsInline
              poster={IMAGES.stt3}
              aria-label="Starrgu Stream live broadcast preview"
            >
              <source src={IMAGES.video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/10 to-transparent pointer-events-none" />

            <button
              onClick={togglePlay}
              className="relative z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-black/80"
              aria-label={isPlaying ? "Pause Stream" : "Play Stream"}
            >
              {isPlaying ? (
                <span className="w-2.5 h-2.5 flex justify-between items-center gap-0.5">
                  <span className="w-0.75 h-2.5 bg-white rounded-full inline-block" />
                  <span className="w-0.75 h-2.5 bg-white rounded-full inline-block" />
                </span>
              ) : (
                <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
              )}
            </button>

            <div className="absolute top-2.5 right-2.5 bg-[#ef4444] text-[#fff] text-[8px] font-bold px-2 py-0.5 rounded-full tracking-wider flex items-center gap-1 shadow-md">
              <span className="w-1 h-1 rounded-full bg-white animate-status-pulse" />
              LIVE
            </div>

            <div className="absolute bottom-2 left-2.5 right-2.5 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: ["0%", "100%"] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="h-full bg-gradient-to-r from-brand-gold to-brand-orange"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-1.5 mt-3">
            <CapabilityItem>Original & exclusive programming</CapabilityItem>
            <CapabilityItem>Live interactive broadcast systems</CapabilityItem>
            <CapabilityItem>Direct subscription & monetization control</CapabilityItem>
          </div>

          <div className="flex items-center justify-between mt-auto pt-3">
            <span className="card-tag tag-gold">Owned Distribution</span>
            <span className="text-[9px] text-white/40 font-mono flex items-center gap-1">
              <Bolt className="w-3 h-3 text-brand-aqua" />
              Global Distribution
            </span>
          </div>
        </motion.article>

        {/* 5. Starrgu Studios */}
        <motion.article
          custom={4}
          variants={cardVariants}
          initial="hidden"
          animate={isContainerInView ? "visible" : "hidden"}
          onMouseMove={handleMouseMove}
          className="glass-card hover:-translate-y-2 group"
          style={{ '--card-accent': '#F8FFFF' } as React.CSSProperties}
        >
          <div className="card-glow" />

          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Starrgu Studios</h3>
                <p className="text-[10px] text-white/50">Interactive Entertainment & IP</p>
              </div>
            </div>
            <StatusBadge phase="Strategic Framework · Development" color="frost" />
          </div>

          <p className="text-xs text-white/60 leading-relaxed mb-3">
            Scalable gaming experiences and long-term intellectual property creation across mobile, VR, and cross-platform ecosystems.
          </p>

          <div className="relative rounded-xl overflow-hidden border border-white/5 bg-black/20 aspect-[1.8] mb-3">
            <img
              className="w-full h-full object-cover opacity-80"
              src={IMAGES.stt7}
              alt="Starrgu Studios interactive entertainment production preview"
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-1 gap-y-1.5 mb-3">
            <CapabilityItem>Mobile & cross-platform game development</CapabilityItem>
            <CapabilityItem>IP-first franchise development</CapabilityItem>
            <CapabilityItem>Compliance & age-rating standards</CapabilityItem>
          </div>

          <div className="flex items-center justify-between mt-auto">
            <span className="card-tag tag-blue">IP Ownership</span>
            <span className="text-[9px] text-white/40 italic">Long-term asset creation · High-margin</span>
          </div>
        </motion.article>

        {/* 6. Starrgu Social (Full-width) */}
        <motion.article
          custom={5}
          variants={cardVariants}
          initial="hidden"
          animate={isContainerInView ? "visible" : "hidden"}
          onMouseMove={handleMouseMove}
          className="glass-card md:col-span-2 lg:col-span-3 hover:-translate-y-2 group"
          style={{ '--card-accent': '#27E2D8' } as React.CSSProperties}
        >
          <div className="card-glow" />

          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-aqua/10 border border-brand-aqua/20 flex items-center justify-center text-brand-aqua">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Starrgu Social</h3>
                <p className="text-[10px] text-white/50">Community & Social Infrastructure Layer</p>
              </div>
            </div>
            <StatusBadge phase="Ecosystem Design Phase" color="aqua" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
            <div className="lg:col-span-1">
              <p className="text-xs text-white/60 leading-relaxed">
                Community-first social infrastructure embedded across Starrgu platforms, prioritizing responsible engagement, safety tooling, and long-term digital trust.
              </p>
              <p className="text-[10px] text-white/40 italic mt-3">
                Positioning: Future ecosystem integration layer enabling owned audience relationships.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { title: 'Community-Centric Architecture', desc: 'Built for owned audience relationships' },
                { title: 'Moderation & Safety Tooling', desc: 'Responsible engagement by design' },
                { title: 'Ethical Engagement Systems', desc: 'No exploitative mechanics' },
                { title: 'Creator Empowerment', desc: 'Direct, transparent audience access' },
              ].map((item) => (
                <div key={item.title} className="bg-white/[0.02] border border-white/5 rounded-xl p-4 hover:border-brand-aqua/20 transition-colors duration-300">
                  <div className="text-[10px] font-semibold text-white mb-1.5">{item.title}</div>
                  <div className="text-[9px] text-white/40 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/5">
            <span className="card-tag tag-aqua">Social Infrastructure</span>
            <span className="text-[9px] text-white/40 font-mono flex items-center gap-1">
              Owned Audience Layer
              <ArrowRight className="w-3 h-3 text-brand-aqua" />
            </span>
          </div>
        </motion.article>

      </div>
    </section>
  );
};
