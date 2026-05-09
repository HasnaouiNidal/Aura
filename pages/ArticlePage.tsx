import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Section, FadeIn } from '../components/UI';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

// Article Data Store
const articlesData = [
  {
    id: 'why-most-luxury-websites-actually-feel-cheap',
    title: 'Why Most Luxury Websites Actually Feel Cheap',
    cat: 'Client Strategy',
    date: 'Feb 12, 2024',
    excerpt: 'We audit dozens of premium service websites every month. Almost all of them make the same mistake: prioritizing aesthetic flair over a friction-free booking process. Here is what we\'ve learned rebuilding digital systems for high-end service businesses.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1600',
    content: (
      <div className="flex flex-col gap-32">
        {/* Insight Moment */}
        <div className="max-w-3xl mx-auto">
          <p className="text-[20px] md:text-[24px] font-light text-textPrimary leading-[1.8] mb-12">
            There is a pervasive myth in the digital agency world that "luxury" means dark backgrounds, gold accents, and painfully slow scroll animations. 
          </p>
          <p className="text-[16px] md:text-[18px] text-textSecondary/80 leading-[2] font-light">
            When a high-net-worth client is looking to book a private jet, a luxury villa, or elite concierge services, they aren't looking to be entertained by your website's CSS transitions. They are looking for one thing: <span className="text-textPrimary italic">Trust</span>. And trust is built through clarity, speed, and the complete absence of friction.
          </p>
        </div>

        {/* Oversized Cinematic Pull Quote */}
        <div className="w-full max-w-6xl mx-auto relative py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--app-textPrimary),0.02)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-textPrimary/20" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-transparent to-textPrimary/20" />
          
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-serif font-light text-center leading-[1.1] text-textPrimary px-6">
            "Luxury is not the addition of beautiful things. <br />
            <span className="italic text-textSecondary/40">It is the absolute removal of anything that gets in the way of the desired outcome."</span>
          </h2>
        </div>

        {/* Editorial Offset Body */}
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
           <div className="w-full md:w-1/3">
             <div className="sticky top-32">
               <p className="text-[10px] uppercase tracking-[0.3em] font-light text-textSecondary/50 mb-4 border-l border-textPrimary/20 pl-4">Observation 01</p>
               <h3 className="text-3xl font-serif font-light text-textPrimary leading-[1.2]">The Aesthetic Trap.</h3>
             </div>
           </div>
           <div className="w-full md:w-2/3">
             <p className="text-[16px] md:text-[18px] text-textSecondary/80 leading-[2] font-light mb-12">
               Many brands fall into what we call the "Aesthetic Trap." They hire an agency to build a site that looks like a modern art museum. The typography is tiny. The navigation is hidden behind a hamburger menu. The contact form asks for 14 different pieces of information before allowing the user to submit.
             </p>
             <p className="text-[16px] md:text-[18px] text-textSecondary/80 leading-[2] font-light">
               This is exactly how you lose premium clients to competitors who understand that time is the ultimate luxury. A true luxury digital experience functions like an invisible concierge. It anticipates the user's needs, provides the exact information required (and nothing more), and offers a seamless path to conversion.
             </p>
           </div>
        </div>

        {/* Highlighted Strategic Note */}
        <div className="w-full max-w-4xl mx-auto bg-surface/10 border border-textPrimary/[0.05] p-12 md:p-24 backdrop-blur-md relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(var(--app-textPrimary),0.05)_0%,transparent_70%)]" />
           <p className="text-[10px] uppercase tracking-[0.3em] font-light text-textSecondary/50 mb-8 border-l border-textPrimary/20 pl-4">Systems Philosophy</p>
           <h3 className="text-2xl md:text-3xl font-serif font-light text-textPrimary leading-[1.4] mb-8">
             Engineering the Invisible.
           </h3>
           <p className="text-[15px] md:text-[17px] text-textSecondary/70 leading-[2] font-light mb-8">
             When we rebuilt the digital system for Othman Tours, we didn't just redesign the frontend. We restructured the entire booking flow. We replaced generic contact forms with context-aware WhatsApp integrations. We moved the fleet specifications to the forefront.
           </p>
           <p className="text-[15px] md:text-[17px] text-textSecondary/70 leading-[2] font-light">
             The result wasn't just a "prettier" website. It was a measurable increase in high-ticket bookings. Why? Because the system finally matched the physical quality of the service they provided.
           </p>
        </div>
      </div>
    )
  },
  {
    id: 'why-beautiful-websites-still-fail-to-convert',
    title: 'Why Beautiful Websites Still Fail to Convert',
    cat: 'Digital Systems',
    date: 'Mar 05, 2024',
    excerpt: 'A great design might keep a visitor on your page for an extra ten seconds, but if your follow-up system is broken, you\'re just paying for expensive traffic.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
    content: (
      <div className="flex flex-col gap-32">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
           <div className="w-full md:w-1/2">
             <p className="text-[20px] md:text-[24px] font-light text-textPrimary leading-[1.8]">
               You've spent months perfectly aligning pixels. The typography is flawless. The color palette belongs in an editorial magazine. Yet, the leads aren't coming in. 
             </p>
           </div>
           <div className="w-full md:w-1/2 md:mt-16">
             <p className="text-[16px] md:text-[18px] text-textSecondary/80 leading-[2] font-light">
               This is the most common frustration we hear from new clients. They have a "website problem," they tell us. But after a 10-minute audit, it becomes clear: they don't have a website problem. They have a systems problem.
             </p>
           </div>
        </div>

        {/* Insight Card Asymmetric */}
        <div className="w-full max-w-6xl mx-auto relative flex justify-end">
          <div className="w-full md:w-[60%] bg-bgSecondary border border-textPrimary/[0.03] p-12 md:p-20 relative z-10 shadow-2xl">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-light text-textSecondary/50 mb-8 border-l border-textPrimary/20 pl-4">The Reality</h4>
            <p className="text-2xl md:text-3xl font-serif font-light text-textPrimary leading-[1.4]">
              A beautiful website is just the front door. If the hallway behind it is dark and confusing, the guest will still turn around and leave.
            </p>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[50%] h-[1px] bg-gradient-to-r from-transparent via-textPrimary/10 to-transparent hidden md:block" />
        </div>

        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
           <div className="w-full md:w-1/3">
             <div className="sticky top-32">
               <p className="text-[10px] uppercase tracking-[0.3em] font-light text-textSecondary/50 mb-4 border-l border-textPrimary/20 pl-4">Observation 02</p>
               <h3 className="text-3xl font-serif font-light text-textPrimary leading-[1.2]">The Follow-Up Failure.</h3>
             </div>
           </div>
           <div className="w-full md:w-2/3">
             <p className="text-[16px] md:text-[18px] text-textSecondary/80 leading-[2] font-light mb-12">
               Imagine walking into a high-end boutique. The lighting is perfect, the displays are immaculate. But when you walk up to the counter to buy something, the cashier makes you fill out a clipboard and says, "We'll get back to you in 24 to 48 hours."
             </p>
             <p className="text-[16px] md:text-[18px] text-textSecondary/80 leading-[2] font-light mb-12">
               This is exactly what happens when a premium digital brand relies on a generic form connected to an unmonitored inbox. The momentum of the sale is instantly killed.
             </p>
             <p className="text-[16px] md:text-[18px] text-textPrimary/80 leading-[2] font-light italic border-l border-textPrimary/20 pl-6">
               At NIDAM, we don't build isolated websites. We build connected systems. When a user clicks a CTA, they are injected into an automated flow—whether that's an instant WhatsApp conversation or a CRM-integrated intake form.
             </p>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 'what-we-learned-designing-for-high-end-travel',
    title: 'What We Learned Designing for High-End Travel',
    cat: 'Case Study Insights',
    date: 'Apr 22, 2024',
    excerpt: 'Behind the scenes of our work with Othman Tours. How replacing a generic contact form with an intentional WhatsApp flow doubled their qualified leads.',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1600',
    content: (
      <div className="flex flex-col gap-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[20px] md:text-[24px] font-light text-textPrimary leading-[1.8] mb-12">
            The luxury travel sector operates on a completely different set of rules. Volume is not the goal; qualified, high-intent inquiries are.
          </p>
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-textPrimary/20 mx-auto mb-12" />
          <p className="text-[16px] md:text-[18px] text-textSecondary/80 leading-[2] font-light">
            When Othman Tours approached us, they were dealing with the classic "beautiful brochure" problem. Their site looked okay, but it acted as a passive digital flyer rather than an active acquisition system.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
           <div className="w-full md:w-1/3">
             <div className="sticky top-32">
               <p className="text-[10px] uppercase tracking-[0.3em] font-light text-textSecondary/50 mb-4 border-l border-textPrimary/20 pl-4">System Update</p>
               <h3 className="text-3xl font-serif font-light text-textPrimary leading-[1.2]">Context is King.</h3>
             </div>
           </div>
           <div className="w-full md:w-2/3">
             <p className="text-[16px] md:text-[18px] text-textSecondary/80 leading-[2] font-light mb-12">
               Previously, a user looking at a Mercedes V-Class and a user looking at an Airport Transfer were both sent to the exact same blank contact form. The cognitive load was entirely on the user to explain what they wanted.
             </p>
             <p className="text-[16px] md:text-[18px] text-textSecondary/80 leading-[2] font-light">
               We implemented context-aware CTAs. If you click "Book Now" while viewing the V-Class, the WhatsApp message that opens on your phone is pre-filled with the exact vehicle choice. Friction: eliminated.
             </p>
           </div>
        </div>

        {/* Cinematic Visual Break */}
        <div className="w-full max-w-6xl mx-auto h-[500px] relative overflow-hidden border border-textPrimary/5 shadow-2xl">
          <img src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1600" alt="Architecture" className="w-full h-full object-cover filter contrast-[1.1] brightness-[0.9]" />
          <div className="absolute inset-0 bg-textPrimary mix-blend-overlay opacity-[0.05]" />
        </div>

        <div className="w-full max-w-4xl mx-auto bg-bgSecondary border border-textPrimary/[0.02] p-12 md:p-24 relative text-center">
           <h3 className="text-3xl md:text-4xl font-serif font-light text-textPrimary leading-[1.2] mb-12">
             Visual Breathing Room.
           </h3>
           <p className="text-[16px] md:text-[18px] text-textSecondary/80 leading-[2] font-light mb-12">
             We doubled the whitespace on every page. Luxury requires space to breathe. By drastically reducing the density of text and allowing the photography of the fleet to command the viewport, we silently communicated the premium nature of the service.
           </p>
           <p className="text-[14px] uppercase tracking-[0.2em] font-light text-textPrimary">
             The bounce rate dropped by 40%.
           </p>
        </div>
      </div>
    )
  }
];

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find current article
  const articleIndex = articlesData.findIndex(a => a.id === id);
  const article = articlesData[articleIndex];
  
  // Handle 404
  useEffect(() => {
    if (!article && id) {
      navigate('/blog');
    }
    window.scrollTo(0, 0);
  }, [article, id, navigate]);

  if (!article) return null;

  // Next article logic
  const nextArticle = articleIndex < articlesData.length - 1 ? articlesData[articleIndex + 1] : articlesData[0];

  return (
    <div className="bg-bgPrimary min-h-screen text-textPrimary overflow-x-hidden">
      
      {/* ── 1. CINEMATIC HERO ────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pb-32 border-b border-textPrimary/[0.02] overflow-hidden">
        {/* Background Image / Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-bgPrimary/80 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-bgPrimary/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--app-textPrimary),0.03)_0%,transparent_70%)] z-10 pointer-events-none" />
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover filter contrast-[1.05] brightness-[0.8]"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <FadeIn>
            <div className="mb-24">
              <Link to="/blog" className="inline-flex items-center gap-4 group">
                <ArrowLeft size={14} className="text-textSecondary/50 group-hover:text-textPrimary transition-colors" />
                <span className="text-[9px] uppercase tracking-[0.3em] font-light text-textSecondary/50 group-hover:text-textPrimary transition-colors">Return to Journal</span>
              </Link>
            </div>

            <div className="flex items-center gap-4 mb-16 opacity-60 ml-4 md:ml-12">
              <span className="w-16 h-[1px] bg-textPrimary/40" />
              <span className="text-[9px] uppercase tracking-[0.4em] font-light text-textPrimary">{article.cat}</span>
              <span className="text-[9px] uppercase tracking-[0.4em] font-light text-textSecondary">— {article.date}</span>
            </div>

            <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-serif tracking-tighter leading-[0.9] mb-16 max-w-5xl relative -ml-2 md:-ml-8">
              {article.title}
            </h1>

            <div className="flex flex-col md:flex-row items-start justify-between max-w-5xl ml-4 md:ml-24 gap-12 md:gap-0 mt-20">
              <div className="w-full md:w-2/3 relative">
                <div className="absolute -left-6 top-2 w-[1px] h-32 bg-gradient-to-b from-textPrimary/30 to-transparent hidden md:block" />
                <p className="text-textSecondary/80 text-[18px] md:text-[24px] font-light leading-[1.8] tracking-wide">
                  {article.excerpt}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 2. EDITORIAL ARTICLE BODY ────────────────────────────── */}
      <section className="py-32 md:py-48 bg-bgPrimary relative">
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            {article.content}
          </FadeIn>

          {/* Author / Editorial Meta */}
          <FadeIn className="max-w-4xl mx-auto mt-48 pt-16 border-t border-textPrimary/10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full border border-textPrimary/10 overflow-hidden filter grayscale">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" alt="Author" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-[14px] font-serif text-textPrimary">Nidal Hasnaoui</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-textSecondary/50 mt-1">Systems Architect</p>
              </div>
            </div>
            <button className="group flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.2em] font-light text-textPrimary border-b border-textPrimary/20 pb-1 group-hover:border-textPrimary transition-colors duration-500">
                Share Insight
              </span>
              <ArrowUpRight size={14} className="text-textPrimary/50 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
            </button>
          </FadeIn>
        </div>
      </section>

      {/* ── 3. THE NEXT CHAPTER (Cinematic Transition) ───────────── */}
      <section className="relative py-64 lg:py-80 overflow-hidden border-t border-textPrimary/[0.02]">
        {/* Layered Image Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={nextArticle.image} 
            alt={nextArticle.title}
            className="w-full h-full object-cover filter contrast-[1.05] brightness-[0.3] transform scale-105"
          />
          <div className="absolute inset-0 bg-bgPrimary/80 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-bgPrimary/50 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <FadeIn>
            <p className="text-[10px] uppercase tracking-[0.4em] font-light text-textSecondary/60 mb-12">The Next Chapter</p>
            
            <Link to={`/blog/${nextArticle.id}`} className="group block max-w-4xl mx-auto">
              <h2 className="text-[clamp(3.5rem,8vw,7rem)] font-serif font-light text-textPrimary leading-[0.9] mb-16 transform transition-transform duration-1000 group-hover:scale-105">
                {nextArticle.title.split(' ').slice(0, 3).join(' ')}<br />
                <span className="italic text-textSecondary/50">{nextArticle.title.split(' ').slice(3).join(' ')}</span>
              </h2>
              
              <div className="flex items-center justify-center gap-6">
                <span className="text-[10px] uppercase tracking-[0.2em] font-light text-textPrimary border-b border-textPrimary/20 pb-1 group-hover:border-textPrimary transition-colors duration-500">
                  Read Observation
                </span>
                <ArrowRight size={14} className="text-textPrimary/50 transform group-hover:translate-x-2 transition-all duration-500" />
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};

export default ArticlePage;
