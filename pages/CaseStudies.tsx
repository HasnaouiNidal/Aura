import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  CheckCircle2,
  Database,
  MessageCircle,
  BarChart3,
  Layers,
  ArrowRight,
  MousePointerClick,
  Activity,
  Users
} from 'lucide-react';
import { Section, FadeIn, MeshBackground } from '../components/UI';

const FloatingLabel = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`absolute hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-textPrimary/[0.08] bg-surface/50 backdrop-blur-md text-[9px] uppercase tracking-[0.2em] text-textSecondary shadow-sm ${className}`}>
    <div className="w-1.5 h-1.5 rounded-full bg-accentSecondary/80 animate-pulse" />
    {children}
  </div>
);

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-bgPrimary text-textPrimary overflow-x-hidden">
      {/* ─────────────────────────────────────────────
          HERO
      ───────────────────────────────────────────── */}
      <Section className="relative pt-40 md:pt-56 pb-24 md:pb-32 overflow-hidden bg-bgPrimary border-b border-textPrimary/[0.04]">
        <MeshBackground />

        {/* Soft background system diagrams (SVG lines) */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Subtle flow lines */}
            <path d="M 200 200 C 400 200, 400 400, 600 400 S 800 200, 1000 200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M 300 600 C 500 600, 500 300, 800 300" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>

        <FloatingLabel className="top-[25%] left-[15%]">Lead Captured</FloatingLabel>
        <FloatingLabel className="top-[45%] right-[12%]">WhatsApp Follow-up</FloatingLabel>
        <FloatingLabel className="bottom-[30%] left-[20%]">CRM Updated</FloatingLabel>
        <FloatingLabel className="top-[20%] right-[25%]">Reporting Synced</FloatingLabel>
        <FloatingLabel className="bottom-[20%] right-[20%]">Client Journey</FloatingLabel>

        <div className="absolute top-[14%] -right-10 md:-right-24 text-[8rem] md:text-[18rem] font-serif tracking-tighter leading-none text-textPrimary/[0.015] pointer-events-none select-none">
          System
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(var(--app-textPrimary),0.025)_0%,transparent_65%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-textPrimary/[0.04] border border-textPrimary/10 mb-8 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-accentSecondary animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-accentSecondary font-semibold">
                  Operating Architecture
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

              <div className="mt-12 pt-10 border-t border-textPrimary/[0.06] flex justify-center">
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-textSecondary/60 font-medium flex items-center gap-3">
                  <span className="w-8 h-px bg-textPrimary/20" />
                  Connected systems designed to reduce friction and improve business clarity.
                  <span className="w-8 h-px bg-textPrimary/20" />
                </p>
              </div>
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
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-10 opacity-60">
                  <span className="w-12 h-[1px] bg-textPrimary/40" />
                  <span className="text-[9px] uppercase tracking-[0.35em] font-light text-textPrimary">
                    Operational Proof
                  </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-serif tracking-tight leading-[1] mb-8">
                  We don’t show
                  <span className="block italic text-textSecondary/45 font-light">
                    pretty pages only.
                  </span>
                </h2>

                <p className="text-[16px] md:text-[18px] text-textSecondary/80 leading-[1.9] font-light mb-8 max-w-lg">
                  A NIDAM project connects many separate parts into one business system. 
                  Alone, each part is useful. Connected together, they become an intelligent client acquisition system.
                </p>
              </div>

              {/* OPERATIONAL CENTER VISUAL */}
              <div className="relative">
                <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(var(--app-textPrimary),0.025)_0%,transparent_70%)] pointer-events-none" />

                <div className="relative bg-surface/40 backdrop-blur-xl border border-textPrimary/[0.08] rounded-[2.5rem] p-8 md:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.04)] grid gap-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-textSecondary font-semibold">System Operations</p>
                    <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.1em] text-accentSecondary bg-accentSecondary/10 px-2 py-1 rounded-full border border-accentSecondary/20">
                      <span className="w-1 h-1 rounded-full bg-accentSecondary animate-pulse" /> Active
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* CRM Card Mockup */}
                    <div className="rounded-2xl border border-textPrimary/[0.06] bg-bgPrimary/80 p-5 shadow-sm">
                      <div className="flex justify-between items-start mb-4">
                        <Database size={14} className="text-textSecondary/50" />
                        <span className="text-[9px] text-textSecondary/60 bg-textPrimary/[0.03] px-2 py-0.5 rounded-md">New Inquiry</span>
                      </div>
                      <p className="text-sm font-medium text-textPrimary mb-1">Qualified Lead</p>
                      <p className="text-[11px] text-textSecondary/70 mb-3">Source: Instagram Ads</p>
                      <div className="h-1 w-full bg-textPrimary/5 rounded-full overflow-hidden">
                        <div className="h-full w-[35%] bg-accentSecondary/60" />
                      </div>
                    </div>

                    {/* WhatsApp Inquiry Preview */}
                    <div className="rounded-2xl border border-textPrimary/[0.06] bg-bgPrimary/80 p-5 shadow-sm">
                      <div className="flex justify-between items-start mb-4">
                        <MessageCircle size={14} className="text-textSecondary/50" />
                        <span className="text-[9px] text-textSecondary/60 bg-textPrimary/[0.03] px-2 py-0.5 rounded-md">Follow-up</span>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-accentSecondary/10 border border-accentSecondary/20 rounded-lg rounded-tr-none p-2 text-[10px] text-textSecondary ml-4">
                          Booking request received.
                        </div>
                        <div className="bg-textPrimary/[0.04] border border-textPrimary/[0.05] rounded-lg rounded-tl-none p-2 text-[10px] text-textSecondary mr-4">
                          Automated greeting sent.
                        </div>
                      </div>
                    </div>

                    {/* Reporting Analytics Card */}
                    <div className="rounded-2xl border border-textPrimary/[0.06] bg-bgPrimary/80 p-5 shadow-sm col-span-2 flex items-center gap-6">
                      <div className="w-10 h-10 rounded-full border border-textPrimary/10 flex items-center justify-center shrink-0">
                        <BarChart3 size={16} className="text-textSecondary/60" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <p className="text-[11px] font-medium text-textPrimary">Conversion Path</p>
                          <span className="text-[10px] text-accentSecondary">Reporting Synced</span>
                        </div>
                        <p className="text-[10px] text-textSecondary/60">Traffic → Website → WhatsApp → CRM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────
          NIDAM SYSTEM LAYERS (NEW SECTION)
      ───────────────────────────────────────────── */}
      <Section className="py-24 md:py-36 bg-bgPrimary border-b border-textPrimary/[0.04] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-16">
                <div>
                  <div className="flex items-center gap-4 mb-6 opacity-60">
                    <span className="w-12 h-[1px] bg-textPrimary/40" />
                    <span className="text-[9px] uppercase tracking-[0.35em] font-light text-textPrimary">
                      System Architecture
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-[1]">
                    NIDAM System Layers
                  </h2>
                </div>
                <div className="hidden md:block">
                  <p className="text-xs text-textSecondary/60 max-w-xs text-right leading-relaxed">
                    Every NIDAM system contains multiple connected layers, structured to eliminate friction.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { num: '01', title: 'Attention Layer', desc: 'Social media, ads, discovery.', icon: <Users size={16} /> },
                  { num: '02', title: 'Experience Layer', desc: 'Website clarity, trust, premium UX.', icon: <Layers size={16} /> },
                  { num: '03', title: 'Conversion Layer', desc: 'Forms, booking flow, inquiry capture.', icon: <MousePointerClick size={16} /> },
                  { num: '04', title: 'Communication Layer', desc: 'WhatsApp flow and contextual communication.', icon: <MessageCircle size={16} /> },
                  { num: '05', title: 'Organization Layer', desc: 'CRM structure and lead management.', icon: <Database size={16} /> },
                  { num: '06', title: 'Intelligence Layer', desc: 'Reports, analytics, behavior observation.', icon: <Activity size={16} /> },
                ].map((layer) => (
                  <div key={layer.num} className="group relative p-8 rounded-[2rem] bg-bgSecondary/30 border border-textPrimary/[0.05] hover:bg-surface/50 hover:border-textPrimary/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.03)]">
                    <div className="flex justify-between items-start mb-10">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accentSecondary/80">
                        {layer.num}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-bgPrimary border border-textPrimary/10 flex items-center justify-center text-textSecondary group-hover:text-accentSecondary transition-colors">
                        {layer.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-serif text-textPrimary mb-3">{layer.title}</h3>
                    <p className="text-[13px] text-textSecondary/70 leading-relaxed">{layer.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────
          FEATURED SYSTEM CASE (OTHMAN TOURS)
      ───────────────────────────────────────────── */}
      <Section className="py-28 md:py-40 bg-bgSecondary/20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(var(--app-textPrimary),0.02)_0%,transparent_65%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="max-w-6xl mx-auto mb-16">
              <div className="flex items-center gap-4 mb-8 opacity-60">
                <span className="w-12 h-[1px] bg-textPrimary/40" />
                <span className="text-[9px] uppercase tracking-[0.35em] font-light text-textPrimary">
                  System Case Study
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-serif tracking-tight leading-[1]">
                Othman Tours
                <span className="block italic text-textSecondary/45 font-light">
                  Tourism Acquisition System.
                </span>
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <article className="max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden border border-textPrimary/[0.07] bg-surface/40 backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.06)]">
              <div className="grid lg:grid-cols-[1fr_0.9fr]">
                {/* LEFT CONTENT */}
                <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-textPrimary/[0.06]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-8">
                      <span className="px-3 py-1.5 rounded-full bg-accentPrimary/10 text-accentPrimary border border-accentPrimary/20 text-[10px] font-bold uppercase tracking-[0.18em]">
                        Live System
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-textSecondary/50 font-semibold">
                        System Architecture: 01
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-serif tracking-tight leading-[1.1] mb-6">
                      Why this system was structured this way.
                    </h3>

                    <p className="text-textSecondary/80 text-sm leading-[1.9] font-light mb-10">
                      Othman Tours needed more than a beautiful website. The architecture was specifically designed to reduce booking friction, moving travelers quickly from inspiration into WhatsApp, simplifying follow-up, organizing inquiries, and making premium communication easier.
                    </p>

                    {/* SYSTEM ARCHITECTURE VISUALIZATION */}
                    <div className="mb-10">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-textSecondary/50 font-semibold mb-6">
                        Acquisition Flow
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-4">
                        {['Instagram Ads', 'Landing Page', 'Booking Request', 'WhatsApp Qual.', 'CRM Entry', 'Follow-up', 'Journey Confirmed'].map((step, index, arr) => (
                          <React.Fragment key={step}>
                            <div className="relative group">
                              <span className="block px-3 py-2 rounded-lg bg-bgPrimary border border-textPrimary/[0.08] text-[10px] text-textSecondary group-hover:border-accentSecondary/40 group-hover:text-textPrimary transition-colors shadow-sm">
                                {step}
                              </span>
                            </div>
                            {index < arr.length - 1 && (
                              <ArrowRight size={10} className="text-textSecondary/30 shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTAS */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-textPrimary/[0.05]">
                    <Link
                      to="/case-studies/othman-tours"
                      className="group inline-flex items-center justify-center px-6 py-4 rounded-xl bg-gradient-to-r from-accentPrimary to-accentSecondary text-white text-sm font-semibold shadow-[0_20px_60px_rgba(139,92,246,0.25)] hover:-translate-y-0.5 hover:shadow-[0_30px_80px_rgba(139,92,246,0.35)] transition-all duration-500"
                    >
                      View Full Architecture
                      <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
                    </Link>
                  </div>
                </div>

                {/* RIGHT VISUAL - CRM & REPORTS */}
                <div className="p-8 md:p-12 lg:p-14 bg-bgPrimary/30 flex flex-col gap-6 relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(var(--app-textPrimary),0.02)_0%,transparent_60%)] pointer-events-none" />
                  
                  {/* CRM Preview */}
                  <div className="rounded-[1.5rem] border border-textPrimary/[0.06] bg-surface/80 backdrop-blur-md p-6 shadow-[0_20px_60px_rgba(0,0,0,0.03)] relative z-10 hover:-translate-y-1 transition-transform duration-500">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-2">
                        <Database size={14} className="text-textSecondary" />
                        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-textPrimary">CRM Pipeline</span>
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                    </div>

                    <div className="space-y-3">
                      {[
                        { name: 'A. Laurent', journey: 'Chefchaouen Day Trip', status: 'Follow-up: Today', source: 'Instagram' },
                        { name: 'M. Smith', journey: 'Tangier Airport Transfer', status: 'Confirmed', source: 'Website' }
                      ].map((lead, i) => (
                        <div key={i} className="p-3 rounded-xl bg-bgPrimary border border-textPrimary/[0.04] flex justify-between items-center">
                          <div>
                            <p className="text-[11px] font-medium text-textPrimary mb-0.5">{lead.name}</p>
                            <p className="text-[9px] text-textSecondary/70">{lead.journey}</p>
                          </div>
                          <div className="text-right">
                            <span className="inline-block px-2 py-0.5 rounded text-[8px] bg-textPrimary/[0.03] text-textSecondary mb-1">{lead.source}</span>
                            <p className="text-[9px] text-accentSecondary/80">{lead.status}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reporting Logic */}
                  <div className="rounded-[1.5rem] border border-textPrimary/[0.06] bg-surface/80 backdrop-blur-md p-6 shadow-[0_20px_60px_rgba(0,0,0,0.03)] relative z-10 hover:-translate-y-1 transition-transform duration-500">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-2">
                        <BarChart3 size={14} className="text-textSecondary" />
                        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-textPrimary">Reporting Logic</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'Inquiry Sources', val: 'Tracked' },
                        { label: 'Booking Requests', val: 'Synced' },
                        { label: 'WhatsApp Convos', val: 'Active' },
                        { label: 'Follow-up Success', val: 'Measured' }
                      ].map((stat, i) => (
                        <div key={i} className="p-3 rounded-xl bg-bgPrimary border border-textPrimary/[0.04]">
                          <p className="text-[9px] text-textSecondary/60 mb-1">{stat.label}</p>
                          <p className="text-[11px] font-medium text-textPrimary">{stat.val}</p>
                        </div>
                      ))}
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
      <Section className="py-24 md:py-36 bg-bgPrimary border-y border-textPrimary/[0.04]">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-start">
              <div>
                <p className="text-[9px] uppercase tracking-[0.35em] text-textSecondary/50 mb-8">
                  Consulting Blueprint
                </p>

                <h2 className="text-4xl md:text-6xl font-serif tracking-tight leading-[1] mb-8">
                  Every project is shown
                  <span className="block italic text-textSecondary/45 font-light">
                    as a business journey.
                  </span>
                </h2>

                <p className="text-textSecondary/80 leading-[1.9] font-light mb-8">
                  We do not only show screenshots. We explain what was broken,
                  what we connected, and how the client journey becomes clearer. Each phase operates as part of a real consulting blueprint.
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-textPrimary/[0.03] border border-textPrimary/10 text-[9px] uppercase tracking-[0.2em] text-textSecondary">
                  <CheckCircle2 size={12} className="text-accentSecondary" /> Operational Clarity
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 relative">
                {/* Connecting lines for architecture feel */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-textPrimary/[0.03] hidden sm:block -z-10" />
                <div className="absolute top-0 left-1/2 w-px h-full bg-textPrimary/[0.03] hidden sm:block -z-10" />

                {[
                  {
                    num: '01',
                    tag: 'Business Friction',
                    title: 'The business problem',
                    text: 'What was unclear, manual, scattered, or hard to measure before NIDAM.',
                  },
                  {
                    num: '02',
                    tag: 'System Mapping',
                    title: 'The system map',
                    text: 'How visitors move from discovery to website, request, WhatsApp, CRM, and follow-up.',
                  },
                  {
                    num: '03',
                    tag: 'Flow Optimization',
                    title: 'What we created',
                    text: 'The actual parts: page, forms, WhatsApp flow, CRM logic, reports, and optimization.',
                  },
                  {
                    num: '04',
                    tag: 'CRM Logic',
                    title: 'The honest result',
                    text: 'A clearer client journey without inventing fake numbers or fake testimonials.',
                  },
                  {
                    num: '05',
                    tag: 'Reporting Layer',
                    title: 'Data driven decisions',
                    text: 'Measuring sources, interactions and outcomes to continuously improve the system.',
                  },
                  {
                    num: '06',
                    tag: 'Client Follow-up',
                    title: 'Automated structure',
                    text: 'Making sure no lead falls through the cracks by organizing communication paths.',
                  }
                ].map((item) => (
                  <div
                    key={item.num}
                    className="group relative rounded-[1.5rem] border border-textPrimary/[0.05] bg-surface/50 p-7 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.04)] hover:border-textPrimary/15 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accentPrimary/0 via-accentSecondary/0 to-accentPrimary/0 group-hover:from-accentPrimary/50 group-hover:via-accentSecondary group-hover:to-accentPrimary/50 transition-all duration-700" />
                    
                    <div className="flex justify-between items-start mb-6">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-textSecondary/50 font-bold">
                        {item.num}
                      </p>
                      <span className="px-2 py-1 rounded bg-bgPrimary border border-textPrimary/[0.05] text-[8px] uppercase tracking-[0.2em] text-textSecondary group-hover:border-accentSecondary/30 transition-colors">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif text-textPrimary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs text-textSecondary/70 leading-[1.8]">
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