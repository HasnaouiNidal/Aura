import React, { useEffect } from 'react';
import { Section, FadeIn } from '../components/UI';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-bgPrimary min-h-screen text-textPrimary overflow-hidden flex flex-col justify-center">
      
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-bgSecondary to-transparent opacity-50" />
        <div className="absolute top-1/4 -right-[20%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(var(--app-textPrimary),0.02)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 -left-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(var(--app-textPrimary),0.015)_0%,transparent_60%)]" />
      </div>

      <Section className="relative pt-32 pb-32 md:pt-48 md:pb-48 z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-24 lg:gap-32 relative">
            
            {/* ── LEFT: EDITORIAL ONBOARDING ── */}
            <div className="w-full lg:w-[45%] relative">
              <FadeIn>
                <div className="flex items-center gap-4 mb-16 opacity-50">
                  <span className="w-12 h-[1px] bg-textPrimary/40" />
                  <span className="text-[9px] uppercase tracking-[0.4em] font-light text-textPrimary">System Review</span>
                </div>
                
                <h1 className="text-4xl md:text-[4.5rem] lg:text-[5.5rem] font-serif font-light tracking-tighter leading-[1] mb-16 text-textPrimary relative">
                  Begin your<br />
                  <span className="italic text-textSecondary/50 ml-8 md:ml-16">architecture.</span>
                </h1>
                
                <div className="space-y-16">
                  <div className="relative">
                    <div className="absolute -left-6 top-2 w-[1px] h-full bg-gradient-to-b from-textPrimary/20 to-transparent hidden md:block" />
                    <p className="text-[16px] md:text-[18px] text-textSecondary/80 font-light leading-[2] max-w-md">
                      We don’t just build interfaces. We engineer complete client acquisition flows. Share the current state of your business, and we will diagnose the friction points in your system.
                    </p>
                  </div>
                  
                  <div className="bg-surface/30 backdrop-blur-sm border border-textPrimary/5 p-8 md:p-10 max-w-md transform transition-transform duration-1000 hover:-translate-y-1 hover:shadow-2xl">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-light text-textSecondary/50 mb-6">The Process</p>
                    <p className="text-[14px] md:text-[15px] text-textSecondary/80 font-light leading-[1.9]">
                      Upon receiving your inquiry, we will quietly review your existing digital infrastructure. If we believe a systemic upgrade will yield measurable ROI, we will invite you to a private architectural review.
                    </p>
                  </div>
                  
                  <div className="pt-8 flex flex-col gap-3">
                    <p className="text-[9px] uppercase tracking-[0.2em] font-light text-textSecondary/40">Direct Access</p>
                    <p className="text-[14px] font-serif tracking-wide text-textPrimary">nidam.system@gmail.com</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* ── RIGHT: PREMIUM FORM EXPERIENCE ── */}
            <div className="w-full lg:w-[50%] lg:mt-32 relative">
              <FadeIn delay={200}>
                {/* Abstract offset framing */}
                <div className="absolute -inset-8 bg-surface/10 border border-textPrimary/[0.02] transform translate-x-4 translate-y-4 -z-10 hidden md:block pointer-events-none" />
                
                <form className="bg-bgSecondary/80 backdrop-blur-3xl p-8 md:p-16 border border-textPrimary/[0.03] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] flex flex-col gap-12 relative z-10">
                  
                  {/* Name & Email Group */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative group">
                      <input 
                        type="text" 
                        id="name"
                        placeholder=" "
                        className="peer w-full bg-transparent border-b border-textPrimary/10 px-0 py-3 text-[15px] font-light text-textPrimary focus:outline-none focus:border-textPrimary/40 transition-colors duration-500 placeholder-transparent" 
                      />
                      <label 
                        htmlFor="name"
                        className="absolute left-0 top-3 text-[11px] uppercase tracking-[0.15em] font-light text-textSecondary/40 transition-all duration-500 peer-focus:-top-5 peer-focus:text-[9px] peer-focus:text-textSecondary/60 peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-[9px] peer-not-placeholder-shown:text-textSecondary/60 cursor-text"
                      >
                        Your Name
                      </label>
                    </div>

                    <div className="relative group">
                      <input 
                        type="email" 
                        id="email"
                        placeholder=" "
                        className="peer w-full bg-transparent border-b border-textPrimary/10 px-0 py-3 text-[15px] font-light text-textPrimary focus:outline-none focus:border-textPrimary/40 transition-colors duration-500 placeholder-transparent" 
                      />
                      <label 
                        htmlFor="email"
                        className="absolute left-0 top-3 text-[11px] uppercase tracking-[0.15em] font-light text-textSecondary/40 transition-all duration-500 peer-focus:-top-5 peer-focus:text-[9px] peer-focus:text-textSecondary/60 peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-[9px] peer-not-placeholder-shown:text-textSecondary/60 cursor-text"
                      >
                        Email Address
                      </label>
                    </div>
                  </div>

                  {/* Business Type / Context */}
                  <div className="relative group mt-4">
                    <input 
                      type="text" 
                      id="context"
                      placeholder=" "
                      className="peer w-full bg-transparent border-b border-textPrimary/10 px-0 py-3 text-[15px] font-light text-textPrimary focus:outline-none focus:border-textPrimary/40 transition-colors duration-500 placeholder-transparent" 
                    />
                    <label 
                      htmlFor="context"
                      className="absolute left-0 top-3 text-[11px] uppercase tracking-[0.15em] font-light text-textSecondary/40 transition-all duration-500 peer-focus:-top-5 peer-focus:text-[9px] peer-focus:text-textSecondary/60 peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-[9px] peer-not-placeholder-shown:text-textSecondary/60 cursor-text"
                    >
                      Current Website URL or Business Name
                    </label>
                  </div>

                  {/* The Conversation */}
                  <div className="relative group mt-8">
                    <textarea 
                      id="message"
                      rows={4} 
                      placeholder=" "
                      className="peer w-full bg-transparent border-b border-textPrimary/10 px-0 py-3 text-[15px] font-light text-textPrimary focus:outline-none focus:border-textPrimary/40 transition-colors duration-500 resize-none placeholder-transparent"
                    ></textarea>
                    <label 
                      htmlFor="message"
                      className="absolute left-0 top-3 text-[11px] uppercase tracking-[0.15em] font-light text-textSecondary/40 transition-all duration-500 peer-focus:-top-5 peer-focus:text-[9px] peer-focus:text-textSecondary/60 peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-[9px] peer-not-placeholder-shown:text-textSecondary/60 cursor-text"
                    >
                      Where is your system currently creating friction?
                    </label>
                  </div>

                  {/* CTA Area */}
                  <div className="mt-12 flex justify-end">
                    <div className="relative inline-block group cursor-pointer">
                      {/* Subtle hover glow layer */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--app-textPrimary),0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 scale-150 blur-xl pointer-events-none" />
                      
                      {/* Button Body */}
                      <button 
                        type="button"
                        className="relative bg-textPrimary text-bgPrimary px-12 py-6 flex items-center justify-center gap-4 transform transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]"
                      >
                        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Plan My System</span>
                        <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-500" />
                      </button>
                    </div>
                  </div>

                </form>
              </FadeIn>
            </div>

          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;