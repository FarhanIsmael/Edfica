import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edfica — School Operations System",
  description: "A clean, premium school management system for attendance, students, fees, exams, reports, and automation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={GeistSans.variable}><body className="font-sans antialiased">{children}</body></html>;
}
