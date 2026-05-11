import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Section, FadeIn, MeshBackground } from '../components/UI';
import othmanScreenshot from '../assets/othman_screenshot.png';

const systemParts = [
  'Social Media Direction',
  'Premium Website',
  'Booking Flow',
  'WhatsApp Inquiry Path',
  'CRM Structure',
  'Reporting Logic',
];

const systemFlow = [
  'Instagram / Search',
  'Website',
  'Booking Request',
  'WhatsApp',
  'CRM',
  'Follow-up',
];

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-bgPrimary text-textPrimary overflow-x-hidden">
      {/* ─────────────────────────────────────────────
          HERO
      ───────────────────────────────────────────── */}
      <Section className="relative pt-40 md:pt-48 pb-24 md:pb-32 overflow-hidden bg-bgPrimary border-b border-textPrimary/[0.04]">
        <MeshBackground />

        <div className="absolute top-[14%] -right-10 md:-right-24 text-[8rem] md:text-[18rem] font-serif tracking-tighter leading-none text-textPrimary/[0.015] pointer-events-none select-none">
          Work
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(var(--app-textPrimary),0.025)_0%,transparent_65%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-textPrimary/[0.04] border border-textPrimary/10 mb-8 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-accentSecondary animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-accentSecondary font-semibold">
                  Our Work
                </span>
              </div>

              <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] font-serif tracking-tighter leading-[0.9] mb-8">
                <span className="block text-textPrimary">Real Businesses.</span>
                <span className="block italic text-textSecondary/45 font-light">
                  Real Systems.
                </span>
              </h1>

              <p className="text-[16px] md:text-[20px] text-textSecondary/80 max-w-3xl mx-auto leading-[1.9] font-light">
                Every project is presented as a complete digital system — not just a website.
                We show the business problem, the journey we built, the tools we connected,
                and how the system helps attract, capture, follow up, and grow.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────
          WHAT THIS PAGE SHOWS
      ───────────────────────────────────────────── */}
      <Section className="py-24 md:py-32 bg-bgSecondary/40 border-b border-textPrimary/[0.04]">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
              <div>
                <div className="flex items-center gap-4 mb-10 opacity-60">
                  <span className="w-12 h-[1px] bg-textPrimary/40" />
                  <span className="text-[9px] uppercase tracking-[0.35em] font-light text-textPrimary">
                    How to read our work
                  </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-serif tracking-tight leading-[1] mb-8">
                  We don’t show
                  <span className="block italic text-textSecondary/45 font-light">
                    pretty pages only.
                  </span>
                </h2>
              </div>

              <div className="relative">
                <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(var(--app-textPrimary),0.025)_0%,transparent_70%)] pointer-events-none" />

                <div className="relative bg-surface/30 backdrop-blur-md border border-textPrimary/[0.06] rounded-[2rem] p-8 md:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.04)]">
                  <p className="text-[16px] md:text-[18px] text-textSecondary/80 leading-[2] font-light mb-8">
                    A NIDAM project connects many separate parts into one business system:
                    social media, website, lead capture, WhatsApp flow, CRM, automation,
                    reporting, and behavior analysis. Alone, each part is useful. Connected
                    together, they become a client acquisition system.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      'Attract attention',
                      'Build trust',
                      'Capture inquiries',
                      'Move to WhatsApp',
                      'Organize leads',
                      'Improve decisions',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-textPrimary/[0.06] bg-bgPrimary/50 px-4 py-3"
                      >
                        <CheckCircle2 size={15} className="text-accentSecondary shrink-0" />
                        <span className="text-sm text-textSecondary">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────
          FEATURED SYSTEM CASE
      ───────────────────────────────────────────── */}
      <Section className="py-28 md:py-40 bg-bgPrimary relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(var(--app-textPrimary),0.02)_0%,transparent_65%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="max-w-6xl mx-auto mb-16">
              <div className="flex items-center gap-4 mb-8 opacity-60">
                <span className="w-12 h-[1px] bg-textPrimary/40" />
                <span className="text-[9px] uppercase tracking-[0.35em] font-light text-textPrimary">
                  Featured System
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-serif tracking-tight leading-[1]">
                Othman Tours
                <span className="block italic text-textSecondary/45 font-light">
                  Tourism Client System.
                </span>
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <article className="max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden border border-textPrimary/[0.07] bg-surface/25 backdrop-blur-sm shadow-[0_40px_120px_rgba(0,0,0,0.06)]">
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                {/* LEFT CONTENT */}
                <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-8">
                      <span className="px-3 py-1.5 rounded-full bg-accentPrimary/10 text-accentPrimary border border-accentPrimary/20 text-[10px] font-bold uppercase tracking-[0.18em]">
                        Luxury Tourism
                      </span>

                      <span className="px-3 py-1.5 rounded-full bg-textPrimary/[0.04] text-textSecondary border border-textPrimary/10 text-[10px] font-bold uppercase tracking-[0.18em]">
                        Northern Morocco
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-serif tracking-tight leading-[1.05] mb-6">
                      From scattered interest
                      <span className="block italic text-textSecondary/45 font-light">
                        to a clear booking path.
                      </span>
                    </h3>

                    <p className="text-textSecondary/80 leading-[1.9] font-light mb-10">
                      Othman Tours needed more than a beautiful website. The goal was to
                      create a connected journey where a traveler can discover the brand,
                      understand the premium experience, request a journey, move into
                      WhatsApp, and become easier to follow up with.
                    </p>

                    {/* SYSTEM PARTS */}
                    <div className="grid sm:grid-cols-2 gap-3 mb-10">
                      {systemParts.map((part) => (
                        <div
                          key={part}
                          className="group rounded-2xl border border-textPrimary/[0.07] bg-bgPrimary/60 px-4 py-4 hover:border-accentSecondary/30 hover:bg-accentSecondary/[0.03] transition-all duration-500"
                        >
                          <span className="block w-1.5 h-1.5 rounded-full bg-accentSecondary mb-3 group-hover:scale-125 transition-transform duration-500" />
                          <p className="text-sm text-textPrimary/85 leading-relaxed">
                            {part}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* MINI FLOW */}
                    <div className="rounded-[1.5rem] border border-textPrimary/[0.07] bg-bgPrimary/70 p-5 md:p-6 mb-10">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-textSecondary/50 font-semibold mb-5">
                        System Flow
                      </p>

                      <div className="flex flex-wrap items-center gap-2">
                        {systemFlow.map((step, index) => (
                          <React.Fragment key={step}>
                            <span className="px-3 py-2 rounded-full bg-textPrimary/[0.04] border border-textPrimary/[0.07] text-[11px] text-textSecondary">
                              {step}
                            </span>

                            {index < systemFlow.length - 1 && (
                              <span className="text-textSecondary/40 text-xs">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTAS */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/case-studies/othman-tours"
                      className="group inline-flex items-center justify-center px-6 py-4 rounded-xl bg-gradient-to-r from-accentPrimary to-accentSecondary text-white text-sm font-semibold shadow-[0_20px_60px_rgba(139,92,246,0.25)] hover:-translate-y-0.5 hover:shadow-[0_30px_80px_rgba(139,92,246,0.35)] transition-all duration-500"
                    >
                      View The System
                      <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
                    </Link>

                    <a
                      href="https://othman-liard.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-4 rounded-xl border border-textPrimary/[0.08] bg-bgPrimary/70 text-textPrimary text-sm font-semibold hover:bg-textPrimary/[0.04] transition-all duration-500"
                    >
                      Visit Live Website
                    </a>
                  </div>
                </div>

                {/* RIGHT VISUAL */}
                <div className="relative min-h-[460px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-textPrimary/[0.06] bg-bgSecondary/40 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(var(--app-textPrimary),0.035)_0%,transparent_50%)] pointer-events-none" />

                  <div className="absolute top-8 left-8 right-8 z-20 flex items-center justify-between">
                    <div className="px-3 py-1.5 rounded-full bg-bgPrimary/70 backdrop-blur-md border border-textPrimary/[0.08] text-[9px] uppercase tracking-[0.24em] text-textSecondary">
                      Live System
                    </div>

                    <div className="px-3 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-[9px] uppercase tracking-[0.24em]">
                      WhatsApp Ready
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                    <div className="relative w-full max-w-xl group">
                      <div className="absolute -inset-8 bg-gradient-to-tr from-accentPrimary/10 via-accentSecondary/10 to-transparent blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

                      <div className="relative rounded-[1.8rem] overflow-hidden border border-textPrimary/[0.08] bg-bgPrimary shadow-[0_40px_110px_rgba(0,0,0,0.16)] rotate-1 group-hover:rotate-0 group-hover:-translate-y-2 transition-all duration-700">
                        <div className="flex items-center gap-2 px-5 py-4 border-b border-textPrimary/[0.06] bg-bgPrimary/90">
                          <span className="w-2.5 h-2.5 rounded-full bg-textPrimary/20" />
                          <span className="w-2.5 h-2.5 rounded-full bg-textPrimary/15" />
                          <span className="w-2.5 h-2.5 rounded-full bg-textPrimary/10" />
                          <span className="ml-auto text-[10px] text-textSecondary/50">
                            othman-tours.com
                          </span>
                        </div>

                        <img
                          src={othmanScreenshot}
                          alt="Othman Tours website preview"
                          className="w-full h-[300px] md:h-[420px] object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </FadeIn>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────
          HOW WE SHOW A PROJECT
      ───────────────────────────────────────────── */}
      <Section className="py-24 md:py-36 bg-bgSecondary/40 border-y border-textPrimary/[0.04]">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-start">
              <div>
                <p className="text-[9px] uppercase tracking-[0.35em] text-textSecondary/50 mb-8">
                  Our presentation method
                </p>

                <h2 className="text-4xl md:text-6xl font-serif tracking-tight leading-[1] mb-8">
                  Every project is shown
                  <span className="block italic text-textSecondary/45 font-light">
                    as a business journey.
                  </span>
                </h2>

                <p className="text-textSecondary/80 leading-[1.9] font-light">
                  We do not only show screenshots. We explain what was broken,
                  what we connected, and how the client journey becomes clearer.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    num: '01',
                    title: 'The business problem',
                    text: 'What was unclear, manual, scattered, or hard to measure before NIDAM.',
                  },
                  {
                    num: '02',
                    title: 'The system map',
                    text: 'How visitors move from discovery to website, request, WhatsApp, CRM, and follow-up.',
                  },
                  {
                    num: '03',
                    title: 'What we created',
                    text: 'The actual parts: page, forms, WhatsApp flow, CRM logic, reports, and optimization.',
                  },
                  {
                    num: '04',
                    title: 'The honest result',
                    text: 'A clearer client journey without inventing fake numbers or fake testimonials.',
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="rounded-[1.5rem] border border-textPrimary/[0.07] bg-bgPrimary/60 p-7 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.05)] transition-all duration-500"
                  >
                    <p className="text-[10px] uppercase tracking-[0.25em] text-accentSecondary mb-5">
                      {item.num}
                    </p>
                    <h3 className="text-xl font-serif text-textPrimary mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm text-textSecondary/80 leading-[1.8]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default CaseStudies;