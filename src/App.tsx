import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsStrip } from './components/MetricsStrip';
import { InfiniteMarquee } from './components/InfiniteMarquee';
import { BrandMediaStrip } from './components/BrandMediaStrip';
import { BentoGrid } from './components/BentoGrid';
import { InfrastructureModel } from './components/InfrastructureModel';
import { TechnicalSection } from './components/TechnicalSection';
import { AboutSection } from './components/AboutSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ContactDrawer } from './components/ContactDrawer';
import { LegalModal, type LegalPage } from './components/LegalModal';
import WhatsAppChatButton from './components/chatwithus.jsx';

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [legalPage, setLegalPage] = useState<LegalPage | null>(null);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const bar = document.getElementById('scrollProgress');
    const handleScroll = () => {
      if (!bar) return;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = h > 0 ? `${(window.scrollY / h) * 100}%` : '0%';
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    dot.setAttribute('aria-hidden', 'true');
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    ring.setAttribute('aria-hidden', 'true');
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let dx = 0, dy = 0, rx = 0, ry = 0, mx = 0, my = 0;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    document.addEventListener('mousemove', onMouseMove);

    const loop = () => {
      dx += (mx - dx) * 0.18;
      dy += (my - dy) * 0.18;
      rx += (mx - rx) * 0.09;
      ry += (my - ry) * 0.09;
      dot.style.left = `${dx}px`;
      dot.style.top = `${dy}px`;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      animId = requestAnimationFrame(loop);
    };
    loop();

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], input, select, textarea');
      document.body.classList.toggle('cursor-hover', !!interactive);
    };
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animId);
      dot.remove();
      ring.remove();
    };
  }, []);

  return (
    <>
      <div id="scrollProgress" aria-hidden="true" />

      <svg style={{ position: 'fixed', width: 0, height: 0 }} aria-hidden="true">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves={4} stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div className="noise" style={{ filter: 'url(#noiseFilter)' }} aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />

      <div className="void-canvas" aria-hidden="true">
        <div className="ambient-orb" />
        <div className="ambient-orb" />
        <div className="ambient-orb" />
        <div className="ambient-orb" />
      </div>

      <Navbar onOpenDrawer={() => setDrawerOpen(true)} />

      <main className="relative z-[2]">
        <Hero onExploreClick={() => setDrawerOpen(true)} />
        <MetricsStrip />
        <InfiniteMarquee />
        <BrandMediaStrip />
        <BentoGrid />
        <InfrastructureModel />
        <TechnicalSection />
        <AboutSection />
        <CTASection onOpenDrawer={() => setDrawerOpen(true)} />
      </main>

      <Footer
        onOpenDrawer={() => setDrawerOpen(true)}
        onOpenLegal={setLegalPage}
      />

      <ContactDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <LegalModal page={legalPage} onClose={() => setLegalPage(null)} />
      <WhatsAppChatButton />
    </>
  );
};

export default App;
