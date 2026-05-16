import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/UI';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const Annotation = ({ children, className, delay = '0s' }: { children: React.ReactNode, className?: string, delay?: string }) => (
  <div className={`absolute hidden md:flex items-center gap-2 px-3 py-1.5 border border-textPrimary/10 bg-bgPrimary/40 backdrop-blur-md text-[9px] uppercase tracking-[0.2em] text-textSecondary font-light shadow-sm animate-fade-in ${className}`} style={{ animationDelay: delay }}>
    <div className="w-1.5 h-px bg-textPrimary/40" />
    {children}
  </div>
);

const Blog: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredPost = { 
    id: 1, 
    slug: 'why-most-luxury-websites-actually-feel-cheap',
    title: 'Why Most Luxury Websites Actually Feel Cheap', 
    cat: 'Conversion Psychology', 
    date: 'Feb 12, 2024', 
    excerpt: 'We audit dozens of premium service websites every month. Almost all of them make the same mistake: prioritizing aesthetic flair over a friction-free booking process. Here is what we\'ve learned rebuilding digital systems for high-end service businesses.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200'
  };

  const supportingPosts = [
    { 
      id: 2, 
      slug: 'why-beautiful-websites-still-fail-to-convert',
      title: 'Why Beautiful Websites Still Fail to Convert', 
      cat: 'Follow-up Design', 
      date: 'Mar 05, 2024', 
      excerpt: 'A great design might keep a visitor on your page for an extra ten seconds, but if your follow-up system is broken, you\'re just paying for expensive traffic.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    },
    { 
      id: 3, 
      slug: 'what-we-learned-designing-for-high-end-travel',
      title: 'What We Learned Designing for High-End Travel', 
      cat: 'System Architecture', 
      date: 'Apr 22, 2024', 
      excerpt: 'Behind the scenes of our work with Othman Tours. How replacing a generic contact form with an intentional WhatsApp flow doubled their qualified leads.',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800'
    },
  ];

  const strategicInsights = [
    "Most premium brands lose clients during follow-up, not during design.",
    "Beautiful websites without communication systems become expensive brochures.",
    "High-end clients want clarity and confidence before speed.",
    "WhatsApp often converts better than complex forms in premium service businesses.",
    "Trust is built through operational clarity, not visual effects.",
    "Most businesses do not have a traffic problem. They have a system problem."
  ];

  const systemLayers = [
    { name: 'Attention Layer', desc: 'How visitors discover the brand.' },
    { name: 'Trust Layer', desc: 'How clarity and restraint increase confidence.' },
    { name: 'Conversion Layer', desc: 'How inquiries are captured.' },
    { name: 'Communication Layer', desc: 'How WhatsApp removes friction.' },
    { name: 'Organization Layer', desc: 'How CRM structures follow-up.' },
    { name: 'Intelligence Layer', desc: 'How reporting improves future decisions.' }
  ];

  return (
    <div className="bg-bgPrimary min-h-screen text-textPrimary overflow-x-hidden">
      
      {/* ── 1. STRATEGIC HERO ──────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pb-32 border-b border-textPrimary/[0.04] bg-bgPrimary overflow-hidden">
        {/* Analytical Background Diagram */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-journal" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-journal)" />
            {/* Subtle faded conversion flow sketches */}
            <path d="M 150 200 L 400 200 L 450 450 L 700 450" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
            <path d="M 400 200 L 400 350 L 800 350" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="150" cy="200" r="3" fill="none" stroke="currentColor" />
            <circle cx="450" cy="450" r="3" fill="none" stroke="currentColor" />
            <circle cx="700" cy="450" r="3" fill="none" stroke="currentColor" />
          </svg>
        </div>

        {/* Operational Annotations */}
        <Annotation className="top-[20%] left-[10%]" delay="0.2s">Trust Delay</Annotation>
        <Annotation className="top-[40%] right-[15%]" delay="0.4s">Conversion Psychology</Annotation>
        <Annotation className="bottom-[40%] left-[15%]" delay="0.6s">Lead Friction</Annotation>
        <Annotation className="top-[30%] right-[30%]" delay="0.8s">Decision Path</Annotation>
        <Annotation className="bottom-[25%] right-[20%]" delay="1.0s">Follow-up Gap</Annotation>
        <Annotation className="bottom-[15%] left-[30%]" delay="1.2s">Behavior Layer</Annotation>

        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(var(--app-textPrimary),0.02)_0%,transparent_70%)] pointer-events-none z-0" />

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12 opacity-60 ml-4 md:ml-12">
              <span className="w-16 h-[1px] bg-textPrimary/40" />
              <span className="text-[9px] uppercase tracking-[0.4em] font-light text-textPrimary">Strategic Intelligence Journal</span>
            </div>

            <h1 className="text-[clamp(4.5rem,10vw,8rem)] font-serif tracking-tighter leading-[0.8] mb-12 relative -ml-2 md:-ml-8 z-20">
              <span className="block text-textPrimary">Observations &</span>
              <span className="block italic text-textSecondary/40 ml-12 md:ml-32">Architecture.</span>
            </h1>

            <div className="flex flex-col md:flex-row items-start justify-between max-w-6xl ml-4 md:ml-24 gap-12 md:gap-0 mt-20">
              <div className="w-full relative">
                <div className="absolute -left-6 top-2 w-[1px] h-24 bg-gradient-to-b from-textPrimary/30 to-transparent hidden md:block" />
                <p className="text-textSecondary/70 text-[16px] md:text-[20px] font-light max-w-xl leading-[1.9] tracking-wide mb-6">
                  Strategic notes on digital psychology, conversion behavior, and the invisible systems that build premium brands.
                </p>
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-textSecondary/50 font-medium">
                  Strategic observations about the invisible systems behind premium client acquisition.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 2. STRATEGIC OBSERVATIONS (NEW SECTION) ────────────────── */}
      <section className="py-24 md:py-36 bg-bgSecondary/30 border-b border-textPrimary/[0.04]">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-4 mb-16 opacity-60">
                <span className="w-12 h-[1px] bg-textPrimary/40" />
                <span className="text-[9px] uppercase tracking-[0.35em] font-light text-textPrimary">
                  Consulting Insights
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-[1.1] mb-16 max-w-2xl text-textPrimary">
                Observations from auditing <span className="italic text-textSecondary/60">premium service operations.</span>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {strategicInsights.map((insight, i) => (
                  <div key={i} className="group p-8 border border-textPrimary/[0.05] bg-surface/40 hover:bg-surface/80 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.02)] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-textPrimary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="flex justify-between items-start mb-8">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-textSecondary/40 font-semibold block">Observation 0{i+1}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-textPrimary/10 group-hover:bg-accentSecondary/50 transition-colors" />
                    </div>
                    <p className="text-[14px] text-textSecondary/80 leading-[1.9] font-light group-hover:text-textPrimary transition-colors duration-500">{insight}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 3. COVER STORY (Featured Analytical Study) ─────────────── */}
      <section className="relative py-32 lg:py-48 bg-bgPrimary overflow-hidden border-b border-textPrimary/[0.04]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_top_right,rgba(var(--app-textPrimary),0.02)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="mb-20 flex justify-between items-end max-w-6xl mx-auto">
             <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-accentSecondary/80 animate-pulse" />
                <p className="text-[10px] uppercase tracking-[0.3em] font-light text-textSecondary/60">Analytical Study</p>
             </div>
          </FadeIn>

          <Link to={`/blog/${featuredPost.slug}`} className="group block relative w-full max-w-6xl mx-auto">
             <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-0 relative">
               
               {/* Left: Oversized Image with overlaying Minimal CRM/Friction sketch */}
               <div className="w-full lg:w-[65%] z-10 relative">
                 <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full bg-bgPrimary overflow-hidden border border-textPrimary/[0.04] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)]">
                   <img 
                     src={featuredPost.image} 
                     alt={featuredPost.title}
                     className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.8] transform scale-105 group-hover:scale-100 transition-transform duration-[3000ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
                   />
                   <div className="absolute inset-0 bg-textPrimary mix-blend-overlay opacity-[0.03] pointer-events-none" />
                   
                   {/* Analytical Overlay - Friction Map */}
                   <div className="absolute top-8 left-8 bg-surface/80 backdrop-blur-md border border-textPrimary/[0.08] p-6 w-64 hidden md:block shadow-2xl group-hover:border-textPrimary/[0.15] transition-colors duration-700">
                     <p className="text-[9px] uppercase tracking-[0.2em] text-textSecondary/60 mb-5 font-semibold">Observed Friction Point</p>
                     <div className="flex flex-col gap-3">
                       {[
                         { text: 'Visual attraction', active: true },
                         { text: 'Confusion', active: false },
                         { text: 'No clear action', active: false, alert: true },
                         { text: 'Lost lead', active: false, final: true }
                       ].map((step, i, arr) => (
                          <div key={i} className="flex flex-col items-center">
                            <span className={`text-[10px] uppercase tracking-[0.1em] font-light border px-4 py-2 w-full text-center transition-colors duration-500
                              ${step.active ? 'border-textPrimary/20 text-textPrimary bg-bgPrimary/80' : 
                                step.final ? 'border-red-400/30 text-red-400/80 bg-red-400/5' : 
                                step.alert ? 'border-textPrimary/10 text-textSecondary/50 bg-bgPrimary/40' :
                                'border-textPrimary/5 text-textSecondary/40 bg-bgPrimary/20'}`}>
                              {step.text}
                            </span>
                            {i < arr.length - 1 && <span className="w-px h-4 bg-textPrimary/20 my-1" />}
                          </div>
                       ))}
                     </div>
                   </div>
                 </div>
               </div>

               {/* Right: Editorial Typography Overlap */}
               <div className="w-full lg:w-[50%] lg:absolute lg:right-0 z-20">
                 <div className="bg-surface/80 backdrop-blur-xl p-10 lg:p-16 border border-textPrimary/[0.06] shadow-2xl transform lg:-translate-y-8 transition-transform duration-[2000ms] lg:group-hover:-translate-y-12">
                   <div className="flex items-center gap-4 mb-10 opacity-70">
                     <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-textPrimary">{featuredPost.cat}</span>
                     <span className="w-8 h-[1px] bg-textPrimary/30" />
                     <span className="text-[9px] uppercase tracking-[0.2em] font-light text-textSecondary">Observation Log</span>
                   </div>

                   <h2 className="text-3xl md:text-[2.8rem] font-serif font-light tracking-tight text-textPrimary leading-[1.15] mb-8">
                     Why Most Luxury<br />
                     <span className="italic text-textSecondary/60">Websites Actually Feel Cheap.</span>
                   </h2>

                   <p className="text-[14px] md:text-[15px] text-textSecondary/80 font-light leading-[2] max-w-sm mb-10">
                     {featuredPost.excerpt}
                   </p>

                   <div className="p-4 border border-textPrimary/[0.04] bg-bgPrimary/50 mb-10 text-[11px] text-textSecondary/60 font-light leading-[1.8]">
                     <span className="text-textPrimary font-medium block mb-1">Architecture Note:</span>
                     Trust is built through operational clarity, not visual effects. When the booking path is unclear, the premium positioning immediately drops.
                   </div>

                   <div className="flex items-center gap-6">
                     <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-textPrimary border-b border-textPrimary/20 pb-1 group-hover:border-textPrimary transition-colors duration-500">
                       Read Full Analysis
                     </span>
                     <ArrowUpRight size={14} className="text-textPrimary/50 group-hover:text-textPrimary transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                   </div>
                 </div>
               </div>

             </div>
          </Link>
        </div>
      </section>

      {/* ── 4. THE INVISIBLE SYSTEM (NEW SECTION) ──────────────────── */}
      <section className="py-24 md:py-36 bg-bgSecondary/20 border-b border-textPrimary/[0.04]">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
              <div className="sticky top-32">
                <div className="flex items-center gap-4 mb-8 opacity-60">
                  <span className="w-12 h-[1px] bg-textPrimary/40" />
                  <span className="text-[9px] uppercase tracking-[0.35em] font-light text-textPrimary">
                    System Architecture
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-[1.1] mb-8">
                  The Invisible <br/><span className="italic text-textSecondary/50">System.</span>
                </h2>
                <p className="text-[14px] text-textSecondary/70 leading-[1.9] font-light max-w-sm">
                  We observe and map the hidden layers behind premium digital experiences. A beautiful website is only the surface.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12 relative">
                {/* Connecting architectural line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-textPrimary/[0.04] hidden sm:block" />
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-textPrimary/[0.04] hidden sm:block" />

                {systemLayers.map((layer, i) => (
                  <div key={i} className="relative group sm:pl-8">
                    <div className="absolute -left-1 sm:-left-[33px] top-1.5 w-2 h-2 rounded-full border border-textPrimary/20 bg-bgPrimary group-hover:border-accentSecondary/60 transition-colors duration-500" />
                    <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-textSecondary/40 mb-3 block">Layer 0{i+1}</span>
                    <h3 className="text-lg font-serif text-textPrimary mb-2">{layer.name}</h3>
                    <p className="text-[13px] text-textSecondary/70 font-light leading-[1.8]">{layer.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 5. ANALYTICAL ARCHIVE (Asymmetric System) ──────────────── */}
      <section className="relative py-32 lg:py-48 bg-bgPrimary overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <div className="flex flex-col gap-40 lg:gap-56">
            
            {/* Archive Item 1: Image Right, Text Left */}
            <FadeIn>
              <Link to={`/blog/${supportingPosts[0].slug}`} className="group flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24 w-full">
                <div className="w-full md:w-[45%] order-2 md:order-1 flex flex-col items-start relative">
                   <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-textPrimary/[0.08] to-transparent hidden md:block" />
                   
                   <div className="flex items-center gap-4 mb-8">
                     <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-textPrimary px-2 py-1 border border-textPrimary/10 bg-surface/50">{supportingPosts[0].cat}</span>
                     <span className="text-[9px] uppercase tracking-[0.2em] font-light text-textSecondary/50">System Log</span>
                   </div>

                   <h3 className="text-3xl md:text-4xl lg:text-[3.2rem] font-serif font-light tracking-tight text-textPrimary leading-[1.1] mb-8">
                     Why Beautiful Websites<br />
                     <span className="italic text-textSecondary/50">Still Fail to Convert.</span>
                   </h3>
                   <p className="text-[14px] md:text-[15px] text-textSecondary/70 font-light leading-[1.9] max-w-md mb-10">
                     {supportingPosts[0].excerpt}
                   </p>
                   
                   <div className="flex flex-col gap-2 mb-12 w-full max-w-xs p-4 border border-textPrimary/[0.04] bg-bgSecondary/30">
                     <p className="text-[9px] uppercase tracking-[0.1em] text-textSecondary/50">Strategic Note</p>
                     <p className="text-[11px] text-textSecondary/80 font-light leading-relaxed">Inquiry abandonment reduced only when follow-up clarity increased.</p>
                   </div>

                   <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-textPrimary border-b border-textPrimary/10 pb-1 group-hover:border-textPrimary/50 transition-colors duration-500">
                     Read Analysis
                   </span>
                </div>
                <div className="w-full md:w-[45%] order-1 md:order-2 relative">
                   <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden border border-textPrimary/[0.05] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
                     <img 
                       src={supportingPosts[0].image} 
                       alt={supportingPosts[0].title}
                       className="absolute inset-0 w-full h-full object-cover filter contrast-[1.05] brightness-[0.9] transform scale-105 group-hover:scale-100 transition-transform duration-[3000ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
                     />
                     <div className="absolute inset-0 bg-textPrimary mix-blend-overlay opacity-[0.02] pointer-events-none" />
                     
                     {/* Overlay CRM snippet */}
                     <div className="absolute bottom-6 right-6 bg-surface/90 backdrop-blur-md border border-textPrimary/10 p-3 shadow-xl transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                       <p className="text-[8px] uppercase tracking-[0.2em] text-textSecondary/60 mb-2">Follow-up status</p>
                       <div className="w-32 h-1.5 bg-textPrimary/5 rounded-full overflow-hidden">
                         <div className="w-[15%] h-full bg-red-400/50" />
                       </div>
                       <p className="text-[9px] text-textSecondary/80 mt-1">Lead lost: No response</p>
                     </div>
                   </div>
                </div>
              </Link>
            </FadeIn>

            {/* Subtle Divider */}
            <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-textPrimary/[0.05] to-transparent hidden md:block" />

            {/* Archive Item 2: Bold Cinematic Center with Architecture UI */}
            <FadeIn>
              <Link to={`/blog/${supportingPosts[1].slug}`} className="group flex flex-col items-center text-center w-full max-w-5xl mx-auto relative">
                <div className="w-full h-[400px] md:h-[600px] relative overflow-hidden mb-16 border border-textPrimary/[0.05] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)]">
                   <img 
                     src={supportingPosts[1].image} 
                     alt={supportingPosts[1].title}
                     className="absolute inset-0 w-full h-full object-cover filter contrast-[1.1] brightness-[0.8] transform scale-105 group-hover:scale-100 transition-transform duration-[4000ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary/95 via-bgPrimary/40 to-transparent pointer-events-none" />
                   
                   {/* Center WhatsApp Flow Diagram */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] hidden md:flex items-center gap-4 opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="px-4 py-2 bg-surface/80 backdrop-blur-md border border-textPrimary/10 text-[10px] uppercase tracking-[0.1em] text-textPrimary">Website Form</div>
                      <ArrowRight size={14} className="text-textSecondary/50" />
                      <div className="px-4 py-2 bg-surface/80 backdrop-blur-md border border-accentSecondary/40 text-[10px] uppercase tracking-[0.1em] text-textPrimary">WhatsApp Flow</div>
                   </div>
                </div>
                
                <div className="max-w-3xl px-6 relative -mt-32 md:-mt-40 z-20 bg-bgPrimary/90 backdrop-blur-2xl p-10 md:p-16 border border-textPrimary/[0.06] shadow-2xl transform transition-transform duration-1000 group-hover:-translate-y-4">
                   <div className="flex items-center justify-center gap-4 mb-8">
                     <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-textPrimary px-2 py-1 border border-textPrimary/10 bg-surface/50">{supportingPosts[1].cat}</span>
                     <span className="text-[9px] uppercase tracking-[0.2em] font-light text-textSecondary/50">Observation Log</span>
                   </div>
                   
                   <h3 className="text-3xl md:text-5xl lg:text-[3.8rem] font-serif font-light tracking-tighter text-textPrimary leading-[1.05] mb-8">
                     Designing for<br />
                     <span className="italic text-textSecondary/60">High-End Travel.</span>
                   </h3>
                   <p className="text-[14px] md:text-[15px] text-textSecondary/80 font-light leading-[1.9] mb-12 max-w-xl mx-auto">
                     {supportingPosts[1].excerpt}
                   </p>

                   <div className="inline-block p-3 border border-textPrimary/[0.04] bg-bgSecondary/20 mb-12">
                     <p className="text-[11px] text-textSecondary/60 font-light">
                       <strong className="text-textPrimary font-medium">Result:</strong> Lead qualification improved through contextual communication.
                     </p>
                   </div>

                   <div className="flex items-center justify-center gap-6 text-textPrimary group-hover:text-textSecondary transition-colors duration-500">
                     <span className="text-[10px] uppercase tracking-[0.2em] font-medium border-b border-textPrimary/20 pb-1 group-hover:border-textPrimary">Explore System Architecture</span>
                     <ArrowUpRight size={14} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                   </div>
                </div>
              </Link>
            </FadeIn>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;