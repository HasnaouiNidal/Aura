import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/UI';
import { ArrowUpRight } from 'lucide-react';

const Blog: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredPost = { 
    id: 1, 
    slug: 'why-most-luxury-websites-actually-feel-cheap',
    title: 'Why Most Luxury Websites Actually Feel Cheap', 
    cat: 'Client Strategy', 
    date: 'Feb 12, 2024', 
    excerpt: 'We audit dozens of premium service websites every month. Almost all of them make the same mistake: prioritizing aesthetic flair over a friction-free booking process. Here is what we\'ve learned rebuilding digital systems for high-end service businesses.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200'
  };

  const supportingPosts = [
    { 
      id: 2, 
      slug: 'why-beautiful-websites-still-fail-to-convert',
      title: 'Why Beautiful Websites Still Fail to Convert', 
      cat: 'Digital Systems', 
      date: 'Mar 05, 2024', 
      excerpt: 'A great design might keep a visitor on your page for an extra ten seconds, but if your follow-up system is broken, you\'re just paying for expensive traffic.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    },
    { 
      id: 3, 
      slug: 'what-we-learned-designing-for-high-end-travel',
      title: 'What We Learned Designing for High-End Travel', 
      cat: 'Case Study Insights', 
      date: 'Apr 22, 2024', 
      excerpt: 'Behind the scenes of our work with Othman Tours. How replacing a generic contact form with an intentional WhatsApp flow doubled their qualified leads.',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800'
    },
  ];

  return (
    <div className="bg-bgPrimary min-h-screen text-textPrimary overflow-x-hidden">
      
      {/* ── 1. EDITORIAL HERO ──────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pb-32 border-b border-textPrimary/[0.02] bg-bgPrimary overflow-hidden">
        {/* Abstract background typography / texture */}
        <div className="absolute top-1/4 -right-10 md:-right-20 text-[12rem] md:text-[24rem] font-serif leading-none tracking-tighter text-textPrimary/[0.015] pointer-events-none select-none z-0 whitespace-nowrap overflow-hidden rotate-2">
          Journal
        </div>
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(var(--app-textPrimary),0.02)_0%,transparent_70%)] pointer-events-none z-0" />

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="flex items-center gap-4 mb-16 opacity-60 ml-4 md:ml-12">
              <span className="w-16 h-[1px] bg-textPrimary/40" />
              <span className="text-[9px] uppercase tracking-[0.4em] font-light text-textPrimary">The NIDAM Journal</span>
            </div>

            <h1 className="text-[clamp(4.5rem,10vw,8rem)] font-serif tracking-tighter leading-[0.8] mb-16 relative -ml-2 md:-ml-8 z-20">
              <span className="block text-textPrimary">Observations &</span>
              <span className="block italic text-textSecondary/40 ml-12 md:ml-32">Architecture.</span>
            </h1>

            <div className="flex flex-col md:flex-row items-start justify-between max-w-6xl ml-4 md:ml-24 gap-12 md:gap-0 mt-20">
              <div className="w-full md:w-1/2 relative">
                <div className="absolute -left-6 top-2 w-[1px] h-24 bg-gradient-to-b from-textPrimary/30 to-transparent hidden md:block" />
                <p className="text-textSecondary/70 text-[16px] md:text-[20px] font-light max-w-md leading-[1.9] tracking-wide">
                  Strategic notes on digital psychology, conversion behavior, and the invisible systems that build premium brands.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 2. COVER STORY (Featured) ──────────────────────────────── */}
      <section className="relative py-48 lg:py-64 bg-bgSecondary overflow-hidden border-b border-textPrimary/[0.02]">
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="mb-24 flex justify-between items-end">
             <p className="text-[10px] uppercase tracking-[0.3em] font-light text-textSecondary/50 border-l border-textPrimary/20 pl-4">Cover Story</p>
          </FadeIn>

          <Link to={`/blog/${featuredPost.slug}`} className="group block relative w-full">
             <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-0 relative">
               
               {/* Left: Oversized Image offset */}
               <div className="w-full lg:w-[70%] z-10">
                 <div className="relative h-[500px] md:h-[600px] lg:h-[800px] w-full bg-bgPrimary overflow-hidden border border-textPrimary/[0.03] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]">
                   <img 
                     src={featuredPost.image} 
                     alt={featuredPost.title}
                     className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.9] transform scale-105 group-hover:scale-100 transition-transform duration-[3000ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-transparent to-transparent opacity-60 pointer-events-none" />
                   <div className="absolute inset-0 bg-textPrimary mix-blend-overlay opacity-[0.02] pointer-events-none" />
                 </div>
               </div>

               {/* Right: Editorial Typography Overlap */}
               <div className="w-full lg:w-[45%] lg:absolute lg:right-0 lg:bottom-[10%] z-20">
                 <div className="bg-surface/60 backdrop-blur-3xl p-10 lg:p-16 border border-textPrimary/5 shadow-2xl transform lg:-translate-y-12 transition-transform duration-[2000ms] lg:group-hover:-translate-y-16">
                   <div className="flex items-center gap-4 mb-10 opacity-60">
                     <span className="text-[9px] uppercase tracking-[0.2em] font-light text-textPrimary">{featuredPost.cat}</span>
                     <span className="w-8 h-[1px] bg-textPrimary/30" />
                     <span className="text-[9px] uppercase tracking-[0.2em] font-light text-textSecondary">{featuredPost.date}</span>
                   </div>

                   <h2 className="text-3xl md:text-[3rem] font-serif font-light tracking-tight text-textPrimary leading-[1.1] mb-8">
                     Why Most Luxury<br />
                     <span className="italic text-textSecondary/50">Websites Actually Feel Cheap.</span>
                   </h2>

                   <p className="text-[14px] md:text-[15px] text-textSecondary/80 font-light leading-[2] max-w-sm mb-12">
                     {featuredPost.excerpt}
                   </p>

                   <div className="flex items-center gap-6">
                     <span className="text-[10px] uppercase tracking-[0.2em] font-light text-textPrimary border-b border-textPrimary/20 pb-1 group-hover:border-textPrimary transition-colors duration-500">
                       Read Observation
                     </span>
                     <ArrowUpRight size={14} className="text-textPrimary/50 group-hover:text-textPrimary transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                   </div>
                 </div>
               </div>

             </div>
          </Link>
        </div>
      </section>

      {/* ── 3. EDITORIAL ARCHIVE (Asymmetric System) ───────────────── */}
      <section className="relative py-48 lg:py-64 bg-bgPrimary overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <div className="flex flex-col gap-48 lg:gap-64">
            
            {/* Article 2: Image Right, Text Left. Minimal & Quiet */}
            <FadeIn>
              <Link to={`/blog/${supportingPosts[0].slug}`} className="group flex flex-col md:flex-row items-center justify-between gap-16 md:gap-32 w-full">
                <div className="w-full md:w-1/2 order-2 md:order-1 md:text-right flex flex-col items-start md:items-end">
                   <div className="flex items-center gap-4 mb-8 opacity-50">
                     <span className="hidden md:block w-8 h-[1px] bg-textPrimary/30" />
                     <span className="text-[9px] uppercase tracking-[0.2em] font-light text-textSecondary">{supportingPosts[0].date}</span>
                     <span className="md:hidden w-8 h-[1px] bg-textPrimary/30" />
                   </div>
                   <h3 className="text-3xl md:text-4xl lg:text-[3.5rem] font-serif font-light tracking-tight text-textPrimary leading-[1.1] mb-8">
                     Why Beautiful Websites<br />
                     <span className="italic text-textSecondary/50">Still Fail to Convert.</span>
                   </h3>
                   <p className="text-[14px] md:text-[15px] text-textSecondary/70 font-light leading-[2] max-w-sm mb-12">
                     {supportingPosts[0].excerpt}
                   </p>
                   <span className="text-[10px] uppercase tracking-[0.2em] font-light text-textPrimary border-b border-textPrimary/10 pb-1 group-hover:border-textPrimary/50 transition-colors duration-500">
                     Read Notes
                   </span>
                </div>
                <div className="w-full md:w-[45%] order-1 md:order-2">
                   <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden border border-textPrimary/5 shadow-2xl">
                     <img 
                       src={supportingPosts[0].image} 
                       alt={supportingPosts[0].title}
                       className="absolute inset-0 w-full h-full object-cover filter contrast-[1.05] brightness-[0.95] transform scale-105 group-hover:scale-100 transition-transform duration-[3000ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
                     />
                     <div className="absolute inset-0 bg-textPrimary mix-blend-overlay opacity-[0.03] pointer-events-none" />
                   </div>
                </div>
              </Link>
            </FadeIn>

            {/* Subtle Divider */}
            <div className="w-full max-w-md mx-auto h-[1px] bg-gradient-to-r from-transparent via-textPrimary/10 to-transparent hidden md:block" />

            {/* Article 3: Bold Cinematic Center */}
            <FadeIn>
              <Link to={`/blog/${supportingPosts[1].slug}`} className="group flex flex-col items-center text-center w-full max-w-5xl mx-auto">
                <div className="w-full h-[400px] md:h-[700px] relative overflow-hidden mb-16 border border-textPrimary/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)]">
                   <img 
                     src={supportingPosts[1].image} 
                     alt={supportingPosts[1].title}
                     className="absolute inset-0 w-full h-full object-cover filter contrast-[1.1] brightness-[0.85] transform scale-105 group-hover:scale-100 transition-transform duration-[4000ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary/90 via-transparent to-transparent pointer-events-none" />
                </div>
                
                <div className="max-w-3xl px-6 relative -mt-32 md:-mt-48 z-20 bg-bgPrimary/80 backdrop-blur-2xl p-10 md:p-16 border border-textPrimary/5 shadow-2xl transform transition-transform duration-1000 group-hover:-translate-y-4">
                   <p className="text-[9px] uppercase tracking-[0.2em] font-light text-textSecondary/60 mb-8">{supportingPosts[1].cat} — {supportingPosts[1].date}</p>
                   <h3 className="text-3xl md:text-5xl lg:text-[4rem] font-serif font-light tracking-tighter text-textPrimary leading-[1] mb-10">
                     Designing for<br />
                     <span className="italic text-textSecondary/50">High-End Travel.</span>
                   </h3>
                   <p className="text-[14px] md:text-[16px] text-textSecondary/70 font-light leading-[2] mb-12 max-w-xl mx-auto">
                     {supportingPosts[1].excerpt}
                   </p>
                   <div className="flex items-center justify-center gap-6 text-textPrimary group-hover:text-textSecondary transition-colors duration-500">
                     <span className="text-[10px] uppercase tracking-[0.2em] font-light border-b border-textPrimary/20 pb-1 group-hover:border-textPrimary">Explore System</span>
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