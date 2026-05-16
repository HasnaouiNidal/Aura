import React from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  Code2,
  Database,
  ExternalLink,
  Globe2,
  Instagram,
  Layers3,
  MessageCircle,
  MousePointerClick,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const atelierScreenshot = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600";

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const SectionLabel = ({
  eyebrow,
  label,
}: {
  eyebrow?: string;
  label: string;
}) => (
  <div className="mb-5 flex items-center gap-3">
    <span className="h-px w-10 bg-slate-300" />
    <span className="rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-600 dark:text-amber-400 shadow-sm dark:shadow-none backdrop-blur">
      {eyebrow || label}
    </span>
  </div>
);

const FloatingHeroBadge = ({
  className,
  icon,
  label,
  title,
}: {
  className?: string;
  icon: React.ReactNode;
  label: string;
  title: string;
}) => (
  <div
    className={cn(
      "absolute hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-5 py-4 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-amber-200 hover:shadow-[0_26px_80px_rgba(14,165,233,0.16)] md:block",
      className
    )}
  >
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-900/50">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
          {label}
        </p>
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
          {title}
        </p>
      </div>
    </div>
  </div>
);

const Badge = ({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => (
  <div className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-slate-200 dark:border-slate-800 bg-white/85 dark:bg-slate-900/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 dark:text-slate-400 shadow-[0_16px_45px_rgba(15,23,42,0.04)] dark:shadow-none backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-amber-300 hover:text-white hover:shadow-[0_22px_70px_rgba(14,165,233,0.25)]">
    <span className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-r from-amber-400 to-orange-500 transition-transform duration-500 group-hover:translate-y-0" />
    {icon && (
      <span className="text-amber-500 transition-colors duration-500 group-hover:text-white">
        {icon}
      </span>
    )}
    {children}
  </div>
);

const PremiumCard = ({
  children,
  className,
  bar = true,
}: {
  children: React.ReactNode;
  className?: string;
  bar?: boolean;
}) => (
  <div
    className={cn(
      "group relative overflow-hidden rounded-[2rem] border border-slate-200/80 dark:border-slate-800/80 bg-white/85 dark:bg-slate-900/85 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.05)] dark:shadow-none backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-amber-200 hover:bg-white hover:shadow-[0_35px_110px_rgba(14,165,233,0.13)]",
      className
    )}
  >
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-amber-100 blur-[60px]" />
      <div className="absolute -bottom-24 -left-24 h-52 w-52 rounded-full bg-stone-100 blur-[70px]" />
    </div>

    <div className="relative z-10">{children}</div>

    {bar && (
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-slate-100 dark:bg-slate-800">
        <div className="h-full w-10 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-700 group-hover:w-full" />
      </div>
    )}
  </div>
);

const GradientButton = ({
  children,
  href = "#",
  variant = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}) => (
  <a
    href={href}
    className={cn(
      "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-4 text-sm font-semibold transition-all duration-500",
      variant === "primary"
        ? "bg-gradient-to-r from-stone-600 to-orange-600 text-white shadow-[0_18px_45px_rgba(37,99,235,0.25)] hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(37,99,235,0.35)]"
        : "border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 shadow-sm dark:shadow-none hover:-translate-y-1 hover:border-amber-300 hover:text-white hover:shadow-[0_22px_70px_rgba(14,165,233,0.22)]"
    )}
  >
    {variant === "secondary" && (
      <span className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-r from-amber-400 to-orange-500 transition-transform duration-500 group-hover:translate-y-0" />
    )}

    {children}

    {variant === "primary" ? (
      <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
    ) : (
      <ExternalLink size={15} className="transition-transform duration-500 group-hover:translate-x-1" />
    )}
  </a>
);

const FlowPill = ({ children }: { children: React.ReactNode }) => (
  <div className="group relative overflow-hidden rounded-full border border-slate-200 dark:border-slate-800 bg-white/85 dark:bg-slate-900/85 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 shadow-sm dark:shadow-none transition-all duration-500 hover:-translate-y-1 hover:border-amber-300 hover:text-white hover:shadow-[0_18px_50px_rgba(14,165,233,0.20)]">
    <span className="absolute inset-0 -z-10 scale-x-0 bg-gradient-to-r from-amber-400 to-orange-500 transition-transform duration-500 group-hover:scale-x-100" />
    {children}
  </div>
);

const FlowArrow = () => (
  <div className="hidden h-px w-8 bg-gradient-to-r from-slate-200 via-stone-200 to-slate-200 md:block" />
);

const IconCircle = ({
  icon,
  color = "amber",
}: {
  icon: React.ReactNode;
  color?: "amber" | "stone" | "rose" | "emerald" | "slate";
}) => {
  const styles = {
    amber: "bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-900/50",
    stone: "bg-stone-50 dark:bg-stone-950/50 text-stone-600 dark:text-stone-400 border-stone-100 dark:border-stone-900/50",
    rose: "bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-900/50",
    emerald: "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/50",
    slate: "bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border-slate-100 dark:border-slate-800",
  };

  return (
    <div
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-2xl border",
        styles[color]
      )}
    >
      {icon}
    </div>
  );
};

const phases = [
  {
    number: "01",
    title: "Research the buyer journey",
    text: "We mapped how high-net-worth individuals discover properties, compare luxury options, feel exclusivity, and decide to request a private viewing.",
    icon: <Search size={18} />,
  },
  {
    number: "02",
    title: "Define the emotional void",
    text: "We separated generic listing facts from the real aspiration problem: buyers needed to feel the life inside the property before seeing it.",
    icon: <MousePointerClick size={18} />,
  },
  {
    number: "03",
    title: "Build the digital architecture",
    text: "We created a cinematic, premium interface that presents the property as a narrative, not just a floor plan.",
    icon: <Code2 size={18} />,
  },
  {
    number: "04",
    title: "Create editorial storytelling",
    text: "We turned standard features into an emotional narrative, selling morning light, silence, and the feeling of home.",
    icon: <Instagram size={18} />,
  },
  {
    number: "05",
    title: "Design frictionless private enquiry",
    text: "We made the contact path discreet and invisible until the exact moment interest crystallises.",
    icon: <MessageCircle size={18} />,
  },
  {
    number: "06",
    title: "Organize premium relationship CRM",
    text: "We mapped where every private consultation request should go to feel like a concierge service.",
    icon: <Database size={18} />,
  },
  {
    number: "07",
    title: "Add behavioral optimization",
    text: "We prepared the system to learn from cinematic views, time spent per room, and enquiry qualification rates.",
    icon: <BarChart3 size={18} />,
  },
];

const problemCards = [
  "Generic listings communicated facts, never feeling",
  "The digital experience mirrored a legal document",
  "Every luxury listing felt like every other",
  "Buyers lacked emotional commitment before viewing",
];

const codeFeatures = [
  "Cinematic React-based interface",
  "Editorial typography and layout",
  "Immersive visual exploration",
  "Discreet private enquiry CTA",
  "Performance-optimized high-res media",
  "Context-aware contact flow",
  "Trust-driven section flow",
];

const mediaServices = [
  "Architectural photography direction",
  "Lifestyle storytelling",
  "Cinematic video tours",
  "Atmospheric lighting emphasis",
  "Editorial copywriting",
  "Property branding",
];

const crmStages = ["New Enquiry", "Qualified", "Private Showing", "Negotiation"];

const leadCards = [
  {
    title: "Private villa enquiry",
    source: "Instagram",
    service: "Off-market Villa",
    status: "New Enquiry",
    action: "Arrange concierge call",
  },
  {
    title: "Investment portfolio request",
    source: "Direct",
    service: "Marrakech Estates",
    status: "Qualified",
    action: "Send private dossier",
  },
  {
    title: "Exclusive viewing schedule",
    source: "Search",
    service: "Palmeraie Mansion",
    status: "Private Showing",
    action: "Confirm discreet arrival",
  },
  {
    title: "Off-market consultation",
    source: "WhatsApp",
    service: "Global Portfolio",
    status: "Negotiation",
    action: "Prepare bespoke terms",
  },
];

const reportItems = [
  "Property cinematic views",
  "Time spent on listing",
  "Private showing requests",
  "Best traffic source",
  "Enquiry qualification rate",
  "Conversion path",
];

const systemChecklist = [
  "Cinematic presentation",
  "Premium property website",
  "Editorial storytelling",
  "Private enquiry path",
  "Guided consultation flow",
  "CRM follow-up logic",
  "Reporting foundation",
  "Buyer psychology strategy",
];

const beforeItems = [
  "Listings showed facts, not feeling",
  "Buyers arrived just curious, not committed",
  "The digital experience was forgettable",
  "Enquiries lacked context and qualification",
  "Brand felt like an agency, not a curator",
];

const afterItems = [
  "Emotional attraction before the showing",
  "Buyers arrive emotionally committed",
  "Immersive, editorial digital experience",
  "Discreet, highly contextual enquiry flow",
  "Premium relationship from the first click",
];

const outcomeCards = [
  "Stronger emotional attraction",
  "Higher enquiry qualification",
  "Premium relationship foundation",
  "Faster conversion to acquired",
];

const AtelierEstates = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfbfc] dark:bg-slate-950 text-slate-950 dark:text-slate-50">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-stone-100/40 dark:bg-stone-900/20 blur-[130px]" />
        <div className="absolute right-[-250px] top-[700px] h-[600px] w-[600px] rounded-full bg-amber-100/40 dark:bg-amber-900/20 blur-[140px]" />
        <div className="absolute bottom-[500px] left-[-300px] h-[700px] w-[700px] rounded-full bg-orange-100/40 dark:bg-orange-900/20 blur-[140px]" />
      </div>

      {/* SECTION 1 — HERO */}
      <section className="relative px-6 pb-24 pt-32 lg:px-10 lg:pb-32 lg:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionLabel label="LUXURY REAL ESTATE SYSTEM" />

            <h1 className="max-w-3xl font-serif text-6xl font-semibold leading-[0.92] tracking-[-0.06em] text-slate-950 dark:text-slate-50 md:text-7xl lg:text-8xl">
              Atelier Estates
            </h1>

            <h2 className="mt-5 max-w-3xl font-serif text-4xl italic leading-[1] tracking-[-0.05em] text-slate-400 dark:text-slate-500 md:text-6xl">
              From aspiration to a clear acquired system.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              Atelier Estates did not need another standard property listing. It needed a complete digital acquisition journey that helps high-net-worth individuals discover the property, feel its atmosphere before visiting, explore at their own pace, and request a private viewing with deep emotional commitment.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <GradientButton href="#full-system">
                Explore The Full System
              </GradientButton>

              <GradientButton
                href="https://atelier-estates.vercel.app/"
                variant="secondary"
              >
                Visit Live Website
              </GradientButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Badge icon={<Instagram size={13} />}>
                Cinematic Property Presentation
              </Badge>
              <Badge icon={<Globe2 size={13} />}>Premium Editorial Website</Badge>
              <Badge icon={<MousePointerClick size={13} />}>
                Discreet Enquiry Capture
              </Badge>
              <Badge icon={<MessageCircle size={13} />}>
                Private WhatsApp Path
              </Badge>
              <Badge icon={<Database size={13} />}>Premium CRM Structure</Badge>
              <Badge icon={<BarChart3 size={13} />}>Reporting Logic</Badge>
            </div>
          </div>

          <div className="relative">
            <FloatingHeroBadge
              className="-left-4 -top-6"
              icon={<Check size={20} />}
              label="Desire"
              title="Emotional Attraction"
            />

            <FloatingHeroBadge
              className="-right-3 top-28"
              icon={<MessageCircle size={20} />}
              label="Booking"
              title="Discreet Enquiry"
            />

            <FloatingHeroBadge
              className="-bottom-3 left-1"
              icon={<Search size={15} />}
              label="Clarity"
              title="Immersive Exploration"
            />

            <div className="group relative rounded-[2.4rem] border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-4 shadow-[0_40px_140px_rgba(15,23,42,0.14)] backdrop-blur transition-all duration-700 hover:-translate-y-3 hover:border-amber-200 hover:shadow-[0_55px_160px_rgba(14,165,233,0.18)]">
              <div className="pointer-events-none absolute inset-0 rounded-[2.4rem] bg-gradient-to-br from-amber-100/0 via-white/0 to-stone-100/0 transition-all duration-700 group-hover:from-amber-100/40 group-hover:to-stone-100/40" />

              <div className="relative rounded-[1.8rem] bg-slate-900 dark:bg-slate-950 p-3 shadow-inner">
                <div className="mb-3 flex gap-2 px-2">
                  <span className="h-3 w-3 rounded-full bg-red-300" />
                  <span className="h-3 w-3 rounded-full bg-yellow-300" />
                  <span className="h-3 w-3 rounded-full bg-green-300" />
                </div>

                <img
                  src={atelierScreenshot}
                  alt="Atelier Estates website mockup"
                  className="h-[350px] w-full rounded-[1.2rem] object-cover transition-all duration-700 group-hover:scale-[1.025] group-hover:saturate-125"
                />
              </div>
            </div>

            <div className="absolute -bottom-8 right-8 hidden w-44 rounded-[1.7rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.12)] transition-all duration-700 hover:-translate-y-3 hover:rotate-1 hover:border-amber-200 hover:shadow-[0_36px_100px_rgba(14,165,233,0.18)] md:block">
              <div className="rounded-[1.2rem] bg-slate-950 dark:bg-slate-900 p-2">
                <img
                  src={atelierScreenshot}
                  alt="Atelier Estates mobile preview"
                  className="h-44 w-full rounded-xl object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-5 shadow-[0_20px_70px_rgba(15,23,42,0.04)] dark:shadow-none backdrop-blur">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <FlowPill>Discover / Instagram</FlowPill>
            <FlowArrow />
            <FlowPill>Cinematic Website</FlowPill>
            <FlowArrow />
            <FlowPill>Property Narrative</FlowPill>
            <FlowArrow />
            <FlowPill>Discreet Enquiry</FlowPill>
            <FlowArrow />
            <FlowPill>Concierge Contact</FlowPill>
            <FlowArrow />
            <FlowPill>Follow-up</FlowPill>
            <FlowArrow />
            <FlowPill>Private Showing</FlowPill>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE BUSINESS PROBLEM */}
      <section className="border-y border-slate-200/70 dark:border-slate-800/70 bg-white/40 dark:bg-slate-900/40 px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionLabel label="The business problem" />

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <h2 className="font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-slate-950 dark:text-slate-50 md:text-7xl">
                The issue was not the properties. {" "}<span className="text-slate-400 dark:text-slate-500">The issue was the emotional connection.</span>
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              Atelier Estates already had a premium portfolio. The real weakness was the digital journey before the first visit. Buyers could discover the properties, but the path from generic interest to deep desire, from metrics to a private showing request, was not structured emotionally.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {problemCards.map((item, index) => (
              <PremiumCard
                key={item}
                className="relative min-h-[190px] cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <span className="font-serif text-6xl font-semibold text-slate-100 transition-colors duration-500 group-hover:text-amber-100">
                    0{index + 1}
                  </span>

                  <span className="flex h-10 w-10 scale-90 items-center justify-center rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-amber-500 opacity-0 shadow-sm dark:shadow-none transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                    <ArrowRight size={16} />
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold tracking-[-0.03em] text-slate-950 dark:text-slate-50 transition-colors duration-500 group-hover:text-orange-600">
                  {item}
                </h3>
              </PremiumCard>
            ))}
          </div>

          <div className="group mt-10 rounded-[2.2rem] border border-red-100 dark:border-red-900/50 bg-gradient-to-br from-white to-red-50/30 p-7 shadow-[0_20px_70px_rgba(15,23,42,0.04)] dark:shadow-none transition-all duration-500 hover:-translate-y-1 hover:border-amber-200 hover:shadow-[0_28px_90px_rgba(14,165,233,0.12)]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-red-400 transition-all duration-500 group-hover:bg-amber-400" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 transition-colors duration-500 group-hover:text-amber-600">
                Before NIDAM
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                "Visitor", "Uncertainty", "Generic Listing", "Hesitation", "Lost Interest",
              ].map((item, index) => (
                <React.Fragment key={item}>
                  <FlowPill>{item}</FlowPill>
                  {index < 4 && (
                    <div className="h-px w-8 bg-gradient-to-r from-red-200 to-slate-200 transition-all duration-500 group-hover:from-amber-300 group-hover:to-orange-300" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE NIDAM WORKSHOP METHOD */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex justify-center">
              <span className="rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-600 dark:text-amber-400 shadow-sm dark:shadow-none">
                How NIDAM built the system
              </span>
            </div>

            <h2 className="font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-slate-950 dark:text-slate-50 md:text-7xl">
              From zero to premium acquisition system.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              This project was not built in one step. NIDAM rebuilt the journey
              in phases. Each phase had a role, a reason, and a business
              objective.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-7">
            {phases.map((phase) => (
              <PremiumCard
                key={phase.number}
                className="relative min-h-[280px] cursor-pointer p-5 lg:min-h-[300px]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <IconCircle icon={phase.icon} color="stone" />
                  </div>

                  <span className="font-serif text-6xl font-semibold text-slate-100 transition-colors duration-500 group-hover:text-amber-100">
                    {phase.number}
                  </span>
                </div>

                <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950 dark:text-slate-50 transition-colors duration-500 group-hover:text-orange-600">
                  {phase.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400 transition-colors duration-500 group-hover:text-slate-700">
                  {phase.text}
                </p>

                <div className="mt-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-500 opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100">
                  Open phase logic <ArrowRight size={13} />
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — PHASE 01 */}
      <section className="bg-gradient-to-b from-white to-slate-50 px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel eyebrow="Phase 01" label="Phase 01" />

            <h2 className="font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-slate-950 dark:text-slate-50 md:text-7xl">
              Strategy before design.
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600 dark:text-slate-400">
              NIDAM started by understanding the high-net-worth buyer journey. We studied how an individual discovers a premium property, what creates desire, what builds an emotional connection, and what must happen before someone sends a discreet enquiry.
            </p>

            <div className="mt-8 rounded-[2rem] border border-stone-100 dark:border-stone-900/50 bg-stone-50/40 dark:bg-stone-950/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-amber-200 hover:bg-amber-50/40 dark:bg-amber-950/40 hover:shadow-[0_24px_80px_rgba(14,165,233,0.12)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-600 dark:text-stone-400">
                Why this phase matters
              </p>
              <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                If the psychology is wrong, the design may look beautiful but still fail to make buyers emotionally commit.
              </p>
            </div>
          </div>

          <div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Buyers need to feel the lifestyle before seeing it", "Luxury property websites must feel cinematic, not transactional", "The next step must feel discreet and private", "Property pages must tell a compelling narrative", "Emotional signals must appear before the CTA",
              ].map((item) => (
                <PremiumCard key={item} className="cursor-pointer p-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-500 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-500 group-hover:text-white">
                      <Check size={15} />
                    </span>

                    <p className="text-sm font-semibold leading-6 text-slate-800 dark:text-slate-200 transition-colors duration-500 group-hover:text-orange-600">
                      {item}
                    </p>
                  </div>
                </PremiumCard>
              ))}
            </div>

            <div className="mt-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.05)] dark:shadow-none transition-all duration-500 hover:-translate-y-1 hover:border-amber-200 hover:shadow-[0_30px_90px_rgba(14,165,233,0.12)]">
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                Buyer journey map
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {["Discover", "Aspire", "Immerse", "Desire", "Ask", "Acquire"].map(
                  (item, index) => (
                    <React.Fragment key={item}>
                      <FlowPill>{item}</FlowPill>
                      {index < 5 && <FlowArrow />}
                    </React.Fragment>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — PHASE 02 */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionLabel eyebrow="Phase 02" label="Phase 02" />

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-slate-950 dark:text-slate-50 md:text-7xl">
                The digital architecture built by the NIDAM Code Team.
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-600 dark:text-slate-400">
                The Code Team built the visible layer of the system: a cinematic, responsive, fast, and structured editorial website that presents the property clearly and guides the buyer toward a discreet enquiry.
              </p>

              <div className="mt-9 space-y-3">
                {codeFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-5 py-4 shadow-sm dark:shadow-none transition-all duration-500 hover:-translate-y-1 hover:border-amber-200 hover:bg-white hover:shadow-[0_20px_70px_rgba(14,165,233,0.10)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-500 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-500 group-hover:text-white">
                        <Check size={15} />
                      </span>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors duration-500 group-hover:text-orange-600">
                        {feature}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-[2rem] border border-amber-100 dark:border-amber-900/50 bg-amber-50/40 dark:bg-amber-950/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-amber-300 hover:bg-amber-50 hover:shadow-[0_24px_80px_rgba(14,165,233,0.12)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
                  What this phase solved
                </p>
                <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                  The website stopped being only a brochure. It became a guided acquisition interface.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-8 right-10 z-20 flex flex-wrap gap-2">
                {["React", "SEO", "Performance", "Cinematic", "UX"].map(
                  (item) => (
                    <Badge key={item}>{item}</Badge>
                  )
                )}
              </div>

              <div className="group rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-[0_40px_130px_rgba(15,23,42,0.12)] transition-all duration-700 hover:-translate-y-3 hover:border-amber-200 hover:shadow-[0_55px_160px_rgba(14,165,233,0.18)]">
                <div className="rounded-[1.8rem] bg-slate-950 dark:bg-slate-900 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-300" />
                      <span className="h-3 w-3 rounded-full bg-yellow-300" />
                      <span className="h-3 w-3 rounded-full bg-green-300" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                      atelier-estates.com
                    </span>
                  </div>

                  <img
                    src={atelierScreenshot}
                    alt="Website structure mockup"
                    className="h-[300px] w-full rounded-[1.2rem] object-cover transition-all duration-700 group-hover:scale-[1.025] group-hover:saturate-125"
                  />
                </div>
              </div>

              <div className="mt-5 rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-slate-950 dark:bg-slate-900 p-6 text-white shadow-[0_30px_100px_rgba(15,23,42,0.15)] transition-all duration-500 hover:-translate-y-1 hover:border-amber-300">
                <div className="mb-4 flex items-center gap-3">
                  <Code2 className="text-amber-300" size={18} />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                    Interface logic
                  </span>
                </div>

                <pre className="overflow-hidden text-xs leading-6 text-slate-300 dark:text-slate-600">
{`const journey = [
  "discover",
  "immerse",
  "desire",
  "enquire",
  "follow_up"
];`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — PHASE 03 */}
      <section className="border-y border-slate-200/70 dark:border-slate-800/70 bg-white/50 dark:bg-slate-900/50 px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionLabel eyebrow="Phase 03" label="Phase 03" />

          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <h2 className="font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-slate-950 dark:text-slate-50 md:text-7xl">
                The cinematic storytelling layer built by the NIDAM Media Team.
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-600 dark:text-slate-400">
                For a luxury real estate brand, social media and content are not random posts. They are the top of the acquisition journey. NIDAM planned social and website content that helps buyers discover the property, feel its atmosphere, understand its narrative, and move toward a private viewing.
              </p>

              <div className="mt-9 grid gap-4 md:grid-cols-2">
                {mediaServices.map((service) => (
                  <PremiumCard key={service} className="cursor-pointer p-5">
                    <div className="flex items-center gap-3">
                      <div className="transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                        <IconCircle icon={<Sparkles size={16} />} color="stone" />
                      </div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 transition-colors duration-500 group-hover:text-orange-600">
                        {service}
                      </p>
                    </div>
                  </PremiumCard>
                ))}
              </div>

              <div className="mt-7 rounded-[2rem] border border-stone-100 dark:border-stone-900/50 bg-stone-50/40 dark:bg-stone-950/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-amber-200 hover:bg-amber-50/40 dark:bg-amber-950/40 hover:shadow-[0_24px_80px_rgba(14,165,233,0.12)]">
                <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
                  Social media was treated as a desire engine, not a random posting space.
                </p>
              </div>
            </div>

            <div className="group rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-[0_35px_110px_rgba(15,23,42,0.08)] dark:shadow-[0_20px_70px_rgba(0,0,0,0.5)] transition-all duration-700 hover:-translate-y-3 hover:border-amber-200 hover:shadow-[0_50px_150px_rgba(14,165,233,0.16)]">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <IconCircle icon={<Instagram size={18} />} color="stone" />
                  <div>
                    <p className="text-sm font-semibold text-slate-950 dark:text-slate-50">
                      Atelier Estates
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Premium real estate
                    </p>
                  </div>
                </div>

                <button className="rounded-full bg-slate-950 dark:bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-500">
                  Follow
                </button>
              </div>

              <div className="relative mb-6 overflow-hidden rounded-[1.5rem]">
                <img
                  src={atelierScreenshot}
                  alt="Atelier Estates visual style"
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                    Latest Property
                  </p>
                  <p className="mt-1 font-serif text-2xl text-white">
                    Palmeraie Mansion
                  </p>
                </div>
              </div>

              <div className="mb-6 flex gap-3 overflow-x-auto pb-2">
                {[
                  "Properties", "Off-Market", "Concierge", "Journal", "Press", "Contact",
                ].map((highlight) => (
                  <div key={highlight} className="min-w-[76px] text-center">
                    <div className="mx-auto mb-2 h-16 w-16 rounded-full border border-stone-200 bg-gradient-to-br from-stone-50 to-orange-50 p-1 transition-all duration-500 hover:-translate-y-1 hover:border-amber-300">
                      <div className="h-full w-full rounded-full bg-white dark:bg-slate-900" />
                    </div>
                    <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 9 }).map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "aspect-square rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br shadow-sm dark:shadow-none transition duration-500 hover:-translate-y-1 hover:border-amber-300 hover:shadow-[0_20px_60px_rgba(14,165,233,0.12)]",
                      index % 3 === 0 && "from-slate-900 to-slate-700",
                      index % 3 === 1 && "from-amber-50 to-stone-100",
                      index % 3 === 2 && "from-white to-slate-100"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — PHASE 04 */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionLabel eyebrow="Phase 04" label="Phase 04" />

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-slate-950 dark:text-slate-50 md:text-7xl">
                The private enquiry and WhatsApp flow.
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-600 dark:text-slate-400">
                NIDAM did not treat WhatsApp like a simple button. The system was designed so the buyer first understands the property, feels the desire, then reaches WhatsApp or contact form with premium context.
              </p>

              <div className="mt-9 grid gap-4">
                {[
                  "Buyer views a cinematic property narrative", "Buyer clicks private consultation CTA", "Short structured request collects premium context", "WhatsApp opens with a discreet first message",
                ].map((step, index) => (
                  <PremiumCard key={step} className="cursor-pointer p-5">
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-3xl font-semibold text-slate-200 dark:text-slate-700 transition-colors duration-500 group-hover:text-amber-100">
                        0{index + 1}
                      </span>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 transition-colors duration-500 group-hover:text-orange-600">
                        {step}
                      </p>
                    </div>
                  </PremiumCard>
                ))}
              </div>
            </div>

            <div>
              <div className="group rounded-[2.5rem] border border-emerald-100 dark:border-emerald-900/50 bg-gradient-to-br from-white to-emerald-50/40 p-6 shadow-[0_35px_110px_rgba(15,23,42,0.08)] dark:shadow-[0_20px_70px_rgba(0,0,0,0.5)] transition-all duration-700 hover:-translate-y-3 hover:border-amber-200 hover:shadow-[0_50px_150px_rgba(14,165,233,0.16)]">
                <div className="mb-6 flex items-center gap-3">
                  <IconCircle icon={<MessageCircle size={18} />} color="emerald" />
                  <div>
                    <p className="font-semibold text-slate-950 dark:text-slate-50">
                      WhatsApp Enquiry Capture
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Structured message preview
                    </p>
                  </div>
                </div>

                <div className="rounded-[2rem] bg-slate-950 dark:bg-slate-900 p-5 transition-all duration-700 group-hover:bg-[#061624]">
                  <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-emerald-500 px-5 py-4 text-sm leading-7 text-white transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-500">
                    Hi Atelier Estates, I would like to schedule a private viewing.<br />
                    Property: ______<br />
                    Preferred schedule: ______<br />
                    My requirements: ______
                  </div>

                  <div className="mt-4 max-w-[82%] rounded-2xl rounded-tl-sm bg-white/10 dark:bg-slate-900/10 px-5 py-4 text-sm leading-7 text-slate-200 dark:text-slate-700">
                    Thank you. We have received your discreet enquiry.
                    Our concierge team will respond shortly to arrange your private viewing.
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  "Less hesitation", "Faster premium replies", "Better buyer qualification", "Discreet follow-up",
                ].map((benefit) => (
                  <PremiumCard key={benefit} className="cursor-pointer p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-500 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-500 group-hover:text-white">
                        <Check size={15} />
                      </span>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 transition-colors duration-500 group-hover:text-orange-600">
                        {benefit}
                      </p>
                    </div>
                  </PremiumCard>
                ))}
              </div>

              <p className="mt-5 text-center text-sm italic text-slate-500 dark:text-slate-400">
                A calmer first message creates a better premium conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — PHASE 05 CRM FIXED */}
      <section className="bg-gradient-to-b from-white to-slate-50 px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionLabel eyebrow="Phase 05" label="Phase 05" />

          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <h2 className="font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-slate-950 dark:text-slate-50 md:text-7xl">
                The CRM and buyer organization layer.
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-600 dark:text-slate-400">
                After the enquiry enters the system, it should not disappear inside random messages. NIDAM mapped a simple CRM logic so every premium buyer enquiry can be tracked and followed up correctly.
              </p>

              <div className="mt-8 rounded-[2rem] border border-amber-100 dark:border-amber-900/50 bg-amber-50/40 dark:bg-amber-950/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-amber-300 hover:bg-amber-50 hover:shadow-[0_24px_80px_rgba(14,165,233,0.12)]">
                <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
                  Premium opportunities should be visible, organized, and actionable.
                </p>
              </div>
            </div>

            <div className="w-full overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white/85 dark:bg-slate-900/85 p-5 shadow-[0_35px_110px_rgba(15,23,42,0.08)] dark:shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {crmStages.map((stage, index) => {
                  const lead = leadCards[index % leadCards.length];

                  return (
                    <div
                      key={stage}
                      className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/70 p-4 transition-all duration-500 hover:-translate-y-2 hover:border-amber-200 hover:bg-white hover:shadow-[0_25px_80px_rgba(14,165,233,0.12)]"
                    >
                      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-slate-100 dark:bg-slate-800">
                        <div className="h-full w-8 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-700 group-hover:w-full" />
                      </div>

                      <div className="mb-4 flex items-center justify-between">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400 transition-colors duration-500 group-hover:text-amber-600">
                          {stage}
                        </p>

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-slate-900 text-xs font-semibold text-slate-400 dark:text-slate-500 shadow-sm dark:shadow-none transition-all duration-500 group-hover:bg-orange-500 group-hover:text-white">
                          {index + 1}
                        </span>
                      </div>

                      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm dark:shadow-none transition-all duration-500 group-hover:border-amber-100">
                        <p className="text-sm font-semibold leading-6 text-slate-950 dark:text-slate-50">
                          {lead.title}
                        </p>

                        <div className="mt-4 space-y-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                          <p>
                            Source:{" "}
                            <span className="font-semibold text-slate-700 dark:text-slate-300">
                              {lead.source}
                            </span>
                          </p>
                          <p>
                            Destination / service:{" "}
                            <span className="font-semibold text-slate-700 dark:text-slate-300">
                              {lead.service}
                            </span>
                          </p>
                          <p>
                            Status:{" "}
                            <span className="font-semibold text-slate-700 dark:text-slate-300">
                              {lead.status}
                            </span>
                          </p>
                          <p>
                            Next action:{" "}
                            <span className="font-semibold text-slate-700 dark:text-slate-300">
                              {lead.action}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {leadCards.map((lead) => (
                  <PremiumCard key={lead.title} className="cursor-pointer p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold text-slate-950 dark:text-slate-50 transition-colors duration-500 group-hover:text-orange-600">
                          {lead.title}
                        </p>

                        <div className="mt-4 grid gap-2 text-sm text-slate-500 dark:text-slate-400">
                          <p>Source: {lead.source}</p>
                          <p>Destination / service: {lead.service}</p>
                          <p>Status: {lead.status}</p>
                          <p>Next action: {lead.action}</p>
                        </div>
                      </div>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-500 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-500 group-hover:text-white">
                        <Database size={17} />
                      </span>
                    </div>
                  </PremiumCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — PHASE 06 */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel eyebrow="Phase 06" label="Phase 06" />

            <h2 className="font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-slate-950 dark:text-slate-50 md:text-7xl">
              Reports that help the agency learn.
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600 dark:text-slate-400">
              NIDAM also designed the project as a measurable system. The goal was not only to launch a beautiful property page, but to create a structure that can later show where private enquiries come from, what narratives buyers view, and where the acquisition journey can improve.
            </p>

            <div className="mt-8 rounded-[2rem] border border-rose-100 dark:border-rose-900/50 bg-rose-50/50 dark:bg-rose-950/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-amber-200 hover:bg-amber-50/40 dark:bg-amber-950/40 hover:shadow-[0_24px_80px_rgba(14,165,233,0.12)]">
              <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
                Most serious enquiries can come after buyers explore cinematic narratives and then move to WhatsApp. This means emotional connection and page hierarchy matter.
              </p>
            </div>

            <p className="mt-5 text-sm italic text-slate-500 dark:text-slate-400">
              No fake numbers. The purpose here is to show the reporting logic,
              not invent data.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-[0_35px_110px_rgba(15,23,42,0.08)] dark:shadow-[0_20px_70px_rgba(0,0,0,0.5)] transition-all duration-700 hover:-translate-y-2 hover:border-amber-200 hover:shadow-[0_45px_130px_rgba(14,165,233,0.14)]">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-950 dark:text-slate-50">
                  System report
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Logic dashboard preview
                </p>
              </div>
              <IconCircle icon={<BarChart3 size={18} />} color="rose" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {reportItems.map((item, index) => (
                <div
                  key={item}
                  className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/70 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-amber-200 hover:bg-white hover:shadow-[0_20px_70px_rgba(14,165,233,0.10)]"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500 transition-colors duration-500 group-hover:text-amber-600">
                    {item}
                  </p>

                  <div className="mt-4 h-2 rounded-full bg-slate-200 dark:bg-slate-700">
                    <div
                      className={cn(
                        "h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-700 group-hover:w-full",
                        index === 0 && "w-[45%]",
                        index === 1 && "w-[52%]",
                        index === 2 && "w-[58%]",
                        index === 3 && "w-[64%]",
                        index === 4 && "w-[70%]",
                        index === 5 && "w-[76%]",
                        index === 6 && "w-[82%]"
                      )}
                    />
                  </div>

                  <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                    Reporting placeholder — logic only.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FULL SYSTEM MAP */}
      <section
        id="full-system"
        className="border-y border-slate-200/70 dark:border-slate-800/70 bg-white/50 dark:bg-slate-900/50 px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel label="The full system at a glance" />

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-8 shadow-[0_35px_110px_rgba(15,23,42,0.08)] dark:shadow-[0_20px_70px_rgba(0,0,0,0.5)] transition-all duration-700 hover:-translate-y-2 hover:border-amber-200 hover:shadow-[0_45px_130px_rgba(14,165,233,0.14)]">
              <div className="mx-auto flex max-w-xl flex-col items-center gap-4">
                {[
                  "NIDAM Media Team",
                  "Instagram / Cinematic Content", "Website / Editorial Pages", "Private Enquiry CTA", "WhatsApp / Discreet Path",
                  "CRM Pipeline",
                  "Premium Follow-up",
                  "Reporting & Optimization",
                ].map((item, index, array) => (
                  <React.Fragment key={item}>
                    <div className="group relative w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-white to-slate-50 px-6 py-5 text-center text-sm font-semibold text-slate-800 dark:text-slate-200 shadow-sm dark:shadow-none transition duration-500 hover:-translate-y-1 hover:border-amber-300 hover:text-white hover:shadow-[0_20px_70px_rgba(14,165,233,0.12)]">
                      <span className="absolute inset-0 -z-10 scale-x-0 bg-gradient-to-r from-amber-400 to-orange-500 transition-transform duration-500 group-hover:scale-x-100" />
                      {item}
                    </div>
                    {index < array.length - 1 && (
                      <div className="h-8 w-px bg-gradient-to-b from-stone-200 to-amber-200" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <PremiumCard className="p-8">
              <h3 className="font-serif text-4xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-slate-50">
                System Components
              </h3>

              <div className="mt-7 space-y-3">
                {systemChecklist.map((item) => (
                  <div
                    key={item}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 transition-all duration-500 hover:-translate-y-1 hover:border-amber-200 hover:text-orange-600 hover:shadow-[0_18px_50px_rgba(14,165,233,0.10)]"
                  >
                    <div className="flex items-center gap-3">
                      <Check size={17} className="text-amber-500" />
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors duration-500 group-hover:text-orange-600">
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </PremiumCard>
          </div>
        </div>
      </section>

      {/* SECTION 11 — BEFORE AFTER */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionLabel label="Before and after the system" />

          <div className="grid gap-6 lg:grid-cols-2">
            <PremiumCard className="bg-gradient-to-br from-white to-red-50/30 p-8">
              <h3 className="font-serif text-5xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-slate-50">
                Before
              </h3>

              <div className="mt-8 space-y-4">
                {beforeItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-red-100 dark:border-red-900/50 bg-white dark:bg-slate-900 px-5 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300 transition-all duration-500 hover:-translate-y-1 hover:border-amber-200 hover:text-orange-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </PremiumCard>

            <PremiumCard className="bg-gradient-to-br from-white to-amber-50/40 p-8">
              <h3 className="font-serif text-5xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-slate-50">
                After
              </h3>

              <div className="mt-8 space-y-4">
                {afterItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-amber-100 dark:border-amber-900/50 bg-white dark:bg-slate-900 px-5 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300 transition-all duration-500 hover:-translate-y-1 hover:border-amber-200 hover:text-orange-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </PremiumCard>
          </div>
        </div>
      </section>

      {/* SECTION 12 */}
      <section className="bg-gradient-to-b from-white to-slate-50 px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionLabel label="What NIDAM actually built" />

          <div className="grid gap-5 md:grid-cols-3">
            <PremiumCard>
              <IconCircle icon={<Users size={18} />} color="stone" />
              <h3 className="mt-7 font-serif text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-slate-50 transition-colors duration-500 group-hover:text-orange-600">
                NIDAM Strategy Team
              </h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                Defined the buyer journey, emotional void, desire needs, and acquisition logic.
              </p>
            </PremiumCard>

            <PremiumCard>
              <IconCircle icon={<Code2 size={18} />} color="amber" />
              <h3 className="mt-7 font-serif text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-slate-50 transition-colors duration-500 group-hover:text-orange-600">
                NIDAM Code Team
              </h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                Built the website architecture, structure, responsive cinematic interface, editorial pages, and conversion path.
              </p>
            </PremiumCard>

            <PremiumCard>
              <IconCircle icon={<Instagram size={18} />} color="rose" />
              <h3 className="mt-7 font-serif text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-slate-50 transition-colors duration-500 group-hover:text-orange-600">
                NIDAM Media Team
              </h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                Planned the social discovery layer, cinematic direction, lifestyle storytelling, and premium digital presence.
              </p>
            </PremiumCard>
          </div>

          <PremiumCard className="mt-6 bg-slate-950 dark:bg-slate-900 p-8 text-white">
            <IconCircle icon={<Layers3 size={18} />} color="slate" />
            <h3 className="mt-7 font-serif text-4xl font-semibold tracking-[-0.05em] text-white">
              NIDAM System Layer
            </h3>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-300 dark:text-slate-600">
              Connected the website, enquiry path, WhatsApp/contact logic, CRM logic, and reporting thinking into one structured acquisition journey.
            </p>
          </PremiumCard>
        </div>
      </section>

      {/* SECTION 13 */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionLabel label="The honest result" />

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <h2 className="font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-slate-950 dark:text-slate-50 md:text-7xl">
                A premium acquisition journey.
              </h2>
            </div>

            <p className="text-lg leading-8 text-slate-600 dark:text-slate-400">
              The result is not just a prettier website. The result is a more structured property acquisition system. Buyers can discover the lifestyle more clearly, understand the narrative more easily, feel emotional connection before contact, send better private enquiries, and move into a journey that is easier to follow up and improve.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {outcomeCards.map((outcome) => (
              <PremiumCard key={outcome} className="cursor-pointer p-6">
                <IconCircle icon={<TrendingUp size={18} />} color="emerald" />
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-slate-950 dark:text-slate-50 transition-colors duration-500 group-hover:text-orange-600">
                  {outcome}
                </h3>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14 */}
      <section className="px-6 pb-28 pt-10 lg:px-10 lg:pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-[0_45px_140px_rgba(15,23,42,0.10)] md:p-14 lg:p-20">
            <div className="absolute right-[-160px] top-[-160px] h-[420px] w-[420px] rounded-full bg-stone-100 blur-[100px]" />
            <div className="absolute bottom-[-160px] left-[-160px] h-[420px] w-[420px] rounded-full bg-amber-100 blur-[100px]" />

            <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-600 dark:text-amber-400">
                  No fake promises. Just better digital architecture.
                </p>

                <h2 className="font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-slate-950 dark:text-slate-50 md:text-7xl">
                  Want NIDAM to build an acquisition system like this for your agency?
                </h2>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                  We can build the full path — from discovery to website, from website to private enquiry, from private enquiry to WhatsApp/contact, and from follow-up to better property decisions.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <GradientButton href="#contact">
                    Build My Agency System
                  </GradientButton>

                  <GradientButton href="/case-studies" variant="secondary">
                    See More Systems
                  </GradientButton>
                </div>
              </div>

              <div className="rounded-[2.4rem] border border-slate-200 dark:border-slate-800 bg-slate-950 dark:bg-slate-900 p-7 text-white shadow-[0_30px_90px_rgba(15,23,42,0.14)] transition-all duration-700 hover:-translate-y-3 hover:border-amber-300 hover:shadow-[0_45px_130px_rgba(14,165,233,0.18)]">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">NIDAM System</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      Discovery → Trust → Enquiry → Follow-up
                    </p>
                  </div>
                  <IconCircle icon={<ShieldCheck size={18} />} color="slate" />
                </div>

                <div className="space-y-3">
                  {[
                    "Cinematic property content", "Premium editorial website", "Private enquiry path", "CRM follow-up logic", "Reporting foundation",
                  ].map((item) => (
                    <div
                      key={item}
                      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 dark:bg-slate-900/5 px-5 py-4 transition-all duration-500 hover:-translate-y-1 hover:border-amber-300/40 hover:bg-white/10 dark:bg-slate-900/10"
                    >
                      <span className="text-sm text-slate-200 dark:text-slate-700">{item}</span>
                      <Check
                        size={16}
                        className="text-amber-300 transition-transform duration-500 group-hover:scale-125"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AtelierEstates;
