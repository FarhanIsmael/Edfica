import { Badge, BadgeDelta, Button, Card, Metric, ProgressBar, Text, Title } from "@tremor/react";
import { Add01Icon, ArrowUpRight02Icon, Search01Icon } from "@hugeicons/core-free-icons";
import { AppIcon, type HugeIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function PageHeader({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description: string; action?: string }) {
  return <div className="flex flex-col gap-5 rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur xl:flex-row xl:items-end xl:justify-between"><div className="max-w-3xl">{eyebrow ? <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-slate-900" />{eyebrow}</div> : null}<h1 className="text-balance text-3xl font-semibold tracking-[-0.035em] text-slate-950 md:text-4xl">{title}</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 md:text-base">{description}</p></div>{action ? <Button className="h-11 rounded-full border-0 bg-slate-950 px-5 shadow-sm hover:bg-slate-800"><span className="inline-flex items-center gap-2"><AppIcon icon={Add01Icon} size={17} />{action}</span></Button> : null}</div>;
}

export function KpiCard({ label, value, caption, delta, trend, icon }: { label: string; value: string; caption: string; delta?: string; trend?: "increase" | "decrease" | "unchanged"; icon: HugeIcon }) {
  return <Card className="rounded-[1.5rem] border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"><div className="flex items-start justify-between gap-4"><div className="rounded-2xl border border-slate-200 bg-slate-50 p-2.5 text-slate-700"><AppIcon icon={icon} size={20} /></div>{delta ? <BadgeDelta deltaType={trend ?? "unchanged"}>{delta}</BadgeDelta> : null}</div><Text className="mt-5 text-slate-500">{label}</Text><Metric className="mt-1 tracking-[-0.04em] text-slate-950">{value}</Metric><Text className="mt-2 text-xs text-slate-500">{caption}</Text></Card>;
}

export function StatusPill({ status }: { status: string }) {
  const n = status.toLowerCase();
  const color = n.includes("paid") || n.includes("active") || n.includes("complete") || n.includes("ready") || n.includes("healthy") || n.includes("available") ? "emerald" : n.includes("overdue") || n.includes("critical") || n.includes("missing") || n.includes("urgent") ? "rose" : n.includes("partial") || n.includes("pending") || n.includes("review") || n.includes("draft") || n.includes("watch") || n.includes("open") ? "amber" : "slate";
  return <Badge color={color}>{status}</Badge>;
}

export function SectionCard({ title, description, children, className, action }: { title: string; description?: string; children: React.ReactNode; className?: string; action?: string }) {
  return <Card className={cn("rounded-[1.5rem] border-slate-200 bg-white p-5 shadow-sm", className)}><div className="mb-5 flex items-start justify-between gap-4"><div><Title className="text-base font-semibold tracking-[-0.02em] text-slate-950">{title}</Title>{description ? <Text className="mt-1 text-sm leading-5 text-slate-500">{description}</Text> : null}</div>{action ? <button className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-50">{action}<AppIcon icon={ArrowUpRight02Icon} size={14} /></button> : null}</div>{children}</Card>;
}

export function Toolbar({ placeholder = "Search records...", right }: { placeholder?: string; right?: React.ReactNode }) {
  return <div className="flex flex-col gap-3 rounded-[1.4rem] border border-slate-200 bg-white p-3 shadow-sm md:flex-row md:items-center md:justify-between"><div className="relative min-w-0 flex-1"><AppIcon icon={Search01Icon} size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /><input className="h-11 w-full rounded-full border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-300 focus:bg-white focus:ring-4 focus:ring-slate-100" placeholder={placeholder} /></div>{right ? <div className="flex shrink-0 items-center gap-2">{right}</div> : null}</div>;
}

export function MiniMetric({ label, value, progress }: { label: string; value: string; progress?: number }) {
  return <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"><Text className="text-xs text-slate-500">{label}</Text><div className="mt-1 text-lg font-semibold tracking-[-0.03em] text-slate-950">{value}</div>{typeof progress === "number" ? <ProgressBar value={progress} className="mt-3" color="slate" /> : null}</div>;
}

export function GhostButton({ children }: { children: React.ReactNode }) { return <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">{children}</button>; }
