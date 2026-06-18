'use client';

import { ArrowRight, Mail, MessageSquare, ShieldCheck, Terminal } from 'lucide-react';
import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'custom-web',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Action handler here
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#EFEFEA] px-4 text-[#1A2420] transition-colors duration-300 sm:px-8 lg:px-16 dark:bg-[#090D0B] dark:text-[#ECF1EE]">
      {/* Structural Developer Grid Lines - Continuity from Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#DCDCD6_1px,transparent_1px),linear-gradient(to_bottom,#DCDCD6_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] bg-[size:4rem_4rem] opacity-80 dark:bg-[linear-gradient(to_right,#141F1A_1px,transparent_1px),linear-gradient(to_bottom,#141F1A_1px,transparent_1px)] dark:opacity-60" />

      {/* Ambient Glow - Bottom Subtle Aura */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[350px] w-[800px] -translate-x-1/2 rounded-full bg-[#D6E6DC] opacity-60 blur-[130px] dark:bg-[#163524] dark:opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-6xl pt-24 pb-20">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Left Side: Statement & Info */}
          <div className="space-y-8 text-left lg:col-span-5">
            {/* Active Terminal Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C9C9BF] bg-[#E2E2DA] px-3 py-1 font-mono text-[11px] tracking-widest text-[#245436] dark:border-[#1B3827] dark:bg-[#111F17] dark:text-[#52E095]">
              <Terminal className="h-3.5 w-3.5" />
              <span>SECURE NODE // INTAKE_READY</span>
            </div>

            <h2 className="text-4xl leading-[0.95] font-extrabold tracking-tight sm:text-6xl">
              Let’s build <br />
              <span className="bg-gradient-to-r from-[#1E3F2B] via-[#2E5A44] to-[#090D0B] bg-clip-text text-transparent dark:from-[#52E095] dark:via-[#89F0B9] dark:to-white">
                your system.
              </span>
            </h2>

            <p className="max-w-md font-mono text-sm leading-relaxed text-[#55635B] dark:text-[#8FA399]">
              Have a strict business timeline or complex technical architecture? Initialize the
              protocol below. We reply with system metrics inside 24 hours.
            </p>

            {/* Quick Info Grid */}
            <div className="max-w-md space-y-4 border-t border-[#C9C9BF]/60 pt-4 dark:border-[#192520]">
              <div className="flex items-center gap-3 font-mono text-xs">
                <Mail className="h-4 w-4 text-[#1E3F2B] dark:text-[#52E095]" />
                <span className="text-[#55635B] dark:text-[#8FA399]">Direct Sync:</span>
                <span className="font-bold underline">hello@boldagency.com</span>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs">
                <MessageSquare className="h-4 w-4 text-[#1E3F2B] dark:text-[#52E095]" />
                <span className="text-[#55635B] dark:text-[#8FA399]">Avg Response:</span>
                <span className="font-bold text-[#245436] dark:text-[#52E095]">&lt; 180 Mins</span>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Structural Form Container */}
          <div className="w-full lg:col-span-7">
            <div className="relative rounded-xl border border-[#CECED4] bg-[#E5E5DD] p-6 text-left font-mono shadow-xl transition-colors duration-300 sm:p-8 dark:border-[#192520] dark:bg-[#0E1411] dark:shadow-2xl">
              {/* Terminal Window Header */}
              <div className="mb-6 flex items-center justify-between border-b border-[#C9C9BF] pb-4 text-xs text-neutral-500 dark:border-[#192520] dark:text-[#52E095]/60">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                  <span className="ml-2 text-[10px] text-neutral-500">
                    secure-intake-handshake.sh
                  </span>
                </div>
                <span className="rounded bg-[#DCDCD6] px-2 py-0.5 text-[10px] text-[#245436] dark:bg-[#111F17] dark:text-[#52E095]">
                  TLS 1.3 ENABLED
                </span>
              </div>

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-wider text-[#1A2420] uppercase dark:text-white">
                      Identity / Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-[#C9C9BF] bg-[#DCDCD6]/60 p-3 text-xs placeholder-[#8A9590] transition-all outline-none focus:border-[#1E3F2B] dark:border-[#192A21] dark:bg-[#111A16] dark:placeholder-[#4A5550] dark:focus:border-[#52E095]"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-wider text-[#1A2420] uppercase dark:text-white">
                      Secure Route / Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-[#C9C9BF] bg-[#DCDCD6]/60 p-3 text-xs placeholder-[#8A9590] transition-all outline-none focus:border-[#1E3F2B] dark:border-[#192A21] dark:bg-[#111A16] dark:placeholder-[#4A5550] dark:focus:border-[#52E095]"
                    />
                  </div>
                </div>

                {/* Dropdown Select Stack */}
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-wider text-[#1A2420] uppercase dark:text-white">
                    Target Architecture
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full cursor-pointer rounded-lg border border-[#C9C9BF] bg-[#DCDCD6]/60 p-3 text-xs transition-all outline-none focus:border-[#1E3F2B] dark:border-[#192A21] dark:bg-[#111A16] dark:focus:border-[#52E095]"
                  >
                    <option value="custom-web">Next.js Scale Application</option>
                    <option value="wordpress">Zero-Bloat Custom WordPress</option>
                    <option value="seo">Semantic SEO Engineering Layer</option>
                    <option value="other">Full-Stack Consultation</option>
                  </select>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-wider text-[#1A2420] uppercase dark:text-white">
                    Project Scope Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe core dependency shifts, requirements, or current load barriers..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full resize-none rounded-lg border border-[#C9C9BF] bg-[#DCDCD6]/60 p-3 text-xs placeholder-[#8A9590] transition-all outline-none focus:border-[#1E3F2B] dark:border-[#192A21] dark:bg-[#111A16] dark:placeholder-[#4A5550] dark:focus:border-[#52E095]"
                  />
                </div>

                {/* Heavy Studio Action Button */}
                <div className="flex flex-col items-center justify-between gap-4 pt-2 sm:flex-row">
                  <div className="flex items-center gap-2 text-[10px] text-[#55635B] dark:text-[#8FA399]">
                    <ShieldCheck className="h-4 w-4 text-[#245436] dark:text-[#52E095]" />
                    <span>Encrypted handshake ready.</span>
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#1E3F2B] px-8 py-4 text-xs font-bold tracking-wider text-[#EFEFEA] uppercase shadow-md transition-all hover:bg-[#12291B] sm:w-auto dark:bg-[#52E095] dark:text-[#090D0B] dark:shadow-lg dark:shadow-[#52E095]/10 dark:hover:bg-[#41C782]"
                  >
                    Transmit Protocol
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
