"use client";
import { useState } from "react";
import Link from "next/link";
import { Button, Card, Text, Title } from "@tremor/react";
import { School01Icon } from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/icons";
import { getSupabaseBrowserClient } from "@/lib/supabase";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    const supabase = getSupabaseBrowserClient();
    if (!supabase) { setMessage("Supabase environment variables are not configured."); setLoading(false); return; }
    const { error } = await supabase.auth.signUp({ email, password });
    setMessage(error ? error.message : "Account created. Check email if confirmation is enabled, then continue to setup.");
    setLoading(false);
  }
  return <main className="min-h-screen bg-[#f7f8fa] px-4 py-10"><Card className="mx-auto max-w-md rounded-[6px] border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-[6px] border border-blue-200 bg-blue-50 text-blue-700"><AppIcon icon={School01Icon} size={21} /></div><div><Title className="text-base text-slate-950">Create Edfica account</Title><Text className="text-sm text-slate-500">Start with an owner or school admin.</Text></div></div><form onSubmit={submit} className="mt-8 space-y-4"><label className="block"><span className="text-sm font-medium text-slate-700">Email</span><input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="mt-1 h-11 w-full rounded-[6px] border border-slate-200 px-3 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-50" /></label><label className="block"><span className="text-sm font-medium text-slate-700">Password</span><input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required minLength={8} className="mt-1 h-11 w-full rounded-[6px] border border-slate-200 px-3 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-50" /></label>{message ? <div className="rounded-[6px] border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">{message}</div> : null}<Button type="submit" loading={loading} className="h-11 w-full rounded-[6px] bg-blue-600 shadow-none hover:bg-blue-700">Create account</Button></form><div className="mt-5 text-sm text-slate-500">Already have access? <Link href="/auth/login" className="font-medium text-blue-700">Sign in</Link></div></Card></main>;
}
