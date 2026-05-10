import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/UI';

const TrustArchitecture: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="bg-bgPrimary min-h-screen text-textPrimary overflow-x-hidden">

      {/* ── 1. HERO ── */}
      <section className="relative min-h-[100vh] flex flex-col justify-end pb-32 overflow-hidden border-b border-textPrimary/[0.02]">
        <div className="absolute top-1/4 -right-10 text-[9rem] md:text-[20rem] font-serif leading-none tracking-tighter text-textPrimary/[0.012] pointer-events-none select-none rotate-3 whitespace-nowrap">Trust</div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(var(--app-textPrimary),0.02)_0%,transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="flex items-center gap-4 mb-16 opacity-60 ml-4 md:ml-12">
              <span className="w-16 h-[1px] bg-textPrimary/40" />
              <span className="text-[9px] uppercase tracking-[0.4em] font-light">Lumina Dental — System Study</span>
            </div>
            <h1 className="text-[clamp(4.5rem,11vw,10rem)] font-serif tracking-tighter leading-[0.82] mb-16 -ml-2 md:-ml-8">
              <span className="block text-textPrimary">The Trust</span>
              <span className="block italic text-textSecondary/30 ml-10 md:ml-36">Architecture.</span>
            </h1>
            <div className="max-w-xl ml-4 md:ml-24 mt-16">
              <div className="absolute -left-6 top-0 w-[1px] h-24 bg-gradient-to-b from-textPrimary/20 to-transparent hidden md:block" />
              <p className="text-textSecondary/80 text-[18px] md:text-[22px] font-light leading-[1.9]">
                How we engineered a patient acquisition system that removes fear before the first appointment is ever made.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 2. THE HIDDEN PROBLEM ── */}
      <section className="py-48 md:py-64 bg-bgSecondary relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <FadeIn className="mb-32">
            <div className="flex items-center gap-4 mb-16 opacity-60">
              <span className="w-12 h-[1px] bg-textPrimary/40" />
              <span className="text-[9px] uppercase tracking-[0.3em] font-light">The Hidden Problem</span>
            </div>
            <h2 className="text-[clamp(3rem,7vw,6rem)] font-serif tracking-tighter leading-[0.9] text-textPrimary max-w-4xl">
              The clinic had skilled dentists.<br />
              <span className="italic text-textSecondary/38 ml-8 md:ml-28 block mt-2">The patients never found out.</span>
            </h2>
          </FadeIn>
          <div className="flex flex-col md:flex-row gap-24 md:gap-48 mt-24">
            <div className="w-full md:w-1/2">
              <FadeIn delay={100}>
                <p className="text-[17px] md:text-[20px] text-textSecondary/80 font-light leading-[2] mb-16">
                  Dental anxiety is one of the most documented psychological barriers in healthcare. Studies show that up to 36% of adults avoid dental treatment due to fear — not financial cost, not inconvenience. <span className="text-textPrimary italic">Fear.</span>
                </p>
                <p className="text-[15px] text-textSecondary/70 font-light leading-[2]">
                  Most dental practices respond to this reality with the same digital experience: a list of services, a phone number, and a contact form that feels like a customs declaration. The barrier to care is never addressed. It is reinforced.
                </p>
              </FadeIn>
            </div>
            <div className="w-full md:w-1/2 md:mt-16">
              <FadeIn delay={200}>
                <div className="bg-bgPrimary border border-textPrimary/8 p-10 md:p-14 space-y-10">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/50 border-l border-textPrimary/20 pl-4">The Diagnostic</p>
                  {[
                    'Patients searching on mobile at 11pm, alone with their anxiety',
                    'A cold, clinical interface increasing rather than reducing hesitation',
                    'A contact form that asks for everything before offering any reassurance',
                    'Zero emotional signalling that this practice understands how they feel',
                    'A competitor three scrolls away with a warmer, simpler experience',
                  ].map((line, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-1 h-1 rounded-full bg-textPrimary/30 mt-3 flex-shrink-0" />
                      <p className="text-[14px] text-textSecondary/75 font-light leading-[1.8]">{line}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PSYCHOLOGY OF TRUST ── */}
      <section className="py-48 md:py-64 bg-bgPrimary border-y border-textPrimary/[0.02] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <FadeIn className="mb-48 md:text-right max-w-5xl mx-auto">
            <div className="flex items-center justify-end gap-4 mb-16 opacity-60">
              <span className="text-[9px] uppercase tracking-[0.3em] font-light">Patient Psychology</span>
              <span className="w-12 h-[1px] bg-textPrimary/40" />
            </div>
            <h2 className="text-[clamp(3rem,7vw,6rem)] font-serif tracking-tighter leading-[0.9] text-textPrimary">
              Trust is not rational.<br />
              <span className="italic text-textSecondary/38 pr-12 md:pr-28 block mt-2">It is emotional.</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mt-16 max-w-5xl mx-auto">
            {[
              { n: '01', title: 'The Pre-Visit Window', body: 'The 72 hours before a dental appointment are psychologically significant. During this window, a patient\'s anxiety peaks. A digital experience encountered here can either amplify fear or begin to dissolve it. Most practices amplify it by default.' },
              { n: '02', title: 'Visual Safety Signals', body: 'Humans read environment before reading text. Warm photography, open space, soft colour temperature, and human faces in clinical contexts have been shown to measurably reduce cortisol response in pre-procedure research.' },
              { n: '03', title: 'Friction as Fear', body: 'Every form field, every navigation choice, every moment of confusion in the booking journey is neurologically indistinguishable from a micro-stressor. Reduce friction. Reduce fear. The system becomes the sedative.' },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className={`border-t border-textPrimary/12 pt-10 ${i === 1 ? 'md:mt-12' : ''}`}>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-textSecondary/50 mb-6">{card.n}</p>
                  <h3 className="text-2xl font-serif text-textPrimary mb-6 tracking-tight leading-tight">{card.title}</h3>
                  <p className="text-[14px] text-textSecondary/70 font-light leading-[2]">{card.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SYSTEM ARCHITECTURE FLOW ── */}
      <section className="py-48 md:py-64 bg-bgSecondary relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <FadeIn className="mb-48">
            <div className="flex items-center gap-4 mb-16 opacity-60 ml-4 md:ml-12">
              <span className="w-12 h-[1px] bg-textPrimary/40" />
              <span className="text-[9px] uppercase tracking-[0.3em] font-light">System Architecture</span>
            </div>
            <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-serif tracking-tighter leading-[0.9] text-textPrimary">
              Every layer was<br />
              <span className="italic text-textSecondary/38 ml-10 md:ml-28 block mt-2">intentional.</span>
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-32 md:gap-40 relative">
            <div className="absolute left-[24px] md:left-[40px] top-20 bottom-20 w-[1px] bg-gradient-to-b from-transparent via-textPrimary/12 to-transparent hidden md:block" />
            {[
              { n: '01', title: 'Atmospheric Landing', body: 'The homepage does not lead with services. It leads with a feeling. A full-frame image of the practice interior at golden hour. Two lines of copy. Space to breathe. The patient arrives and feels, before they think.' },
              { n: '02', title: 'Human Credibility Layer', body: 'Staff photography taken with intentional warmth — not the clinical white-coat stock photography that every dental website uses. Real names. Real faces. Brief, personal biographies that communicate humanity, not credentials.' },
              { n: '03', title: 'Context-Aware Entry Points', body: 'Each service page carries a unique WhatsApp entry point pre-filled with the relevant context. A patient on the teeth whitening page doesn\'t open a blank message. They open: "Hello, I\'m interested in teeth whitening at Lumina Dental." Context creates confidence.' },
              { n: '04', title: 'Instant Warm Response', body: 'The WhatsApp flow is designed for a human response within 30 minutes during business hours. The tone of the response has been scripted: calm, warm, first-name basis. The patient transition from digital anxiety to real human contact is carefully managed.' },
            ].map((step, i) => (
              <div key={i} className="relative z-10 group">
                <FadeIn delay={80} className="flex flex-col md:flex-row gap-12 md:gap-24">
                  <div className="md:w-32 flex-shrink-0 relative">
                    <div className="text-[7rem] font-serif italic text-textPrimary/[0.025] leading-none absolute -top-14 -left-10 pointer-events-none transition-transform duration-1000 group-hover:translate-x-3">{step.n}</div>
                    <div className="w-12 h-12 rounded-full border border-textPrimary/12 flex items-center justify-center bg-bgPrimary/60 backdrop-blur-sm relative z-10 hidden md:flex">
                      <div className="w-1.5 h-1.5 rounded-full bg-textPrimary/40" />
                    </div>
                  </div>
                  <div className="md:pt-4">
                    <h3 className="text-2xl md:text-3xl font-serif mb-6 text-textPrimary tracking-tight">{step.title}</h3>
                    <p className="text-[15px] text-textSecondary/75 font-light leading-[2.2] max-w-xl">{step.body}</p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. BEFORE vs AFTER ── */}
      <section className="py-48 md:py-64 bg-bgPrimary border-y border-textPrimary/[0.02]">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn className="mb-32 text-center">
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-serif tracking-tighter leading-[0.9] text-textPrimary">
              The experience, transformed.
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="flex flex-col md:flex-row gap-8 mt-24">
              {/* Before */}
              <div className="w-full md:w-1/2 border border-textPrimary/8 p-10 md:p-14">
                <p className="text-[9px] uppercase tracking-[0.3em] text-textSecondary/40 mb-10 border-l border-textPrimary/20 pl-4">Before</p>
                <div className="space-y-6">
                  {['Generic homepage with stock photography', 'Services listed as a bulleted catalogue', 'Contact form with 8 required fields', 'No emotional signalling, no human warmth', '"Call us during business hours"'].map((line, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-4 h-[1px] bg-textPrimary/20 mt-3 flex-shrink-0" />
                      <p className="text-[14px] text-textSecondary/55 font-light leading-[1.7]">{line}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Divider */}
              <div className="hidden md:flex items-center justify-center w-8 flex-shrink-0">
                <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-textPrimary/15 to-transparent" />
              </div>
              {/* After */}
              <div className="w-full md:w-1/2 border border-textPrimary/8 p-10 md:p-14 bg-bgSecondary/40">
                <p className="text-[9px] uppercase tracking-[0.3em] text-textSecondary/50 mb-10 border-l border-textPrimary/25 pl-4">After</p>
                <div className="space-y-6">
                  {['Cinematic interior photography, warm golden-hour light', 'Services presented as experiences, not procedures', 'Single-tap WhatsApp enquiry, pre-filled with context', 'Team photography with genuine warmth and personality', 'Instant, warm, first-name response within 30 minutes'].map((line, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-4 h-[1px] bg-textPrimary/40 mt-3 flex-shrink-0" />
                      <p className="text-[14px] text-textPrimary/80 font-light leading-[1.7]">{line}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 6. MOBILE-FIRST TRUST ── */}
      <section className="py-48 md:py-64 bg-bgSecondary relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-24 md:gap-48">
            <div className="w-full md:w-1/2">
              <FadeIn>
                <div className="flex items-center gap-4 mb-16 opacity-60">
                  <span className="w-12 h-[1px] bg-textPrimary/40" />
                  <span className="text-[9px] uppercase tracking-[0.3em] font-light">Mobile Experience</span>
                </div>
                <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-serif tracking-tighter leading-[0.9] text-textPrimary mb-16">
                  The phone is where<br />
                  <span className="italic text-textSecondary/40 block mt-2">anxiety lives.</span>
                </h2>
                <p className="text-[15px] md:text-[17px] text-textSecondary/75 font-light leading-[2] mb-12">
                  83% of patients researching dental care do so on mobile devices. Often late at night. Often alone. The experience they encounter in that moment determines whether they will ever book.
                </p>
                <p className="text-[15px] md:text-[17px] text-textSecondary/75 font-light leading-[2]">
                  We rebuilt the entire experience for a single hand, a small screen, and a fragile emotional state. Every tap target is generous. Every transition is slow and calm. Every word was chosen to reduce, not amplify, the barrier to care.
                </p>
              </FadeIn>
            </div>
            <div className="w-full md:w-5/12 flex justify-center md:justify-end">
              <FadeIn delay={150}>
                {/* Elegant abstract phone representation */}
                <div className="relative w-52 md:w-64 h-[500px] md:h-[560px] border border-textPrimary/12 rounded-[2.5rem] bg-bgPrimary overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] flex flex-col p-6 gap-5">
                  <div className="w-16 h-1.5 bg-textPrimary/15 rounded-full mx-auto" />
                  <div className="w-full h-40 bg-bgSecondary rounded-xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600" alt="" className="w-full h-full object-cover filter brightness-[0.7]" />
                  </div>
                  <div className="space-y-3 px-1">
                    <div className="w-4/5 h-3 bg-textPrimary/10 rounded-sm" />
                    <div className="w-3/5 h-3 bg-textPrimary/7 rounded-sm" />
                  </div>
                  <div className="space-y-3 px-1">
                    <div className="w-full h-2 bg-textPrimary/8 rounded-sm" />
                    <div className="w-5/6 h-2 bg-textPrimary/6 rounded-sm" />
                    <div className="w-4/6 h-2 bg-textPrimary/5 rounded-sm" />
                  </div>
                  <div className="mt-auto w-full h-12 bg-textPrimary/90 rounded-xl flex items-center justify-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-400/70" />
                    <div className="w-24 h-2 bg-bgPrimary/40 rounded-sm" />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. BUSINESS IMPACT ── */}
      <section className="py-48 md:py-64 bg-bgPrimary">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <FadeIn>
            <div className="w-px h-24 bg-gradient-to-b from-transparent to-textPrimary/20 mx-auto mb-16" />
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-serif font-light leading-[1.2] mb-16 text-textPrimary">
              "Fear is not a patient problem.<br />
              <span className="italic text-textSecondary/40">It is a design problem."</span>
            </h2>
            <p className="text-[15px] md:text-[17px] text-textSecondary/70 font-light leading-[2] max-w-2xl mx-auto mb-32">
              When the experience communicates safety before the patient has read a single word, the hesitation dissolves. Inquiries increase. Appointment quality improves. The practice's real expertise finally has a digital environment worthy of it.
            </p>
            <div className="flex flex-col md:flex-row items-start justify-center gap-16 md:gap-32 border-t border-textPrimary/8 pt-16">
              {[
                { label: 'Inquiry volume', note: 'Measurable increase in qualified appointment requests' },
                { label: 'Trust perception', note: 'Patients arrive relaxed, informed, and ready to proceed' },
                { label: 'Premium positioning', note: 'The practice now commands the premium it delivers' },
              ].map((r, i) => (
                <div key={i} className={`text-left ${i === 1 ? 'md:mt-10' : ''}`}>
                  <p className="text-textPrimary font-serif text-[17px] mb-3">{r.label}</p>
                  <p className="text-textSecondary/55 text-[12px] font-light leading-[1.8] max-w-[180px]">{r.note}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 8. FINAL CTA ── */}
      <section className="relative py-48 md:py-64 overflow-hidden bg-bgSecondary text-center border-t border-textPrimary/[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(var(--app-textPrimary),0.02)_0%,transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <p className="text-[9px] uppercase tracking-[0.4em] text-textSecondary/50 mb-12">The Next Architecture</p>
            <h2 className="text-[clamp(4rem,9vw,8rem)] font-serif tracking-tighter leading-[0.9] mb-20 text-textPrimary">
              Remove<br />
              <span className="italic font-light text-textSecondary/32 ml-12 md:ml-36">fear.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mt-12">
              <Link to="/case-studies/lumina-dental" className="text-[10px] uppercase tracking-[0.2em] font-light text-textSecondary/60 hover:text-textPrimary transition-colors duration-500">View full case study</Link>
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
export default TrustArchitecture;
