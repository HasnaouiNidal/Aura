import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/UI';

const LuminaDental: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="bg-bgPrimary min-h-screen text-textPrimary overflow-x-hidden">

      {/* ── 1. HERO ── */}
      <section className="relative min-h-[140vh] bg-bgPrimary border-b border-textPrimary/[0.02] overflow-hidden">
        <div className="absolute top-[8%] -right-10 text-[10rem] md:text-[24rem] font-serif leading-none tracking-tighter text-textPrimary/[0.012] pointer-events-none select-none z-0 whitespace-nowrap rotate-2">Lumina</div>
        <div className="absolute top-[20%] right-[-6%] w-[80%] md:w-[58%] h-[55vh] z-0 opacity-30 mix-blend-luminosity">
          <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1600" alt="" className="w-full h-full object-cover filter blur-[3px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-bgPrimary via-bgPrimary/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-bgPrimary/70 via-transparent to-bgPrimary" />
        </div>
        <div className="container mx-auto px-6 relative z-20 h-[120vh] flex flex-col justify-end pb-32">
          <FadeIn>
            <div className="relative">
              <div className="absolute -top-16 left-6 md:left-20 text-[5rem] md:text-[11rem] font-serif italic text-textPrimary/[0.04] pointer-events-none select-none leading-none hidden sm:block">Dental</div>
              <div className="flex items-center gap-4 mb-16 opacity-70 ml-4 md:ml-12 relative z-30">
                <span className="w-16 h-[1px] bg-textPrimary/50" />
                <span className="text-[9px] uppercase tracking-[0.4em] font-light">02 / Trust Architecture</span>
              </div>
              <h1 className="text-[clamp(5rem,13vw,11rem)] font-serif tracking-tighter leading-[0.78] mb-20 relative -ml-2 md:-ml-8 z-30">
                <span className="block text-textPrimary">Lumina</span>
                <span className="block text-textSecondary/30 italic ml-10 md:ml-40">Dental.</span>
              </h1>
              <div className="flex flex-col md:flex-row items-start md:items-end gap-16 md:gap-0 max-w-6xl ml-4 md:ml-24 relative z-30">
                <div className="w-full md:w-1/2 relative">
                  <div className="absolute -left-6 top-2 w-[1px] h-16 bg-textPrimary/20 hidden md:block" />
                  <p className="text-textSecondary/90 text-[16px] md:text-[20px] font-light max-w-md leading-[2]">The illusion of effortless care. We engineered calm before the first appointment was ever made.</p>
                </div>
                <div className="w-full md:w-1/2 flex md:justify-end pr-0 md:pr-12">
                  <div className="inline-flex flex-col gap-4">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-textSecondary/50 md:text-right">Patient Trust System</p>
                    <p className="text-[14px] font-serif italic text-textPrimary/70">Private Practice — Casablanca</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 2. META ── */}
      <section className="py-24 md:py-32 border-b border-textPrimary/[0.02] bg-bgSecondary/40">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-end gap-16 md:gap-32 max-w-6xl mx-auto">
              {[{ label: 'Industry', value: 'Dental & Wellness' }, { label: 'Location', value: 'Casablanca, Morocco' }, { label: 'Scope', value: 'Patient Trust System' }].map((item, i) => (
                <div key={i} className={`space-y-4 ${i === 1 ? 'md:-translate-y-6' : ''} ${i === 2 ? 'md:translate-y-3' : ''}`}>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-textSecondary/50 border-l border-textPrimary/20 pl-3">{item.label}</p>
                  <p className="text-textPrimary font-light text-[15px]">{item.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 3. THE PROBLEM ── */}
      <section className="py-48 md:py-64 relative overflow-hidden bg-bgSecondary">
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="mb-32">
            <h2 className="text-[clamp(3.5rem,8vw,7rem)] font-serif tracking-tighter leading-[0.9] max-w-4xl ml-0 md:ml-12 text-textPrimary relative">
              <span className="absolute -left-6 md:-left-16 top-10 text-[10px] uppercase tracking-[0.3em] text-textSecondary/40 font-sans transform -rotate-90 origin-bottom-right hidden md:block">Anxiety</span>
              Patients were afraid<br />
              <span className="italic text-textSecondary/40 ml-10 md:ml-28 block mt-2">before they arrived.</span>
            </h2>
          </FadeIn>
          <div className="flex flex-col md:flex-row items-start justify-end gap-16 md:gap-24 max-w-6xl mx-auto mt-20 md:mt-32">
            <div className="w-full md:w-1/2">
              <FadeIn delay={100}>
                <div className="text-[22px] md:text-[28px] font-serif font-light text-textPrimary leading-[1.5] pl-6 md:pl-10 border-l border-textPrimary/15">
                  "The digital experience communicated clinical cold.<br />
                  <span className="italic text-textSecondary/60">The patients felt it before they walked in."</span>
                </div>
              </FadeIn>
            </div>
            <div className="w-full md:w-[45%] md:mt-10">
              <FadeIn delay={200}>
                <div className="flex flex-col gap-12">
                  {[
                    { n: '01 / The Cold Wall', t: 'A generic website communicated nothing but transactions. Patients arrived uncertain, guarded, already unsure.' },
                    { n: '02 / The Invisible Hesitation', t: 'High-quality care was hidden behind a stressful booking process. Intent vanished before the call was ever made.' },
                    { n: '03 / The Missed Signal', t: 'Potential patients quietly left, choosing a competitor whose digital presence simply felt safer.' },
                  ].map((item, i) => (
                    <div key={i} className={`relative pl-6 ${i === 1 ? 'md:ml-10' : ''} ${i === 2 ? 'md:ml-20' : ''}`}>
                      <div className="absolute left-0 top-2 w-[1px] h-full bg-gradient-to-b from-textPrimary/40 to-transparent" style={{ opacity: 1 - i * 0.25 }} />
                      <p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/50 mb-3">{item.n}</p>
                      <p className="text-textPrimary/85 text-[17px] font-light leading-[1.7]">{item.t}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. TRUST ARCHITECTURE ── */}
      <section className="py-48 md:py-64 bg-bgPrimary border-y border-textPrimary/[0.02] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="mb-32 md:mb-48 md:text-right max-w-5xl mx-auto">
            <h2 className="text-[clamp(3.5rem,7vw,6rem)] font-serif tracking-tighter leading-[0.9] text-textPrimary">
              Designing for<br />
              <span className="italic text-textSecondary/40 pr-8 md:pr-20 block mt-2">the patient's fear.</span>
            </h2>
          </FadeIn>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-textPrimary/10 to-transparent z-0" />
            {[
              { side: 'left', phase: 'Phase 01', title: 'The Language of Calm', body: 'Every word was rewritten. Clinical language replaced with warmth. Not "Book an appointment" but "Start your care." The tone shift alone reduced perceived hesitation before the page even loaded.', aside: <p className="font-serif text-xl md:text-2xl italic text-textPrimary/70 border-l border-textPrimary/15 pl-6 py-2">"We care before you arrive."</p> },
              { side: 'right', phase: 'Phase 02', title: 'Cognitive Softening', body: 'Macro-whitespace was increased dramatically. Information was broken into soft, digestible moments. No overwhelming service lists. No clinical pricing tables. Calm, sequential trust signals guiding the patient naturally forward.', aside: <div className="flex flex-col gap-4 opacity-50 w-36"><div className="w-full h-[1px] bg-textPrimary/40"/><div className="w-2/3 h-[1px] bg-textPrimary/25"/><div className="w-1/3 h-[1px] bg-textPrimary/15"/></div> },
              { side: 'left', phase: 'Phase 03', title: 'Mobile-First Trust', body: 'Over 80% of patient searches happen on a phone, often in a moment of mild anxiety. The entire system was rebuilt around a single thumb. Large tap targets. Instant WhatsApp. No friction between hesitation and action.', aside: <div className="relative w-20 h-36 border border-textPrimary/15 flex flex-col justify-between p-3 bg-surface/5 rounded-sm"><div className="w-full h-[45%] bg-textPrimary/8 rounded-sm"/><div className="w-full h-1 bg-textPrimary/15 rounded-full"/><div className="w-2/3 mx-auto h-3 bg-textPrimary/10 rounded-sm"/></div> },
            ].map((item, i) => (
              <div key={i} className={`relative z-10 flex flex-col ${item.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-start md:items-center justify-between gap-12 md:gap-24 ${i < 2 ? 'mb-32 md:mb-48' : ''}`}>
                <div className={`w-full md:w-1/2 ${item.side === 'left' ? 'md:text-right pl-16 md:pl-0 pr-0 md:pr-16' : 'pl-16 md:pl-16'} relative`}>
                  <div className={`absolute top-2 ${item.side === 'left' ? 'left-[21px] md:left-auto md:-right-[3px] md:translate-x-1/2' : 'left-[21px] md:-left-[3px] md:-translate-x-1/2'} w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-textPrimary shadow-[0_0_10px_rgba(var(--app-textPrimary),0.7)]' : 'bg-bgPrimary border border-textPrimary/50'} z-20`} />
                  <FadeIn><p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/50 mb-4">{item.phase}</p><h3 className="text-3xl md:text-4xl font-serif text-textPrimary mb-6 tracking-tight">{item.title}</h3><p className="text-[15px] font-light text-textSecondary/75 leading-[2.2]">{item.body}</p></FadeIn>
                </div>
                <div className={`w-full md:w-1/2 ${item.side === 'left' ? 'pl-16 md:pl-16' : 'pl-16 md:pl-0 md:pr-16 flex md:justify-end'}`}><FadeIn delay={150}>{item.aside}</FadeIn></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. VISUAL SYSTEM STORYTELLING ── */}
      <section className="py-48 md:py-64 bg-bgSecondary relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <FadeIn className="mb-32 md:ml-12">
            <p className="text-[10px] uppercase tracking-[0.4em] text-textSecondary/50 mb-8 border-l border-textPrimary/20 pl-4">The Patient Journey</p>
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-serif tracking-tighter leading-[0.9] text-textPrimary">
              From hesitation<br />
              <span className="italic text-textSecondary/40 block mt-2 ml-10 md:ml-24">to booked.</span>
            </h2>
          </FadeIn>

          {/* Journey visual system */}
          <div className="relative max-w-5xl mx-auto mt-32">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-textPrimary/10 to-transparent z-0 hidden md:block" />
            <div className="flex flex-col gap-24 md:gap-32">
              {[
                { n: '01', label: 'Emotional First Impression', desc: 'Warm photography. Breathing whitespace. A single calm headline. Anxiety begins to dissolve.', align: 'left' },
                { n: '02', label: 'Trust Signal Cascade', desc: 'Team photography. Patient testimonials woven into content. Certifications presented elegantly, not clinically.', align: 'right' },
                { n: '03', label: 'Frictionless WhatsApp Capture', desc: 'One tap. Pre-filled message. "Hello, I would like to schedule a consultation." The barrier dissolves instantly.', align: 'left' },
                { n: '04', label: 'Calm Appointment Confirmation', desc: 'Warm, human response. Clear next steps. The patient feels guided, not processed. Trust is complete.', align: 'right' },
              ].map((step, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className={`relative flex flex-col ${step.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
                    <div className={`w-full md:w-5/12 ${step.align === 'right' ? 'md:text-left' : 'md:text-right'}`}>
                      <p className="text-[9px] uppercase tracking-[0.3em] text-textSecondary/50 mb-3">{step.n}</p>
                      <h3 className="text-2xl md:text-3xl font-serif text-textPrimary mb-4 tracking-tight">{step.label}</h3>
                      <p className="text-[14px] text-textSecondary/75 font-light leading-[1.9]">{step.desc}</p>
                    </div>
                    {/* Abstract visual node */}
                    <div className="w-8 h-8 rounded-full border border-textPrimary/20 bg-bgPrimary flex items-center justify-center z-10 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-textPrimary/40" />
                    </div>
                    <div className="w-full md:w-5/12">
                      <div className={`border border-textPrimary/8 bg-surface/20 p-8 ${i % 2 === 0 ? '' : 'md:mt-8'}`}>
                        {i === 0 && <div className="space-y-3"><div className="w-full h-3 bg-textPrimary/8 rounded-sm"/><div className="w-4/5 h-3 bg-textPrimary/5 rounded-sm"/><div className="w-3/5 h-3 bg-textPrimary/4 rounded-sm"/></div>}
                        {i === 1 && <div className="flex gap-4 items-start"><div className="w-10 h-10 rounded-full bg-textPrimary/8 flex-shrink-0"/><div className="space-y-2 flex-1"><div className="w-full h-2.5 bg-textPrimary/10 rounded-sm"/><div className="w-3/4 h-2.5 bg-textPrimary/7 rounded-sm"/></div></div>}
                        {i === 2 && <div className="flex items-center gap-4"><div className="w-10 h-10 rounded-full bg-green-900/30 border border-green-800/20 flex items-center justify-center flex-shrink-0"><div className="w-3 h-3 rounded-full bg-green-600/40"/></div><p className="text-[12px] text-textSecondary/60 font-light italic">"Hello, I would like to schedule a consultation."</p></div>}
                        {i === 3 && <div className="space-y-3"><div className="w-3/4 h-2.5 bg-textPrimary/10 rounded-sm"/><div className="w-full h-8 bg-textPrimary/8 rounded-sm mt-4 flex items-center px-4"><div className="w-2 h-2 rounded-full bg-green-600/40 mr-3"/><div className="w-1/2 h-2 bg-textPrimary/15 rounded-sm"/></div></div>}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. DARK IMMERSIVE SECTION ── */}
      <section className="py-48 md:py-80 bg-[#0B0C0E] relative overflow-hidden border-y border-white/[0.02]">
        {/* Grain texture */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
        {/* Soft atmospheric glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(200,215,230,0.04)_0%,transparent_65%)] pointer-events-none z-0" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <FadeIn className="mb-32 text-center">
            <h2 className="text-[clamp(4rem,10vw,9rem)] font-serif tracking-tighter leading-[0.85] text-white/80">
              Warmth,<br />
              <span className="italic text-white/22 block mt-4 pl-8 md:pl-28">precision.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="w-full h-[500px] md:h-[700px] relative overflow-hidden border border-white/[0.05] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.9)]">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1600" alt="Lumina Dental" className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.12] saturate-[0.5]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-transparent opacity-90 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0E]/60 via-transparent to-transparent pointer-events-none" />
              {/* Layered depth — floating caption */}
              <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16">
                <p className="text-white/25 text-[9px] uppercase tracking-[0.4em] mb-3">Visual Direction</p>
                <p className="text-white/50 font-serif italic text-2xl md:text-3xl leading-[1.2]">Calm before<br />the chair.</p>
              </div>
              {/* Subtle right-side ambient glow */}
              <div className="absolute top-1/3 right-0 w-1/3 h-1/2 bg-[radial-gradient(circle_at_right,rgba(200,215,240,0.05)_0%,transparent_70%)] pointer-events-none" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 7. OUTCOME ── */}
      <section className="py-48 md:py-64 bg-bgPrimary">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <FadeIn>
            <div className="w-px h-32 bg-gradient-to-b from-transparent to-textPrimary/20 mx-auto mb-16" />
            <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-serif font-light leading-[1.2] mb-16 text-textPrimary">
              "Patients now arrive calm.<br />
              <span className="italic text-textSecondary/45">{`The system earned their trust before the door opened."`}</span>
            </h2>
            <div className="flex flex-col md:flex-row items-start justify-center gap-16 md:gap-32 mt-32 border-t border-textPrimary/8 pt-16">
              {[
                { label: 'Appointment inquiries', note: 'Measurably increased within weeks of launch' },
                { label: 'Trust perception', note: 'Premium positioning confirmed by patient feedback' },
                { label: 'Booking friction', note: 'Reduced to a single WhatsApp tap' },
              ].map((r, i) => (
                <div key={i} className={`text-left ${i === 1 ? 'md:mt-8' : ''}`}>
                  <p className="text-textPrimary font-serif text-[17px] mb-3">{r.label}</p>
                  <p className="text-textSecondary/60 text-[12px] font-light leading-[1.8] max-w-[180px]">{r.note}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 8. CTA ── */}
      <section className="relative py-48 md:py-64 overflow-hidden bg-bgSecondary text-center border-t border-textPrimary/[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(var(--app-textPrimary),0.02)_0%,transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <p className="text-[9px] uppercase tracking-[0.4em] text-textSecondary/50 mb-12">The Next Architecture</p>
            <h2 className="text-[clamp(4rem,9vw,8rem)] font-serif tracking-tighter leading-[0.9] mb-20 text-textPrimary">
              Build<br />
              <span className="italic font-light text-textSecondary/35 ml-12 md:ml-32">trust.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mt-12">
              <Link to="/catalog" className="text-[10px] uppercase tracking-[0.2em] font-light text-textSecondary/60 hover:text-textPrimary transition-colors duration-500">View all systems</Link>
              <div className="relative inline-block group w-full sm:w-auto">
                <div className="absolute inset-0 border border-textPrimary/[0.1] bg-surface/20 backdrop-blur-md rounded-sm transform transition-all duration-1000 group-hover:scale-105 group-hover:bg-surface/40 pointer-events-none" />
                <Link to="/contact" className="relative block sm:inline-block text-center text-textPrimary px-16 py-6 font-light tracking-[0.2em] text-[10px] uppercase rounded-sm transition-all duration-1000">Request Architecture</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
export default LuminaDental;
