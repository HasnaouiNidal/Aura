import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle, Smartphone } from 'lucide-react';
import { FadeIn } from '../components/UI';
import screenshot from '../assets/othman_screenshot.png';

const OthmanCaseStudy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-bgPrimary min-h-screen text-textPrimary overflow-x-hidden">

      {/* ── 1. CINEMATIC HERO (Layered Editorial) ────────────────── */}
      <section className="relative min-h-[140vh] bg-bgPrimary border-b border-textPrimary/[0.02] overflow-hidden">
        
        {/* Faded Oversized Background Typography */}
        <div className="absolute top-1/4 -left-10 md:-left-20 text-[15rem] md:text-[30rem] font-serif leading-none tracking-tighter text-textPrimary/[0.015] pointer-events-none select-none z-0 whitespace-nowrap overflow-hidden -rotate-2">
          Architecture
        </div>

        {/* Abstract Blurred Contextual Visuals */}
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(var(--app-textPrimary),0.02)_0%,transparent_70%)] pointer-events-none z-0" />
        
        <div className="absolute top-[20%] right-[-5%] w-[90%] md:w-[70%] h-[60vh] z-0 opacity-40 mix-blend-luminosity">
          <img
            src={screenshot}
            alt="Contextual Background"
            className="w-full h-full object-cover object-left-top filter blur-[3px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bgPrimary via-bgPrimary/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-bgPrimary/80 via-transparent to-bgPrimary" />
        </div>

        <div className="container mx-auto px-6 relative z-20 h-[120vh] flex flex-col justify-end pb-32">
          <FadeIn>
            <div className="relative">
              {/* Layered Typography: Partially Cropped / Overlapping */}
              <div className="absolute -top-24 left-4 md:left-24 text-[6rem] md:text-[14rem] font-serif italic text-textPrimary/5 pointer-events-none select-none leading-none z-10 mix-blend-difference hidden sm:block">
                Othman
              </div>

              <div className="flex items-center gap-4 mb-16 opacity-60 ml-4 md:ml-12 relative z-30">
                <span className="w-16 h-[1px] bg-textPrimary/40" />
                <span className="text-[9px] uppercase tracking-[0.4em] font-light text-textPrimary">01 / Infrastructure</span>
              </div>

              <h1 className="text-[clamp(6rem,16vw,14rem)] font-serif tracking-tighter leading-[0.75] mb-20 relative -ml-2 md:-ml-8 z-30">
                <span className="block text-textPrimary">Othman</span>
                <span className="block text-textSecondary/30 italic ml-12 md:ml-48">Tours.</span>
              </h1>

              <div className="flex flex-col md:flex-row items-start md:items-end gap-16 md:gap-0 max-w-6xl ml-4 md:ml-24 relative z-30">
                <div className="w-full md:w-1/2 relative">
                  <div className="absolute -left-6 top-2 w-[1px] h-16 bg-textPrimary/20 hidden md:block" />
                  <p className="text-textSecondary/80 text-[16px] md:text-[20px] font-light max-w-md leading-[2] tracking-wide">
                    From a luxury transport service to a premium digital ecosystem. We engineered desire.
                  </p>
                </div>
                
                <div className="w-full md:w-1/2 flex md:justify-end pr-0 md:pr-12">
                  {/* Integrated CTA, not a floating button */}
                  <div className="relative inline-flex flex-col gap-4">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-textSecondary/40 text-left md:text-right">Live System</p>
                    <a
                      href="https://othman-liard.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-6"
                    >
                      <span className="text-[14px] font-serif italic text-textPrimary/80 group-hover:text-textPrimary transition-colors duration-500">
                        Experience Architecture
                      </span>
                      <div className="w-12 h-[1px] bg-textPrimary/20 group-hover:bg-textPrimary/60 group-hover:w-16 transition-all duration-500 relative">
                        <ArrowUpRight size={12} className="absolute -right-2 -top-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 2. PROJECT META (Editorial Offset) ──────────────────────── */}
      <section className="py-24 md:py-32 border-b border-textPrimary/[0.02] bg-bgSecondary/30">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-end gap-16 md:gap-32 max-w-6xl mx-auto">
              {[
                { label: 'Industry', value: 'Luxury Transport' },
                { label: 'Location', value: 'Northern Morocco' },
                { label: 'Scope', value: 'System Architecture' },
              ].map((item, i) => (
                <div key={i} className={`space-y-4 ${i === 1 ? 'md:-translate-y-8' : ''} ${i === 2 ? 'md:translate-y-4' : ''}`}>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-textSecondary/40 border-l border-textPrimary/20 pl-3">{item.label}</p>
                  <p className="text-textPrimary font-light text-[14px] md:text-[15px]">{item.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 3. THE CHALLENGE (Human Tension) ────────────────────────── */}
      <section className="py-48 md:py-64 relative overflow-hidden bg-bgSecondary">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(var(--app-textPrimary),0.02)_0%,transparent_70%)] pointer-events-none -translate-y-1/2" />
        
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="mb-32">
            <h2 className="text-[clamp(3.5rem,8vw,7rem)] font-serif tracking-tighter leading-[0.9] max-w-4xl ml-0 md:ml-12 relative text-textPrimary">
              <span className="absolute -left-8 md:-left-16 top-4 md:top-8 text-[10px] uppercase tracking-[0.3em] text-textSecondary/30 font-sans transform -rotate-90 origin-bottom-right hidden md:block">The Void</span>
              A premium brand with<br />
              <span className="italic text-textSecondary/40 ml-12 md:ml-24 block mt-2">no premium presence.</span>
            </h2>
          </FadeIn>

          <div className="flex flex-col md:flex-row items-start justify-end gap-16 md:gap-24 max-w-6xl mx-auto mt-20 md:mt-32">
            {/* Massive Quote / Implication */}
            <div className="w-full md:w-1/2 relative group">
              <FadeIn delay={100}>
                <div className="text-[24px] md:text-[32px] font-serif font-light text-textPrimary leading-[1.4] pl-6 md:pl-10 border-l border-textPrimary/10">
                  "The problem was not traffic.<br />
                  <span className="italic text-textSecondary/50">It was trust. And trust is built through design."</span>
                </div>
              </FadeIn>
            </div>

            {/* Emotional Diagnosis List (Right Side) */}
            <div className="w-full md:w-[45%] md:mt-16">
              <FadeIn delay={200}>
                <div className="flex flex-col gap-12">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-[1px] h-full bg-gradient-to-b from-textPrimary/40 to-transparent" />
                    <p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/40 mb-3">01 / The Disconnect</p>
                    <p className="text-textPrimary text-[18px] font-light leading-[1.6]">
                      The experience felt ordinary before trust could form.
                    </p>
                  </div>
                  
                  <div className="relative pl-6 md:ml-8">
                    <div className="absolute left-0 top-2 w-[1px] h-full bg-gradient-to-b from-textPrimary/20 to-transparent" />
                    <p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/40 mb-3">02 / The Friction</p>
                    <p className="text-textSecondary/80 text-[18px] font-light leading-[1.6]">
                      Intent disappeared before the conversation even began.
                    </p>
                  </div>

                  <div className="relative pl-6 md:ml-16">
                    <div className="absolute left-0 top-2 w-[1px] h-full bg-gradient-to-b from-textPrimary/10 to-transparent" />
                    <p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/40 mb-3">03 / The Void</p>
                    <p className="text-textSecondary/60 text-[18px] font-light leading-[1.6]">
                      Potential clients left before ever understanding the value.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. STRATEGY (Editorial Progression) ─────────────────── */}
      <section className="py-48 md:py-64 bg-bgPrimary border-y border-textPrimary/[0.02] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="mb-32 md:mb-48 md:text-right max-w-5xl mx-auto">
            <h2 className="text-[clamp(3.5rem,7vw,6rem)] font-serif tracking-tighter leading-[0.9] text-textPrimary">
              Designing for the<br />
              <span className="italic text-textSecondary/40 pr-12 md:pr-24 block mt-2">client's client.</span>
            </h2>
          </FadeIn>

          <div className="relative max-w-4xl mx-auto">
            {/* Continuous Connecting Line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-textPrimary/10 to-transparent z-0" />

            {/* Strategic Moment 01 */}
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-24 mb-32 md:mb-48">
              <div className="w-full md:w-1/2 md:text-right pl-16 md:pl-0 pr-0 md:pr-16 relative">
                <div className="absolute top-2 left-[21px] md:left-auto md:-right-[3px] w-1.5 h-1.5 rounded-full bg-textPrimary shadow-[0_0_10px_rgba(var(--app-textPrimary),0.8)] md:translate-x-1/2 z-20" />
                <FadeIn>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/40 mb-4">Phase 01</p>
                  <h3 className="text-3xl md:text-4xl font-serif text-textPrimary mb-6 tracking-tight">The Vocabulary of Luxury</h3>
                  <p className="text-[14px] md:text-[15px] font-light text-textSecondary/70 leading-[2.2]">
                    We defined the brand voice before any visual decision. Every word was rewritten to command authority. We removed generic tourism copy and installed an editorial tone that speaks directly to high-net-worth expectations.
                  </p>
                </FadeIn>
              </div>
              <div className="w-full md:w-1/2 pl-16 md:pl-16">
                <FadeIn delay={150}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-surface/5 blur-xl rounded-full" />
                    <p className="font-serif text-xl md:text-2xl italic text-textPrimary/80 relative z-10 border-l border-textPrimary/20 pl-6 py-2">
                      "Immaculate precision on every journey."
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Strategic Moment 02 */}
            <div className="relative z-10 flex flex-col md:flex-row-reverse items-start md:items-center justify-between gap-12 md:gap-24 mb-32 md:mb-48">
              <div className="w-full md:w-1/2 md:text-left pl-16 md:pl-16 relative">
                <div className="absolute top-2 left-[21px] md:-left-[3px] w-1.5 h-1.5 rounded-full bg-bgPrimary border border-textPrimary/50 md:-translate-x-1/2 z-20" />
                <FadeIn>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/40 mb-4">Phase 02</p>
                  <h3 className="text-3xl md:text-4xl font-serif text-textPrimary mb-6 tracking-tight">Structured for Confidence</h3>
                  <p className="text-[14px] md:text-[15px] font-light text-textSecondary/70 leading-[2.2]">
                    Services were split into logical, psychological categories. The fleet was presented like a high-end showroom rather than a taxi catalog. Every page guides the user toward a singular, inevitable goal without friction.
                  </p>
                </FadeIn>
              </div>
              <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-16 flex md:justify-end">
                <FadeIn delay={150}>
                  <div className="flex flex-col gap-4 items-start md:items-end opacity-60 w-32">
                     <div className="w-full h-[1px] bg-textPrimary/40" />
                     <div className="w-2/3 h-[1px] bg-textPrimary/30" />
                     <div className="w-1/3 h-[1px] bg-textPrimary/20" />
                  </div>
                </FadeIn>
              </div>
            </div>
            
            {/* Strategic Moment 03 */}
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-24">
              <div className="w-full md:w-1/2 md:text-right pl-16 md:pl-0 pr-0 md:pr-16 relative">
                <div className="absolute top-2 left-[21px] md:left-auto md:-right-[3px] w-1.5 h-1.5 rounded-full bg-bgPrimary border border-textPrimary/50 md:translate-x-1/2 z-20" />
                <FadeIn>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/40 mb-4">Phase 03</p>
                  <h3 className="text-3xl md:text-4xl font-serif text-textPrimary mb-6 tracking-tight">The Trust Architecture</h3>
                  <p className="text-[14px] md:text-[15px] font-light text-textSecondary/70 leading-[2.2]">
                    Aesthetic decisions were driven by psychological safety. Generous macro-whitespace, deep cinematic backgrounds, and strict alignment rules communicate stability and premium reliability before a single word is read.
                  </p>
                </FadeIn>
              </div>
              <div className="w-full md:w-1/2 pl-16 md:pl-16">
                <FadeIn delay={150}>
                  <div className="relative w-24 h-32 border border-textPrimary/10 flex flex-col justify-between p-3 backdrop-blur-sm bg-surface/5">
                    <div className="w-full h-1/2 bg-textPrimary/5" />
                    <div className="w-full h-1 bg-textPrimary/10" />
                  </div>
                </FadeIn>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. VISUAL IDENTITY (Editorial Spread) ───────────────────── */}
      <section className="py-48 md:py-80 bg-[#0A0B0E] relative overflow-hidden border-y border-white/[0.02]">
        
        {/* Subtle Cinematic Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,167,94,0.03)_0%,transparent_60%)] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <FadeIn className="mb-48 flex justify-center text-center">
             <h2 className="text-[clamp(4.5rem,10vw,9rem)] font-serif tracking-tighter leading-[0.8] text-white/90">
                Midnight,<br />
                <span className="italic text-white/30 block mt-4 pr-12 md:pr-32">Champagne.</span>
             </h2>
          </FadeIn>

          <div className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
             {/* Abstract floating swatches */}
             <FadeIn delay={200} className="absolute left-[5%] md:left-[25%] top-[25%] w-48 h-64 bg-[#0A0C10] border border-white/[0.05] shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col justify-end p-6 transform -rotate-6 transition-transform duration-1000 hover:rotate-0 hover:scale-105">
               <p className="text-white/20 text-[9px] uppercase tracking-[0.4em]">Midnight</p>
             </FadeIn>
             
             <FadeIn delay={300} className="absolute left-[25%] md:left-[45%] top-[10%] w-56 h-80 bg-gradient-to-br from-[#C6A75E] to-[#A38A4C] border border-white/20 shadow-[0_40px_80px_rgba(0,0,0,0.8)] flex flex-col justify-end p-8 transform rotate-3 z-10 transition-transform duration-1000 hover:-rotate-2 hover:scale-105">
               <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
               <p className="text-black/50 text-[9px] uppercase tracking-[0.4em] relative z-10">Champagne</p>
             </FadeIn>
             
             <FadeIn delay={400} className="absolute right-[5%] md:right-[25%] top-[35%] w-40 h-56 bg-[#F5F0E8] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col justify-end p-6 transform -rotate-2 transition-transform duration-1000 hover:rotate-3 hover:scale-105">
               <p className="text-black/40 text-[9px] uppercase tracking-[0.4em]">Ivory</p>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 6. CINEMATIC JOURNEY (Discovery to Booked) ────────────── */}
      <section className="py-48 md:py-64 bg-bgSecondary relative overflow-hidden">
        {/* Subtle atmospheric depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--app-textPrimary),0.02)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <FadeIn className="mb-48 md:mb-64">
            <p className="text-[10px] uppercase tracking-[0.4em] text-textSecondary/40 mb-8 border-l border-textPrimary/20 pl-4">The Pipeline</p>
            <h2 className="text-[clamp(3.5rem,7vw,6rem)] font-serif tracking-tighter leading-[0.9] text-textPrimary">
              Discovery to<br />
              <span className="italic text-textSecondary/40 pr-12 md:pr-24 block mt-2 text-right">Booked.</span>
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-32 md:gap-48 relative">
            
            {/* Visual connector fading in and out */}
            <div className="absolute left-[24px] md:left-[40px] top-24 bottom-24 w-[1px] bg-gradient-to-b from-transparent via-textPrimary/10 to-transparent z-0 hidden md:block" />

            {/* Chapter 1 */}
            <div className="relative z-10 group">
               <FadeIn delay={100} className="flex flex-col md:flex-row gap-12 md:gap-32">
                 <div className="md:w-32 flex-shrink-0 relative">
                   <div className="text-[8rem] font-serif italic text-textPrimary/[0.03] leading-none absolute -top-16 -left-12 pointer-events-none transition-transform duration-1000 group-hover:translate-x-4">01</div>
                   <div className="w-12 h-12 rounded-full border border-textPrimary/10 flex items-center justify-center bg-bgPrimary/50 backdrop-blur-sm relative z-10 hidden md:flex shadow-[0_0_30px_rgba(var(--app-textPrimary),0.03)]">
                     <div className="w-1.5 h-1.5 rounded-full bg-textPrimary/40" />
                   </div>
                 </div>
                 <div className="md:pt-4">
                   <h3 className="text-3xl font-serif mb-6 text-textPrimary tracking-tight">The Aesthetic Hook</h3>
                   <p className="text-[15px] text-textSecondary/70 font-light leading-[2.2] max-w-xl">
                     Before logic engages, emotion decides. The user lands in a cinematic, distraction-free environment. Over 70% of searches happen on mobile, so the initial visual impact is engineered for touch—fast, immersive, and unmistakably premium.
                   </p>
                 </div>
               </FadeIn>
            </div>

            {/* Chapter 2 */}
            <div className="relative z-10 group">
               <FadeIn delay={100} className="flex flex-col md:flex-row gap-12 md:gap-32">
                 <div className="md:w-32 flex-shrink-0 relative">
                   <div className="text-[8rem] font-serif italic text-textPrimary/[0.03] leading-none absolute -top-16 -left-12 pointer-events-none transition-transform duration-1000 group-hover:translate-x-4">02</div>
                   <div className="w-12 h-12 rounded-full border border-textPrimary/10 flex items-center justify-center bg-bgPrimary/50 backdrop-blur-sm relative z-10 hidden md:flex shadow-[0_0_30px_rgba(var(--app-textPrimary),0.03)]">
                     <div className="w-1.5 h-1.5 rounded-full bg-textPrimary/40" />
                   </div>
                 </div>
                 <div className="md:pt-4">
                   <h3 className="text-3xl font-serif mb-6 text-textPrimary tracking-tight">Frictionless Evaluation</h3>
                   <p className="text-[15px] text-textSecondary/70 font-light leading-[2.2] max-w-xl">
                     Instead of hunting for pricing or service limits, the user is guided through a highly structured, editorial catalog. The fleet and routes are presented not as options, but as distinct luxury experiences. Information is absorbed effortlessly.
                   </p>
                 </div>
               </FadeIn>
            </div>

            {/* Chapter 3 */}
            <div className="relative z-10 group">
               <FadeIn delay={100} className="flex flex-col md:flex-row gap-12 md:gap-32">
                 <div className="md:w-32 flex-shrink-0 relative">
                   <div className="text-[8rem] font-serif italic text-textPrimary/[0.03] leading-none absolute -top-16 -left-12 pointer-events-none transition-transform duration-1000 group-hover:translate-x-4">03</div>
                   <div className="w-12 h-12 rounded-full border border-textPrimary/10 flex items-center justify-center bg-bgPrimary/50 backdrop-blur-sm relative z-10 hidden md:flex shadow-[0_0_30px_rgba(var(--app-textPrimary),0.03)]">
                     <div className="w-1.5 h-1.5 rounded-full bg-textPrimary/40" />
                   </div>
                 </div>
                 <div className="md:pt-4">
                   <h3 className="text-3xl font-serif mb-6 text-textPrimary tracking-tight">The Silent Capture</h3>
                   <p className="text-[15px] text-textSecondary/70 font-light leading-[2.2] max-w-xl">
                     When desire peaks, the barrier to entry vanishes. Integrated WhatsApp architecture captures context before the conversation even begins. No heavy forms. No waiting. The transition from browser to booked client is instantaneous.
                   </p>
                 </div>
               </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* ── 7. OUTCOME (Singular impact statement) ──────────────────── */}
      <section className="py-48 md:py-64 bg-bgPrimary">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <FadeIn>
            <div className="w-px h-32 bg-gradient-to-b from-transparent to-textPrimary/20 mx-auto mb-16" />
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-serif font-light leading-[1.1] mb-16 text-textPrimary">
              "The brand finally matches the experience. <br />
              <span className="italic text-textSecondary/40">And the revenue followed."</span>
            </h2>
            <p className="text-textSecondary/60 leading-[2] text-[15px] font-light max-w-xl mx-auto border-t border-textPrimary/5 pt-12">
              Hotel partners refer clients with confidence. High-net-worth travellers book without hesitation. Every visitor now has a clear, elegant path to becoming a client.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── 8. FINAL CTA ─────────────────────────────────────────── */}
      <section className="relative py-48 md:py-64 overflow-hidden bg-bgSecondary text-center border-t border-textPrimary/[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(var(--app-textPrimary),0.02)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <p className="text-[9px] uppercase tracking-[0.4em] text-textSecondary/40 mb-12">The Next Architecture</p>
            <h2 className="text-[clamp(4rem,9vw,8rem)] font-serif tracking-tighter leading-[0.9] mb-20 text-textPrimary">
              Demand<br />
              <span className="italic font-light text-textSecondary/40 ml-12 md:ml-32">better.</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mt-12">
              <Link 
                to="/catalog" 
                className="text-[10px] uppercase tracking-[0.2em] font-light text-textSecondary/50 hover:text-textPrimary transition-colors duration-500"
              >
                View all systems
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
      </section>

    </div>
  );
};

export default OthmanCaseStudy;
