import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, MapPin, Users, Smartphone, MessageCircle, CheckCircle, ArrowUpRight } from 'lucide-react';
import { FadeIn, Button, MeshBackground } from '../components/UI';
import screenshot from '../assets/othman_screenshot.png';

const OthmanCaseStudy: React.FC = () => {
  return (
    <div className="bg-bgPrimary min-h-screen text-textPrimary overflow-x-hidden">

      {/* ── 1. CINEMATIC HERO ─────────────────────────────────────── */}
      <section className="relative h-[150vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">
          <div className="absolute inset-0">
            <img
              src={screenshot}
              alt="Othman Tours"
              className="w-full h-full object-cover object-top opacity-20 scale-105"
            />
            <div className="absolute inset-0 bg-bgPrimary/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-bgPrimary/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-bgPrimary via-transparent to-transparent opacity-60" />
          </div>

          <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center mt-20">
            <FadeIn>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="w-10 h-px bg-textPrimary/20" />
                <span className="text-textSecondary/60 text-[10px] font-bold uppercase tracking-[0.3em]">Case Study · Luxury Transport</span>
                <span className="w-10 h-px bg-textPrimary/20" />
              </div>

              <h1 className="text-[clamp(4rem,12vw,10rem)] font-serif font-bold leading-[0.85] tracking-tighter mb-6">
                Othman<br />
                <span className="italic font-light text-textSecondary pr-4">
                  Tours
                </span>
              </h1>

              <p className="text-textSecondary text-xl font-light max-w-xl mx-auto tracking-wide mb-12">
                From a luxury transport service to a premium digital ecosystem.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://othman-liard.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-textPrimary text-bgPrimary text-sm font-medium hover:bg-white transition-colors duration-300"
                >
                  View Live Website <ArrowUpRight size={15} />
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
            <span className="text-[9px] uppercase tracking-[0.3em] text-textSecondary/40">Scroll to Explore</span>
            <div className="w-px h-16 bg-gradient-to-b from-textSecondary/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── 2. PROJECT META (Breathing Room) ──────────────────────── */}
      <section className="py-24 border-y border-textPrimary/5 bg-bgSecondary/20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { label: 'Industry', value: 'Luxury Transport' },
                { label: 'Location', value: 'Northern Morocco' },
                { label: 'Scope', value: 'Full System Build' },
                { label: 'Delivery', value: '7 Days' },
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <p className="text-[10px] uppercase tracking-widest text-textSecondary/50">{item.label}</p>
                  <p className="text-textPrimary font-medium text-lg">{item.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 3. THE CHALLENGE ──────────────────────────────────────── */}
      <section className="py-48">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            <p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/50 mb-10">The Challenge</p>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-serif font-bold leading-[1.05] mb-24 max-w-4xl">
              A premium brand with no premium presence.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-7">
              <FadeIn delay={100}>
                <div className="space-y-8 text-textSecondary leading-relaxed text-xl font-light max-w-2xl">
                  <p>
                    Othman Tours operated one of the finest private transport experiences in Northern Morocco. Immaculate vehicles. Personal service. But their digital presence told a different story.
                  </p>
                  <p>
                    Potential clients — hotel concierges, travel agencies, high-net-worth tourists — would search, land on a generic page, and leave within seconds. The brand's true quality was invisible online.
                  </p>
                  <p className="text-textPrimary font-medium">
                    The problem was not traffic. It was trust. And trust is built through design.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="md:col-span-5">
              <FadeIn delay={200}>
                <div className="space-y-0 border-t border-textPrimary/5">
                  {[
                    { issue: 'No luxury visual language', impact: 'First impression failed instantly' },
                    { issue: 'No clear service structure', impact: 'Visitors left confused' },
                    { issue: 'No booking path', impact: 'Inquiries went to competitors' },
                    { issue: 'No B2B positioning', impact: 'Agency partnerships were lost' },
                  ].map((row, i) => (
                    <div key={i} className="py-6 border-b border-textPrimary/5">
                      <p className="text-textPrimary text-base font-medium mb-1">{row.issue}</p>
                      <p className="text-textSecondary text-sm font-light">{row.impact}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. STRATEGY (Asymmetrical Editorial) ──────────────────── */}
      <section className="py-48 bg-bgSecondary/20 border-y border-textPrimary/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn className="mb-40">
            <p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/50 mb-8">Strategy & System Thinking</p>
            <h2 className="text-[clamp(3rem,8vw,7rem)] font-serif font-bold leading-[0.9] max-w-4xl">
              Designing for the <br /><span className="italic font-light text-textSecondary">client's client.</span>
            </h2>
          </FadeIn>

          <div className="flex flex-col space-y-32">
            {[
              { num: '01', title: 'Position First', text: 'We defined the brand voice before any visual decision. Luxury. Personal. Reliable. Every word on the site was written to attract the exact right demographic.', offset: 'ml-0' },
              { num: '02', title: 'Structure for Clarity', text: 'Services were split into logical categories. Fleet was presented like a high-end showroom. Destinations were given editorial treatment. Each page had a singular goal.', offset: 'md:ml-[15%]' },
              { num: '03', title: 'Convert with Confidence', text: 'WhatsApp booking CTAs placed at natural decision points. A dedicated B2B section built for travel agencies. Trust signals woven throughout the experience.', offset: 'md:ml-[30%]' }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100} className={`w-full md:w-2/3 ${item.offset} relative`}>
                <div className="absolute -top-16 -left-8 text-[10rem] font-serif font-bold text-textPrimary/5 pointer-events-none select-none z-0 leading-none">
                  {item.num}
                </div>
                <div className="relative z-10 pt-4">
                  <h3 className="text-3xl font-serif mb-6 text-textPrimary">{item.title}</h3>
                  <p className="text-textSecondary leading-relaxed text-xl font-light max-w-xl">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. USER JOURNEY (Sticky Editorial Scroll) ─────────────── */}
      <section className="relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sticky Left Column */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-0 h-screen flex flex-col justify-center">
                <FadeIn>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/50 mb-6">The Client Journey</p>
                  <h2 className="text-5xl md:text-7xl font-serif font-bold leading-[1.05]">
                    From<br/>discovery<br/><span className="italic font-light text-textSecondary">to booked.</span>
                  </h2>
                </FadeIn>
              </div>
            </div>

            {/* Scrolling Right Column */}
            <div className="lg:col-span-7 pt-[20vh] lg:pt-[40vh] pb-[30vh]">
              <div className="space-y-[30vh]">
                {[
                  { step: '01', title: 'Discovery', text: 'They land on the site. Within 3 seconds, the visual language establishes undeniable premium quality before a single word is read. The dark tones and typography do the heavy lifting.' },
                  { step: '02', title: 'Exploration', text: 'They browse the fleet and destinations. High-end photography and massive whitespace keep them engaged. The layout feels less like a website and more like a curated magazine.' },
                  { step: '03', title: 'Resonance', text: 'They picture themselves there. The copy speaks directly to their desire for comfort and reliability on Moroccan roads. Trust is cemented.' },
                  { step: '04', title: 'Conversion', text: 'A context-aware CTA appears at the precise moment of intent. One tap. The conversation starts in WhatsApp with full context already established.' }
                ].map((item, i) => (
                  <FadeIn key={i}>
                    <div className="border-l border-textPrimary/10 pl-10 md:pl-16 relative">
                      <div className="absolute top-0 -left-[1px] w-[2px] h-12 bg-textPrimary" />
                      <span className="text-textSecondary/50 text-[10px] uppercase tracking-[0.3em] block mb-6">Phase {item.step}</span>
                      <h3 className="text-4xl font-serif mb-6">{item.title}</h3>
                      <p className="text-textSecondary text-xl font-light leading-relaxed max-w-lg">{item.text}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. VISUAL IDENTITY ────────────────────────────────────── */}
      <section className="py-48 bg-[#08090C] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <FadeIn>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8">Visual Identity</p>
              <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-12 text-white">
                Midnight,<br />Champagne &<br />Slate.
              </h2>
              <p className="text-white/60 text-xl font-light leading-relaxed mb-16 max-w-md">
                The design language was built to signal premium. Deep backgrounds. Generous whitespace. Controlled accents used sparingly for maximum impact.
              </p>

              {/* Client Brand Palette */}
              <div className="space-y-6">
                <p className="text-[10px] uppercase tracking-widest text-white/30">Client Brand Palette</p>
                {[
                  { name: 'Midnight', hex: '#0A0C10' },
                  { name: 'Champagne Gold', hex: '#C6A75E' },
                  { name: 'Ivory', hex: '#F5F0E8' },
                  { name: 'Slate', hex: '#6B7280' },
                ].map((swatch, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div
                      className="w-12 h-12 rounded-full shrink-0 border border-white/10"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <div>
                      <p className="text-white text-base font-medium">{swatch.name}</p>
                      <p className="text-white/40 text-xs font-mono mt-1">{swatch.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="space-y-0 border-t border-white/5">
                {[
                  { label: 'Typography', value: 'Playfair Display · Inter', desc: 'Editorial serif headlines paired with clean UI sans-serif body text for maximum contrast.' },
                  { label: 'Spacing', value: 'Macro-Whitespace', desc: 'All spacing decisions prioritize uncomfortable amounts of whitespace to force visual focus.' },
                  { label: 'Motion', value: 'Subtle & Intentional', desc: 'Fade-in on scroll. No distracting animations. Calm, weighted transitions only.' },
                  { label: 'Philosophy', value: 'Content-First', desc: `Every visual element exists to serve the content — never to decorate for decoration's sake.` },
                ].map((item, i) => (
                  <div key={i} className="py-8 border-b border-white/5">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-4">
                      <p className="text-white font-medium text-lg">{item.label}</p>
                      <span className="hidden md:block text-white/20 px-2">—</span>
                      <p className="text-white/50 text-sm font-mono tracking-tight">{item.value}</p>
                    </div>
                    <p className="text-white/60 text-base font-light leading-relaxed max-w-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 7. SYSTEM ARCHITECTURE (Bento refinement) ────────────── */}
      <section className="py-48">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn className="mb-24">
            <p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/50 mb-6">System Architecture</p>
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-serif font-bold mb-6 leading-tight max-w-3xl">
              The engine beneath <br /><span className="text-textSecondary font-light italic">the elegance.</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
            {/* Large bento */}
            <div className="md:col-span-2 md:row-span-2 rounded-[2rem] bg-surface/20 border border-textPrimary/5 p-12 flex flex-col justify-between group hover:bg-surface/40 transition-colors duration-700">
              <Smartphone size={32} className="text-textPrimary/40" />
              <div>
                <h3 className="text-4xl font-serif mb-6">Mobile-First Performance</h3>
                <p className="text-textSecondary text-xl font-light leading-relaxed max-w-md">Over 70% of luxury travel searches happen on mobile. The entire experience was engineered for touch first — fast, optimized, and frictionless at every step.</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-surface/20 border border-textPrimary/5 p-10 flex flex-col justify-between group hover:bg-surface/40 transition-colors duration-700">
              <MessageCircle size={24} className="text-textPrimary/40" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Frictionless WhatsApp</h3>
                <p className="text-textSecondary text-base font-light leading-relaxed">Integrated CTAs that capture context before the conversation starts.</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-surface/20 border border-textPrimary/5 p-10 flex flex-col justify-between group hover:bg-surface/40 transition-colors duration-700">
              <Users size={24} className="text-textPrimary/40" />
              <div>
                <h3 className="text-xl font-semibold mb-3">B2B Agency Portal</h3>
                <p className="text-textSecondary text-base font-light leading-relaxed">Dedicated pathways for hotel concierges and travel agencies with volume language.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. EXHIBITION (Massive Cinematic Mockup) ──────────────── */}
      <section className="pt-24 pb-48 overflow-hidden bg-bgPrimary">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn className="text-center mb-24">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/50 mb-6">The Exhibition</h2>
          </FadeIn>
        </div>

        <div className="w-full px-4 md:px-8">
          <FadeIn>
            <div className="relative w-full h-[90vh] rounded-3xl border border-white/5 bg-bgSecondary shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden group">
              {/* Browser chrome */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-surface/90 border-b border-textPrimary/5 flex items-center px-6 z-20 backdrop-blur-md">
                <div className="flex gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-textSecondary/20" />
                  <div className="w-3 h-3 rounded-full bg-textSecondary/20" />
                  <div className="w-3 h-3 rounded-full bg-textSecondary/20" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bg-bgPrimary/60 px-8 py-1.5 rounded flex items-center">
                  <span className="text-[11px] text-textSecondary/50 font-mono tracking-widest">othman-tours.com</span>
                </div>
              </div>

              {/* Scrollable screenshot */}
              <div
                className="absolute top-12 left-0 right-0 bottom-0 overflow-y-auto"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <img
                  src={screenshot}
                  alt="Othman Tours Full Website"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="flex justify-center mt-16">
              <a
                href="https://othman-liard.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-sm text-textSecondary hover:text-textPrimary transition-colors"
              >
                <ExternalLink size={14} />
                <span className="border-b border-textPrimary/20 pb-0.5 group-hover:border-textPrimary/60 transition-colors uppercase tracking-widest text-[10px] font-bold">Experience the live site</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 9. OUTCOME ────────────────────────────────────────────── */}
      <section className="py-48 border-t border-textPrimary/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-6">
              <FadeIn>
                <p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/50 mb-8">The Outcome</p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">
                  The brand finally matches the experience.
                </h2>
                <p className="text-textSecondary leading-relaxed text-xl font-light mb-6">
                  Othman Tours now has a digital presence that earns trust before a single word is exchanged. The visual identity, the structured services, the booking system — everything works together as one coherent client acquisition system.
                </p>
                <p className="text-textSecondary leading-relaxed text-xl font-light">
                  Hotel partners can refer clients with confidence. Travel agencies have a dedicated section built for their needs. Every visitor has a clear, elegant path to becoming a client.
                </p>
              </FadeIn>
            </div>

            <div className="lg:col-span-6 pt-2">
              <FadeIn delay={150}>
                <div className="space-y-6">
                  {[
                    'Premium visual identity that signals luxury immediately',
                    'Clear service architecture across all journey types',
                    'Fleet presented as a curated showroom experience',
                    'B2B section designed for travel agency partnerships',
                    'WhatsApp booking integrated at every intent moment',
                    'Mobile-first build for on-the-go luxury travellers',
                    'Structured inquiry system that qualifies leads on arrival',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-textPrimary/40 mt-2.5 shrink-0" />
                      <p className="text-textSecondary text-lg font-light leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. FINAL CTA ─────────────────────────────────────────── */}
      <section className="relative py-48 overflow-hidden bg-bgSecondary/20">
        <MeshBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-bgPrimary via-transparent to-bgPrimary opacity-80 pointer-events-none" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/50 mb-10">Ready to Begin?</p>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              Your business deserves<br />
              <span className="italic font-light text-textSecondary">
                a system like this.
              </span>
            </h2>
            <p className="text-textSecondary text-xl font-light max-w-2xl mx-auto mb-16 leading-relaxed">
              We'll audit your current digital presence and show you exactly what a structured client system would look like for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="primary" to="/contact" className="py-4 px-12 text-sm font-semibold tracking-wide">
                Request My Free Audit
              </Button>
              <Link to="/case-studies" className="text-sm text-textSecondary hover:text-textPrimary flex items-center gap-2 transition-colors border border-textPrimary/10 rounded-lg px-8 py-4 bg-surface/30 hover:bg-surface/50">
                View next case study <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};

export default OthmanCaseStudy;
