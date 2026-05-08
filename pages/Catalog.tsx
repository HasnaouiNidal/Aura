import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Section, FadeIn, MeshBackground, Button } from '../components/UI';
import { ProjectGrid, ProjectCard } from '../components/ProjectSystem';
import { getCategoryCards, CATEGORY_META } from '../data/catalog';

const Catalog: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Extract unique filters from CATEGORY_META
  const filters = ['All', ...Array.from(new Set(Object.values(CATEGORY_META).map(m => m.tag)))];

  const allCategories = getCategoryCards();

  const visible = activeFilter === 'All'
    ? allCategories
    : allCategories.filter(c => c.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <Section className="pt-48 pb-16 relative overflow-hidden">
        {/* Subtle Background System */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          {/* Faint radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(var(--app-textPrimary),0.02)_0%,transparent_60%)]" />
          <div className="absolute top-[20%] right-[30%] w-[400px] h-[400px] bg-accentSecondary/[0.015] rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-[20%] w-[500px] h-[300px] bg-textPrimary/[0.01] rounded-full blur-[120px]" />
          
          {/* Tiny Grain Texture */}
          <div 
            className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <FadeIn delay={100}>
            {/* Asymmetrical Label */}
            <div className="flex items-center gap-4 mb-16 opacity-60 transform -rotate-1 translate-x-2">
              <span className="w-8 h-[1px] bg-textPrimary/30"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-light text-textPrimary">
                The Gallery
              </span>
              <span className="w-8 h-[1px] bg-textPrimary/30"></span>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            {/* Typography Pacing & Rhythm */}
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif tracking-tight text-textPrimary leading-[1.1] mb-10 font-light relative max-w-4xl mx-auto">
              Digital architecture<br />
              <span className="text-textSecondary/40 italic">curated for scale.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={500}>
            <p className="text-[16px] md:text-[18px] text-textSecondary/70 max-w-2xl mx-auto leading-[2] font-light tracking-wide transform translate-x-[-1%] mb-8">
              A meticulously selected collection of high-performance systems. Each architecture is engineered for precision, aesthetics, and uncompromising conversion.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Filter Pills */}
      <div className="container mx-auto px-6 mb-24 relative z-10">
        <FadeIn delay={600}>
          <div className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`relative px-5 py-2.5 rounded-sm text-[11px] uppercase tracking-[0.15em] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeFilter === f
                  ? 'text-textPrimary border border-textPrimary/20 bg-surface/30 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.1)]'
                  : 'text-textSecondary/60 border border-textPrimary/[0.03] bg-surface/10 hover:bg-surface/20 hover:text-textPrimary/90 hover:border-textPrimary/10 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.05)] font-light'
                  }`}
              >
                {/* Active indicator */}
                {activeFilter === f && (
                  <span className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-4 h-[1px] bg-textPrimary/50" />
                )}
                {f}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Grid */}
      <Section>
        <div className="container mx-auto px-6">
          <ProjectGrid>
            {visible.map((categoryCard, i) => (
              <FadeIn key={categoryCard.id} delay={i * 80}>
                <ProjectCard
                  project={{
                    id: categoryCard.id,
                    title: categoryCard.title,
                    category: categoryCard.category,
                    description: categoryCard.description,
                    image: categoryCard.previewImage,
                    docsUrl: categoryCard.detailRoute,
                    demoUrl: categoryCard.liveDemoRoute
                  }}
                />
              </FadeIn>
            ))}
          </ProjectGrid>
        </div>
      </Section>

      {/* CTA */}
      <Section className="relative bg-bgPrimary py-40 overflow-hidden border-t border-textPrimary/[0.03] text-center">
        {/* Subtle Atmospheric Lighting */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(var(--app-textPrimary),0.015)_0%,transparent_60%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-10 opacity-60">
              <span className="w-8 h-[1px] bg-textPrimary/20"></span>
              <p className="text-[10px] uppercase tracking-[0.25em] text-textPrimary font-light">An Open Invitation</p>
              <span className="w-8 h-[1px] bg-textPrimary/20"></span>
            </div>
            
            <h2 className="text-4xl lg:text-[3.25rem] font-serif font-light tracking-tight mb-8 leading-tight text-textPrimary">
              Not finding quite<br />
              <span className="text-textSecondary/50 italic">what you're looking for?</span>
            </h2>
            
            <p className="text-[16px] text-textSecondary/70 mb-14 max-w-xl mx-auto font-light leading-[2]">
              The gallery above represents a fraction of what's possible. Whether you have a clear blueprint in mind or just an early concept, I'd be happy to sit down and discuss how we can architect a system specifically for your needs.
            </p>
            
            <div className="relative inline-block group">
              {/* Elegant hover container */}
              <div className="absolute inset-0 border border-textPrimary/[0.1] bg-surface/20 backdrop-blur-md rounded-sm transform transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04] group-hover:bg-surface/40 pointer-events-none" />
              <Link 
                to="/contact" 
                className="relative inline-block text-textPrimary px-12 py-5 font-light tracking-widest text-[11px] uppercase rounded-sm transition-all duration-1000"
              >
                Let's Talk About It
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
};

export default Catalog;