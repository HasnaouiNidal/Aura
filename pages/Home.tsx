import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Code, Zap, Layers, Cpu, CheckCircle, ChevronDown,
  Plus, Star, TrendingUp, Clock, BarChart3, Globe, Shield, Users, Rocket, ExternalLink
} from 'lucide-react';
import { Button, Card, Section, FadeIn, MeshBackground, HeroBackground } from '../components/UI';
import { ProjectGrid, ProjectCard } from '../components/ProjectSystem';
import { getCategoryCards } from '../data/catalog';
import othmanScreenshot from '../assets/othman_screenshot.png';

const Home: React.FC = () => {
  const categories = getCategoryCards();

  return (
    <>
      {/* ============================================================
          HERO SECTION
      ============================================================ */}
      <div className="relative min-h-[70vh] flex flex-col justify-start pt-32 md:pt-40 pb-16">
        <HeroBackground />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn className="relative">
            {/* Nidam Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-tr from-accentSecondary/40 via-accentPrimary/30 to-blue-600/20 blur-[100px] md:blur-[140px] rounded-full pointer-events-none -z-10 mix-blend-screen" />

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-textPrimary/5 border border-textPrimary/10 mb-6 backdrop-blur-md hover:bg-textPrimary/10 transition-colors cursor-default relative z-10">
              <span className="w-2 h-2 rounded-full bg-accentSecondary animate-pulse" />
              <span className="text-xs font-medium tracking-wider uppercase text-accentSecondary" style={{ fontFamily: "'Sora', sans-serif" }}>Digital Systems Agency</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[clamp(2.25rem,5vw+1rem,4.5rem)] font-bold mb-6 leading-[1.1] tracking-tight relative z-10" style={{ fontFamily: "'Sora', sans-serif" }}>
              We Don't Build Websites. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-textPrimary via-accentSecondary to-accentPrimary bg-[length:200%_auto] animate-shimmer">
                We Build Client Systems.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-textSecondary max-w-2xl mx-auto mb-8 leading-relaxed relative z-10">
              A high-performance website. Automated lead capture. WhatsApp follow-up. All connected into one system that moves people from their first click to becoming your client.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 relative z-10">
              <div className="relative group w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-accentPrimary to-accentSecondary rounded-xl blur-lg opacity-40 group-hover:opacity-70 transition-all duration-500 pointer-events-none" />
                <Button to="/contact" variant="primary" className="relative w-full px-8 py-3.5 text-sm font-semibold tracking-wide flex justify-center">
                  Build My Client System
                </Button>
              </div>
              <Button to="/case-studies/othman-tours" variant="outline" className="w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0 px-8 py-3.5 text-sm font-medium border-textPrimary/20 hover:border-textPrimary/40 flex justify-center">
                See a Real Result
              </Button>
            </div>

            {/* Trust line */}
            <div className="flex flex-col items-center justify-center gap-3 text-xs text-textSecondary font-medium relative z-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-textPrimary/5 border border-textPrimary/10">
                <Shield size={14} className="text-accentSecondary" /> Trusted by service businesses ready to grow — not just go online.
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-textSecondary/80 mt-2">
                <span className="flex items-center gap-1.5"><Star size={12} className="text-accentLuxury fill-accentLuxury" /> 40+ systems deployed</span>
                <span className="flex items-center gap-1.5"><Star size={12} className="text-accentLuxury fill-accentLuxury" /> From first click to signed client</span>
                <span className="flex items-center gap-1.5"><Star size={12} className="text-accentLuxury fill-accentLuxury" /> Results in 7 days</span>
              </div>
            </div>
          </FadeIn>

          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-textPrimary/10 to-transparent hidden lg:block" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-textPrimary/10 to-transparent hidden lg:block" />
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-textSecondary/50">
          <ChevronDown size={24} />
        </div>
      </div>

      {/* ============================================================
          THE PROBLEM
      ============================================================ */}
      <Section className="bg-bgSecondary border-y border-textPrimary/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-accentSecondary mb-4">The Real Issue</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              You Don't Have a Traffic Problem.{' '}
              <span className="text-textSecondary font-light">You Have a Flow Problem.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-textPrimary/5 rounded-2xl overflow-hidden border border-textPrimary/5 mb-16">
              {[
                {
                  number: '01',
                  title: 'They find you.',
                  body: "Someone searches, sees your ad, or gets a referral. They land on your website. That's the moment — and most businesses waste it.",
                  color: 'text-accentSecondary',
                  glow: 'from-accentSecondary/10',
                },
                {
                  number: '02',
                  title: 'Nothing captures them.',
                  body: "No clear next step. No offer. No form. They read a bit, get confused, and leave. They don't come back. You never knew they were there.",
                  color: 'text-accentPrimary',
                  glow: 'from-accentPrimary/10',
                },
                {
                  number: '03',
                  title: 'The silence costs you.',
                  body: 'No follow-up. No message. No system. That lead went cold — and probably hired someone else who had a process ready.',
                  color: 'text-red-400',
                  glow: 'from-red-500/10',
                },
              ].map((step, i) => (
                <div key={i} className={`bg-bgSecondary p-8 md:p-10 relative group hover:bg-bgPrimary/60 transition-colors duration-300`}>
                  <div className={`absolute inset-0 bg-gradient-to-b ${step.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                  <div className={`text-5xl font-serif font-bold mb-4 opacity-15 ${step.color} relative z-10`}>{step.number}</div>
                  <h3 className={`text-lg font-semibold mb-3 ${step.color} relative z-10`}>{step.title}</h3>
                  <p className="text-textSecondary text-sm leading-relaxed relative z-10">{step.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <p className="text-textSecondary text-base md:text-lg leading-relaxed">
                Most businesses spend money on ads, social media, or word of mouth — and then send people to a website that doesn't do anything. No structure. No clear path. No follow-up. The visitors arrive and disappear.
              </p>
              <p className="text-textSecondary text-base md:text-lg leading-relaxed">
                It's not that people aren't interested. It's that there's nothing pulling them forward. Every day without a system is another day of invisible, silent revenue loss.
              </p>
              <p className="text-textPrimary text-base md:text-lg leading-relaxed font-medium">
                That's exactly what we fix.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================
          FEATURES — SYSTEM PILLARS
      ============================================================ */}
      <Section className="bg-bgPrimary">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-accentSecondary mb-4">What We Actually Build</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">
              Not a Website. A Complete Client System.
            </h2>
            <p className="text-textSecondary text-sm max-w-xl mx-auto leading-relaxed">
              Every business we work with gets a connected system — designed to attract, capture, follow up, and convert. Automatically.
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: TrendingUp, title: 'Visitor-to-Lead Flow', desc: 'Your website is structured around a single goal: turning every visitor into a qualified lead. Clear path. Clear action. No guessing.' },
                { icon: Zap, title: 'Instant Lead Capture', desc: 'Smart forms and WhatsApp triggers fire the moment someone shows interest — so no lead goes cold before you even see it.' },
                { icon: BarChart3, title: 'Automated Follow-Up', desc: 'Your system sends the right message at the right moment. Prospects hear from you instantly, without any manual effort on your side.' },
                { icon: Rocket, title: 'Built to Scale', desc: 'As your business grows, your system grows with it. Every piece is connected, optimized monthly, and built to perform long-term.' },
              ].map((feature, i) => (
                <Card key={i} className="group">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-6 group-hover:bg-accentPrimary/20 transition-colors">
                    <feature.icon className="text-accentPrimary group-hover:text-textPrimary transition-colors" size={24} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">{feature.title}</h3>
                  <p className="text-textSecondary text-sm leading-relaxed">{feature.desc}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================
          SYSTEM PHILOSOPHY
      ============================================================ */}
      <Section className="bg-bgSecondary/40 border-y border-textPrimary/5">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-accentSecondary mb-4">How We Think</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Built on Clarity.<br />
              <span className="text-textSecondary font-light text-3xl md:text-4xl">Designed for Results.</span>
            </h2>
            <p className="text-textSecondary text-base max-w-xl mx-auto mt-6 leading-relaxed">
              We don't build for aesthetics alone. Every decision — structure, message, flow — is made to move your visitor one step closer to becoming a client.
            </p>
          </FadeIn>

          {/* Philosophy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Layers,
                color: 'text-accentPrimary',
                title: 'Structure Before Design',
                desc: 'A beautiful website that confuses visitors is just an expensive mistake. We map the client journey first — then build around it.',
              },
              {
                icon: Zap,
                color: 'text-accentSecondary',
                title: 'Every Touchpoint Is Intentional',
                desc: 'From the first headline to the final follow-up message, each moment is designed to reduce friction and deepen trust.',
              },
              {
                icon: Globe,
                color: 'text-accentLuxury',
                title: 'Systems That Work Without You',
                desc: 'The best client systems run quietly in the background. Leads arrive, inquiries are captured, and conversations begin — while you focus on your work.',
              },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-surface/40 border border-textPrimary/5 rounded-2xl p-8 text-center hover:-translate-y-1.5 hover:shadow-2xl hover:border-accentPrimary/50 transition-all duration-300 ease-out h-full flex flex-col items-center">
                  <div className="flex justify-center mb-5">
                    <div className="w-10 h-10 rounded-full bg-textPrimary/5 flex items-center justify-center">
                      <card.icon size={18} className={card.color} />
                    </div>
                  </div>
                  <p className={`text-sm font-bold uppercase tracking-widest mb-3 ${card.color}`}>{card.title}</p>
                  <p className="text-textSecondary text-sm leading-relaxed">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Nidam made getting our clinic online completely stress-free. We chose a beautiful layout from their catalog, and within days, we had a fully functional site we completely own.", name: 'Sarah M.', role: 'Owner', company: 'Wellness Clinic', initials: 'SM' },
              { quote: "Having peace of mind knowing Nidam handles our monthly website checks and fixes is invaluable. They are calm, professional, and reliably deliver exactly what we need.", name: 'David T.', role: 'Director', company: 'Local Accounting', initials: 'DT' },
              { quote: "We had a custom idea for our bakery's ordering system. Nidam built the front-end and back-end flawlessly. Excellent communication and a truly premium service.", name: 'Elena R.', role: 'Founder', company: 'Artisan Bakes', initials: 'ER' },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-gradient-to-br from-surface to-bgSecondary p-8 rounded-2xl border border-textPrimary/5 relative hover:-translate-y-1.5 hover:shadow-2xl hover:border-accentPrimary/50 transition-all duration-300 ease-out flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => <Star key={s} size={12} className="text-accentLuxury fill-accentLuxury" />)}
                  </div>
                  <div className="text-accentPrimary text-4xl font-serif absolute top-4 left-6 opacity-20">"</div>
                  <p className="text-textSecondary mb-6 mt-4 relative z-10 text-sm leading-relaxed flex-1">{t.quote}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-textPrimary/5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accentPrimary/40 to-accentSecondary/20 flex items-center justify-center text-xs font-bold">{t.initials}</div>
                    <div>
                      <h4 className="font-semibold text-sm">{t.name}</h4>
                      <p className="text-xs text-textSecondary">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================================
          FEATURED CASE STUDY
      ============================================================ */}
      <Section className="bg-bgPrimary py-24 border-b border-textPrimary/5">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Real Projects. Real Business Results.</h2>
            <p className="text-textSecondary text-lg max-w-2xl mx-auto">Explore how NIDAM turns business ideas into clean, modern, conversion-focused websites.</p>
          </FadeIn>
          
          <FadeIn delay={100}>
            <div className="relative group bg-surface/50 border border-textPrimary/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-all duration-500 flex flex-col md:flex-row items-center gap-0 md:gap-8">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accentPrimary/10 via-transparent to-accentSecondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="w-full md:w-1/2 p-8 md:p-12 relative z-10">
                <div className="inline-block px-3 py-1 mb-6 rounded-full bg-textPrimary/5 border border-textPrimary/10 text-xs font-bold uppercase tracking-wider text-accentSecondary">
                  Luxury Transport / Tourism
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-textPrimary">Othman Tours</h3>
                <p className="text-textSecondary mb-8 leading-relaxed">
                  A premium website for a Northern Morocco transport brand, designed with a luxury landing page, fleet showcase, destination sections, B2B agency offers, testimonials, and WhatsApp booking CTA.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Button to="/case-studies/othman-tours" variant="primary" className="px-6 py-3 shadow-[0_0_15px_rgba(139,92,246,0.25)] flex items-center gap-2">
                    View Case Study <ArrowRight size={16} />
                  </Button>
                  <Button to="https://othman-liard.vercel.app/" variant="outline" className="px-6 py-3 border-textPrimary/10 flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                    Live Website <ExternalLink size={16} />
                  </Button>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 p-6 md:p-12 relative z-10 flex justify-center">
                <div className="rounded-xl overflow-hidden border border-textPrimary/10 shadow-2xl bg-black w-full max-w-lg transform group-hover:scale-105 transition-transform duration-700 ease-out">
                   <div className="h-8 bg-[#1A1D24] border-b border-textPrimary/5 px-4 flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                   </div>
                   <img src={othmanScreenshot} alt="Othman Tours Preview" className="w-full h-auto object-cover object-top" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================
          PROMOTIONAL BANNER
      ============================================================ */}
      <Section className="py-16 bg-bgPrimary">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="relative overflow-hidden bg-textPrimary/5 backdrop-blur-md rounded-3xl border border-textPrimary/10 shadow-[inset_0_0_20px_rgba(139,92,246,0.15)] p-12 md:p-16 text-center">
              {/* Subtle background glow inside the card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-gradient-to-tr from-accentPrimary/20 to-accentSecondary/10 blur-[100px] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 rounded-full bg-accentPrimary/10 border border-accentPrimary/20 text-accentPrimary text-xs font-bold uppercase tracking-wider mb-6">
                  NIDAM INTELLIGENCE V2.0 IS LIVE
                </div>
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-textPrimary to-textSecondary">
                  The Next Generation of Web Architecture
                </h3>
                <p className="text-textSecondary text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                  Experience unprecedented velocity. Our proprietary AI build system now delivers agency-quality platforms in 48 hours without compromising a single pixel.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="relative group w-full sm:w-auto">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accentPrimary to-accentSecondary rounded-xl blur-lg opacity-40 group-hover:opacity-75 transition-all duration-500 pointer-events-none" />
                    <Button to="/contact" variant="primary" className="relative w-full sm:w-auto px-8 py-4 text-sm font-semibold hover:-translate-y-1 transition-all duration-300 ease-out">
                      Experience the Future
                    </Button>
                  </div>
                  <Button to="/catalog" variant="outline" className="w-full sm:w-auto px-8 py-4 text-sm font-medium border-textPrimary/10 hover:bg-textPrimary/5 hover:border-textPrimary/20 transition-all duration-300 ease-out">
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================
          HOW WE WORK — CLARIFY → CAPTURE → CONNECT → CONVERT
      ============================================================ */}
      <Section className="bg-bgSecondary border-y border-textPrimary/5">
        <div className="container mx-auto px-6">

          <FadeIn className="text-center mb-6">
            <p className="text-xs uppercase tracking-widest text-accentPrimary mb-4">Our Method</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">How We Work</h2>
            <p className="text-textSecondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We don't just hand you a website and disappear. We build a structured system around your business — one that guides every visitor through a clear path until they become a paying client.
            </p>
          </FadeIn>

          {/* 4C Flow Connector Strip */}
          <FadeIn delay={100} className="flex items-center justify-center gap-0 mb-16 overflow-x-auto pb-2">
            {['Clarify', 'Capture', 'Connect', 'Convert'].map((label, i) => (
              <React.Fragment key={label}>
                <div className={`flex-shrink-0 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border ${
                  i === 0 ? 'border-accentSecondary/50 text-accentSecondary bg-accentSecondary/10' :
                  i === 1 ? 'border-accentPrimary/50 text-accentPrimary bg-accentPrimary/10' :
                  i === 2 ? 'border-accentLuxury/50 text-accentLuxury bg-accentLuxury/10' :
                  'border-green-400/50 text-green-400 bg-green-400/10'
                }`}>
                  {label}
                </div>
                {i < 3 && (
                  <div className="flex-shrink-0 w-8 h-px bg-textPrimary/20 relative">
                    <ArrowRight size={10} className="absolute -right-1 -top-[5px] text-textSecondary/40" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </FadeIn>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {[
              {
                number: '01',
                keyword: 'Clarify',
                title: 'We understand your business.',
                desc: 'Before building anything, we ask the right questions. Who are your clients? What do they need to see before they trust you? We map the full picture first.',
                tag: 'Discovery Call',
                color: 'text-accentSecondary',
                border: 'border-accentSecondary/30',
                glow: 'shadow-[0_0_20px_rgba(99,202,183,0.12)]',
                bg: 'bg-accentSecondary/5',
              },
              {
                number: '02',
                keyword: 'Capture',
                title: 'We build your system.',
                desc: 'A fast, clear website with a built-in lead form and WhatsApp trigger. Every page is designed with one goal: give your visitor a reason to take action — and make it effortless.',
                tag: 'Build & Launch',
                color: 'text-accentPrimary',
                border: 'border-accentPrimary/30',
                glow: 'shadow-[0_0_20px_rgba(139,92,246,0.12)]',
                bg: 'bg-accentPrimary/5',
              },
              {
                number: '03',
                keyword: 'Connect',
                title: 'We activate the follow-up.',
                desc: 'When a lead comes in, your system responds instantly — automated WhatsApp messages, confirmation flows, and smart notifications keep the conversation alive without any manual effort.',
                tag: 'Automation',
                color: 'text-accentLuxury',
                border: 'border-accentLuxury/30',
                glow: 'shadow-[0_0_20px_rgba(212,175,55,0.12)]',
                bg: 'bg-accentLuxury/5',
              },
              {
                number: '04',
                keyword: 'Convert',
                title: 'Leads become clients.',
                desc: 'With the right message, at the right moment, through the right channel — your visitor moves from curious to committed. That is what a system does that a website alone never can.',
                tag: 'Revenue',
                color: 'text-green-400',
                border: 'border-green-400/30',
                glow: 'shadow-[0_0_20px_rgba(74,222,128,0.12)]',
                bg: 'bg-green-400/5',
              },
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 120} className="group">
                <div className={`h-full rounded-2xl border ${step.border} ${step.glow} ${step.bg} p-7 flex flex-col gap-4 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 ease-out`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-4xl font-serif font-bold opacity-20 ${step.color}`}>{step.number}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${step.border} ${step.color} bg-bgSecondary`}>{step.tag}</span>
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${step.color}`}>{step.keyword}</p>
                    <h3 className="text-base font-semibold text-textPrimary leading-snug mb-3">{step.title}</h3>
                    <p className="text-textSecondary text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Closing line */}
          <FadeIn delay={500} className="text-center">
            <p className="text-textSecondary text-sm max-w-xl mx-auto">
              Every client we work with goes through this exact process. It's not a formula — it's a commitment to making sure your investment actually works for your business.
            </p>
          </FadeIn>

        </div>
      </Section>

      {/* ============================================================
          ABOUT INTRO
      ============================================================ */}
      <Section className="bg-bgSecondary/30">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface">
                  <img src="https://picsum.photos/600/800?grayscale" alt="Founder" className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-bgPrimary/80 backdrop-blur-md border border-textPrimary/10 rounded-xl p-4">
                      <p className="text-xs text-textSecondary mb-1">Solo Architect. AI-Amplified Output.</p>
                      <p className="text-sm font-semibold">Precision-engineered. System-driven.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-xs uppercase tracking-widest text-accentSecondary mb-4">The Agency Promise</p>
                <h2 className="text-4xl font-serif font-bold mb-6">A Calm Approach to Web Development</h2>
                <p className="text-textSecondary mb-6 leading-relaxed">
                  We built Nidam with one goal: to remove the technical stress from running a small business. You shouldn't have to worry about servers, codebases, or broken links.
                </p>
                <p className="text-textSecondary mb-8 leading-relaxed">
                  We handle the engineering—delivering beautiful, fast websites that you fully own. And when things change, our monthly checks and rapid fixes ensure your digital presence is always perfect.
                </p>
                <div className="flex items-center gap-4">
                  <Button to="/about" variant="outline" icon>Read Our Story</Button>
                  <Link to="/contact" className="text-sm text-textSecondary hover:text-accentPrimary transition-colors flex items-center gap-1 group">
                    Or book a strategy call <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================
          CATALOG GRID
      ============================================================ */}
      <Section>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <FadeIn>
              <h2 className="text-4xl font-serif font-bold">Select Your <br /><span className="text-accentPrimary">Starting Point</span></h2>
            </FadeIn>
            <FadeIn delay={200}>
              <Link to="/catalog" className="text-textSecondary hover:text-textPrimary flex items-center gap-2 group">
                View Full Catalog <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>

          <ProjectGrid>
            <FadeIn delay={0}>
              <ProjectCard project={{
                id: 'othman-tours',
                title: 'Othman Tours',
                category: 'Luxury Transport',
                description: 'A premium tourism transport website built for luxury journeys, fleet showcase, destinations, and B2B travel agencies.',
                image: othmanScreenshot,
                docsUrl: '/work/othman-tours',
                docsButtonText: 'View Case Study',
                demoUrl: 'https://othman-liard.vercel.app/'
              }} />
            </FadeIn>
            {categories.slice(0, 2).map((categoryCard, i) => {
              const customLabels = ['E-commerce', 'Professional Portfolio'];
              return (
                <FadeIn key={categoryCard.id} delay={(i + 1) * 100}>
                  <ProjectCard project={{
                    id: categoryCard.id,
                    title: categoryCard.title,
                    category: customLabels[i] || categoryCard.category,
                    description: categoryCard.description,
                    image: categoryCard.previewImage,
                    docsUrl: categoryCard.detailRoute,
                    demoUrl: categoryCard.liveDemoRoute
                  }} />
                </FadeIn>
              )
            })}
          </ProjectGrid>
        </div>
      </Section>

      {/* ============================================================
          SERVICES — SYSTEM-BASED OFFERS
      ============================================================ */}
      <Section className="bg-bgSecondary">
        <div className="container mx-auto px-6">

          <FadeIn className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-accentSecondary mb-4">What We Build</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Choose Your System.
            </h2>
            <p className="text-textSecondary text-base max-w-xl mx-auto leading-relaxed">
              Every offer is built around one goal: turning your visitors into paying clients. Pick the level that fits where you are right now.
            </p>
          </FadeIn>

          {/* 4 Core Offers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            {[
              {
                badge: 'Step 01',
                name: 'System Audit',
                tagline: 'Find out exactly where you are losing clients.',
                desc: 'We review your current online presence — your website, your messaging, your follow-up process — and give you a clear, honest picture of what is broken and what to fix first.',
                outcome: 'You get a full gap report and a priority action plan.',
                color: 'text-accentSecondary',
                border: 'border-accentSecondary/30',
                bg: 'bg-accentSecondary/5',
                glow: 'hover:shadow-[0_0_30px_rgba(99,202,183,0.12)]',
                price: 'From $300',
                featured: false,
              },
              {
                badge: 'Step 02',
                name: 'Foundation System',
                tagline: 'A clean, professional base that works.',
                desc: 'We build your website with a clear structure, a strong first impression, and a direct path to contact. No fluff — just a solid foundation that stops visitors from leaving without acting.',
                outcome: 'You get a fast, conversion-ready website your business can grow on.',
                color: 'text-accentPrimary',
                border: 'border-accentPrimary/40',
                bg: 'bg-accentPrimary/5',
                glow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
                price: 'From $1,500',
                featured: false,
              },
              {
                badge: 'Step 03',
                name: 'Lead System',
                tagline: 'Turn your website into a client machine.',
                desc: 'We add lead capture, an automated WhatsApp response, and a follow-up flow on top of your foundation. Every visitor who shows interest gets a message before they forget you exist.',
                outcome: 'You get a system that captures and follows up with leads automatically — 24/7.',
                color: 'text-accentPrimary',
                border: 'border-accentPrimary/50',
                bg: 'bg-accentPrimary/8',
                glow: 'hover:shadow-[0_0_40px_rgba(139,92,246,0.20)]',
                price: 'From $3,500',
                featured: true,
              },
              {
                badge: 'Step 04',
                name: 'Full Growth System',
                tagline: 'Everything. Done. For you.',
                desc: 'From the first click to the signed contract — we build and connect every piece of your digital presence. Website, lead capture, WhatsApp automation, follow-up sequences, and ongoing optimization.',
                outcome: 'You get a complete client-acquisition system that runs while you focus on delivery.',
                color: 'text-accentLuxury',
                border: 'border-accentLuxury/40',
                bg: 'bg-accentLuxury/5',
                glow: 'hover:shadow-[0_0_30px_rgba(212,175,55,0.12)]',
                price: 'From $6,500',
                featured: false,
              },
            ].map((offer, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className={`relative h-full rounded-2xl border ${offer.border} ${offer.bg} ${offer.glow} p-8 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-300 ease-out ${offer.featured ? 'shadow-[0_0_40px_rgba(139,92,246,0.15)]' : ''}`}>
                  {offer.featured && (
                    <div className="absolute -top-3 left-8">
                      <span className="bg-accentPrimary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Most Popular</span>
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${offer.color} mb-1 block`}>{offer.badge}</span>
                      <h3 className="text-xl font-bold text-textPrimary">{offer.name}</h3>
                      <p className={`text-sm font-medium mt-0.5 ${offer.color}`}>{offer.tagline}</p>
                    </div>
                    <div className={`text-right shrink-0`}>
                      <p className={`text-lg font-bold font-serif ${offer.color}`}>{offer.price}</p>
                    </div>
                  </div>
                  <p className="text-textSecondary text-sm leading-relaxed">{offer.desc}</p>
                  <div className={`flex items-start gap-2 pt-4 border-t ${offer.border}`}>
                    <CheckCircle size={15} className={`${offer.color} shrink-0 mt-0.5`} />
                    <p className="text-textPrimary text-sm font-medium leading-snug">{offer.outcome}</p>
                  </div>
                  <Button to="/contact" variant={offer.featured ? 'primary' : 'outline'} className="w-full mt-auto">
                    Get Started
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Monthly Retainer Add-on */}
          <FadeIn delay={400}>
            <div className="max-w-5xl mx-auto rounded-2xl border border-textPrimary/10 bg-bgPrimary/60 backdrop-blur-sm p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface border border-textPrimary/10 flex items-center justify-center">
                <Rocket size={20} className="text-accentSecondary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accentSecondary">Optional Add-on · Monthly</span>
                </div>
                <h3 className="text-lg font-bold text-textPrimary mb-1">Growth Partner Retainer</h3>
                <p className="text-textSecondary text-sm leading-relaxed max-w-2xl">
                  We stay in your corner every month — monitoring performance, updating your content, refining your messages, and making sure your system keeps improving as your business grows. You focus on clients. We handle the rest.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
                <p className="text-textSecondary text-xs">From</p>
                <p className="text-2xl font-serif font-bold text-textPrimary">$350<span className="text-sm text-textSecondary font-normal">/mo</span></p>
                <Button to="/contact" variant="outline" className="whitespace-nowrap text-sm px-6 py-2.5">Add to My System</Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="text-center mt-10">
            <p className="text-xs text-textSecondary">
              Not sure where to start?{' '}
              <Link to="/contact" className="text-accentPrimary hover:underline">Book a free strategy call</Link>{' '}
              — we'll map the right system together.
            </p>
          </FadeIn>

        </div>
      </Section>

      {/* ============================================================
          INLINE CTA #2 — AUDIT NUDGE
      ============================================================ */}
      <Section className="py-16 bg-bgPrimary border-b border-textPrimary/5">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accentSecondary mb-3">Free · No Obligation</p>
            <h3 className="text-2xl font-serif font-bold mb-3">Not sure where you're losing clients? Find out — free.</h3>
            <p className="text-textSecondary text-sm mb-6 max-w-md mx-auto">We'll review your website and tell you exactly what's stopping visitors from becoming leads.</p>
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accentPrimary to-accentSecondary rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500 pointer-events-none" />
              <Button to="/contact" variant="primary" className="relative px-10 py-4 text-base font-semibold">
                Request My Free Audit
              </Button>
            </div>
            <p className="mt-4 text-xs text-textSecondary">Spots are limited — we review 4 businesses per week.</p>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================
          FINAL CTA BANNER — AUDIT CONVERSION
      ============================================================ */}
      <Section className="relative">
        <MeshBackground />
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-red-400">Every day without a system costs you a client</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              You're Getting Visitors. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPrimary via-accentSecondary to-accentLuxury bg-[length:200%_auto] animate-shimmer">
                Are Any of Them Becoming Clients?
              </span>
            </h2>

            {/* Body */}
            <p className="text-textSecondary max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
              Most business websites look fine — but quietly lose leads every single day. No clear call-to-action. No follow-up. No system. We'll audit your online presence and show you exactly where the gaps are.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accentPrimary to-accentSecondary rounded-xl blur-lg opacity-40 group-hover:opacity-70 transition-all duration-500 pointer-events-none" />
                <Button variant="primary" to="/contact" className="relative py-5 px-12 text-lg font-semibold">
                  Request My Free Audit
                </Button>
              </div>
              <Button to="/catalog" variant="outline" icon className="py-5 px-8">
                See Our Work First
              </Button>
            </div>

            {/* Trust / Urgency line */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-textSecondary">
              <span className="flex items-center gap-1.5">
                <CheckCircle size={13} className="text-accentSecondary" /> Free — no strings attached
              </span>
              <span className="hidden sm:block w-px h-3 bg-textPrimary/20" />
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-accentSecondary" /> Takes under 48 hours
              </span>
              <span className="hidden sm:block w-px h-3 bg-textPrimary/20" />
              <span className="flex items-center gap-1.5">
                <Shield size={13} className="text-accentSecondary" /> Only 4 audit spots per week
              </span>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================
          FAQ
      ============================================================ */}
      <Section className="bg-bgPrimary">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold">Frequently Asked Questions</h2>
          </FadeIn>
          <div className="space-y-4">
            {[
              { q: "How do you build websites so quickly?", a: "We use a proven, efficient development process and professional pre-built components. This allows us to focus entirely on customizing your site for your specific business goals without wasting time on repetitive setup." },
              { q: "Is this templated or fully custom?", a: "You can choose from our catalog of proven layouts or request a fully custom build. In either case, every site is tailored specifically to your brand, audience, and functional needs." },
              { q: "Do you work with all types of small businesses?", a: "Yes. Whether you are a local service provider, a wellness clinic, or a retail store, we build websites designed to help your specific business grow." },
              { q: "Do you offer ongoing website support?", a: "Every package includes our dedicated monthly checks. We constantly monitor your site's health and perform any rapid fixes needed so you never have to worry." },
              { q: "Do we own the website after delivery?", a: "Absolutely. You receive complete, 100% ownership of your website and all its assets. Host it with us or take it anywhere you like. No lock-in, ever." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <details className="group bg-surface rounded-lg p-4 cursor-pointer hover:bg-surface/80 transition-all duration-300">
                  <summary className="flex justify-between items-center font-medium list-none text-sm">
                    {item.q}
                    <Plus className="transition-transform group-open:rotate-45" size={20} />
                  </summary>
                  <p className="mt-4 text-textSecondary text-sm leading-relaxed border-t border-textPrimary/5 pt-4">{item.a}</p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================================
          NEWSLETTER
      ============================================================ */}
      <Section className="py-12 border-t border-textPrimary/5">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xl font-bold mb-4">Join the Nidam Mailing List</h3>
          <p className="text-textSecondary mb-6 text-sm">Practical tips on growing your small business online. No spam.</p>
          <div className="flex justify-center gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="email@domain.com"
              className="bg-bgSecondary border border-textPrimary/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-accentPrimary focus:shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-all"
            />
            <Button variant="secondary" className="whitespace-nowrap">Subscribe</Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;