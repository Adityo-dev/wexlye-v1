import { ArrowRight, Code2, Globe, Sparkles, Terminal } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#EFEFEA] px-4 text-[#1A2420] transition-colors duration-300 sm:px-8 lg:px-16 dark:bg-[#090D0B] dark:text-[#ECF1EE]">
      {/* Structural Developer Grid Lines */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#DCDCD6_1px,transparent_1px),linear-gradient(to_bottom,#DCDCD6_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:4rem_4rem] opacity-80 dark:bg-[linear-gradient(to_right,#141F1A_1px,transparent_1px),linear-gradient(to_bottom,#141F1A_1px,transparent_1px)] dark:opacity-60" />

      {/* Ambient Glow - Soft Mint Silver vs Dark Deep Emerald */}

      <div className="pointer-events-none absolute top-0 left-1/2 h-[350px] w-[800px] -translate-x-1/2 rounded-full bg-[#D6E6DC] opacity-60 blur-[130px] dark:bg-[#163524] dark:opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-6xl pt-32 pb-20">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Active Terminal Status Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-[#C9C9BF] bg-[#E2E2DA] px-3 py-1 font-mono text-[11px] tracking-widest text-[#245436] dark:border-[#1B3827] dark:bg-[#111F17] dark:text-[#52E095]">
            <Terminal className="h-3.5 w-3.5" />

            <span>STATUS: READY TO SHIP // 2026</span>
          </div>

          {/* Core Concept Title */}

          <h1 className="max-w-4xl text-4xl leading-[0.95] font-extrabold tracking-tight sm:text-6xl lg:text-8xl">
            We code systems, <br />
            <span className="bg-gradient-to-r from-[#1E3F2B] via-[#2E5A44] to-[#090D0B] bg-clip-text text-transparent dark:from-[#52E095] dark:via-[#89F0B9] dark:to-white">
              not just websites.
            </span>
          </h1>

          {/* Precise Subtext */}

          <p className="max-w-xl font-mono text-sm leading-relaxed tracking-tight text-[#55635B] sm:text-base md:text-lg dark:text-[#8FA399]">
            High-performance Next.js apps, zero-bloat custom WordPress setups, and semantic SEO
            engineering built for strict business scale.
          </p>

          {/* Sharp Action Triggers */}

          <div className="flex w-full flex-col items-center gap-4 pt-4 sm:w-auto sm:flex-row">
            <button className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#1E3F2B] px-8 py-4 font-mono text-xs font-bold tracking-wider text-[#EFEFEA] uppercase shadow-md transition-all hover:bg-[#12291B] sm:w-auto dark:bg-[#52E095] dark:text-[#090D0B] dark:shadow-lg dark:shadow-[#52E095]/10 dark:hover:bg-[#41C782]">
              Initialize Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#C9C9BF] bg-[#E2E2DA] px-8 py-4 font-mono text-xs font-bold tracking-wider text-[#1A2420] uppercase transition-all hover:bg-[#D6D6CC] sm:w-auto dark:border-[#1B3827] dark:bg-[#111F17] dark:text-[#ECF1EE] dark:hover:bg-[#162A1F]">
              <span>View Source Metrics</span>
            </button>
          </div>

          {/* Live Architecture Micro-Dashboard - Heavy Studio Style */}

          <div className="group relative mt-16 w-full max-w-4xl rounded-xl border border-[#CECED4] bg-[#E5E5DD] p-4 text-left font-mono shadow-xl transition-colors duration-300 sm:p-6 dark:border-[#192520] dark:bg-[#0E1411] dark:shadow-2xl">
            {/* Terminal Window Header */}

            <div className="mb-4 flex items-center justify-between border-b border-[#C9C9BF] pb-4 text-xs text-neutral-500 dark:border-[#192520] dark:text-[#52E095]/60">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />

                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />

                <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />

                <span className="ml-2 text-[10px] text-neutral-500 dark:text-neutral-500">
                  bold-agency-manifest.json
                </span>
              </div>

              <span className="rounded bg-[#DCDCD6] px-2 py-0.5 text-[10px] text-[#245436] dark:bg-[#111F17] dark:text-[#52E095]">
                production.env
              </span>
            </div>

            {/* Core Stack Capabilities Grid */}

            <div className="grid grid-cols-1 gap-6 pt-2 md:grid-cols-3">
              {/* Stack 1: Next.js */}

              <div className="space-y-2 rounded-lg border border-[#C9C9BF] bg-[#DCDCD6]/60 p-4 transition-colors dark:border-[#192A21] dark:bg-[#111A16]">
                <div className="flex items-center gap-2 text-[#1E3F2B] dark:text-[#52E095]">
                  <Code2 className="h-4 w-4" />

                  <span className="text-xs font-bold tracking-wider text-[#1A2420] uppercase dark:text-white">
                    Custom Web
                  </span>
                </div>

                <p className="text-[11px] leading-relaxed text-[#4A5550] dark:text-[#8FA399]">
                  Next.js App Router, strict TypeScript models, atomic layouts, and zero hydration
                  shifts.
                </p>
              </div>

              {/* Stack 2: WordPress */}

              <div className="space-y-2 rounded-lg border border-[#C9C9BF] bg-[#DCDCD6]/60 p-4 transition-colors dark:border-[#192A21] dark:bg-[#111A16]">
                <div className="flex items-center gap-2 text-[#1E3F2B] dark:text-[#52E095]">
                  <Globe className="h-4 w-4" />

                  <span className="text-xs font-bold tracking-wider text-[#1A2420] uppercase dark:text-white">
                    WordPress Systems
                  </span>
                </div>

                <p className="text-[11px] leading-relaxed text-[#4A5550] dark:text-[#8FA399]">
                  Bespoke block-editor themes, zero elementor bloat, structured meta fields,
                  optimized queries.
                </p>
              </div>

              {/* Stack 3: SEO */}

              <div className="space-y-2 rounded-lg border border-[#C9C9BF] bg-[#DCDCD6]/60 p-4 transition-colors dark:border-[#192A21] dark:bg-[#111A16]">
                <div className="flex items-center gap-2 text-[#1E3F2B] dark:text-[#52E095]">
                  <Sparkles className="h-4 w-4" />

                  <span className="text-xs font-bold tracking-wider text-[#1A2420] uppercase dark:text-white">
                    SEO Engineering
                  </span>
                </div>

                <p className="text-[11px] leading-relaxed text-[#4A5550] dark:text-[#8FA399]">
                  100% Core Web Vitals, JSON-LD schemas, dynamic sitemaps, and optimized edge
                  caching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
