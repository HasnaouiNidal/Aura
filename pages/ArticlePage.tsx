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
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600',
    content: (
      <>
        <p className="text-xl font-light text-textSecondary leading-relaxed mb-8">
          There is a pervasive myth in the digital agency world that "luxury" means dark backgrounds, gold accents, and painfully slow scroll animations. 
        </p>
        <p className="text-lg text-textSecondary leading-relaxed mb-12">
          When a high-net-worth client is looking to book a private jet, a luxury villa, or elite concierge services, they aren't looking to be entertained by your website's CSS transitions. They are looking for one thing: <strong>Trust</strong>. And trust is built through clarity, speed, and the complete absence of friction.
        </p>

        <div className="my-16 pl-8 border-l border-accentPrimary/40">
          <p className="text-2xl font-serif text-textPrimary italic leading-relaxed">
            "Luxury is not the addition of beautiful things. It is the absolute removal of anything that gets in the way of the desired outcome."
          </p>
        </div>

        <h3 className="text-2xl font-serif font-bold text-textPrimary mb-6 mt-16">The Aesthetic Trap</h3>
        <p className="text-lg text-textSecondary leading-relaxed mb-8">
          Many brands fall into what we call the "Aesthetic Trap." They hire an agency to build a site that looks like a modern art museum. The typography is tiny. The navigation is hidden behind a hamburger menu. The contact form asks for 14 different pieces of information before allowing the user to submit.
        </p>
        <p className="text-lg text-textSecondary leading-relaxed mb-12">
          This is exactly how you lose premium clients to competitors who understand that time is the ultimate luxury. A true luxury digital experience functions like an invisible concierge. It anticipates the user's needs, provides the exact information required (and nothing more), and offers a seamless path to conversion.
        </p>

        <h3 className="text-2xl font-serif font-bold text-textPrimary mb-6 mt-16">Engineering the Invisible</h3>
        <p className="text-lg text-textSecondary leading-relaxed mb-8">
          When we rebuilt the digital system for Othman Tours, we didn't just redesign the frontend. We restructured the entire booking flow. We replaced generic contact forms with context-aware WhatsApp integrations. We moved the fleet specifications to the forefront, removing the need for clients to "dig" for details.
        </p>
        <p className="text-lg text-textSecondary leading-relaxed mb-12">
          The result wasn't just a "prettier" website. It was a measurable increase in high-ticket bookings. Why? Because the system finally matched the physical quality of the service they provided.
        </p>
      </>
    )
  },
  {
    id: 'why-beautiful-websites-still-fail-to-convert',
    title: 'Why Beautiful Websites Still Fail to Convert',
    cat: 'Digital Systems',
    date: 'Mar 05, 2024',
    excerpt: 'A great design might keep a visitor on your page for an extra ten seconds, but if your follow-up system is broken, you\'re just paying for expensive traffic.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600',
    content: (
      <>
        <p className="text-xl font-light text-textSecondary leading-relaxed mb-8">
          You've spent months perfectly aligning pixels. The typography is flawless. The color palette belongs in an editorial magazine. Yet, the leads aren't coming in. 
        </p>
        <p className="text-lg text-textSecondary leading-relaxed mb-12">
          This is the most common frustration we hear from new clients. They have a "website problem," they tell us. But after a 10-minute audit, it becomes clear: they don't have a website problem. They have a systems problem.
        </p>

        <div className="bg-surface/30 border border-textPrimary/5 rounded-2xl p-10 my-16">
          <h4 className="text-sm font-bold uppercase tracking-widest text-accentPrimary mb-4">The Conversion Reality</h4>
          <p className="text-lg text-textSecondary leading-relaxed">
            A beautiful website is just the front door. If the hallway behind it is dark and confusing, the guest will still turn around and leave.
          </p>
        </div>

        <h3 className="text-2xl font-serif font-bold text-textPrimary mb-6 mt-16">The Follow-Up Failure</h3>
        <p className="text-lg text-textSecondary leading-relaxed mb-8">
          Imagine walking into a high-end boutique. The lighting is perfect, the displays are immaculate. But when you walk up to the counter to buy something, the cashier makes you fill out a clipboard and says, "We'll get back to you in 24 to 48 hours."
        </p>
        <p className="text-lg text-textSecondary leading-relaxed mb-12">
          This is exactly what happens when a premium digital brand relies on a generic `Contact Us` form connected to an unmonitored inbox. The momentum of the sale is instantly killed.
        </p>

        <h3 className="text-2xl font-serif font-bold text-textPrimary mb-6 mt-16">The System Solution</h3>
        <p className="text-lg text-textSecondary leading-relaxed mb-8">
          At AURA, we don't build isolated websites. We build connected systems. When a user clicks a CTA, they aren't sent to a dead-end page. They are injected into an automated flow—whether that's an instant WhatsApp conversation, a Calendly booking sync, or a CRM-integrated intake form. 
        </p>
      </>
    )
  },
  {
    id: 'what-we-learned-designing-for-high-end-travel',
    title: 'What We Learned Designing for High-End Travel',
    cat: 'Case Study Insights',
    date: 'Apr 22, 2024',
    excerpt: 'Behind the scenes of our work with Othman Tours. How replacing a generic contact form with an intentional WhatsApp flow doubled their qualified leads.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600',
    content: (
      <>
        <p className="text-xl font-light text-textSecondary leading-relaxed mb-8">
          The luxury travel sector operates on a completely different set of rules. Volume is not the goal; qualified, high-intent inquiries are.
        </p>
        <p className="text-lg text-textSecondary leading-relaxed mb-12">
          When Othman Tours approached us, they were dealing with the classic "beautiful brochure" problem. Their site looked okay, but it acted as a passive digital flyer rather than an active acquisition system. Here is what we changed.
        </p>

        <h3 className="text-2xl font-serif font-bold text-textPrimary mb-6 mt-16">Observation 1: Context is King</h3>
        <p className="text-lg text-textSecondary leading-relaxed mb-8">
          Previously, a user looking at a Mercedes V-Class and a user looking at an Airport Transfer were both sent to the exact same blank contact form. The cognitive load was entirely on the user to explain what they wanted.
        </p>
        <p className="text-lg text-textSecondary leading-relaxed mb-12">
          We implemented context-aware CTAs. If you click "Book Now" while viewing the V-Class, the WhatsApp message that opens on your phone is pre-filled with: *"Hello, I am interested in booking the Mercedes V-Class."* Friction: eliminated.
        </p>

        <div className="w-full h-[400px] rounded-2xl overflow-hidden my-16 relative border border-textPrimary/5">
          <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1600" alt="Minimalist Office" className="w-full h-full object-cover" />
        </div>

        <h3 className="text-2xl font-serif font-bold text-textPrimary mb-6 mt-16">Observation 2: Visual Breathing Room</h3>
        <p className="text-lg text-textSecondary leading-relaxed mb-8">
          We doubled the whitespace on every page. Luxury requires space to breathe. By drastically reducing the density of text and allowing the photography of the fleet to command the viewport, we silently communicated the premium nature of the service.
        </p>
        <p className="text-lg text-textSecondary leading-relaxed mb-12">
          The result? The bounce rate dropped by 40%, and the lead quality skyrocketed. Design is not just how it looks; it's how it filters your clients.
        </p>
      </>
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
    <div className="bg-bgPrimary min-h-screen">
      
      {/* ── HERO SECTION ─────────────────────────────────────────── */}
      <Section className="pt-40 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-textSecondary hover:text-accentPrimary transition-colors mb-12">
              <ArrowLeft size={14} /> Back to Insights
            </Link>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-accentPrimary bg-accentPrimary/5 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-accentPrimary/10">
                {article.cat}
              </span>
              <span className="text-textPrimary/20">—</span>
              <span className="text-textSecondary text-xs font-medium tracking-wide">
                {article.date}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-textPrimary leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-textSecondary leading-relaxed mb-16">
              {article.excerpt}
            </p>
          </FadeIn>
        </div>

        {/* Hero Image */}
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn delay={150}>
            <div className="w-full h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden relative border border-textPrimary/5">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ── ARTICLE CONTENT ──────────────────────────────────────── */}
      <Section className="py-20 border-b border-textPrimary/5">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <div className="article-content">
              {article.content}
            </div>
          </FadeIn>

          {/* Social Share / Meta */}
          <FadeIn className="mt-24 pt-8 border-t border-textPrimary/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="https://picsum.photos/100/100?grayscale" alt="Author" className="w-12 h-12 rounded-full border border-textPrimary/10" />
              <div>
                <p className="text-sm font-bold text-textPrimary">Nidal Hasnaoui</p>
                <p className="text-xs text-textSecondary">Founder & Systems Architect</p>
              </div>
            </div>
            <button className="text-xs font-bold uppercase tracking-widest text-textPrimary hover:text-accentPrimary transition-colors flex items-center gap-2">
              Share Article <ArrowUpRight size={14} />
            </button>
          </FadeIn>
        </div>
      </Section>

      {/* ── NEXT ARTICLE ─────────────────────────────────────────── */}
      <Section className="py-32 bg-surface/30">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <FadeIn>
            <p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/50 mb-6">Up Next</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12 text-textPrimary leading-tight">
              {nextArticle.title}
            </h2>
            <Link 
              to={`/blog/${nextArticle.id}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-textPrimary text-bgPrimary rounded-lg text-sm font-semibold hover:bg-accentPrimary hover:text-white transition-all duration-300"
            >
              Read Next Article <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </Section>

    </div>
  );
};

export default ArticlePage;
