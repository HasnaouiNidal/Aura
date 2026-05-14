const fs = require('fs');
let content = fs.readFileSync('c:/aura_agency/AURA/pages/LuminaDental.tsx', 'utf8');

// Find the start of the `Badge` component and slice everything before it
const badgeStart = content.indexOf('}: {\n  children: React.ReactNode;\n  icon?: React.ReactNode;');
if (badgeStart !== -1) {
  content = content.substring(badgeStart);
  content = `import React from "react";
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

const luminaScreenshot = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1600";

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

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
      "absolute hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-5 py-4 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-[0_26px_80px_rgba(14,165,233,0.16)] md:block",
      className
    )}
  >
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400 border-cyan-100 dark:border-cyan-900/50">
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

const SectionLabel = ({
  eyebrow,
  label,
}: {
  eyebrow?: string;
  label: string;
}) => (
  <div className="mb-5 flex items-center gap-3">
    <span className="h-px w-10 bg-slate-300" />
    <span className="rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-400 shadow-sm dark:shadow-none backdrop-blur">
      {eyebrow || label}
    </span>
  </div>
);

const Badge = ({
  children,
  icon,
` + content;
  fs.writeFileSync('c:/aura_agency/AURA/pages/LuminaDental.tsx', content);
  console.log('Fixed LuminaDental');
} else {
  console.log('Could not find badge component');
}
