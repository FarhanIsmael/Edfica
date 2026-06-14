"use client";
import { useState } from "react";
import Link from "next/link";
import { Button, Card, Text, Title } from "@tremor/react";
import { CalendarCheckIcon, Invoice03Icon, School01Icon, Shield01Icon } from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/icons";
import { getSupabaseBrowserClient } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    const supabase = getSupabaseBrowserClient();
    if (!supabase) { setMessage("Supabase environment variables are not configured."); setLoading(false); return; }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMessage(error.message);
    else window.location.href = "/dashboard";
    setLoading(false);
  }

  return <main className="min-h-screen bg-[#f7f8fa] px-4 py-10"><div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]"><Card className="rounded-[6px] border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-[6px] border border-blue-200 bg-blue-50 text-blue-700"><AppIcon icon={School01Icon} size={21} /></div><div><Title className="text-base text-slate-950">Sign in to Edfica</Title><Text className="text-sm text-slate-500">Use your school account to continue.</Text></div></div><form onSubmit={submit} className="mt-8 space-y-4"><label className="block"><span className="text-sm font-medium text-slate-700">Email</span><input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="mt-1 h-11 w-full rounded-[6px] border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-50" /></label><label className="block"><span className="text-sm font-medium text-slate-700">Password</span><input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="mt-1 h-11 w-full rounded-[6px] border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-50" /></label>{message ? <div className="rounded-[6px] border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">{message}</div> : null}<Button type="submit" loading={loading} className="h-11 w-full rounded-[6px] bg-blue-600 shadow-none hover:bg-blue-700">Sign in</Button></form><div className="mt-5 flex items-center justify-between text-sm"><Link href="/auth/register" className="font-medium text-blue-700">Create account</Link><Link href="/onboarding" className="text-slate-500 hover:text-slate-700">School setup</Link></div></Card><div className="space-y-4"><div><div className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">School operations</div><h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950">A clean system starts with access, roles, and setup.</h1><p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">Edfica opens with authentication, then guides the school through academic year, roles, attendance rules, and finance settings before live operations.</p></div><div className="grid gap-3 sm:grid-cols-2">{[[Shield01Icon,"Role based access","Admins, teachers, accountants, parents, and students have separate views."],[CalendarCheckIcon,"Daily attendance","Class marking, absence follow up, and completion tracking are first class."],[Invoice03Icon,"Fee controls","Structures, invoices, balances, receipts, and reminders stay organized."],[School01Icon,"Academic setup","Classes, sections, subjects, terms, and timetable rules are configured once."]].map(([icon,title,body]) => <Card key={title as string} className="rounded-[6px] border border-slate-200 bg-white p-4 shadow-sm"><div className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-slate-200 bg-slate-50 text-slate-600"><AppIcon icon={icon as any} size={18} /></div><h3 className="mt-4 text-sm font-semibold text-slate-950">{title as string}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{body as string}</p></Card>)}</div></div></div></main>;
}
