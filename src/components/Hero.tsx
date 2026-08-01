import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, type Variants } from 'framer-motion';
import { IMAGES } from '../lib/assets';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tilt animation physics via Framer Motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for tilt
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Word-reveal animation definitions
  const sentence = "We Build, Own, and Power Digital Ecosystems.";
  const words = sentence.split(" ");
  const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 25, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: smoothEase },
    },
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-28 pb-16 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left: Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 lg:col-span-7 text-left items-start"
        >
          {/* Glowing Badge */}
          <div className="badge-glow" aria-hidden="false">
            <div className="badge-glow-inner">
              <span className="badge-indicator" aria-hidden="true"></span>
              <span className="badge-text"></span>
            </div>
          </div>

          {/* Animated Headline */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl lg:text-[4.2rem] font-bold leading-[1.05] tracking-tighter text-white"
          >
            {words.map((word, i) => {
              const isHighlight = word.includes("Ecosystems.");
              return (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className={`inline-block mr-2 ${
                    isHighlight
                      ? "bg-gradient-to-r from-brand-blue via-brand-aqua to-brand-gold bg-[length:200%_200%] bg-clip-text text-transparent animate-[gradientShift_6s_ease-in-out_infinite]"
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              );
            })}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-[0.98rem] sm:text-lg leading-relaxed text-white/70 max-w-xl"
          >
            Starrgu is a UK-registered AI-native technology and media company developing and operating vertically integrated platforms across streaming, gaming, creator infrastructure, AI systems, and digital commerce — serving global markets at scale.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-4 flex-wrap mt-2"
          >
            <button onClick={onExploreClick} className="btn-primary text-white">
              Explore the Ecosystem
              <span className="ml-1 text-white">→</span>
            </button>
            <a href="#platforms" className="btn-ghost">
              View Our Platforms
            </a>
          </motion.div>

          {/* Focus Areas */}
          {/* <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.8 }}
            className="flex flex-wrap items-center gap-2 mt-3"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 mr-1">
              Focus Areas
            </span>
            {['AI Systems', 'Platform Engineering', 'Media & IP Ownership', 'Global Operations'].map((area) => (
              <span
                key={area}
                className="text-[10px] font-mono text-white/60 bg-white/[0.03] border border-white/10 rounded-full px-3 py-1"
              >
                {area}
              </span>
            ))}
          </motion.div> */}
        </motion.div>

        {/* Right: Brand Media Stack Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center items-center lg:col-span-5 perspective-1200 w-full"
        >
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative w-full max-w-[480px] aspect-[0.95] rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-4 shadow-[0_24px_70px_rgba(0,0,0,0.6)] cursor-grab active:cursor-grabbing transition-shadow duration-300 hover:shadow-[0_24px_80px_rgba(2,34,241,0.25)]"
          >
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-radial-gradient from-brand-blue/15 to-transparent blur-3xl pointer-events-none rounded-3xl -z-10" />

            {/* Live Video Loop */}
            <div className="absolute inset-4 rounded-[18px] overflow-hidden border border-white/5 bg-black">
              <video
                className="w-full h-full object-cover opacity-90 saturate-[1.05]"
                autoPlay
                muted
                loop
                playsInline
                poster={IMAGES.stt1}
                aria-label="Starrgu creator broadcast showcase"
              >
                <source src={IMAGES.video} type="video/mp4" />
              </video>
            </div>

            {/* Overlapping Floating Images */}
            {/* <div className="absolute left-6 right-6 bottom-6 grid grid-cols-2 gap-3 z-10 pointer-events-none" style={{ transform: 'translateZ(20px)' }}>
              <img
                src={IMAGES.starrgu21}
                alt="Creator OS interface preview"
                className="w-full aspect-[1.25] object-cover rounded-xl border border-white/20 shadow-2xl shadow-black/80"
              />
              <img
                src={IMAGES.stt3}
                alt="Broadcasting dashboard detail"
                className="w-full aspect-[1.25] object-cover rounded-xl border border-white/20 shadow-2xl shadow-black/80"
              />
            </div> */}

            {/* Floating Info Chips */}
            <div
              className="absolute top-8 left-8 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-black/80 backdrop-blur-md shadow-lg pointer-events-none z-20"
              style={{ transform: 'translateZ(30px)' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-status-pulse" />
              <span className="text-[10px] font-semibold text-white/80 tracking-wide uppercase">Creator OS Live</span>
            </div>

            <div
              className="absolute top-8 right-8 flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/10 bg-black/80 backdrop-blur-md shadow-lg pointer-events-none z-20 font-mono text-[9px]"
              style={{ transform: 'translateZ(30px)' }}
            >
              <span className="text-white/40 uppercase">4K</span>
              <span className="text-brand-aqua font-semibold">media pipeline</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
