import React from 'react';
import { Section, FadeIn, MeshBackground, Button, Card } from '../components/UI';
import { Terminal, Award, Users, Target, Workflow, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <Section className="pt-48 pb-32 relative overflow-hidden">
        <MeshBackground />
        
        {/* Subtle Background System */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          {/* Faded Blueprint Grid */}
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{ backgroundImage: `linear-gradient(to right, var(--color-textPrimary) 1px, transparent 1px), linear-gradient(to bottom, var(--color-textPrimary) 1px, transparent 1px)`, backgroundSize: '4rem 4rem' }}
          />
          {/* Soft Blur Atmosphere & Radial Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-textPrimary/[0.02] rounded-[100%] blur-[120px]" />
          <div className="absolute top-[30%] right-[20%] w-[500px] h-[500px] bg-accentSecondary/[0.015] rounded-full blur-[100px]" />
          
          {/* Blurred Interface Fragments */}
          <div className="absolute right-[15%] top-[25%] w-64 h-32 border border-textPrimary/[0.03] rounded-2xl bg-surface/10 backdrop-blur-[2px] transform rotate-3 -translate-y-4" />
          <div className="absolute left-[10%] bottom-[20%] w-48 h-48 border border-textPrimary/[0.02] rounded-full bg-surface/5 backdrop-blur-[1px] transform -rotate-6 translate-y-8" />
          
          {/* Tiny Grain Texture */}
          <div 
            className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <FadeIn delay={100}>
            {/* Asymmetrical Badge */}
            <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-sm border border-textPrimary/[0.06] bg-surface/20 backdrop-blur-md mb-14 transform -rotate-1 translate-x-2 hover:translate-y-[-2px] hover:rotate-0 hover:bg-surface/40 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-default">
              <span className="w-6 h-[1px] bg-textPrimary/30"></span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-textSecondary/80 font-light">
                Digital Architecture Studio
              </span>
              <span className="w-6 h-[1px] bg-textPrimary/30"></span>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            {/* Typography Pacing & Rhythm */}
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif tracking-tight text-textPrimary leading-[1.1] mb-8 font-light relative">
              The Architect<span className="text-textSecondary/30 font-sans tracking-normal ml-1">.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={500}>
            <p className="text-[17px] md:text-[19px] text-textSecondary/80 max-w-2xl mx-auto leading-[1.9] font-light tracking-wide transform translate-x-[-1%]">
              Solo-operated. Built by design. Engineered to outperform every traditional agency you've worked with.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Founder Story */}
      <Section className="relative bg-bgSecondary overflow-hidden py-32">
        {/* Subtle Background Depth */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          {/* Faint Glow & Gradients */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accentSecondary/[0.015] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-textPrimary/[0.01] rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-bgSecondary via-transparent to-bgSecondary" />
          {/* Barely visible texture */}
          <div 
            className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            {/* Image Side */}
            <div className="w-full md:w-[45%]">
              <FadeIn>
                <div className="relative group">
                  {/* Image Container with editorial treatment */}
                  <div className="relative rounded-sm overflow-hidden bg-surface/5 border border-textPrimary/[0.04] transform -rotate-1 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-0 group-hover:border-textPrimary/[0.08] shadow-2xl shadow-black/20">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                      alt="The Architect" 
                      className="w-full h-[600px] object-cover object-center grayscale contrast-[1.15] brightness-[0.85] group-hover:contrast-[1.05] group-hover:brightness-[0.95] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                    />
                    {/* Film Grain Overlay for Image */}
                    <div 
                      className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                    />
                    {/* Shadow/Gradient Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60" />
                  </div>
                  {/* Subtle Caption */}
                  <p className="absolute -bottom-8 right-0 text-[10px] uppercase tracking-[0.2em] text-textSecondary/40 font-light">
                    NIDAM — The Architect
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-[55%] space-y-8 md:pl-4">
              <FadeIn delay={200}>
                <p className="text-[11px] uppercase tracking-[0.25em] text-textSecondary/60 mb-6 font-light">
                  A Personal Note
                </p>
                <h2 className="text-4xl lg:text-[2.75rem] font-serif tracking-tight leading-[1.15] mb-8 font-light text-textPrimary">
                  Intention over scale.<br />
                  <span className="text-textSecondary/50">Precision over volume.</span>
                </h2>
                
                <div className="space-y-6 text-[16px] text-textSecondary/80 leading-[2] font-light max-w-xl">
                  <p>
                    I built NIDAM because I believe digital spaces should feel as intentional as physical architecture. Most agencies focus on volume, selling time rather than outcomes. I focus purely on precision.
                  </p>
                  <p>
                    As a solo architect, I design, engineer, and refine every system myself. There are no account managers or lost translations—just a direct partnership aimed at building something timeless. By approaching code like architecture, I compress months of bloated agency work into days of concentrated craft.
                  </p>
                </div>

                {/* Editorial Metrics */}
                <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-textPrimary/[0.03]">
                  <div className="flex flex-col gap-2">
                    <span className="text-3xl font-serif text-textPrimary font-light tracking-tight">05</span>
                    <span className="text-[11px] uppercase tracking-[0.15em] text-textSecondary/50 font-light">Years Refining</span>
                  </div>
                  <div className="flex flex-col gap-2 relative">
                    {/* Subtle Separator */}
                    <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-textPrimary/[0.04]" />
                    <span className="text-3xl font-serif text-textPrimary font-light tracking-tight">50<span className="text-textSecondary/30 font-sans font-light">+</span></span>
                    <span className="text-[11px] uppercase tracking-[0.15em] text-textSecondary/50 font-light">Systems Built</span>
                  </div>
                  <div className="flex flex-col gap-2 relative">
                    <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-textPrimary/[0.04]" />
                    <span className="text-3xl font-serif text-textPrimary font-light tracking-tight">05</span>
                    <span className="text-[11px] uppercase tracking-[0.15em] text-textSecondary/50 font-light">Days to Ship</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      {/* 3 Brand Pillars */}
      <Section className="relative bg-bgPrimary py-32 overflow-hidden">
        {/* Subtle Architectural Atmosphere */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Faint radial lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(var(--app-textPrimary),0.015)_0%,transparent_70%)]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accentPrimary/[0.015] to-transparent rounded-full blur-[80px]" />
          {/* Tiny grain */}
          <div 
            className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Editorial Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <FadeIn className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.25em] text-textSecondary/60 mb-6 font-light">
                Our Foundation
              </p>
              <h2 className="text-4xl lg:text-[3rem] font-serif tracking-tight leading-[1.1] font-light text-textPrimary">
                Three Pillars.<br />
                <span className="text-textSecondary/50">One Architecture Studio.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={200} className="md:w-[35%]">
              <p className="text-[15px] text-textSecondary/70 leading-[1.8] font-light border-l border-textPrimary/[0.05] pl-6 pb-2">
                We don't rely on aesthetic intuition alone. Every system we architect is built on three uncompromising principles designed to compound your digital value over time.
              </p>
            </FadeIn>
          </div>

          {/* Asymmetrical Pillar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 pb-16">
            {[
              {
                number: 'I.', tagline: 'What We Believe', icon: Target,
                headline: 'Design without strategy is decoration.',
                body: 'Every pixel has purpose. Every interaction has intent. We build with conversion psychology and performance science.',
                offset: 'md:mt-0',
              },
              {
                number: 'II.', tagline: 'What We Build', icon: Workflow,
                headline: 'Digital systems, not static sites.',
                body: 'NIDAM delivers complete web architectures — from design system to codebase — scalable, owned by you, and built to last.',
                offset: 'md:mt-12',
              },
              {
                number: 'III.', tagline: 'How We Differ', icon: Sparkles,
                headline: 'Deliberate speed. Human precision.',
                body: 'Our architectural approach eliminates waste — delivering premium outcomes without agency timelines or overhead.',
                offset: 'md:mt-24',
              },
            ].map((pillar, i) => (
              <FadeIn key={i} delay={i * 200}>
                <div className={`relative group h-full flex flex-col p-10 bg-surface/20 rounded-sm border border-textPrimary/[0.03] backdrop-blur-sm transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-surface/40 hover:border-textPrimary/[0.08] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] ${pillar.offset}`}>
                  
                  {/* Subtle Top Gradient Line */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-textPrimary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  
                  <div className="flex items-start justify-between mb-14">
                    <span className="text-[2.5rem] font-serif font-light text-textSecondary/30 group-hover:text-textSecondary/60 transition-colors duration-1000">
                      {pillar.number}
                    </span>
                    <div className="w-9 h-9 rounded-full border border-textPrimary/[0.04] flex items-center justify-center bg-surface/30 group-hover:border-textPrimary/[0.1] group-hover:bg-surface/60 transition-all duration-1000">
                      <pillar.icon size={14} className="text-textSecondary/50 group-hover:text-textPrimary/80 transition-colors duration-1000" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="mt-auto">
                    <p className="text-[10px] uppercase tracking-[0.2em] mb-5 text-textSecondary/50 font-light group-hover:text-textSecondary/80 transition-colors duration-1000">
                      {pillar.tagline}
                    </p>
                    <h3 className="text-[22px] font-serif tracking-tight mb-4 leading-snug text-textPrimary font-light">
                      {pillar.headline}
                    </h3>
                    <p className="text-[14px] text-textSecondary/70 leading-[1.9] font-light">
                      {pillar.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Why NIDAM */}
      <Section className="relative py-32 overflow-hidden bg-bgSecondary">
        {/* Subtle Atmosphere */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Radial Lighting */}
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-accentSecondary/[0.015] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-textPrimary/[0.01] rounded-full blur-[100px]" />
          {/* Soft Blur Texture */}
          <div 
            className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="text-center mb-24 max-w-2xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.25em] text-textSecondary/60 mb-6 font-light">Why NIDAM</p>
            <h2 className="text-4xl lg:text-[2.75rem] font-serif tracking-tight leading-[1.1] font-light text-textPrimary">
              The Architectural Advantage.
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pb-12">
            {[
              { icon: Terminal, title: 'Precision Code', text: 'No spaghetti. Pure, typed, and scalable React + TypeScript architectures built to last and hand-off cleanly.', mt: 'md:mt-0' },
              { icon: Award, title: 'Premium Execution', text: 'Aesthetics that command trust and justify premium price points. Design that compounds in value over time.', mt: 'md:mt-16' },
              { icon: Users, title: 'Direct Access', text: 'You work with the founder. No account managers, no translation layers. Strategy + execution from one mind.', mt: 'md:mt-8' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 250}>
                <div className={`group relative p-10 h-full rounded-sm border border-textPrimary/[0.03] bg-surface/20 backdrop-blur-md transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-surface/40 hover:border-textPrimary/[0.08] hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] ${item.mt}`}>
                  
                  {/* Subtle Glow Interaction */}
                  <div className="absolute inset-0 bg-gradient-to-b from-textPrimary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-sm pointer-events-none" />
                  
                  {/* Elegant Icon Treatment */}
                  <div className="w-14 h-14 rounded-full border border-textPrimary/[0.05] flex items-center justify-center bg-surface/30 mb-12 group-hover:bg-surface/80 group-hover:border-textPrimary/[0.1] transition-all duration-1000 relative overflow-hidden">
                    {/* Inner glow on hover */}
                    <div className="absolute inset-0 bg-accentSecondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <item.icon className="text-textSecondary/50 group-hover:text-textPrimary/90 transition-colors duration-1000 relative z-10" size={20} strokeWidth={1} />
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-[22px] font-serif tracking-tight mb-5 leading-snug text-textPrimary font-light">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-textSecondary/70 leading-[1.9] font-light">
                      {item.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Philosophy / Manifesto */}
      <Section className="relative py-48 overflow-hidden bg-bgSecondary border-y border-textPrimary/[0.02]">
        {/* Cinematic Atmosphere */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          {/* Extremely soft center spotlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(var(--app-textPrimary),0.015)_0%,transparent_60%)]" />
          {/* Vertical depth fades */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-bgSecondary to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-bgSecondary to-transparent" />
          {/* Subtle noise */}
          <div 
            className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center flex flex-col items-center">
          <FadeIn delay={100}>
            <div className="flex items-center gap-4 mb-20 opacity-50">
              <span className="w-10 h-[1px] bg-textPrimary/20" />
              <p className="text-[10px] uppercase tracking-[0.3em] font-light text-textPrimary">Philosophy</p>
              <span className="w-10 h-[1px] bg-textPrimary/20" />
            </div>
          </FadeIn>

          <FadeIn delay={300} className="space-y-12 w-full">
            <h2 className="font-serif text-4xl md:text-[3.25rem] font-light leading-[1.2] text-textPrimary tracking-tight mb-16">
              Most agencies sell time.<br />
              <span className="text-textSecondary/40">We sell outcomes.</span>
            </h2>
            
            <div className="space-y-10 text-[17px] md:text-[21px] font-serif font-light leading-[1.9] md:leading-[2.1] text-textSecondary/70 max-w-2xl mx-auto">
              <p>
                NIDAM was built on one conviction: the gap between a world-class digital presence and the one you currently have is not talent, budget, or time.
              </p>
              <p className="text-textPrimary/90 text-[20px] md:text-[24px] tracking-wide my-12 relative inline-block">
                <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-[1px] bg-textPrimary/20" />
                It is architecture.
                <span className="absolute -right-6 top-1/2 -translate-y-1/2 w-3 h-[1px] bg-textPrimary/20" />
              </p>
              <p>
                We deploy rigorous systems not to cut corners, but to eliminate waste. The hours a traditional team spends on scaffolding, we spend on strategy, craft, and psychological engineering.
              </p>
              <p>
                We don't ship templates. We don't guess at design. We build precise systems—fast, owned by you, and designed to compound in value over time.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={600} className="mt-32 relative">
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-textSecondary/40 font-light">
              This is NIDAM. The architecture studio for brands that intend to lead.
            </p>
            {/* Subtle decorative line below to ground the section */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-textPrimary/10 to-transparent" />
          </FadeIn>
        </div>
      </Section>

      {/* CTA */}
      <Section className="relative bg-bgPrimary py-40 overflow-hidden border-t border-textPrimary/[0.03] text-center">
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.25em] text-textSecondary/60 mb-6 font-light">The Next Step</p>
            <h2 className="text-4xl lg:text-[3.5rem] font-serif font-light tracking-tight mb-8 leading-tight text-textPrimary">
              Ready to architect<br />
              <span className="text-textSecondary/50">your digital presence?</span>
            </h2>
            <p className="text-[16px] text-textSecondary/70 mb-14 max-w-lg mx-auto font-light leading-relaxed">
              Book a private strategy session. Walk away with a clear architectural blueprint for your brand — no commitment required.
            </p>
            
            <div className="relative inline-block group">
              {/* Elegant hover box instead of glowing background */}
              <div className="absolute inset-0 border border-textPrimary/[0.1] bg-surface/30 backdrop-blur-md rounded-sm transform transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03] group-hover:bg-surface/50 pointer-events-none" />
              <Button variant="primary" to="/contact" className="relative bg-transparent hover:bg-transparent text-textPrimary px-12 py-5 font-light tracking-wide rounded-sm transition-all duration-700">
                Begin the Conversation
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
};

export default About;