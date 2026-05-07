import React from 'react';
import { Link } from 'react-router-dom';
import { Section, FadeIn } from '../components/UI';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
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
    <div className="bg-bgPrimary min-h-screen overflow-x-hidden">
      <Section className="pt-40 pb-20 border-b border-textPrimary/5">
        <div className="container mx-auto px-6 max-w-6xl">
            <FadeIn>
              <p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/50 mb-6">Editorial</p>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-textPrimary leading-tight">
                Strategy, Systems &<br /><span className="text-textSecondary italic font-light">Design.</span>
              </h1>
              <p className="text-xl font-light text-textSecondary max-w-2xl leading-relaxed">
                Real observations from client work. Thoughts on digital psychology, conversion architecture, and building premium brands.
              </p>
            </FadeIn>
        </div>
      </Section>

      <Section className="py-32">
        <div className="container mx-auto px-6 max-w-6xl">
            
            {/* FEATURED ARTICLE */}
            <FadeIn>
              <Link to={`/blog/${featuredPost.slug}`} className="group cursor-pointer mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center block">
                <div className="h-[400px] lg:h-[500px] w-full bg-surface rounded-2xl overflow-hidden relative border border-textPrimary/5">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                </div>
                
                <div className="flex flex-col justify-center pr-4">
                  <div className="flex items-center gap-4 mb-6">
                      <span className="text-accentPrimary bg-accentPrimary/5 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-accentPrimary/10">{featuredPost.cat}</span>
                      <span className="text-textPrimary/20">—</span>
                      <span className="text-textSecondary text-xs font-medium tracking-wide">{featuredPost.date}</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-textPrimary group-hover:text-accentPrimary transition-colors duration-300 leading-tight">{featuredPost.title}</h2>
                  <p className="text-textSecondary text-base font-light leading-relaxed mb-8 max-w-md">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-textPrimary group-hover:text-accentPrimary transition-colors duration-300">
                        Read Article
                      </span>
                      <ArrowRight size={16} className="text-textPrimary group-hover:text-accentPrimary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* SUPPORTING ARTICLES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 pt-16 border-t border-textPrimary/5">
                {supportingPosts.map((post, i) => (
                    <FadeIn key={i} delay={i * 150}>
                        <Link to={`/blog/${post.slug}`} className="group cursor-pointer flex flex-col h-full bg-surface/30 rounded-2xl border border-textPrimary/5 overflow-hidden hover:shadow-lg hover:shadow-textPrimary/5 transition-all duration-300 hover:-translate-y-1 block">
                            <div className="h-64 w-full bg-surface border-b border-textPrimary/5 overflow-hidden relative">
                                <img 
                                  src={post.image} 
                                  alt={post.title}
                                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                            
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-accentPrimary bg-accentPrimary/5 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-accentPrimary/10">{post.cat}</span>
                                    <span className="text-textSecondary text-xs font-medium">{post.date}</span>
                                </div>
                                
                                <h2 className="text-2xl font-serif font-bold mb-3 text-textPrimary group-hover:text-accentPrimary transition-colors duration-300 leading-snug">{post.title}</h2>
                                <p className="text-textSecondary text-sm font-light leading-relaxed flex-1">{post.excerpt}</p>
                                
                                <div className="mt-8 pt-6 border-t border-textPrimary/5 flex items-center gap-2">
                                    <span className="text-sm font-medium text-textPrimary group-hover:text-accentPrimary transition-colors duration-300">
                                      Read Article
                                    </span>
                                    <ArrowRight size={14} className="text-textPrimary group-hover:text-accentPrimary group-hover:translate-x-1 transition-all duration-300" />
                                </div>
                            </div>
                        </Link>
                    </FadeIn>
                ))}
            </div>

        </div>
      </Section>
    </div>
  );
};

export default Blog;