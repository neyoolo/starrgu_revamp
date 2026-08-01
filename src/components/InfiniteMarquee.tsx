import React from 'react';

const PARTNERS = [
  'Ayeeva AI',
  'ToronQ AI',
  'Nexus Draws',
  'Starrgu Stream',
  'Starrgu Studios',
  'Starrgu Social',
  'Ownership',
  'Intelligence',
  'Distribution',
  'Infrastructure',
  'IP',
  'Scale',
];

export const InfiniteMarquee: React.FC = () => {
  const listItems = [...PARTNERS, ...PARTNERS];

  return (
    <section id="partners" className="py-12 overflow-hidden relative z-10 w-full" aria-label="Starrgu ecosystem platforms">
      <div className="section-divider my-0" />

      <div className="relative py-4 flex overflow-x-hidden">
        <div className="marquee-track">
          {listItems.map((partner, index) => (
            <div key={index} className="marquee-item">
              <span className="marquee-dot" />
              {partner}
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider my-0" />
    </section>
  );
};
