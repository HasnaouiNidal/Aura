import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Section, FadeIn } from '../components/UI';
import othmanScreenshot from '../assets/othman_screenshot.png';

const Catalog: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-bgPrimary min-h-screen">
      
      {/* SECTION 01 — HERO */}
      <Section className="relative pt-16 lg:pt-24  pb-32 overflow-hidden bg-bgPrimary border-b border-textPrimary/[0.02]">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(var(--app-textPrimary),0.025)_0%,transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16 relative">
            
            {/* Left: Giant Typography */}
            <div className="w-full lg:w-2/3 relative z-20">
              <FadeIn>
                <div className="flex items-center gap-4 mb-20 opacity-60 ml-4 md:ml-12">
                  <span className="w-12 h-[1px] bg-textPrimary/40" />
                  <span className="text-[9px] uppercase tracking-[0.4em] font-light text-textPrimary">High-Performance Infrastructure</span>
                </div>
                
                <h1 className="text-6xl md:text-[7rem] lg:text-[8rem] font-serif tracking-tighter text-textPrimary leading-[0.9] mb-12 font-light relative">
                  <span className="block -ml-2 md:-ml-6">We don't build</span>
                  <span className="block text-textSecondary/40 italic ml-12 md:ml-24">websites.</span>
                </h1>
                
                <p className="text-[18px] md:text-[22px] text-textSecondary/70 max-w-lg leading-[1.8] font-light ml-8 md:ml-16 mt-20">
                  Every system inside NIDAM is engineered to attract attention, guide trust, and quietly convert visitors into clients.
                </p>
              </FadeIn>
            </div>

            {/* Right: Abstract System Flow overlapping */}
            <div className="w-full lg:w-1/3 lg:absolute lg:-right-10 lg:top-10 z-10">
              <FadeIn delay={400} className="relative w-full h-[500px]">
                {/* Floating Elements, staggered */}
                <div className="absolute top-0 right-10 w-64 p-6 bg-surface/30 backdrop-blur-2xl border border-textPrimary/[0.05] rounded-sm shadow-2xl flex items-center gap-4 transform -rotate-2 animate-[float-micro_10s_ease-in-out_infinite]">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-[10px] font-light text-textPrimary tracking-wide uppercase">Inquiry Received</p>
                </div>

                <div className="absolute top-32 -left-10 md:-left-20 w-72 p-8 bg-bgSecondary border border-textPrimary/[0.08] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] flex flex-col gap-4 transform rotate-1 animate-[float-micro_12s_ease-in-out_infinite_1s]">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-[10px] font-serif italic text-textSecondary/60">System Action</p>
                    <div className="w-4 h-[1px] bg-textPrimary/20" />
                  </div>
                  <p className="text-[14px] font-light text-textPrimary leading-snug">The conversation continues automatically.</p>
                </div>

                <div className="absolute top-72 right-0 w-56 p-6 bg-surface/10 backdrop-blur-xl border-l border-textPrimary/[0.05] flex items-center gap-4 transform animate-[float-micro_9s_ease-in-out_infinite_0.5s]">
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-serif text-textPrimary leading-none">Booked</span>
                    <span className="text-[10px] uppercase tracking-wider text-textSecondary/50 mb-1">Via CRM</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 02 — THE REAL PROBLEM */}
      <Section className="relative py-48 lg:py-64 overflow-hidden bg-bgSecondary">
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-[4rem] font-serif tracking-tighter leading-[1] mb-32 font-light text-textPrimary ml-0 md:ml-20">
              Most businesses<br />
              <span className="text-textSecondary/40 italic ml-12 md:ml-32 block mt-2">already get visitors.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={200} className="w-full max-w-6xl mx-auto mt-20">
            {/* Broken Timeline */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-16 md:gap-0 h-full">
              
              <div className="relative z-10 flex flex-col gap-6 md:translate-y-10">
                <p className="text-[11px] uppercase tracking-[0.2em] font-light text-textSecondary/40 pl-2 border-l border-textPrimary/20">Phase 01</p>
                <p className="text-2xl font-serif font-light text-textPrimary">Visitor arrives.</p>
              </div>

              <div className="hidden md:block w-32 h-[1px] bg-gradient-to-r from-textPrimary/20 to-transparent self-center -rotate-6" />

              <div className="relative z-10 flex flex-col gap-6 md:-translate-y-12">
                <p className="text-[11px] uppercase tracking-[0.2em] font-light text-textSecondary/40 pl-2 border-l border-textPrimary/20">Phase 02</p>
                <p className="text-2xl font-serif font-light text-textSecondary/70">Confusion.</p>
              </div>

              <div className="hidden md:block w-32 h-[1px] bg-gradient-to-r from-transparent via-textPrimary/10 to-transparent self-center rotate-3" />

              <div className="relative z-10 flex flex-col gap-6 md:translate-y-8">
                <p className="text-[11px] uppercase tracking-[0.2em] font-light text-textSecondary/40 pl-2 border-l border-textPrimary/20">Phase 03</p>
                <p className="text-2xl font-serif font-light text-textSecondary/40">Silence.</p>
              </div>

              <div className="hidden md:block w-24 h-[1px] bg-gradient-to-r from-transparent to-red-500/10 self-center -rotate-2" />

              <div className="relative z-10 flex flex-col gap-6 md:-translate-y-4">
                <p className="text-[11px] uppercase tracking-[0.2em] font-light text-red-500/40 pl-2 border-l border-red-500/20">Phase 04</p>
                <p className="text-2xl font-serif font-light text-textPrimary italic">Lost client.</p>
              </div>
            </div>
            
            <p className="mt-32 text-[14px] uppercase tracking-[0.2em] font-light text-textSecondary/50 text-right mr-10">
              The architecture of loss.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* SECTION 03 — WHAT WE ACTUALLY BUILD */}
      <Section className="relative py-48 lg:py-64 bg-bgPrimary overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="mb-40 md:ml-20">
             <div className="flex items-center gap-4 mb-16 opacity-50">
              <span className="w-12 h-[1px] bg-textPrimary/30" />
              <p className="text-[9px] uppercase tracking-[0.3em] font-light text-textPrimary">The Methodology</p>
            </div>
            <h2 className="text-5xl lg:text-[5rem] font-serif tracking-tighter leading-[1] font-light text-textPrimary max-w-4xl">
              We don't show websites.
            </h2>
            <h2 className="text-3xl lg:text-[3rem] font-serif tracking-tight leading-[1] font-light text-textSecondary/40 italic mt-6 ml-12 md:ml-32">
              We engineer the invisible.
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-32 lg:gap-48 relative">
            {/* Very large abstract left card */}
            <div className="w-full lg:w-2/3 ml-auto relative group">
              <div className="absolute -left-12 -top-12 text-[10rem] lg:text-[14rem] font-serif text-textPrimary/[0.015] pointer-events-none group-hover:text-textPrimary/[0.03] transition-colors duration-1000 leading-none">01</div>
              <FadeIn>
                <div className="pl-6 md:pl-16 border-l border-textPrimary/10">
                  <h3 className="text-3xl md:text-[2.5rem] font-serif font-light tracking-tight text-textPrimary mb-6">
                    Interest should never<br /><span className="italic text-textSecondary/50">disappear silently.</span>
                  </h3>
                  <p className="text-[14px] md:text-[16px] text-textSecondary/60 leading-[2] font-light max-w-md">
                    Frictionless data collection points that feel natural, not intrusive. The moment attention is captured, the system activates without hesitation.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right aligned small dense block */}
            <div className="w-full lg:w-1/2 mr-auto md:ml-12 relative group">
              <div className="absolute -left-12 -top-12 text-[10rem] lg:text-[14rem] font-serif text-textPrimary/[0.015] pointer-events-none group-hover:text-textPrimary/[0.03] transition-colors duration-1000 leading-none">02</div>
              <FadeIn delay={100}>
                <div className="bg-surface/10 p-12 backdrop-blur-sm border border-textPrimary/[0.02] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
                  <h3 className="text-2xl md:text-[2rem] font-serif font-light tracking-tight text-textPrimary mb-6">
                    The conversation continues.
                  </h3>
                  <p className="text-[13px] md:text-[15px] text-textSecondary/60 leading-[2] font-light">
                    Intelligent sequences that nurture trust while you sleep. They aren't generic blasts—they are carefully calibrated emotional follow-ups designed to bring them back.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Center aligned massive overlapping block */}
            <div className="w-full max-w-4xl mx-auto relative group mt-20">
              <div className="absolute left-1/2 -translate-x-1/2 -top-24 text-[12rem] lg:text-[18rem] font-serif text-textPrimary/[0.015] pointer-events-none group-hover:text-textPrimary/[0.025] transition-colors duration-1000 leading-none">03</div>
              <FadeIn delay={200}>
                <div className="text-center relative z-10">
                  <h3 className="text-4xl md:text-[3.5rem] font-serif font-light tracking-tighter text-textPrimary mb-8 leading-tight">
                    Momentum <span className="italic text-textSecondary/40">uninterrupted.</span>
                  </h3>
                  <p className="text-[15px] md:text-[17px] text-textSecondary/60 leading-[2] font-light max-w-xl mx-auto">
                    Seamless scheduling infrastructure synced directly to your CRM. The layout is psychologically engineered to drive a single, inevitable action: Booking.
                  </p>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </Section>

      {/* SECTION 04 — FEATURED TRANSFORMATIONS */}
      <Section className="relative py-48 lg:py-64 overflow-hidden bg-bgSecondary border-y border-textPrimary/[0.02]">
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="mb-48 md:ml-12">
            <h2 className="text-5xl lg:text-[6rem] font-serif tracking-tighter leading-[0.9] font-light text-textPrimary">
              Living<br />
              <span className="text-textSecondary/30 italic ml-16 md:ml-32">Architectures.</span>
            </h2>
          </FadeIn>

          {/* PROJECT 01 — OTHMAN TOURS */}
          <div className="mb-64 relative">
            <FadeIn>
               <div className="flex flex-col lg:flex-row items-center relative">
                 {/* Giant Image offset left */}
                 <div className="w-full lg:w-[65%] z-10">
                    <div className="relative h-[500px] md:h-[700px] bg-bgPrimary overflow-hidden border border-textPrimary/[0.03] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)]">
                      <img src={othmanScreenshot} alt="Othman Tours Architecture" className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[0.95] transform scale-105 hover:scale-100 transition-all duration-[3000ms] ease-[cubic-bezier(0.23,1,0.32,1)]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-transparent to-transparent opacity-60 pointer-events-none" />
                    </div>
                 </div>

                 {/* Text block overlapping image from right */}
                 <div className="w-full lg:w-[45%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-20 mt-12 lg:mt-0 lg:pl-16">
                   <div className="bg-surface/60 backdrop-blur-2xl p-10 md:p-16 border border-textPrimary/5 shadow-2xl">
                     <div className="flex items-center gap-3 mb-8 opacity-60">
                       <span className="text-[9px] uppercase tracking-[0.2em] font-light text-textSecondary/80">Luxury Transport</span>
                     </div>
                     <h3 className="text-3xl md:text-[2.5rem] font-serif font-light tracking-tight leading-[1.1] mb-12 text-textPrimary">
                       High-ticket trust,<br />
                       <span className="italic text-textSecondary/50">automated.</span>
                     </h3>
                     
                     <div className="space-y-8 mb-16">
                       <div>
                         <p className="text-[10px] uppercase tracking-[0.1em] text-textSecondary/40 mb-2">The Implication</p>
                         <p className="text-[14px] text-textSecondary/80 font-light leading-[1.8]">High-net-worth clients vanish at the slightest friction. The brand required a system that felt as premium as their fleet.</p>
                       </div>
                       <div>
                         <p className="text-[10px] uppercase tracking-[0.1em] text-textSecondary/40 mb-2">The System</p>
                         <p className="text-[14px] text-textSecondary/80 font-light leading-[1.8]">Frictionless WhatsApp booking flow. Automated destination quoting. An uncompromising trust architecture.</p>
                       </div>
                     </div>

                     <div className="flex items-center gap-8">
                       <Link to="/case-studies/othman-tours" className="text-[10px] uppercase tracking-[0.2em] font-light text-textPrimary hover:text-textSecondary/50 transition-colors duration-500 border-b border-textPrimary/20 pb-1">
                         View Architecture
                       </Link>
                     </div>
                   </div>
                 </div>
               </div>
            </FadeIn>
          </div>

          {/* PROJECT 02 — LUMINA DENTAL */}
          <div className="mb-64">
            <FadeIn>
               <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-16 relative">

                 {/* Right: large atmospheric image */}
                 <div className="w-full lg:w-[55%] z-10">
                   <div className="relative h-[460px] md:h-[620px] overflow-hidden border border-textPrimary/[0.03] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.35)]">
                     <img
                       src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1400"
                       alt="Lumina Dental Architecture"
                       className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.9] transform scale-105 hover:scale-100 transition-all duration-[3000ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-transparent to-transparent opacity-50 pointer-events-none" />
                   </div>
                 </div>

                 {/* Left: editorial text block */}
                 <div className="w-full lg:w-[45%] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 z-20 mt-12 lg:mt-0 lg:pr-16">
                   <div className="bg-surface/60 backdrop-blur-2xl p-10 md:p-16 border border-textPrimary/5 shadow-2xl">
                     <div className="flex items-center gap-3 mb-8 opacity-60">
                       <span className="text-[9px] uppercase tracking-[0.2em] font-light text-textSecondary/80">Dental & Wellness</span>
                     </div>
                     <h3 className="text-3xl md:text-[2.5rem] font-serif font-light tracking-tight leading-[1.1] mb-12 text-textPrimary">
                       The illusion of<br />
                       <span className="italic text-textSecondary/50">effortless care.</span>
                     </h3>

                     <div className="space-y-8 mb-16">
                       <div>
                         <p className="text-[10px] uppercase tracking-[0.1em] text-textSecondary/40 mb-2">The Problem</p>
                         <p className="text-[14px] text-textSecondary/80 font-light leading-[1.8]">Patients were hesitating before booking. The digital experience communicated clinical cold instead of human warmth and safety.</p>
                       </div>
                       <div>
                         <p className="text-[10px] uppercase tracking-[0.1em] text-textSecondary/40 mb-2">The System</p>
                         <p className="text-[14px] text-textSecondary/80 font-light leading-[1.8]">A calm trust architecture. Soft visual hierarchy, instant WhatsApp capture, mobile-first onboarding designed around patient anxiety.</p>
                       </div>
                     </div>

                     <Link to="/case-studies/lumina-dental" className="text-[10px] uppercase tracking-[0.2em] font-light text-textPrimary hover:text-textSecondary/50 transition-colors duration-500 border-b border-textPrimary/20 pb-1">
                       View Architecture
                     </Link>
                   </div>
                 </div>

               </div>
            </FadeIn>
          </div>

          {/* PROJECT 03 — ATELIER ESTATES */}
          <div>
            <FadeIn>
              <div className="flex flex-col lg:flex-row items-center relative gap-16 lg:gap-0">

                {/* Left: large atmospheric image */}
                <div className="w-full lg:w-[62%] z-10">
                  <div className="relative h-[460px] md:h-[680px] overflow-hidden border border-textPrimary/[0.03] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)]">
                    <img
                      src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1400"
                      alt="Atelier Estates Architecture"
                      className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.9] transform scale-105 hover:scale-100 transition-all duration-[3000ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>
                </div>

                {/* Right: editorial text block overlapping image */}
                <div className="w-full lg:w-[45%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-20 mt-12 lg:mt-0 lg:pl-16">
                  <div className="bg-surface/60 backdrop-blur-2xl p-10 md:p-16 border border-textPrimary/5 shadow-2xl">
                    <div className="flex items-center gap-3 mb-8 opacity-60">
                      <span className="text-[9px] uppercase tracking-[0.2em] font-light text-textSecondary/80">Luxury Real Estate</span>
                    </div>
                    <h3 className="text-3xl md:text-[2.5rem] font-serif font-light tracking-tight leading-[1.1] mb-12 text-textPrimary">
                      Luxury begins<br />
                      <span className="italic text-textSecondary/50">before the first visit.</span>
                    </h3>
                    <div className="space-y-8 mb-16">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.1em] text-textSecondary/40 mb-2">The Problem</p>
                        <p className="text-[14px] text-textSecondary/80 font-light leading-[1.8]">Generic listings communicated facts, never feeling. High-end buyers projected no emotional life into the properties they viewed.</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.1em] text-textSecondary/40 mb-2">The System</p>
                        <p className="text-[14px] text-textSecondary/80 font-light leading-[1.8]">An immersive editorial acquisition experience. Cinematic browsing, lifestyle storytelling, and a frictionless private enquiry path.</p>
                      </div>
                    </div>
                    <Link to="/case-studies/atelier-estates" className="text-[10px] uppercase tracking-[0.2em] font-light text-textPrimary hover:text-textSecondary/50 transition-colors duration-500 border-b border-textPrimary/20 pb-1">
                      View Architecture
                    </Link>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>
      </Section>

      {/* SECTION 05 — HOW NIDAM THINKS */}
      <Section className="relative py-48 lg:py-64 bg-bgPrimary overflow-hidden border-b border-textPrimary/[0.02]">
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="max-w-3xl ml-0 md:ml-24">
              <h2 className="text-5xl md:text-[5rem] font-serif font-light tracking-tighter text-textPrimary leading-[1] mb-24">
                Structure before<br />
                <span className="italic text-textSecondary/40 ml-16 md:ml-32 block mt-2">aesthetics.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-32">
              <div className="col-span-1 md:col-span-4 md:col-start-2 border-t border-textPrimary/10 pt-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-textSecondary/40 mb-6">01 / Quiet Conversion</p>
                <p className="text-[14px] md:text-[15px] text-textSecondary/70 leading-[1.9] font-light">
                  The best systems feel entirely invisible. We remove friction, ensuring the path from discovery to booking feels like a natural progression, never a forceful push.
                </p>
              </div>

              <div className="col-span-1 md:col-span-4 md:col-start-8 border-t border-textPrimary/10 pt-8 md:mt-24">
                <p className="text-[10px] uppercase tracking-[0.2em] text-textSecondary/40 mb-6">02 / Trust Architecture</p>
                <p className="text-[14px] md:text-[15px] text-textSecondary/70 leading-[1.9] font-light">
                  Trust isn't earned through loud marketing. It is established through editorial spacing, flawless performance, and an aura of uncompromising quality.
                </p>
              </div>

              <div className="col-span-1 md:col-span-5 md:col-start-4 border-t border-textPrimary/10 pt-8 md:mt-16">
                <p className="text-[10px] uppercase tracking-[0.2em] text-textSecondary/40 mb-6">03 / Relentless Momentum</p>
                <p className="text-[16px] md:text-[18px] text-textSecondary/70 leading-[1.9] font-light">
                  True business momentum means decoupling your time from your lead acquisition. Our architectures capture, nurture, and book automatically. <span className="italic text-textPrimary">While you sleep.</span>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* SECTION 06 — FINAL CTA */}
      <Section className="relative py-48 lg:py-64 bg-bgSecondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(var(--app-textPrimary),0.02)_0%,transparent_60%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 flex justify-end">
          <FadeIn className="w-full md:w-2/3 md:text-right">
            <h2 className="text-4xl lg:text-[4.5rem] font-serif font-light tracking-tighter mb-20 leading-[1] text-textPrimary">
              Your business already has attention.<br />
              <span className="text-textSecondary/40 italic block mt-4">Now it needs direction.</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start md:justify-end gap-12">
              <Link 
                to="/about" 
                className="text-[10px] uppercase tracking-[0.2em] font-light text-textSecondary/50 hover:text-textPrimary transition-colors duration-500"
              >
                Explore the methodology
              </Link>
              
              <div className="relative inline-block group w-full sm:w-auto">
                <div className="absolute inset-0 border border-textPrimary/[0.1] bg-surface/20 backdrop-blur-md rounded-sm transform transition-all duration-1000 group-hover:scale-105 group-hover:bg-surface/40 pointer-events-none" />
                <Link 
                  to="/contact" 
                  className="relative block sm:inline-block text-center text-textPrimary px-16 py-6 font-light tracking-[0.2em] text-[10px] uppercase rounded-sm transition-all duration-1000"
                >
                  Request Architecture
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
      
    </div>
  );
};

export default Catalog;