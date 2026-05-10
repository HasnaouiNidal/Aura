import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/UI';

const AtelierEstates: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-bgPrimary min-h-screen text-textPrimary overflow-x-hidden">

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[140vh] bg-bgPrimary border-b border-textPrimary/[0.02] overflow-hidden">
        <div className="absolute top-[8%] -right-16 text-[11rem] md:text-[26rem] font-serif leading-none tracking-tighter text-textPrimary/[0.012] pointer-events-none select-none z-0 whitespace-nowrap rotate-2">
          Atelier
        </div>
        <div className="absolute top-[20%] left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(var(--app-textPrimary),0.015)_0%,transparent_65%)] pointer-events-none z-0" />

        <div className="absolute top-[16%] right-[-6%] w-[80%] md:w-[58%] h-[58vh] z-0 opacity-25 mix-blend-luminosity">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600" alt="" className="w-full h-full object-cover filter blur-[3px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-bgPrimary via-bgPrimary/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-bgPrimary/70 via-transparent to-bgPrimary" />
        </div>

        <div className="container mx-auto px-6 relative z-20 h-[120vh] flex flex-col justify-end pb-32">
          <FadeIn>
            <div className="relative">
              <div className="absolute -top-16 left-6 md:left-20 text-[5rem] md:text-[11rem] font-serif italic text-textPrimary/[0.04] pointer-events-none select-none leading-none hidden sm:block">
                Estates
              </div>
              <div className="flex items-center gap-4 mb-16 opacity-60 ml-4 md:ml-12 relative z-30">
                <span className="w-16 h-[1px] bg-textPrimary/40" />
                <span className="text-[9px] uppercase tracking-[0.4em] font-light">03 / Acquisition Architecture</span>
              </div>
              <h1 className="text-[clamp(5rem,13vw,11rem)] font-serif tracking-tighter leading-[0.78] mb-20 relative -ml-2 md:-ml-8 z-30">
                <span className="block text-textPrimary">Atelier</span>
                <span className="block text-textSecondary/22 italic ml-10 md:ml-44">Estates.</span>
              </h1>
              <div className="flex flex-col md:flex-row items-start md:items-end gap-16 md:gap-0 max-w-6xl ml-4 md:ml-24 relative z-30">
                <div className="w-full md:w-1/2 relative">
                  <div className="absolute -left-6 top-2 w-[1px] h-16 bg-textPrimary/20 hidden md:block" />
                  <p className="text-textSecondary/80 text-[16px] md:text-[20px] font-light max-w-md leading-[2]">
                    Luxury begins before the first visit. We engineered desire long before the showing.
                  </p>
                </div>
                <div className="w-full md:w-1/2 flex md:justify-end pr-0 md:pr-12">
                  <div className="relative inline-flex flex-col gap-4">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-textSecondary/40 md:text-right">Property System</p>
                    <p className="text-[14px] font-serif italic text-textPrimary/60">Premium Real Estate — Marrakech</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 2. PROJECT META ───────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b border-textPrimary/[0.02] bg-bgSecondary/30">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-end gap-16 md:gap-32 max-w-6xl mx-auto">
              {[
                { label: 'Industry', value: 'Luxury Real Estate' },
                { label: 'Location', value: 'Marrakech, Morocco' },
                { label: 'Scope', value: 'Acquisition Experience' },
              ].map((item, i) => (
                <div key={i} className={`space-y-4 ${i === 1 ? 'md:-translate-y-6' : ''} ${i === 2 ? 'md:translate-y-3' : ''}`}>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-textSecondary/40 border-l border-textPrimary/20 pl-3">{item.label}</p>
                  <p className="text-textPrimary font-light text-[15px]">{item.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 3. THE PROBLEM ───────────────────────────────────────────── */}
      <section className="py-48 md:py-64 relative overflow-hidden bg-bgSecondary">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(var(--app-textPrimary),0.015)_0%,transparent_70%)] pointer-events-none -translate-y-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="mb-32">
            <h2 className="text-[clamp(3.5rem,8vw,7rem)] font-serif tracking-tighter leading-[0.9] max-w-4xl ml-0 md:ml-12 text-textPrimary">
              <span className="absolute -left-8 md:-left-16 top-10 text-[10px] uppercase tracking-[0.3em] text-textSecondary/30 font-sans transform -rotate-90 origin-bottom-right hidden md:block">Distance</span>
              Most listings show properties.<br />
              <span className="italic text-textSecondary/32 ml-10 md:ml-28 block mt-2">None sell the life inside them.</span>
            </h2>
          </FadeIn>
          <div className="flex flex-col md:flex-row items-start justify-end gap-16 md:gap-24 max-w-6xl mx-auto mt-20 md:mt-32">
            <div className="w-full md:w-1/2">
              <FadeIn delay={100}>
                <div className="text-[22px] md:text-[28px] font-serif font-light text-textPrimary leading-[1.5] pl-6 md:pl-10 border-l border-textPrimary/10">
                  "The buyer doesn't want square metres.<br />
                  <span className="italic text-textSecondary/50">They want to imagine Sunday morning in that kitchen."</span>
                </div>
              </FadeIn>
            </div>
            <div className="w-full md:w-[45%] md:mt-10">
              <FadeIn delay={200}>
                <div className="flex flex-col gap-12">
                  {[
                    { n: '01 / The Emotional Void', t: 'Generic listings communicate facts. They never evoke feeling. The buyer leaves informed but unmoved — and unmoved buyers do not act.' },
                    { n: '02 / The Cognitive Overload', t: 'Floor plans, feature lists, price tables — the digital experience mirrors a legal document rather than an aspirational life.' },
                    { n: '03 / The Trust Gap', t: 'Without atmosphere, without editorial presence, without personality, every listing feels like every other. Distinction collapses. Price becomes the only differentiator.' },
                  ].map((item, i) => (
                    <div key={i} className={`relative pl-6 ${i === 1 ? 'md:ml-10' : ''} ${i === 2 ? 'md:ml-20' : ''}`}>
                      <div className="absolute left-0 top-2 w-[1px] h-full bg-gradient-to-b from-textPrimary/40 to-transparent" style={{ opacity: 1 - i * 0.25 }} />
                      <p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/40 mb-3">{item.n}</p>
                      <p className="text-textPrimary/80 text-[17px] font-light leading-[1.7]">{item.t}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. IMMERSIVE EXPERIENCE DESIGN ───────────────────────────── */}
      <section className="py-48 md:py-64 bg-bgPrimary border-y border-textPrimary/[0.02] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="mb-32 md:mb-48 md:text-right max-w-5xl mx-auto">
            <h2 className="text-[clamp(3.5rem,7vw,6rem)] font-serif tracking-tighter leading-[0.9] text-textPrimary">
              Architecture designed<br />
              <span className="italic text-textSecondary/35 pr-8 md:pr-20 block mt-2">for emotional ownership.</span>
            </h2>
          </FadeIn>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-textPrimary/10 to-transparent z-0" />
            {[
              { side: 'left', phase: 'Phase 01', title: 'Atmosphere Before Information', body: 'The first impression is cinematic, not informational. Full-frame photography, breathing whitespace, and a single emotional headline. The property introduces itself through mood, not metrics.' },
              { side: 'right', phase: 'Phase 02', title: 'Editorial Property Storytelling', body: 'Each property is presented as a narrative. Morning light through the terrace. The silence of a private garden. The view from the master suite at dusk. We sell the experience, not the specification.' },
              { side: 'left', phase: 'Phase 03', title: 'Frictionless Private Enquiry', body: 'When emotional readiness arrives, the path to contact is invisible and instant. A discreet WhatsApp consultation request. No forms. No waiting. The relationship begins in the moment of desire.' },
            ].map((item, i) => (
              <div key={i} className={`relative z-10 flex flex-col ${item.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-start md:items-center justify-between gap-12 md:gap-24 ${i < 2 ? 'mb-32 md:mb-48' : ''}`}>
                <div className={`w-full md:w-1/2 ${item.side === 'left' ? 'md:text-right pl-16 md:pl-0 pr-0 md:pr-16' : 'pl-16 md:pl-16'} relative`}>
                  <div className={`absolute top-2 ${item.side === 'left' ? 'left-[21px] md:left-auto md:-right-[3px] md:translate-x-1/2' : 'left-[21px] md:-left-[3px] md:-translate-x-1/2'} w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-textPrimary shadow-[0_0_10px_rgba(var(--app-textPrimary),0.7)]' : 'bg-bgPrimary border border-textPrimary/50'} z-20`} />
                  <FadeIn>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/40 mb-4">{item.phase}</p>
                    <h3 className="text-3xl md:text-4xl font-serif text-textPrimary mb-6 tracking-tight">{item.title}</h3>
                    <p className="text-[14px] md:text-[15px] font-light text-textSecondary/70 leading-[2.2]">{item.body}</p>
                  </FadeIn>
                </div>
                <div className={`w-full md:w-1/2 ${item.side === 'left' ? 'pl-16 md:pl-16' : 'pl-16 md:pl-0 md:pr-16 flex md:justify-end'}`}>
                  <FadeIn delay={150}>
                    {i === 0 && <p className="font-serif text-xl md:text-2xl italic text-textPrimary/60 border-l border-textPrimary/15 pl-6 py-2">"The feeling of home before the key turns."</p>}
                    {i === 1 && <div className="flex flex-col gap-4 opacity-50 w-36"><div className="w-full h-[1px] bg-textPrimary/40"/><div className="w-2/3 h-[1px] bg-textPrimary/25"/><div className="w-1/3 h-[1px] bg-textPrimary/15"/></div>}
                    {i === 2 && <div className="relative w-20 h-36 border border-textPrimary/10 flex flex-col justify-between p-3 bg-surface/5 rounded-sm"><div className="w-full h-[45%] bg-textPrimary/5 rounded-sm"/><div className="w-full h-1 bg-textPrimary/15 rounded-full"/><div className="w-2/3 mx-auto h-3 bg-textPrimary/10 rounded-sm"/></div>}
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. LIFESTYLE PROJECTION ───────────────────────────────────── */}
      <section className="py-48 md:py-64 bg-bgSecondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(var(--app-textPrimary),0.02)_0%,transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <FadeIn className="mb-48 md:mb-64">
            <p className="text-[10px] uppercase tracking-[0.4em] text-textSecondary/40 mb-8 border-l border-textPrimary/20 pl-4">The Acquisition Pipeline</p>
            <h2 className="text-[clamp(3.5rem,7vw,6rem)] font-serif tracking-tighter leading-[0.9] text-textPrimary">
              From aspiration<br />
              <span className="italic text-textSecondary/32 block mt-2 text-right pr-8 md:pr-20">to acquired.</span>
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-32 md:gap-48 relative">
            <div className="absolute left-[24px] md:left-[40px] top-24 bottom-24 w-[1px] bg-gradient-to-b from-transparent via-textPrimary/10 to-transparent z-0 hidden md:block" />
            {[
              { n: '01', title: 'Emotional Attraction', body: 'The buyer encounters the property not as a listing, but as an atmosphere. Cinematic photography and editorial typography create an immediate, visceral feeling of desire.' },
              { n: '02', title: 'Immersive Exploration', body: 'They move through the property digitally at their own pace. No cognitive pressure. Each space is presented with its own light, its own silence, its own invitation to imagine.' },
              { n: '03', title: 'Inquiry Qualification', body: 'A discreet, beautifully designed enquiry path activates when interest crystallises. Context-aware, pre-populated, and frictionless. The buyer feels guided, not processed.' },
              { n: '04', title: 'Guided Consultation', body: 'The response is immediate and warm. A private showing is arranged with the dignity the property deserves. The digital experience has already done the qualification work.' },
              { n: '05', title: 'Premium Relationship', body: 'The transaction becomes a relationship. Follow-up communication mirrors the brand: calm, considered, and entirely without pressure. The buyer feels respected, not sold to.' },
            ].map((ch, i) => (
              <div key={i} className="relative z-10 group">
                <FadeIn delay={100} className="flex flex-col md:flex-row gap-12 md:gap-32">
                  <div className="md:w-32 flex-shrink-0 relative">
                    <div className="text-[8rem] font-serif italic text-textPrimary/[0.025] leading-none absolute -top-16 -left-12 pointer-events-none transition-transform duration-1000 group-hover:translate-x-4">{ch.n}</div>
                    <div className="w-12 h-12 rounded-full border border-textPrimary/10 flex items-center justify-center bg-bgPrimary/50 backdrop-blur-sm relative z-10 hidden md:flex">
                      <div className="w-1.5 h-1.5 rounded-full bg-textPrimary/40" />
                    </div>
                  </div>
                  <div className="md:pt-4">
                    <h3 className="text-3xl font-serif mb-6 text-textPrimary tracking-tight">{ch.title}</h3>
                    <p className="text-[15px] text-textSecondary/70 font-light leading-[2.2] max-w-xl">{ch.body}</p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CINEMATIC PROPERTY SHOWCASE ───────────────────────────── */}
      <section className="py-48 md:py-80 bg-[#0C0D0F] relative overflow-hidden border-y border-white/[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,190,170,0.03)_0%,transparent_65%)] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <FadeIn className="mb-40 text-center">
            <h2 className="text-[clamp(4rem,10vw,9rem)] font-serif tracking-tighter leading-[0.85] text-white/80">
              Space,<br />
              <span className="italic text-white/22 block mt-4 pl-12 md:pl-40">light.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="w-full h-[500px] md:h-[700px] relative overflow-hidden border border-white/[0.04] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.9)]">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600" alt="Atelier Estates" className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.08] saturate-[0.7]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0F] via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16">
                <p className="text-white/20 text-[9px] uppercase tracking-[0.4em] mb-2">Visual Direction</p>
                <p className="text-white/45 font-serif italic text-2xl">The silence of fine architecture.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 7. OUTCOME ───────────────────────────────────────────────── */}
      <section className="py-48 md:py-64 bg-bgPrimary">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <FadeIn>
            <div className="w-px h-32 bg-gradient-to-b from-transparent to-textPrimary/20 mx-auto mb-16" />
            <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-serif font-light leading-[1.2] mb-16 text-textPrimary">
              "Buyers now arrive having already decided.<br />
              <span className="italic text-textSecondary/40">The system sells before the showing begins."</span>
            </h2>
            <div className="flex flex-col md:flex-row items-start justify-center gap-16 md:gap-32 mt-32 border-t border-textPrimary/5 pt-16">
              {[
                { label: 'Inquiry quality', note: 'Buyers arrive emotionally committed, not merely curious' },
                { label: 'Premium positioning', note: 'The brand is now perceived as a lifestyle curator, not an agency' },
                { label: 'Time to enquiry', note: 'Reduced to a single, frictionless moment of desire' },
              ].map((r, i) => (
                <div key={i} className={`text-left ${i === 1 ? 'md:mt-8' : ''}`}>
                  <p className="text-textPrimary font-serif text-[17px] mb-3">{r.label}</p>
                  <p className="text-textSecondary/50 text-[12px] font-light leading-[1.8] max-w-[180px]">{r.note}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 8. FINAL CTA ─────────────────────────────────────────────── */}
      <section className="relative py-48 md:py-64 overflow-hidden bg-bgSecondary text-center border-t border-textPrimary/[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(var(--app-textPrimary),0.02)_0%,transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <p className="text-[9px] uppercase tracking-[0.4em] text-textSecondary/40 mb-12">The Next Architecture</p>
            <h2 className="text-[clamp(4rem,9vw,8rem)] font-serif tracking-tighter leading-[0.9] mb-20 text-textPrimary">
              Engineer<br />
              <span className="italic font-light text-textSecondary/32 ml-12 md:ml-40">desire.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mt-12">
              <Link to="/catalog" className="text-[10px] uppercase tracking-[0.2em] font-light text-textSecondary/50 hover:text-textPrimary transition-colors duration-500">View all systems</Link>
              <div className="relative inline-block group w-full sm:w-auto">
                <div className="absolute inset-0 border border-textPrimary/[0.1] bg-surface/20 backdrop-blur-md rounded-sm transform transition-all duration-1000 group-hover:scale-105 group-hover:bg-surface/40 pointer-events-none" />
                <Link to="/contact" className="relative block sm:inline-block text-center text-textPrimary px-16 py-6 font-light tracking-[0.2em] text-[10px] uppercase rounded-sm transition-all duration-1000">
                  Request Architecture
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};

export default AtelierEstates;
