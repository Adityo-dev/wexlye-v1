'use client';

import { ArrowUpRight, Cpu, Terminal } from 'lucide-react';

export default function MainFooter() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#CECED4] bg-[#EFEFEA] px-4 text-[#1A2420] transition-colors duration-300 sm:px-8 lg:px-16 dark:border-[#192520] dark:bg-[#090D0B] dark:text-[#ECF1EE]">
      {/* Structural Developer Grid Continuity */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#DCDCD6_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,#000_30%,transparent_100%)] bg-[size:4rem_4rem] opacity-40 dark:bg-[linear-gradient(to_right,#141F1A_1px,transparent_1px)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl pt-16 pb-12 font-mono text-xs">
        {/* Upper Main Brand Hub */}
        <div className="grid grid-cols-1 gap-12 border-b border-[#C9C9BF] pb-16 md:grid-cols-12 md:gap-8 dark:border-[#192520]">
          {/* Brand Vision Info */}
          <div className="space-y-4 md:col-span-5">
            <div className="flex items-center gap-2 font-sans text-xl font-extrabold tracking-tight">
              <div className="rounded-md bg-[#1E3F2B] p-1.5 text-[#EFEFEA] dark:bg-[#52E095] dark:text-[#090D0B]">
                <Cpu className="h-4 w-4" />
              </div>
              <span>BOLD AGENCY</span>
            </div>
            <p className="max-w-sm text-[11px] leading-relaxed text-[#55635B] dark:text-[#8FA399]">
              Engineered for production scale. Delivering custom architectural design, performance
              compilation layers, and next-generation web ecosystems.
            </p>
          </div>

          {/* Links: Capabilities */}
          <div className="space-y-3 md:col-span-3">
            <span className="block text-[10px] font-bold tracking-widest text-neutral-400 uppercase dark:text-neutral-500">
              STACK
            </span>
            <ul className="space-y-2">
              {['Next.js Systems', 'Custom WordPress', 'SEO Compilations', 'API Architectures'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="block text-[11px] transition-colors hover:text-[#245436] dark:hover:text-[#52E095]"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Links: Network Protocol */}
          <div className="space-y-3 md:col-span-2">
            <span className="block text-[10px] font-bold tracking-widest text-neutral-400 uppercase dark:text-neutral-500">
              PROTOCOLS
            </span>
            <ul className="space-y-2">
              {['GitHub', 'LinkedIn', 'X_Terminal', 'Source Metrics'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="group flex items-center gap-1 text-[11px] transition-colors hover:text-[#245436] dark:hover:text-[#52E095]"
                  >
                    <span>{link}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* System Status Metrics Card */}
          <div className="space-y-3 md:col-span-2">
            <span className="block text-[10px] font-bold tracking-widest text-neutral-400 uppercase dark:text-neutral-500">
              EDGE STATUS
            </span>
            <div className="space-y-2 rounded-lg border border-[#C9C9BF] bg-[#E2E2DA]/50 p-3 dark:border-[#1B3827] dark:bg-[#111F17]">
              <div className="flex items-center gap-1.5 text-[#245436] dark:text-[#52E095]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#245436] dark:bg-[#52E095]" />
                <span className="text-[10px] font-bold">ALL NODES OPERATIONAL</span>
              </div>
              <div className="text-[9px] leading-none text-[#55635B] dark:text-[#8FA399]">
                Uptime: <span className="font-bold">99.98%</span> <br />
                Latency: <span className="font-bold">14ms</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Legal & System Handshake Wrapper */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          {/* Metadata Rights */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#55635B] dark:text-[#8FA399]">
            <span>&copy; {currentYear} BOLD_AGENCY. ALL RIGHTS RESERVED.</span>
            <span className="hidden text-neutral-300 sm:inline dark:text-neutral-800">|</span>
            <a href="#" className="hover:underline">
              PRIVACY_POLICY
            </a>
          </div>

          {/* Return to Top Trigger */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-md border border-[#C9C9BF] bg-[#E2E2DA] px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#1A2420] uppercase transition-all hover:bg-[#D6D6CC] dark:border-[#1B3827] dark:bg-[#111F17] dark:text-[#ECF1EE] dark:hover:bg-[#162A1F]"
          >
            <Terminal className="h-3 w-3" />
            <span>SYS_RETURN_TOP // ↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
