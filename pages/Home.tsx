import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Code, Zap, Layers, Cpu, CheckCircle, ChevronDown,
  Plus, Star, TrendingUp, Clock, BarChart3, Globe, Shield, Users, Rocket, ExternalLink,
  MessageCircle, UserPlus, CalendarCheck
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
     <div className="relative min-h-[calc(100vh-20px)] flex flex-col justify-center pt-20 md:pt-24 lg:pt-20 pb-10 overflow-hidden">
  {/* Subtle Noise Texture & Glows Container */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.02] mix-blend-overlay"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>

    <FadeIn className="absolute inset-0">
      <div className="absolute top-[36%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[620px] h-[300px] md:h-[620px] bg-gradient-to-tr from-accentSecondary/20 via-accentPrimary/15 to-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
      <div className="absolute top-[62%] left-[35%] -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[460px] h-[250px] md:h-[460px] bg-accentLuxury/10 blur-[100px] rounded-full mix-blend-screen" />
    </FadeIn>
  </div>

  <HeroBackground />

  <div className="container mx-auto px-6 relative z-10 text-center">
    <div className="relative max-w-6xl mx-auto">
      {/* Floating Element: Lead Capture */}
      <FadeIn
        delay={600}
        className="absolute top-[12%] left-0 hidden xl:block z-0 pointer-events-none"
      >
        <div
          className="w-48 p-3 bg-surface/30 backdrop-blur-md border border-textPrimary/10 rounded-2xl shadow-[0_10px_40px_rgba(139,92,246,0.08)] flex items-center gap-3 -rotate-12 opacity-90 animate-[float-micro_10s_ease-in-out_infinite]"
          style={{ animationDelay: "0s" }}
        >
          <div className="w-8 h-8 rounded-full bg-accentPrimary/10 flex items-center justify-center shrink-0">
            <UserPlus size={14} className="text-accentPrimary/80" />
          </div>

          <div className="text-left">
            <p className="text-[10px] font-bold text-textPrimary/80 mb-0.5">
              Lead Captured
            </p>
            <p className="text-[9px] text-textSecondary/60">
              Via Landing Page
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Floating Element: Booking Confirmed */}
      <FadeIn
        delay={1000}
        className="absolute top-[52%] left-6 hidden xl:block z-0 pointer-events-none"
      >
        <div
          className="w-44 p-2.5 bg-surface/25 backdrop-blur-md border border-textPrimary/10 rounded-2xl shadow-[0_10px_40px_rgba(212,175,55,0.08)] flex items-center gap-3 rotate-2 opacity-90 animate-[float-micro_12s_ease-in-out_infinite]"
          style={{ animationDelay: "3s" }}
        >
          <div className="w-7 h-7 rounded-full bg-accentLuxury/10 flex items-center justify-center shrink-0">
            <CalendarCheck size={12} className="text-accentLuxury/80" />
          </div>

          <div className="text-left">
            <p className="text-[9px] font-bold text-textPrimary/80 mb-0.5">
              Strategy Session
            </p>
            <p className="text-[8px] text-textSecondary/60">
              Scheduled
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Floating Element: WhatsApp Follow-up */}
      <FadeIn
        delay={800}
        className="absolute top-[38%] right-0 hidden xl:block z-0 pointer-events-none"
      >
        <div
          className="w-52 p-3 bg-surface/30 backdrop-blur-md border border-textPrimary/10 rounded-2xl shadow-[0_10px_40px_rgba(34,211,238,0.08)] flex items-center gap-3 rotate-3 opacity-90 animate-[float-micro_14s_ease-in-out_infinite]"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
            <MessageCircle size={14} className="text-[#25D366]/80" />
          </div>

          <div className="text-left">
            <p className="text-[10px] font-bold text-textPrimary/80 mb-0.5">
              Automated Follow-up
            </p>
            <p className="text-[9px] text-textSecondary/60">
              Message delivered...
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Eyebrow badge */}
      <FadeIn delay={100}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-textPrimary/5 border border-textPrimary/10 mb-5 backdrop-blur-md hover:bg-textPrimary/10 transition-colors cursor-default relative z-10">
          <span className="w-2 h-2 rounded-full bg-accentSecondary animate-pulse" />
          <span
            className="text-xs font-medium tracking-wider uppercase text-accentSecondary"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Digital Systems Agency
          </span>
        </div>
      </FadeIn>

      {/* Main Headline */}
      <FadeIn delay={200}>
        <h1
          className="text-[clamp(2.2rem,4.9vw,4.8rem)] font-bold mb-4 leading-[1.03] tracking-tight relative z-10"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          We Don't Build Websites.{" "}
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPrimary via-textPrimary to-accentSecondary bg-[length:200%_auto] animate-[shimmer_12s_linear_infinite]">
            We Build Client Systems.
          </span>
        </h1>
      </FadeIn>

      {/* Subheadline */}
      <FadeIn delay={300}>
        <p className="text-base md:text-lg text-textSecondary max-w-3xl mx-auto mb-6 leading-relaxed relative z-10">
          A connected digital system that brings people from social media or search,
          sends them to a clear website, captures their interest, follows up on
          WhatsApp, organizes them in a CRM, and shows you what is working through
          simple reports.
        </p>
      </FadeIn>

      {/* CTAs */}
      <FadeIn delay={400}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 relative z-10">
          <div className="relative group w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-accentPrimary to-accentSecondary rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-700 pointer-events-none" />

            <Button
              to="/contact"
              variant="primary"
              className="relative w-full px-9 py-4 text-sm font-semibold tracking-wide flex justify-center hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-500"
            >
              Build My Client System
            </Button>
          </div>

          <Button
            to="#how-we-work"
            variant="outline"
            className="w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0 px-9 py-4 text-sm font-medium border-textPrimary/20 hover:border-accentSecondary/40 hover:bg-accentSecondary/5 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] flex justify-center transition-all duration-500"
          >
            See How It Works
          </Button>
        </div>
      </FadeIn>

      {/* System Flow */}
      <FadeIn delay={450}>
        <div className="flex flex-wrap justify-center items-center gap-2 max-w-4xl mx-auto mb-6 text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-textSecondary/70 relative z-10">
          <span className="rounded-full border border-textPrimary/10 bg-surface/40 backdrop-blur-sm px-3 py-2">
            Social Media / SEO
          </span>
          <span className="text-textSecondary/40">→</span>

          <span className="rounded-full border border-textPrimary/10 bg-surface/40 backdrop-blur-sm px-3 py-2">
            Website
          </span>
          <span className="text-textSecondary/40">→</span>

          <span className="rounded-full border border-textPrimary/10 bg-surface/40 backdrop-blur-sm px-3 py-2">
            Lead Form
          </span>
          <span className="text-textSecondary/40">→</span>

          <span className="rounded-full border border-textPrimary/10 bg-surface/40 backdrop-blur-sm px-3 py-2">
            WhatsApp
          </span>
          <span className="text-textSecondary/40">→</span>

          <span className="rounded-full border border-textPrimary/10 bg-surface/40 backdrop-blur-sm px-3 py-2">
            CRM
          </span>
          <span className="text-textSecondary/40">→</span>

          <span className="rounded-full border border-textPrimary/10 bg-surface/40 backdrop-blur-sm px-3 py-2">
            Automation
          </span>
          <span className="text-textSecondary/40">→</span>

          <span className="rounded-full border border-textPrimary/10 bg-surface/40 backdrop-blur-sm px-3 py-2">
            Dashboard
          </span>
          <span className="text-textSecondary/40">→</span>

          <span className="rounded-full border border-textPrimary/10 bg-surface/40 backdrop-blur-sm px-3 py-2">
            Better Decisions
          </span>
        </div>
      </FadeIn>

      {/* Trust line */}
      <FadeIn delay={500}>
        <div className="flex flex-col items-center justify-center gap-3 text-xs text-textSecondary font-medium relative z-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-textPrimary/5 border border-textPrimary/10 backdrop-blur-sm">
            <Shield size={14} className="text-accentSecondary" />
            <span>
              Trusted by service businesses ready to grow — not just go online.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-textSecondary/80 mt-1">
            <span className="flex items-center gap-1.5">
              <Star size={12} className="text-accentLuxury fill-accentLuxury" />
              Captures leads clearly
            </span>

            <span className="flex items-center gap-1.5">
              <Star size={12} className="text-accentLuxury fill-accentLuxury" />
              Follows up automatically
            </span>

            <span className="flex items-center gap-1.5">
              <Star size={12} className="text-accentLuxury fill-accentLuxury" />
              Reports what works
            </span>
          </div>
        </div>
      </FadeIn>
    </div>

    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-textPrimary/10 to-transparent hidden lg:block" />
    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-textPrimary/10 to-transparent hidden lg:block" />
  </div>

  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce text-textSecondary/70 hidden md:block">
    <ChevronDown size={22} />
  </div>
</div>

      {/* ============================================================
          THE REAL ISSUE (PROBLEM DIAGNOSIS)
      ============================================================ */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-bgPrimary border-y border-textPrimary/5">
        {/* Subtle Background Glow & Noise */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="absolute inset-0 w-full h-full opacity-[0.015] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilterProblem">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterProblem)"/>
          </svg>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accentSecondary/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          {/* Section Header */}
          <FadeIn className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-textPrimary/5 border border-textPrimary/10 mb-6 backdrop-blur-sm cursor-default">
               <span className="w-1.5 h-1.5 rounded-full bg-accentSecondary/80" />
               <span className="text-[10px] font-semibold tracking-widest uppercase text-textSecondary">The Real Issue</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] tracking-tight">
              You Don't Have a Traffic Problem.<br className="hidden md:block" />
              <span className="text-textSecondary/60 font-light text-3xl md:text-4xl lg:text-5xl block mt-3">You Have a Flow Problem.</span>
            </h2>
          </FadeIn>

          {/* Flow Cards */}
          <div className="relative mb-16 md:mb-20">
            {/* Visual Flow Line (Desktop) */}
            <div className="absolute top-[40%] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-textPrimary/10 to-transparent hidden md:block z-0" />
            
            {/* Visual Flow Dots (Desktop) */}
            <div className="absolute top-[40%] left-[33.33%] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-textPrimary/20 hidden md:block z-0" />
            <div className="absolute top-[40%] left-[66.66%] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-textPrimary/20 hidden md:block z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {[
                { 
                  delay: 200, 
                  number: '01', 
                  title: 'People discover you', 
                  body: 'They see your post, ad, website, or recommendation. Interest exists, but interest alone does not create clients.', 
                  color: 'text-textPrimary',
                  bgAccent: 'group-hover:bg-textPrimary/[0.02]',
                  borderHover: 'hover:border-textPrimary/15'
                },
                { 
                  delay: 400, 
                  number: '02', 
                  title: 'Nothing captures them', 
                  body: 'If there is no clear form, WhatsApp path, or next step, the visitor leaves and you never know they were interested.', 
                  color: 'text-accentPrimary',
                  bgAccent: 'group-hover:bg-accentPrimary/[0.03]',
                  borderHover: 'hover:border-accentPrimary/30',
                  emphasize: true
                },
                { 
                  delay: 600, 
                  number: '03', 
                  title: 'Follow-up is missing', 
                  body: 'Messages stay scattered, leads are forgotten, and the business owner keeps guessing instead of growing.', 
                  color: 'text-textSecondary',
                  bgAccent: 'group-hover:bg-textPrimary/[0.02]',
                  borderHover: 'hover:border-textPrimary/15'
                },
              ].map((step, i) => (
                <FadeIn key={i} delay={step.delay} className="h-full">
                  <div className={`h-full bg-surface/30 backdrop-blur-md border ${step.emphasize ? 'border-accentPrimary/20 shadow-[0_15px_40px_-15px_rgba(139,92,246,0.15)] md:-translate-y-2' : 'border-textPrimary/5 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.1)]'} rounded-2xl p-8 relative group hover:-translate-y-2 transition-all duration-500 ${step.borderHover}`}>
                    {/* Subtle Background Tint on Hover */}
                    <div className={`absolute inset-0 rounded-2xl ${step.bgAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                    
                    <div className={`text-4xl font-serif font-bold mb-6 opacity-20 ${step.color}`}>{step.number}</div>
                    <h3 className={`text-xl font-semibold mb-3 ${step.color}`}>{step.title}</h3>
                    <p className="text-textSecondary/80 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Insight Block */}
          <FadeIn delay={800}>
            <div className="max-w-3xl mx-auto bg-surface/40 backdrop-blur-xl border border-textPrimary/10 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden group hover:border-textPrimary/20 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-textPrimary/[0.02] to-transparent opacity-50 pointer-events-none" />
              
              <div className="relative z-10">
                <p className="text-textPrimary text-lg md:text-xl font-semibold tracking-wide">
                  NIDAM fixes the path between attention and revenue.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================
          THE NIDAM CLIENT SYSTEM
      ============================================================ */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-bgPrimary">
        {/* Atmospheric Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="absolute inset-0 w-full h-full opacity-[0.015] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilterSystemMap">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterSystemMap)"/>
          </svg>
          <div className="absolute top-[20%] left-[18%] w-[450px] h-[450px] bg-accentPrimary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[15%] right-[18%] w-[550px] h-[380px] bg-accentSecondary/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[10px] uppercase tracking-widest text-textSecondary mb-6">The NIDAM Client System</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] tracking-tight mb-6">
              One connected structure. Every part has a role.
            </h2>
            <p className="text-textSecondary/90 text-base md:text-lg leading-relaxed">
              We build each piece so traffic, leads, follow-up, organization and growth reporting work together as one operating system.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              {
                title: 'Attract',
                includes: 'Social media management, SEO, content direction.',
                desc: 'We help people discover your business through better digital presence.',
              },
              {
                title: 'Convert',
                includes: 'Website or landing page.',
                desc: 'We create a clear page that explains your offer, builds trust, and guides visitors to take action.',
              },
              {
                title: 'Capture',
                includes: 'Lead forms and WhatsApp CTA.',
                desc: 'We collect the right information from interested visitors before they disappear.',
              },
              {
                title: 'Follow Up',
                includes: 'WhatsApp Business flow and automation.',
                desc: 'We create simple follow-up flows so leads receive the right message at the right time.',
              },
              {
                title: 'Organize',
                includes: 'CRM setup.',
                desc: 'We organize every lead so you know who is new, who is interested, who needs follow-up, and who became a client.',
              },
              {
                title: 'Improve',
                includes: 'Reporting dashboard, business analysis, customer journey optimization.',
                desc: 'We show what is working, what is not, and what should be improved next.',
              },
            ].map((step, i) => (
              <FadeIn key={step.title} delay={i * 100}>
                <div className="bg-surface/30 backdrop-blur-xl border border-textPrimary/5 rounded-[2rem] p-8 hover:-translate-y-1 transition-all duration-500 shadow-sm">
                  <div className="text-[11px] uppercase tracking-[0.3em] text-textSecondary/60 mb-4 font-medium">Step {String(i + 1).padStart(2, '0')}</div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-textPrimary">{step.title}</h3>
                  <p className="text-sm text-textSecondary/90 mb-4 leading-relaxed">{step.includes}</p>
                  <p className="text-textSecondary/80 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={500}>
            <p className="text-center text-textSecondary/80 text-sm max-w-2xl mx-auto mt-12">
              This is why we call it a system: every part is connected to the next one.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================
          SYSTEM PHILOSOPHY
      ============================================================ */}
      <Section className="bg-bgSecondary/40 border-y border-textPrimary/5">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-accentSecondary mb-4">Not Separate Services</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              One Growth Machine.
            </h2>
            <p className="text-textSecondary text-base max-w-xl mx-auto mt-6 leading-relaxed">
              Most agencies sell separate services: a website here, social media there, maybe a dashboard later. NIDAM connects everything into one operating system for your digital presence.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center mb-16">
            <div>
              <div className="rounded-[2rem] border border-textPrimary/10 bg-surface/40 backdrop-blur-xl p-8 shadow-sm">
                <h3 className="text-3xl font-serif font-bold text-textPrimary mb-6">A system built around every stage.</h3>
                <div className="space-y-5 text-textSecondary/85 text-sm leading-relaxed">
                  <p>When every tool is separate, the result is scattered: website visitors drop off, leads are missed, and no one knows where growth comes from.</p>
                  <p>We bring the pieces together so the website, forms, WhatsApp flow, CRM, automation and reporting all work as one clear machine.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-textPrimary/10 bg-surface/30 p-8 shadow-sm">
                <div className="flex flex-wrap gap-3 mb-6">
                  {['Website', 'Forms', 'WhatsApp', 'CRM', 'Automation', 'Reports', 'Analysis'].map((item, i) => (
                    <span key={item} className="rounded-full border border-textPrimary/10 bg-bgPrimary/70 px-4 py-2 text-[11px] text-textSecondary/80 uppercase tracking-[0.25em]">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="h-px bg-textPrimary/10 my-4" />
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-accentSecondary" />
                    <p className="text-sm text-textSecondary/90">Website + Forms</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-accentPrimary" />
                    <p className="text-sm text-textSecondary/90">WhatsApp + CRM</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-accentLuxury" />
                    <p className="text-sm text-textSecondary/90">Automation + Reports</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <FadeIn className="text-center mb-8">
            <p className="text-sm uppercase tracking-[0.24em] text-textSecondary/60 mb-6">Where Businesses Usually Lose Clients</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'The website looks good but does not guide action',
              'WhatsApp messages are manual and chaotic',
              'Leads are not stored anywhere',
              'No one knows which channel brings clients',
              'The business grows by guessing, not by data',
            ].map((item, i) => (
              <FadeIn key={item} delay={i * 100}>
                <div className="bg-surface/40 border border-textPrimary/10 rounded-3xl p-8 text-textSecondary/85 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.2)] transition-all duration-300">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="mt-1 w-3 h-3 rounded-full bg-accentSecondary/80" />
                    <p className="text-sm leading-relaxed">{item}</p>
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
      <section className="relative py-28 md:py-36 overflow-hidden bg-bgPrimary border-y border-textPrimary/5">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="absolute inset-0 w-full h-full opacity-[0.015] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilterPortfolio">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterPortfolio)"/>
          </svg>
          <div className="absolute top-[30%] left-[10%] w-[600px] h-[600px] bg-accentSecondary/5 blur-[130px] rounded-full" />
          <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-accentLuxury/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-textPrimary/5 border border-textPrimary/10 mb-6 backdrop-blur-sm cursor-default">
                   <span className="w-1.5 h-1.5 rounded-full bg-accentLuxury/80" />
                   <span className="text-[10px] font-semibold tracking-widest uppercase text-textSecondary">Featured Case Study</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] tracking-tight">
                  Real Projects.<br/>
                  <span className="text-textSecondary/60 font-light text-3xl md:text-4xl lg:text-5xl block mt-2">Real Business Results.</span>
                </h2>
              </div>
              <p className="text-textSecondary/90 text-sm md:text-base max-w-sm leading-relaxed mb-2 md:text-right">
                Explore how we engineer luxury digital infrastructure that drives measurable conversions.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="relative group rounded-[2.5rem] flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
              
              {/* Left Side: Strategic Framing */}
              <div className="w-full lg:w-[45%] lg:pr-16 relative z-10">
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-5 text-textPrimary tracking-tight">Othman Tours — Tourism Client System</h3>
                <p className="text-textSecondary/80 text-sm md:text-base leading-relaxed mb-10 max-w-md">
                  A premium tourism brand needed more than a beautiful website. It needed a clear path from discovery to booking.
                </p>

                {/* Strategic Details */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 w-6 h-6 rounded-full bg-textPrimary/5 flex items-center justify-center shrink-0 group-hover/item:bg-accentPrimary/10 transition-colors duration-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-textSecondary group-hover/item:bg-accentPrimary transition-colors duration-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-textPrimary mb-1">Social media direction</p>
                      <p className="text-xs text-textSecondary/70 leading-relaxed">A refined presence aimed at premium travelers and tour planners.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 w-6 h-6 rounded-full bg-textPrimary/5 flex items-center justify-center shrink-0 group-hover/item:bg-accentSecondary/10 transition-colors duration-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-textSecondary group-hover/item:bg-accentSecondary transition-colors duration-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-textPrimary mb-1">Premium website experience</p>
                      <p className="text-xs text-textSecondary/70 leading-relaxed">A luxury homepage and booking landing flow that makes choosing easy.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 w-6 h-6 rounded-full bg-textPrimary/5 flex items-center justify-center shrink-0 group-hover/item:bg-accentLuxury/10 transition-colors duration-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-textSecondary group-hover/item:bg-accentLuxury transition-colors duration-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-textPrimary mb-1">Booking-focused landing flow</p>
                      <p className="text-xs text-textSecondary/70 leading-relaxed">A clear offer and next step that keeps visitors moving toward inquiry.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 w-6 h-6 rounded-full bg-textPrimary/5 flex items-center justify-center shrink-0 group-hover/item:bg-accentPrimary/10 transition-colors duration-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-textSecondary group-hover/item:bg-accentPrimary transition-colors duration-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-textPrimary mb-1">WhatsApp inquiry path</p>
                      <p className="text-xs text-textSecondary/70 leading-relaxed">Instant messaging makes it easy for guests to ask questions and book.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 w-6 h-6 rounded-full bg-textPrimary/5 flex items-center justify-center shrink-0 group-hover/item:bg-accentSecondary/10 transition-colors duration-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-textSecondary group-hover/item:bg-accentSecondary transition-colors duration-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-textPrimary mb-1">Lead organization</p>
                      <p className="text-xs text-textSecondary/70 leading-relaxed">Every inquiry is stored and surfaced in a CRM so nothing slips through.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 w-6 h-6 rounded-full bg-textPrimary/5 flex items-center justify-center shrink-0 group-hover/item:bg-accentLuxury/10 transition-colors duration-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-textSecondary group-hover/item:bg-accentLuxury transition-colors duration-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-textPrimary mb-1">Reporting structure</p>
                      <p className="text-xs text-textSecondary/70 leading-relaxed">Simple dashboards show what is working and what should be improved next.</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-textPrimary/10 bg-surface/30 p-4 text-sm text-textSecondary/70 mb-10">
                  <div className="font-semibold text-textPrimary mb-3">System flow</div>
                  <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.28em]">
                    {['Instagram', 'Website', 'Booking Request', 'WhatsApp', 'CRM', 'Follow-up'].map((step, index) => (
                      <React.Fragment key={step}>
                        <span className="rounded-full bg-bgPrimary/90 px-3 py-2 border border-textPrimary/10">{step}</span>
                        {index < 5 && <span className="text-textSecondary/40">→</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-5">
                  <Button to="/case-studies/othman-tours" variant="primary" className="group/btn px-8 py-3.5 rounded-full overflow-hidden relative shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-700 hover:-translate-y-1 border border-transparent hover:border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                    <span className="relative z-10 flex items-center gap-2 text-sm font-medium">View The Full System <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" /></span>
                  </Button>
                </div>
              </div>
              
              {/* Right Side: Dimensional Alive Project Preview */}
              <div className="w-full lg:w-[55%] relative z-10 lg:-mr-12 mt-10 lg:mt-0">
                {/* Soft ambient glow behind image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-accentSecondary/10 blur-[80px] rounded-full group-hover:scale-110 group-hover:bg-accentPrimary/20 transition-all duration-1000 ease-out pointer-events-none" />
                
                {/* Image Container with Perspective/Tilt simulation */}
                <div className="relative transform-gpu perspective-1000 w-full">
                  <div className="relative rounded-[2rem] overflow-hidden border border-textPrimary/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] bg-surface/50 backdrop-blur-3xl transform-gpu rotate-y-[-2deg] rotate-x-[1deg] group-hover:rotate-y-0 group-hover:rotate-x-0 group-hover:scale-[1.02] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    
                    {/* Elegant Browser Chrome */}
                    <div className="h-10 bg-bgPrimary/80 backdrop-blur-md border-b border-textPrimary/5 px-5 flex items-center justify-between">
                       <div className="flex gap-1.5">
                         <div className="w-2.5 h-2.5 rounded-full bg-textPrimary/10 group-hover:bg-[#FF5F56] transition-colors duration-500" />
                         <div className="w-2.5 h-2.5 rounded-full bg-textPrimary/10 group-hover:bg-[#FFBD2E] transition-colors duration-500 delay-75" />
                         <div className="w-2.5 h-2.5 rounded-full bg-textPrimary/10 group-hover:bg-[#27C93F] transition-colors duration-500 delay-150" />
                       </div>
                       <div className="px-4 py-1 rounded-md bg-surface border border-textPrimary/5 text-[9px] font-mono text-textSecondary/40 tracking-wider hidden sm:block">
                         othman-tours.com
                       </div>
                       <div className="w-10 hidden sm:block" /> {/* spacer for balance */}
                    </div>
                    
                    {/* Inner Image with parallax/shimmer */}
                    <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-surface">
                      <img src={othmanScreenshot} alt="Othman Tours Preview" className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-90 group-hover:opacity-100" />
                      
                      {/* Hover Shimmer Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-1000 pointer-events-none" />
                      
                      {/* Interaction Pulse Overlay */}
                      <div className="absolute bottom-6 right-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                         <span className="w-1.5 h-1.5 rounded-full bg-accentSecondary animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                         <span className="text-[9px] uppercase tracking-wider text-white/90 font-medium">Live System</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================
          PREMIUM CTA STATEMENT
      ============================================================ */}
      <section className="py-24 md:py-32 bg-bgPrimary relative overflow-hidden">
        {/* Architectural Grid & Depth */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.02] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilterCTA">
              <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterCTA)"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="relative overflow-hidden bg-surface/30 backdrop-blur-2xl rounded-[2.5rem] border border-textPrimary/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] p-10 md:p-16 lg:p-20 group text-left max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
              
              {/* Organic, offset atmospheric glows */}
              <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[150%] bg-gradient-to-bl from-accentPrimary/10 via-accentSecondary/5 to-transparent blur-[100px] pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity duration-1000" />
              <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[100%] bg-gradient-to-tr from-accentLuxury/5 via-transparent to-transparent blur-[80px] pointer-events-none group-hover:opacity-100 opacity-40 transition-opacity duration-1000" />
              
              {/* Asymmetrical Content */}
              <div className="relative z-10 w-full md:w-[60%]">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-textPrimary/5 border border-textPrimary/10 mb-8 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-textSecondary" />
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-textSecondary">The Nidam Standard</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-textPrimary leading-[1.1] tracking-tight">
                  Stop building brochures.<br />
                  <span className="text-textSecondary/60 font-light mt-2 block">Start building systems.</span>
                </h3>
                <p className="text-textSecondary/90 text-base md:text-lg mb-10 leading-relaxed max-w-md">
                  We replace scattered marketing efforts with a cohesive digital infrastructure. You get a premium visual identity; your business gets a machine that quietly converts visitors into clients.
                </p>
                
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <div className="relative group/btn w-full sm:w-auto">
                    {/* Magnetic Glow Spread */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-accentPrimary/30 via-accentSecondary/30 to-transparent rounded-full blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <Button to="/contact" variant="primary" className="relative w-full sm:w-auto px-8 py-3.5 rounded-full font-medium hover:-translate-y-1 shadow-[0_0_20px_rgba(139,92,246,0.1)] border border-transparent hover:border-white/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-bgPrimary hover:bg-bgSecondary overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 ease-out" />
                      <span className="relative z-10 flex items-center justify-center gap-2">Start Your Project <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-500" /></span>
                    </Button>
                  </div>
                  
                  <Button to="/catalog" variant="outline" className="group/sec w-full sm:w-auto px-8 py-3.5 rounded-full font-medium border-textPrimary/15 bg-transparent hover:bg-surface/50 hover:border-textPrimary/30 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden shadow-sm hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-textPrimary/5 to-transparent translate-x-[-100%] group-hover/sec:translate-x-[100%] transition-transform duration-1000 ease-out" />
                    <span className="relative z-10 flex items-center justify-center gap-2 text-textSecondary group-hover/sec:text-textPrimary transition-colors duration-300">See How It Works</span>
                  </Button>
                </div>
              </div>

              {/* Right Side: Architectural System Hint */}
              <div className="w-full md:w-[40%] relative hidden md:flex flex-col gap-4 opacity-50 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="w-full h-14 rounded-2xl border border-textPrimary/5 bg-surface/30 backdrop-blur-md flex items-center px-5 gap-4 transform group-hover:translate-x-2 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <div className="w-2 h-2 rounded-full bg-textPrimary/20" />
                  <div className="h-1.5 w-24 bg-textPrimary/10 rounded-full" />
                </div>
                <div className="w-[85%] h-14 rounded-2xl border border-textPrimary/5 bg-surface/30 backdrop-blur-md flex items-center px-5 gap-4 ml-auto transform group-hover:-translate-x-2 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75">
                  <div className="w-2 h-2 rounded-full bg-accentPrimary/40" />
                  <div className="h-1.5 w-16 bg-textPrimary/10 rounded-full" />
                </div>
                <div className="w-[90%] h-14 rounded-2xl border border-accentSecondary/20 bg-surface/40 backdrop-blur-md flex items-center px-5 gap-4 transform group-hover:translate-x-1 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 shadow-[0_10px_30px_rgba(34,211,238,0.05)]">
                  <div className="w-2 h-2 rounded-full bg-accentSecondary/80" />
                  <div className="h-1.5 w-20 bg-textPrimary/20 rounded-full" />
                </div>
              </div>
              
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================
          HOW WE WORK — CLARIFY → CAPTURE → CONNECT → CONVERT
      ============================================================ */}
      <section id="how-we-work" className="bg-bgSecondary relative overflow-hidden py-24 md:py-32 border-y border-textPrimary/5">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full opacity-[0.015] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilterMethod">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterMethod)"/>
          </svg>
          <div className="absolute top-0 left-[20%] w-[800px] h-[500px] bg-accentPrimary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-[20%] w-[600px] h-[400px] bg-accentSecondary/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/50 border border-textPrimary/10 mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.1)] cursor-default">
               <span className="w-1.5 h-1.5 rounded-full bg-accentPrimary/80 animate-pulse shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
               <span className="text-[10px] font-semibold tracking-widest uppercase text-textSecondary">System Methodology</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight">How We Work</h2>
            <p className="text-textSecondary/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We don't just hand you a website and disappear. We engineer a structured ecosystem around your business — guiding every visitor through a clear path until they become a paying client.
            </p>
          </FadeIn>

          {/* Ecosystem Container - enables interdependent hovering */}
          <div className="relative group/ecosystem">
            
            {/* Elegant Background Flow Connector (Replaces literal arrows) */}
            <div className="absolute top-[50%] left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-textPrimary/10 to-transparent hidden lg:block z-0 pointer-events-none group-hover/ecosystem:via-textPrimary/20 transition-colors duration-1000" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
              {[
                {
                  number: '01',
                  keyword: 'Map',
                  title: 'We understand your business.',
                  desc: 'We understand your business, your clients, your offer, and where people currently get lost.',
                  color: 'text-accentSecondary',
                  dotColor: 'bg-accentSecondary',
                  borderColor: 'group-hover/card:border-accentSecondary/30',
                  pillBorder: 'group-hover/card:border-accentSecondary/20',
                  pillGlow: 'bg-accentSecondary/10',
                  traceLine: 'bg-accentSecondary/60',
                  offset: 'lg:-translate-y-4',
                  ambientGlow: 'from-accentSecondary/10'
                },
                {
                  number: '02',
                  keyword: 'Build',
                  title: 'We create the system.',
                  desc: 'We create the website, landing pages, forms, WhatsApp flow, CRM structure, and automation.',
                  color: 'text-accentPrimary',
                  dotColor: 'bg-accentPrimary',
                  borderColor: 'group-hover/card:border-accentPrimary/30',
                  pillBorder: 'group-hover/card:border-accentPrimary/20',
                  pillGlow: 'bg-accentPrimary/10',
                  traceLine: 'bg-accentPrimary/60',
                  offset: 'lg:translate-y-0',
                  ambientGlow: 'from-accentPrimary/10'
                },
                {
                  number: '03',
                  keyword: 'Connect',
                  title: 'We link every touchpoint.',
                  desc: 'We connect every touchpoint so the visitor has a clear journey from first click to client.',
                  color: 'text-accentLuxury',
                  dotColor: 'bg-accentLuxury',
                  borderColor: 'group-hover/card:border-accentLuxury/30',
                  pillBorder: 'group-hover/card:border-accentLuxury/20',
                  pillGlow: 'bg-accentLuxury/10',
                  traceLine: 'bg-accentLuxury/60',
                  offset: 'lg:-translate-y-4',
                  ambientGlow: 'from-accentLuxury/10'
                },
                {
                  number: '04',
                  keyword: 'Measure',
                  title: 'We build dashboards.',
                  desc: 'We build dashboards and reports so you can see what is happening.',
                  color: 'text-green-400',
                  dotColor: 'bg-green-400',
                  borderColor: 'group-hover/card:border-green-400/30',
                  pillBorder: 'group-hover/card:border-green-400/20',
                  pillGlow: 'bg-green-400/10',
                  traceLine: 'bg-green-400/60',
                  offset: 'lg:translate-y-0',
                  ambientGlow: 'from-green-400/10'
                },
                {
                  number: '05',
                  keyword: 'Improve',
                  title: 'We refine the journey.',
                  desc: 'We analyze behavior and improve the journey over time.',
                  color: 'text-textSecondary',
                  dotColor: 'bg-textSecondary',
                  borderColor: 'group-hover/card:border-textSecondary/30',
                  pillBorder: 'group-hover/card:border-textSecondary/20',
                  pillGlow: 'bg-textSecondary/10',
                  traceLine: 'bg-textSecondary/60',
                  offset: 'lg:-translate-y-4',
                  ambientGlow: 'from-textSecondary/10'
                },
              ].map((step, i) => (
                <FadeIn key={i} delay={i * 150} className={`h-full ${step.offset}`}>
                  <div className={`group/card h-full rounded-[2rem] border border-textPrimary/5 bg-surface/40 backdrop-blur-xl p-8 lg:p-10 flex flex-col relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:bg-surface/60 ${step.borderColor} hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.3)] group-hover/ecosystem:opacity-40 hover:!opacity-100`}>
                    
                    {/* Embedded Background Number */}
                    <div className="absolute -right-4 -bottom-8 text-[150px] font-serif font-black opacity-[0.02] pointer-events-none group-hover/card:-translate-y-4 group-hover/card:scale-105 transition-all duration-1000 ease-out z-0 select-none">
                      {step.number}
                    </div>

                    {/* Interaction Ambient Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-b ${step.ambientGlow} to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none z-0`} />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-8">
                        {/* Process Tag */}
                        <div className={`relative px-3 py-1.5 rounded-md bg-bgPrimary/50 border border-textPrimary/5 text-[10px] uppercase tracking-wider font-semibold ${step.color} ${step.pillBorder} transition-colors duration-500`}>
                           <div className={`absolute inset-0 ${step.pillGlow} blur-md opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-md`} />
                           <span className="relative z-10 flex items-center gap-1.5">
                             <span className={`w-1 h-1 rounded-full ${step.dotColor} opacity-50 group-hover/card:opacity-100 group-hover/card:animate-pulse transition-opacity duration-500 shadow-[0_0_5px_currentColor]`} />
                             {step.keyword}
                           </span>
                        </div>
                        {/* Phase Tag */}
                        <span className="text-[10px] text-textSecondary/40 font-mono uppercase tracking-widest">Phase {step.number}</span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-textPrimary group-hover/card:text-white transition-colors duration-500 tracking-tight leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-textSecondary/80 text-sm leading-relaxed flex-grow group-hover/card:text-textSecondary transition-colors duration-500">
                        {step.desc}
                      </p>
                      
                      {/* Subtle System Trace */}
                      <div className="mt-8 pt-6 border-t border-textPrimary/5 flex items-center justify-between opacity-30 group-hover/card:opacity-100 transition-opacity duration-500">
                         <span className="text-[9px] uppercase tracking-widest text-textSecondary/60 font-mono">System Link</span>
                         <div className="flex gap-1">
                           <div className={`w-1 h-px ${step.traceLine}`} />
                           <div className={`w-4 h-px ${step.traceLine} group-hover/card:w-8 transition-all duration-700 ease-out`} />
                         </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
          
          {/* Closing line */}
          <FadeIn delay={600} className="text-center mt-20">
            <p className="text-textSecondary/80 text-sm max-w-xl mx-auto leading-relaxed">
              Every client goes through this exact framework. It's not a generic formula — it's a commitment to making sure your digital investment actually translates to business revenue.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================
          ABOUT INTRO / CRAFTSMANSHIP
      ============================================================ */}
      <section className="relative py-24 md:py-32 bg-bgPrimary overflow-hidden border-y border-textPrimary/5">
        {/* Calm Atmospheric Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="absolute inset-0 w-full h-full opacity-[0.025] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilterAbout">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterAbout)"/>
          </svg>
          {/* Subtle radial vignette lighting */}
          <div className="absolute top-0 right-0 w-full md:w-[60%] h-full bg-gradient-to-l from-bgSecondary/20 via-transparent to-transparent opacity-50" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accentSecondary/5 blur-[150px] rounded-full pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            
            {/* Left Image: Tactile Realism & Parallax */}
            <div className="w-full md:w-[45%] relative group/image">
              <FadeIn delay={100}>
                {/* Image Container with soft breathing motion */}
                <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-t-full rounded-b-[2.5rem] overflow-hidden bg-bgSecondary border border-textPrimary/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
                  <img 
                    src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?q=80&w=800&auto=format&fit=crop" 
                    alt="Workspace Craftsmanship" 
                    className="w-full h-full object-cover scale-105 group-hover/image:scale-100 transition-transform duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-70 mix-blend-luminosity hover:mix-blend-normal hover:opacity-90" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary/90 via-bgPrimary/20 to-transparent opacity-80" />
                  
                  {/* Philosophy Signature Card */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] max-w-[320px]">
                    <div className="bg-surface/60 backdrop-blur-2xl border border-white/5 rounded-2xl p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <div className="w-8 h-px bg-textSecondary/30 mb-4" />
                      <p className="text-[10px] uppercase tracking-[0.2em] text-textSecondary/60 font-mono mb-2">The Artisan Mindset</p>
                      <p className="text-sm font-serif text-textPrimary/90 leading-relaxed italic">
                        "We treat code like architecture—building to last, not just to launch."
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Abstract structural trace behind image */}
                <div className="absolute -z-10 top-10 -right-6 w-full h-full border border-textPrimary/5 rounded-t-full rounded-b-[2.5rem] transition-transform duration-1000 group-hover/image:-translate-x-2 group-hover/image:translate-y-2" />
              </FadeIn>
            </div>

            {/* Right Content: Editorial Pacing */}
            <div className="w-full md:w-[55%]">
              <FadeIn delay={200}>
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="w-10 h-px bg-accentSecondary/40" />
                  <p className="text-xs uppercase tracking-[0.2em] text-accentSecondary/80">The Agency Promise</p>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-10 text-textPrimary leading-[1.1] tracking-tight">
                  A calm approach to <br />
                  <span className="text-textSecondary/50 font-light italic mt-2 block">digital execution.</span>
                </h2>
                
                <div className="space-y-6 text-textSecondary/80 text-base md:text-lg leading-relaxed max-w-lg">
                  <p>
                    We built NIDAM with one specific goal: to remove the technical anxiety from running a modern business. You shouldn't have to worry about broken links, server crashes, or chaotic codebases.
                  </p>
                  <p>
                    We handle the engineering with quiet precision. We deliver beautiful, fast systems that you fully own. And when the digital landscape changes, our consistent monthly support ensures your presence remains perfectly intact.
                  </p>
                </div>
                
                <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-8">
                  <Button to="/about" variant="primary" className="group/btn relative px-8 py-3.5 rounded-full font-medium overflow-hidden border border-transparent hover:border-white/10 shadow-[0_10px_20px_-10px_rgba(139,92,246,0.2)] hover:shadow-[0_15px_30px_-10px_rgba(139,92,246,0.4)] transition-all duration-700 ease-out hover:-translate-y-0.5">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 ease-out" />
                    <span className="relative z-10 flex items-center gap-2">Discover Our Process</span>
                  </Button>
                  
                  <Link to="/contact" className="group/link relative text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors duration-500 flex items-center gap-2 py-2">
                    <span className="relative overflow-hidden pb-1">
                      Or book a strategy call
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-textPrimary/20 translate-x-[-100%] group-hover/link:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    </span>
                    <ArrowRight size={14} className="opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-500 ease-out" />
                  </Link>
                </div>
              </FadeIn>
            </div>
            
          </div>
        </div>
      </section>

      {/* ============================================================
          CATALOG GRID / SYSTEM STARTING POINTS
      ============================================================ */}
      <section className="relative py-24 md:py-32 bg-bgPrimary overflow-hidden border-y border-textPrimary/5 group/catalog">
        {/* Atmospheric Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="absolute inset-0 w-full h-full opacity-[0.02] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilterCatalog">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterCatalog)"/>
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-accentPrimary/5 via-transparent to-accentSecondary/5 blur-[150px] rounded-full opacity-40 group-hover/catalog:opacity-80 transition-opacity duration-1000" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <FadeIn className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight leading-[1.1]">
                Start With the Digital System <br className="hidden md:block" />
                <span className="text-accentPrimary">You Need Most</span>
              </h2>
              <p className="text-textSecondary/90 text-lg leading-relaxed">
                Every business starts from a different problem. Choose the infrastructure that matches your current growth goal, and we will build it with strategy, precision, and automation in mind.
              </p>
            </FadeIn>
            <FadeIn delay={200} className="shrink-0">
              <Button to="/catalog" variant="outline" className="group px-7 py-3.5 rounded-full font-semibold border-textPrimary/15 hover:border-textPrimary/30 hover:bg-surface/50 transition-all duration-500 hover:-translate-y-0.5">
                Explore Full Catalog <ArrowRight size={16} className="ml-1.5 inline-block group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {[
              {
                id: 'othman-tours',
                badge: 'High-Ticket Booking',
                title: 'Othman Tours',
                featured: true,
                desc: 'A premium transport infrastructure designed to capture elite tourism clients and automate fleet reservations.',
                bestFor: 'Luxury transport, B2B travel, and local agencies.',
                img: othmanScreenshot,
                docsUrl: '/case-studies/othman-tours',
                demoUrl: 'https://othman-liard.vercel.app/',
                offset: 'lg:mt-0'
              },
              {
                id: 'saas-platform',
                badge: 'Recurring Revenue',
                title: 'Tech Dashboards',
                featured: false,
                desc: 'A conversion-focused product interface built to accelerate user onboarding and drive subscription growth.',
                bestFor: 'SaaS startups, dashboards, and app platforms.',
                img: categories[0]?.previewImage || 'https://picsum.photos/seed/saas/800/600',
                docsUrl: '/catalog/saas',
                demoUrl: '#',
                offset: 'lg:mt-8'
              },
              {
                id: 'ecommerce',
                badge: 'Frictionless Commerce',
                title: 'Premium Retail',
                featured: false,
                desc: 'An immersive shopping ecosystem engineered to elevate brand perception and maximize average order value.',
                bestFor: 'Premium retail, watches, and luxury fashion.',
                img: categories[1]?.previewImage || 'https://picsum.photos/seed/ecom/800/600',
                docsUrl: '/catalog/ecommerce',
                demoUrl: '#',
                offset: 'lg:mt-0'
              }
            ].map((card, i) => (
              <FadeIn key={card.id} delay={i * 150} className={`h-full ${card.offset}`}>
                <div className="group/starter flex flex-col h-full bg-surface/30 backdrop-blur-xl border border-textPrimary/5 rounded-[1.5rem] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.25)] hover:border-textPrimary/10 hover:bg-surface/40 group-hover/catalog:opacity-60 hover:!opacity-100">
                  
                  {/* Image Container - Subtle Restraint */}
                  <div className="relative aspect-[16/10] bg-bgSecondary border-b border-textPrimary/5 perspective-[1000px] overflow-hidden p-4 pb-0">
                    
                    {/* Browser Chrome Hints */}
                    <div className="absolute top-4 left-6 flex gap-1.5 z-20 opacity-40 group-hover/starter:opacity-70 transition-opacity duration-700">
                       <div className="w-1.5 h-1.5 rounded-full bg-textPrimary/50" />
                       <div className="w-1.5 h-1.5 rounded-full bg-textPrimary/50" />
                       <div className="w-1.5 h-1.5 rounded-full bg-textPrimary/50" />
                    </div>

                    <div className="absolute top-3 right-4 z-20">
                      {card.featured && (
                        <span className="px-2.5 py-1 rounded-full bg-accentSecondary/10 backdrop-blur-md border border-accentSecondary/20 text-[9px] font-bold uppercase tracking-widest text-accentSecondary shadow-[0_0_15px_rgba(99,202,183,0.1)] flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-accentSecondary animate-pulse shadow-[0_0_5px_currentColor]" /> Strategic System
                        </span>
                      )}
                    </div>

                    <div className="w-full h-full rounded-t-lg overflow-hidden relative shadow-[0_0_20px_rgba(0,0,0,0.15)] transform-gpu transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/starter:scale-[1.015] origin-bottom group-hover/starter:-translate-y-0.5 border border-textPrimary/10 border-b-0">
                       <img src={card.img} alt={card.title} className="w-full h-full object-cover object-top opacity-80 group-hover/starter:opacity-100 transition-opacity duration-1000" />
                       
                       {/* Ambient Reflection */}
                       <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover/starter:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                    </div>
                    
                    {/* Atmospheric Fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary/90 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>

                  {/* Content Container */}
                  <div className="p-6 lg:p-8 flex flex-col flex-grow relative z-10 bg-transparent">
                    {/* Badge */}
                    <div className="mb-3">
                       <span className="text-[10px] uppercase tracking-widest font-mono text-textSecondary/60">{card.badge}</span>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-serif font-bold text-textPrimary mb-3 tracking-tight group-hover/starter:text-accentPrimary transition-colors duration-500">{card.title}</h3>
                    <p className="text-textSecondary/80 text-sm leading-relaxed mb-6 flex-grow">{card.desc}</p>
                    
                    {/* Best For - Soft Editorial */}
                    <div className="mt-auto mb-6 pl-3 border-l border-textPrimary/10 group-hover/starter:border-accentPrimary/20 transition-colors duration-500">
                      <p className="text-[9px] font-mono uppercase tracking-widest text-textPrimary/40 mb-1.5">Ideal Architecture For</p>
                      <p className="text-xs text-textSecondary/90 font-medium leading-relaxed">{card.bestFor}</p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2.5">
                      <Button to={card.docsUrl} variant="primary" className="flex-[3] justify-center py-3 text-xs rounded-lg shadow-sm border border-transparent hover:border-white/10 relative overflow-hidden group/btn transition-all duration-500">
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 ease-out" />
                         <span className="relative z-10 font-semibold tracking-wide">Explore Architecture</span>
                      </Button>
                      <Button to={card.demoUrl} variant="outline" className="flex-[2] justify-center py-3 text-xs rounded-lg border-textPrimary/10 hover:bg-surface/60 hover:border-textPrimary/20 flex items-center gap-1.5 relative overflow-hidden group/btn2 transition-all duration-500">
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-textPrimary/5 to-transparent translate-x-[-100%] group-hover/btn2:translate-x-[100%] transition-transform duration-1000 ease-out" />
                         <ExternalLink size={13} className="relative z-10 opacity-50" /> <span className="relative z-10 font-medium">Live System</span>
                      </Button>
                    </div>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

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
                tagline: 'We add capture, WhatsApp, and follow-up automation.',
                desc: 'We add lead capture, an automated WhatsApp response, and a follow-up flow on top of your foundation. Every interested visitor receives a timely reply before they disappear.',
                outcome: 'You get a system that captures and follows up with leads automatically — 24/7.',
                color: 'text-accentPrimary',
                border: 'border-accentPrimary/50',
                bg: 'bg-accentPrimary/8',
                glow: 'hover:shadow-[0_0_40px_rgba(139,92,246,0.20)]',
                price: 'From $3,500',
                featured: false,
              },
              {
                badge: 'Step 04',
                name: 'Full Growth System',
                tagline: 'We connect the full digital side into one machine.',
                desc: 'We build and link your website, forms, WhatsApp flow, CRM, automation, reports, and social direction so your digital presence works as a single system.',
                outcome: 'You get a complete client-acquisition system that runs while you focus on delivery.',
                color: 'text-accentLuxury',
                border: 'border-accentLuxury/40',
                bg: 'bg-accentLuxury/5',
                glow: 'hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]',
                price: 'From $6,500',
                featured: true,
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

          {/* Monthly Support - Emotional & Human Partnership */}
          <FadeIn delay={400} className="mt-16">
            <div className="relative max-w-4xl mx-auto rounded-[2rem] overflow-hidden group/support transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 border border-textPrimary/5 bg-surface/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:bg-surface/50">
              
              {/* Atmospheric Warmth */}
              <div className="absolute inset-0 pointer-events-none z-0">
                <svg className="absolute inset-0 w-full h-full opacity-[0.03] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
                  <filter id="noiseFilterSupport">
                    <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch"/>
                  </filter>
                  <rect width="100%" height="100%" filter="url(#noiseFilterSupport)"/>
                </svg>
                {/* Soft warm radial */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#d4af37]/5 via-transparent to-transparent blur-[80px] rounded-full opacity-30 group-hover/support:opacity-70 transition-opacity duration-1000" />
              </div>

              <div className="relative z-10 p-10 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-10">
                
                {/* Handcrafted Visual Indicator (Replacing corporate icon) */}
                <div className="flex-shrink-0 relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-bgSecondary via-bgPrimary to-bgSecondary border border-textPrimary/10 shadow-sm flex items-center justify-center relative overflow-hidden transition-all duration-700">
                     <div className="absolute inset-0 bg-[#d4af37]/5 opacity-0 group-hover/support:opacity-100 transition-opacity duration-1000" />
                     <div className="w-4 h-4 rounded-full border border-textSecondary/40 group-hover/support:border-[#d4af37]/50 transition-colors duration-700 relative flex items-center justify-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-textSecondary/20 group-hover/support:bg-[#d4af37]/60 transition-colors duration-700" />
                     </div>
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-3 mb-5 justify-center md:justify-start w-full">
                    <div className="w-6 h-px bg-[#d4af37]/30" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-textSecondary/60">Long-Term Partnership</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-textPrimary mb-5 tracking-tight group-hover/support:text-textPrimary transition-colors duration-500">
                    Quiet support in the background.
                  </h3>
                  
                  <div className="space-y-4 text-textSecondary/80 text-sm md:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
                    <p>
                      We don’t just hand over a system and leave. We stay available as your business grows—updating content, handling the technical details, and making sure everything runs perfectly.
                    </p>
                    <p className="font-medium text-textSecondary/90">
                      You focus on your clients. When something needs attention, we take care of it.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center md:items-end gap-5 shrink-0 mt-6 md:mt-0 pt-8 md:pt-0 border-t md:border-t-0 md:border-l border-textPrimary/5 md:pl-10">
                  <div className="text-center md:text-right">
                    <p className="text-[9px] uppercase tracking-[0.15em] text-textSecondary/50 mb-1.5 font-mono">Monthly Ongoing Support</p>
                    <p className="text-3xl font-serif font-bold text-textPrimary group-hover/support:text-[#d4af37]/80 transition-colors duration-700">$350<span className="text-sm text-textSecondary/60 font-sans font-normal">/mo</span></p>
                  </div>
                  
                  <Button to="/contact" variant="outline" className="relative group/btn overflow-hidden whitespace-nowrap text-xs font-medium px-8 py-3.5 rounded-xl border-textPrimary/10 hover:border-textPrimary/20 hover:bg-surface/80 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-textPrimary/5 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    <span className="relative z-10 text-textSecondary group-hover/btn:text-textPrimary transition-colors duration-500">Work Together Long-Term</span>
                  </Button>
                </div>

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
          FINAL INVITATION — HUMAN & CALM
      ============================================================ */}
      <section className="relative py-32 md:py-48 border-t border-textPrimary/5 bg-bgPrimary overflow-hidden">
        {/* Soft Atmospheric Depth */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="absolute inset-0 w-full h-full opacity-[0.025] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilterCTA">
              <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterCTA)"/>
          </svg>
          <div className="absolute bottom-[-10%] left-[40%] w-[1000px] h-[600px] bg-gradient-to-tr from-bgSecondary/80 via-accentSecondary/5 to-transparent blur-[140px] rounded-[100%] opacity-50 transform rotate-12" />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <FadeIn>
            {/* Asymmetrical human layout - deliberately offset */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-20 xl:gap-32">
              
              {/* Left Content (Editorial Pacing & Imbalance) */}
              <div className="flex-1 text-center lg:text-left pt-6 lg:pl-4 relative">
                
                {/* Integrated Editorial Badge */}
                <div className="flex items-start justify-center lg:justify-start gap-4 mb-14 opacity-80">
                  <div className="w-px h-12 bg-gradient-to-b from-textPrimary/30 to-transparent hidden lg:block" />
                  <div className="flex flex-col pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-textSecondary/50">Open Invitation</span>
                    <span className="text-xs text-textSecondary/70 font-serif italic mt-1">A calm conversation about growth.</span>
                  </div>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-serif font-bold mb-10 leading-[1.05] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-textPrimary via-textPrimary/80 to-textPrimary/30 pb-2">
                  Ready to turn your digital presence into a system? <br className="hidden md:block" />
                  <span className="text-textSecondary/50 font-light italic mt-3 block">A single structure for your website, WhatsApp, CRM, and follow-up.</span>
                </h2>

                <div className="relative pl-0 lg:pl-6 border-l-0 lg:border-l border-textPrimary/10">
                  <p className="text-textSecondary/80 text-base lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-6 font-medium">
                    If your website, WhatsApp, social media, and client follow-up feel scattered, NIDAM can connect them into one clear structure.
                  </p>
                  <p className="text-textSecondary/70 text-sm lg:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                    We start with the path your visitors take and turn it into a calm, connected system that moves people toward becoming clients.
                  </p>
                </div>
              </div>

              {/* Right Action Area (Asymmetrical offset - pushed down slightly) */}
              <div className="w-full lg:w-[420px] lg:mt-32 flex flex-col items-center lg:items-start shrink-0 relative">
                
                <div className="w-full bg-surface/40 backdrop-blur-3xl border border-textPrimary/5 rounded-[2.5rem] p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)] relative group/cta overflow-hidden transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] hover:bg-surface/50">
                  
                  {/* Subtle hover glow inside card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover/cta:opacity-100 transition-opacity duration-[2000ms]" />
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    
                    {/* Highly Refined Button */}
                    <Button variant="primary" to="/contact" className="w-full relative group/btn overflow-hidden py-[18px] px-6 rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_10px_20px_-10px_rgba(0,0,0,0.3)] border border-transparent hover:border-white/10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_20px_40px_-10px_rgba(139,92,246,0.25)] bg-bgPrimary">
                      {/* Deep internal gradient sweep */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-150%] group-hover/btn:translate-x-[150%] transition-transform duration-[1500ms] ease-in-out" />
                      <span className="relative z-10 font-semibold tracking-wide text-sm text-textPrimary group-hover/btn:text-white transition-colors duration-700">Book a Strategy Call</span>
                    </Button>

                    <Button to="/catalog" variant="outline" className="w-full mt-4 relative overflow-hidden py-[16px] px-6 rounded-2xl text-sm font-semibold border-textPrimary/15 hover:border-textPrimary/30 hover:bg-surface/50 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-textPrimary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
                      <span className="relative z-10">See Our Work</span>
                    </Button>
                    
                    <div className="w-12 h-px bg-textPrimary/10 my-8" />
                    
                    <div className="relative">
                      <div className="absolute left-1/2 -translate-x-1/2 -top-6 text-textPrimary/5 font-serif text-6xl select-none leading-none">"</div>
                      <p className="text-[13px] text-textSecondary/80 leading-relaxed italic relative z-10 px-4 pt-2">
                        We prefer quality conversations over volume. Every review is done carefully—never rushed.
                      </p>
                    </div>

                  </div>
                </div>

                {/* Subtle structural tension dot */}
                <div className="absolute -bottom-12 -right-6 w-2 h-2 rounded-full bg-textPrimary/10 hidden lg:block" />
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================
          FAQ — CONVERSATIONAL & HUMAN
      ============================================================ */}
      <section className="relative py-32 md:py-40 bg-bgPrimary overflow-hidden border-t border-textPrimary/5">
        
        {/* Deep Atmospheric Layering */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="absolute inset-0 w-full h-full opacity-[0.02] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilterFAQ">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterFAQ)"/>
          </svg>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accentPrimary/5 via-bgSecondary/20 to-transparent blur-[120px] rounded-full opacity-60" />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          
          {/* Asymmetrical Editorial Header */}
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-textPrimary/10 pb-10">
            <FadeIn className="flex-1">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-textPrimary/30" />
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-textSecondary/60">Honest Expectations</span>
              </div>
              <h2 className="text-3xl md:text-[2.75rem] font-serif font-bold leading-[1.1] tracking-tight text-textPrimary">
                A Few Honest Answers.
              </h2>
            </FadeIn>
            <FadeIn delay={100} className="md:w-64 shrink-0">
              <p className="text-xs text-textSecondary/70 leading-relaxed italic border-l border-textPrimary/10 pl-4">
                We believe in absolute transparency. Here is exactly how we work, what you own, and what happens next.
              </p>
            </FadeIn>
          </div>

          {/* Restrained Premium Accordion List */}
          <div className="space-y-2">
            {[
              { 
                q: "Why do you build things so fast?", 
                a: "Because we don’t reinvent the wheel every time. We’ve spent years building a robust internal architecture. When we start your project, we aren’t coding a button from scratch—we’re immediately focusing on your business logic, your story, and how to convert your visitors." 
              },
              { 
                q: "How custom is the work, really?", 
                a: "Think of it like building a house. The foundation and plumbing are proven systems we use every time because they work flawlessly. The architecture, the interior design, and the way the rooms flow—that is entirely custom-designed for your brand and your specific clients." 
              },
              { 
                q: "Will this system work for my specific industry?", 
                a: "We don't specialize in a single industry; we specialize in human psychology. Whether you sell high-end consulting, local services, or luxury products, the core problem is always the same: gaining trust and guiding visitors to take action." 
              },
              { 
                q: "What happens after the website goes live?", 
                a: "We don’t just hand you a file and disappear. Most of our clients stay with us long-term. We monitor the system, make adjustments, and handle the technical updates quietly in the background so you can focus entirely on running your company." 
              },
              { 
                q: "Do we really own the website completely?", 
                a: "Absolutely. You own 100% of the code, the assets, and the accounts. You are never locked into our agency. If you ever decide to take the system somewhere else, you are completely free to do so without friction." 
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <details className="group border-b border-textPrimary/5 pb-2 mb-2 cursor-pointer [&::-webkit-details-marker]:hidden relative">
                  <summary className="flex justify-between items-center py-6 font-serif text-lg md:text-xl text-textPrimary/90 hover:text-textPrimary transition-colors duration-700 list-none outline-none select-none">
                    <span className="group-open:text-accentPrimary transition-colors duration-700">{item.q}</span>
                    <div className="w-10 h-10 rounded-full border border-textPrimary/5 bg-surface/20 flex items-center justify-center group-hover:bg-surface/50 group-hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.1)] group-open:bg-bgSecondary transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] shrink-0 ml-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-textPrimary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                      <Plus size={16} className="text-textSecondary/60 group-hover:text-textPrimary relative z-10 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform group-open:rotate-[135deg] group-open:text-textPrimary" />
                    </div>
                  </summary>
                  
                  {/* Subtle expansion physics */}
                  <div className="overflow-hidden">
                    <div className="pb-8 pt-2 opacity-0 -translate-y-4 group-open:opacity-100 group-open:translate-y-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <p className="text-textSecondary/80 text-[15px] md:text-base leading-relaxed max-w-2xl border-l-2 border-textPrimary/10 pl-5 ml-1">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================
          FOUNDER INSIGHTS — EDITORIAL & HUMAN
      ============================================================ */}
      <section className="relative py-24 md:py-32 bg-surface/30 border-t border-textPrimary/5 overflow-hidden">
        
        {/* Soft Background Warmth */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilterNotes">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterNotes)"/>
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-accentPrimary/5 via-accentSecondary/5 to-transparent blur-[100px] rounded-[100%] opacity-40" />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-20">
              
              {/* Left Content - Editorial Setup */}
              <div className="flex-1 text-center md:text-left pt-2">
                <div className="inline-flex items-center gap-3 mb-6 justify-center md:justify-start w-full">
                  <div className="w-6 h-px bg-textPrimary/20" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-textSecondary/60">Occasional Notes</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-textPrimary mb-6 tracking-tight">
                  Quiet insights on building better systems.
                </h3>
                
                <div className="max-w-sm mx-auto md:mx-0 border-l border-textPrimary/10 pl-5">
                  <p className="text-textSecondary/80 text-sm md:text-base leading-relaxed italic">
                    I occasionally share thoughts on digital architecture, client psychology, and the realities of running a modern business. No spam, just honest reflections from the desk.
                  </p>
                  <p className="text-[10px] text-textSecondary/50 mt-4 uppercase tracking-[0.2em] font-mono">— NIDAM Architecture Studio</p>
                </div>
              </div>

              {/* Right Form Area - Tactile & Restrained */}
              <div className="w-full md:w-[460px] shrink-0 mt-4 md:mt-12 flex flex-col items-center md:items-start relative group/form">
                
                {/* Form Container */}
                <div className="w-full bg-surface/50 backdrop-blur-xl border border-textPrimary/10 rounded-2xl p-2 pl-6 flex flex-col sm:flex-row items-center gap-3 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] hover:bg-surface/80 hover:border-textPrimary/20 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden">
                  
                  {/* Subtle hover gradient inside form */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/form:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                  <input
                    type="email"
                    placeholder="Where should I send the notes?"
                    className="bg-transparent border-none text-sm flex-1 min-w-0 text-textPrimary placeholder:text-textSecondary/40 focus:outline-none focus:ring-0 py-3 relative z-10"
                  />
                  
                  <button className="w-full sm:w-auto shrink-0 relative overflow-hidden px-6 py-3.5 rounded-xl bg-textPrimary text-bgPrimary font-medium text-xs whitespace-nowrap shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_10px_20px_-10px_rgba(255,255,255,0.2)] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 group/submit">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bgPrimary/20 to-transparent translate-x-[-150%] group-hover/submit:translate-x-[150%] transition-transform duration-[1500ms] ease-in-out" />
                    <span className="relative z-10 tracking-wide text-bgPrimary/90 group-hover/submit:text-bgPrimary transition-colors duration-500">Send Me the Notes</span>
                  </button>
                </div>

                {/* Subtext */}
                <div className="flex items-center gap-2 mt-6 opacity-60 pl-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-textPrimary/30" />
                  <p className="text-[9px] text-textSecondary uppercase tracking-[0.15em] font-mono">Sent roughly once a month.</p>
                </div>

              </div>

            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Home;