'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const codeLines = [
  { text: 'export default function Wexlye() {', color: 'text-violet-400' },
  { text: '  return (', color: 'text-zinc-400' },
  { text: '    <Website', color: 'text-cyan-400' },
  { text: '      design="custom"', color: 'text-emerald-400' },
  { text: '      stack="Next.js"', color: 'text-emerald-400' },
  { text: '      status="live"', color: 'text-emerald-400' },
  { text: '    />', color: 'text-cyan-400' },
  { text: '  );', color: 'text-zinc-400' },
  { text: '}', color: 'text-violet-400' },
];

function TypingCode() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (visibleLines >= codeLines.length) return;
    const currentLine = codeLines[visibleLines].text;

    if (charCount < currentLine.length) {
      const timeout = setTimeout(() => setCharCount((c) => c + 1), 18);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => {
      setVisibleLines((l) => l + 1);
      setCharCount(0);
    }, 250);
    return () => clearTimeout(timeout);
  }, [charCount, visibleLines]);

  return (
    <div className="font-mono text-[13px] leading-6 sm:text-sm">
      {codeLines.slice(0, visibleLines).map((line, i) => (
        <div key={i} className={line.color}>
          {line.text}
        </div>
      ))}
      {visibleLines < codeLines.length && (
        <div className={codeLines[visibleLines].color}>
          {codeLines[visibleLines].text.slice(0, charCount)}
          <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 animate-pulse bg-cyan-400" />
        </div>
      )}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0B0B12]">
      {/* gradient blobs */}
      <div className="pointer-events-none absolute top-10 -left-32 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl dark:bg-violet-600/20" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-500/10" />

      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32">
        {/* left column */}
        <div className="flex flex-col items-start">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-mono text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Available for new projects
          </div>

          <h1 className="text-4xl leading-[1.1] font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-white">
            We build websites that{' '}
            <span className="bg-gradient-to-r from-violet-500 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              turn visitors into clients
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
            Wexlye designs and develops custom websites and WordPress builds for businesses that
            want more than a brochure online — they want results.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/25 transition-shadow hover:shadow-violet-500/40"
            >
              Start your project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-zinc-300 dark:border-zinc-700">
              View our work
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs tracking-wider text-zinc-400 uppercase dark:text-zinc-500">
            <span>Custom Web Dev</span>
            <span className="hidden h-3 w-px bg-zinc-300 sm:block dark:bg-zinc-700" />
            <span>WordPress</span>
            <span className="hidden h-3 w-px bg-zinc-300 sm:block dark:bg-zinc-700" />
            <span>Next.js</span>
          </div>
        </div>

        {/* right column — browser mockup */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-violet-500/20 to-cyan-400/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 shadow-2xl dark:border-zinc-800 dark:bg-[#0F0F18]">
            <div className="flex items-center gap-2 border-b border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-[#14141F]">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-3 truncate rounded bg-zinc-100 px-3 py-1 font-mono text-[11px] text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                wexlye.com
              </span>
            </div>
            <div className="p-6">
              <TypingCode />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
