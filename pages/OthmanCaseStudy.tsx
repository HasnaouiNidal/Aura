import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowLeft,
  Instagram,
  Search,
  Globe2,
  MessageCircle,
  Database,
  BarChart3,
  RefreshCw,
  CheckCircle2,
} from 'lucide-react';
import { FadeIn } from '../components/UI';
import screenshot from '../assets/othman_screenshot.png';

const meta = [
  { label: 'Industry', value: 'Luxury Tourism & Transport' },
  { label: 'Location', value: 'Northern Morocco' },
  { label: 'Scope', value: 'Client Acquisition System' },
  { label: 'Main Flow', value: 'Discovery → Trust → Inquiry → WhatsApp → Follow-up' },
];

const beforeProblems = [
  {
    title: 'Premium service, unclear digital path',
    text: 'The offline experience was stronger than the online journey. The brand needed a clearer way to show value before the first conversation.',
  },
  {
    title: 'Interest disappeared too early',
    text: 'A traveler could feel interested, look around, then leave without a strong next step toward an inquiry.',
  },
  {
    title: 'WhatsApp was not part of a system',
    text: 'The conversation could happen, but it was not connected to a structured journey that prepares the client before the message.',
  },
  {
    title: 'No clear tracking foundation',
    text: 'The business needed a better structure to understand inquiries, follow-up, and future growth decisions.',
  },
];

const systemMap = [
  {
    icon: Instagram,
    title: 'Social Media / Search',
    text: 'People discover the brand through content, recommendations, or search.',
  },
  {
    icon: Globe2,
    title: 'Premium Website',
    text: 'The website builds trust and explains the luxury experience clearly.',
  },
  {
    icon: Search,
    title: 'Destination & Service Pages',
    text: 'Visitors explore offers, destinations, fleet, and trust signals before taking action.',
  },
  {
    icon: MessageCircle,
    title: 'Booking Request / WhatsApp',
    text: 'The visitor starts the conversation with context instead of sending a cold random message.',
  },
  {
    icon: Database,
    title: 'CRM Lead Pipeline',
    text: 'Every inquiry can be organized by status: new, contacted, interested, booked, or lost.',
  },
  {
    icon: BarChart3,
    title: 'Reporting & Optimization',
    text: 'The business can see what is working and improve the journey over time.',
  },
];

const createdParts = [
  {
    number: '01',
    title: 'Social Media Direction',
    text: 'We defined how the brand should appear online: premium, calm, trustworthy, and destination-focused.',
  },
  {
    number: '02',
    title: 'Premium Website Experience',
    text: 'We created a refined digital experience that presents the service with confidence and makes the offer easy to understand.',
  },
  {
    number: '03',
    title: 'Booking-Focused Journey',
    text: 'Every section guides the visitor toward one clear action: request the journey or start the conversation.',
  },
  {
    number: '04',
    title: 'WhatsApp Business Path',
    text: 'Instead of sending visitors to a cold conversation, the system prepares the inquiry and makes WhatsApp more structured.',
  },
  {
    number: '05',
    title: 'CRM Structure',
    text: 'The business can organize leads by stage, so no serious inquiry is forgotten.',
  },
  {
    number: '06',
    title: 'Reporting & Behavior Analysis',
    text: 'The system is designed to show where visitors come from, what they care about, and where the journey can improve.',
  },
];

const travelerJourney = [
  'Discovers the brand',
  'Explores the website',
  'Understands the offer',
  'Sends a request',
  'Moves to WhatsApp',
  'Gets followed up',
  'Books the journey',
];

const designDecisions = [
  {
    title: 'Luxury Vocabulary',
    text: 'The words, rhythm, and visual tone were chosen to make the service feel premium, calm, and high-trust.',
  },
  {
    title: 'Structured Confidence',
    text: 'Services and destinations were organized so the visitor understands the offer without feeling lost.',
  },
  {
    title: 'Trust Architecture',
    text: 'Spacing, typography, imagery, and clear actions work together to reduce hesitation before contact.',
  },
];

const results = [
  'Clearer premium positioning',
  'Better path from discovery to inquiry',
  'More structured WhatsApp communication',
  'A stronger foundation for CRM, follow-up, and reporting',
  'A system that can be improved over time',
];

const OthmanCaseStudy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-bgPrimary min-h-screen text-textPrimary overflow-x-hidden">
      {/* ─────────────────────────────────────────────
          HERO
      ───────────────────────────────────────────── */}
      <section className="relative min-h-[120vh] bg-bgPrimary border-b border-textPrimary/[0.04] overflow-hidden">
        <div className="absolute top-[16%] -left-12 md:-left-24 text-[12rem] md:text-[28rem] font-serif leading-none tracking-tighter text-textPrimary/[0.014] pointer-events-none select-none z-0 whitespace-nowrap -rotate-2">
          Othman
        </div>

        <div className="absolute top-[12%] right-[-8%] w-[95%] md:w-[70%] h-[62vh] z-0 opacity-35 mix-blend-luminosity">
          <img
            src={screenshot}
            alt="Othman Tours digital system preview"
            className="w-full h-full object-cover object-left-top filter blur-[3px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bgPrimary via-bgPrimary/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-bgPrimary/80 via-transparent to-bgPrimary" />
        </div>

        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(var(--app-textPrimary),0.025)_0%,transparent_70%)] pointer-events-none z-0" />

        <div className="container mx-auto px-6 relative z-20 min-h-[120vh] flex flex-col justify-end pb-24 md:pb-32">
          <FadeIn>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-textSecondary/60 hover:text-textPrimary transition-colors duration-500 mb-16"
            >
              
            </Link>

            <div className="relative">
              <div className="flex items-center gap-4 mb-14 opacity-70 ml-2 md:ml-12">
                <span className="w-16 h-[1px] bg-textPrimary/40" />
                <span className="text-[9px] uppercase tracking-[0.4em] font-light text-textPrimary">
                  01 / Tourism Client System
                </span>
              </div>

              <h1 className="text-[clamp(5rem,15vw,13rem)] font-serif tracking-tighter leading-[0.75] mb-16 relative -ml-2 md:-ml-8">
                <span className="block text-textPrimary">Othman</span>
                <span className="block text-textSecondary/32 italic ml-12 md:ml-48">
                  Tours.
                </span>
              </h1>

              <div className="flex flex-col md:flex-row items-start md:items-end gap-14 max-w-6xl ml-2 md:ml-24">
                <div className="w-full md:w-[58%] relative">
                  <div className="absolute -left-6 top-2 w-[1px] h-24 bg-gradient-to-b from-textPrimary/20 to-transparent hidden md:block" />

                  <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-[1.05] mb-8">
                    From scattered interest
                    <span className="block italic text-textSecondary/45 font-light">
                      to a clear booking system.
                    </span>
                  </h2>

                  <p className="text-textSecondary/80 text-[16px] md:text-[20px] font-light max-w-2xl leading-[2]">
                    Othman Tours is a premium tourism and transport brand in Northern Morocco.
                    The goal was not only to create a beautiful website — it was to build a
                    digital system that turns discovery into organized booking inquiries.
                  </p>
                </div>

                <div className="w-full md:w-[42%] flex md:justify-end">
                  <div className="relative inline-flex flex-col gap-5">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-textSecondary/40 md:text-right">
                      Live Website
                    </p>

                    <a
                      href="https://othman-liard.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-6"
                    >
                      <span className="text-[14px] font-serif italic text-textPrimary/80 group-hover:text-textPrimary transition-colors duration-500">
                        Visit Othman Tours
                      </span>
                      <div className="w-12 h-[1px] bg-textPrimary/20 group-hover:bg-textPrimary/60 group-hover:w-16 transition-all duration-500 relative">
                        <ArrowUpRight
                          size={12}
                          className="absolute -right-2 -top-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          META
      ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-textPrimary/[0.04] bg-bgSecondary/35">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {meta.map((item, i) => (
                <div
                  key={item.label}
                  className={`border-l border-textPrimary/15 pl-5 ${
                    i === 1 ? 'lg:-translate-y-4' : ''
                  } ${i === 2 ? 'lg:translate-y-3' : ''}`}
                >
                  <p className="text-[9px] uppercase tracking-[0.3em] text-textSecondary/45 mb-4">
                    {item.label}
                  </p>
                  <p className="text-textPrimary/90 font-light text-[14px] leading-relaxed">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          BEFORE SECTION
      ───────────────────────────────────────────── */}
      <section className="py-32 md:py-48 bg-bgSecondary relative overflow-hidden">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(var(--app-textPrimary),0.018)_0%,transparent_65%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="max-w-5xl mx-auto mb-24">
            <div className="flex items-center gap-4 mb-12 opacity-60">
              <span className="w-12 h-[1px] bg-textPrimary/40" />
              <span className="text-[9px] uppercase tracking-[0.35em] font-light text-textPrimary">
                Before NIDAM
              </span>
            </div>

            <h2 className="text-[clamp(3rem,7vw,6.5rem)] font-serif tracking-tighter leading-[0.9] mb-12">
              The problem was not traffic.
              <span className="block italic text-textSecondary/42 font-light ml-8 md:ml-24 mt-3">
                It was the path.
              </span>
            </h2>

            <p className="text-[16px] md:text-[20px] text-textSecondary/80 font-light leading-[2] max-w-3xl">
              People could discover the brand, but the journey was not clear enough.
              A visitor could feel interested, then leave without knowing the next step.
              Messages could arrive manually, leads could be hard to track, and the business
              owner had no clear view of what was working.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {beforeProblems.map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="h-full bg-bgPrimary/65 border border-textPrimary/[0.07] p-7 md:p-8 rounded-[1.5rem] hover:-translate-y-1 hover:shadow-[0_25px_80px_rgba(0,0,0,0.05)] transition-all duration-500">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-accentSecondary mb-8">
                    0{i + 1}
                  </p>
                  <h3 className="text-xl font-serif leading-tight mb-5 text-textPrimary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-textSecondary/75 leading-[1.8] font-light">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SYSTEM OVERVIEW
      ───────────────────────────────────────────── */}
      <section
        id="system"
        className="py-32 md:py-48 bg-bgPrimary relative overflow-hidden border-y border-textPrimary/[0.04]"
      >
        <div className="absolute top-1/2 -right-32 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(var(--app-textPrimary),0.022)_0%,transparent_65%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="text-center max-w-4xl mx-auto mb-24">
            <p className="text-[9px] uppercase tracking-[0.35em] text-accentSecondary mb-8">
              The System We Built
            </p>

            <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-serif tracking-tight leading-[0.95] mb-8">
              One connected journey
              <span className="block italic text-textSecondary/45 font-light">
                from discovery to booking.
              </span>
            </h2>

            <p className="text-textSecondary/80 leading-[1.9] font-light text-[16px] md:text-[18px]">
              This is the real work behind the project: separate digital points connected
              into one path that helps the business attract attention, build trust,
              capture inquiries, and follow up with more structure.
            </p>
          </FadeIn>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {systemMap.map((step, i) => {
                const Icon = step.icon;

                return (
                  <FadeIn key={step.title} delay={i * 80}>
                    <div className="group relative h-full rounded-[1.75rem] border border-textPrimary/[0.07] bg-surface/25 backdrop-blur-sm p-7 md:p-8 overflow-hidden hover:-translate-y-1 hover:border-accentSecondary/30 transition-all duration-500">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(var(--app-textPrimary),0.045)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-textPrimary/[0.04] border border-textPrimary/[0.07] flex items-center justify-center mb-7">
                          <Icon size={19} className="text-accentSecondary" />
                        </div>

                        <p className="text-[10px] uppercase tracking-[0.25em] text-textSecondary/45 mb-4">
                          Step {String(i + 1).padStart(2, '0')}
                        </p>

                        <h3 className="text-2xl font-serif leading-tight mb-5">
                          {step.title}
                        </h3>

                        <p className="text-sm text-textSecondary/75 leading-[1.9] font-light">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          WHAT WE CREATED
      ───────────────────────────────────────────── */}
      <section className="py-32 md:py-48 bg-bgSecondary/45 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <FadeIn className="max-w-5xl mx-auto mb-24">
            <div className="flex items-center gap-4 mb-12 opacity-60">
              <span className="w-12 h-[1px] bg-textPrimary/40" />
              <span className="text-[9px] uppercase tracking-[0.35em] font-light text-textPrimary">
                What NIDAM Created
              </span>
            </div>

            <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-serif tracking-tight leading-[0.95]">
              Not one asset.
              <span className="block italic text-textSecondary/45 font-light">
                A connected structure.
              </span>
            </h2>
          </FadeIn>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
            {createdParts.map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="group rounded-[1.75rem] border border-textPrimary/[0.07] bg-bgPrimary/65 p-8 md:p-10 hover:-translate-y-1 hover:shadow-[0_25px_80px_rgba(0,0,0,0.05)] transition-all duration-500">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accentSecondary mb-8">
                    {item.number}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-serif mb-5 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-textSecondary/78 leading-[1.9] font-light">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          CUSTOMER JOURNEY
      ───────────────────────────────────────────── */}
      <section className="py-32 md:py-48 bg-bgPrimary border-y border-textPrimary/[0.04] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.018] pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                'linear-gradient(to right, var(--color-textPrimary) 1px, transparent 1px), linear-gradient(to bottom, var(--color-textPrimary) 1px, transparent 1px)',
              backgroundSize: '4rem 4rem',
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="max-w-4xl mx-auto text-center mb-24">
            <p className="text-[9px] uppercase tracking-[0.35em] text-accentSecondary mb-8">
              Customer Journey
            </p>

            <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-serif tracking-tight leading-[0.95] mb-10">
              How a traveler moves
              <span className="block italic text-textSecondary/45 font-light">
                through the system.
              </span>
            </h2>

            <p className="text-textSecondary/80 leading-[2] font-light text-[16px] md:text-[19px]">
              First, the traveler discovers Othman Tours through Instagram, search,
              or recommendation. Then, they land on a premium website that explains
              the experience clearly. They explore destinations, services, and trust
              signals. When they are ready, they send a booking request or start a
              WhatsApp conversation. The inquiry becomes easier to organize, follow up,
              and improve over time.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="max-w-6xl mx-auto rounded-[2rem] border border-textPrimary/[0.07] bg-surface/25 backdrop-blur-md p-5 md:p-8">
              <div className="flex flex-wrap justify-center items-center gap-3">
                {travelerJourney.map((step, index) => (
                  <React.Fragment key={step}>
                    <div className="px-4 py-3 rounded-full bg-bgPrimary/70 border border-textPrimary/[0.07] text-sm text-textSecondary/85">
                      {step}
                    </div>

                    {index < travelerJourney.length - 1 && (
                      <span className="text-textSecondary/35">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          DESIGN DECISIONS
      ───────────────────────────────────────────── */}
      <section className="py-32 md:py-48 bg-bgSecondary/40 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <FadeIn className="max-w-5xl mx-auto mb-24">
            <div className="flex items-center gap-4 mb-12 opacity-60">
              <span className="w-12 h-[1px] bg-textPrimary/40" />
              <span className="text-[9px] uppercase tracking-[0.35em] font-light text-textPrimary">
                Design Decisions
              </span>
            </div>

            <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-serif tracking-tight leading-[0.95] mb-10">
              Design was not decoration.
              <span className="block italic text-textSecondary/45 font-light">
                It was trust architecture.
              </span>
            </h2>

            <p className="text-textSecondary/80 leading-[2] font-light text-[16px] md:text-[19px] max-w-3xl">
              The visual direction was built to make the brand feel premium before the visitor
              reads every detail. Large spacing, calm typography, strong imagery, and clear
              service structure help the traveler feel that the experience is organized,
              safe, and high value.
            </p>
          </FadeIn>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
            {designDecisions.map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="h-full rounded-[1.75rem] bg-bgPrimary/65 border border-textPrimary/[0.07] p-8 md:p-10">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accentSecondary mb-8">
                    0{i + 1}
                  </p>
                  <h3 className="text-2xl font-serif mb-5 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-textSecondary/75 leading-[1.9] font-light">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          RESULT
      ───────────────────────────────────────────── */}
      <section className="py-32 md:py-48 bg-bgPrimary relative overflow-hidden border-y border-textPrimary/[0.04]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[9rem] md:text-[20rem] font-serif italic tracking-tighter text-textPrimary/[0.012] pointer-events-none select-none">
          Result
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="max-w-5xl mx-auto text-center mb-20">
              <p className="text-[9px] uppercase tracking-[0.35em] text-accentSecondary mb-8">
                Honest Result
              </p>

              <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-serif tracking-tight leading-[0.95] mb-10">
                A clearer digital journey.
              </h2>

              <p className="text-textSecondary/80 leading-[2] font-light text-[16px] md:text-[19px] max-w-3xl mx-auto">
                The result is a stronger online foundation where every visitor can understand
                the offer, trust the brand, request a journey, and move into a more organized
                conversation. No fake numbers. No fake testimonials. Just a clearer system.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="max-w-4xl mx-auto rounded-[2rem] border border-textPrimary/[0.07] bg-surface/25 backdrop-blur-md p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-4">
                {results.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-accentSecondary shrink-0 mt-1" />
                    <p className="text-textSecondary/85 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          FINAL CTA
      ───────────────────────────────────────────── */}
      <section className="py-32 md:py-44 bg-bgSecondary/45 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(var(--app-textPrimary),0.025)_0%,transparent_65%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <RefreshCw size={28} className="mx-auto text-accentSecondary mb-8" />

              <h2 className="text-[clamp(3.2rem,7vw,6.5rem)] font-serif tracking-tight leading-[0.9] mb-10">
                Want a system
                <span className="block italic text-textSecondary/45 font-light">
                  like this?
                </span>
              </h2>

              <p className="text-textSecondary/80 leading-[2] font-light text-[16px] md:text-[19px] max-w-2xl mx-auto mb-12">
                If your business depends on inquiries, bookings, WhatsApp conversations,
                or follow-up, NIDAM can build a connected system around it.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-accentPrimary to-accentSecondary text-white text-sm font-semibold shadow-[0_20px_60px_rgba(139,92,246,0.25)] hover:-translate-y-0.5 transition-all duration-500"
                >
                  Build My Client System
                  <ArrowUpRight size={16} className="ml-2" />
                </Link>

                <Link
                  to="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-textPrimary/[0.08] bg-bgPrimary/70 text-textPrimary text-sm font-semibold hover:bg-textPrimary/[0.04] transition-all duration-500"
                >
                  View More Systems
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default OthmanCaseStudy;