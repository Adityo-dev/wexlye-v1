'use client';

import { ArrowUpRight } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  stack: string[];
  metricLabel: string;
  metricValue: string;
  gridClass: string; // কন্ট্রোল করবে কোন কার্ড বড় আর কোনটা ছোট হবে
}

export default function PortfolioSection() {
  const projects: ProjectItem[] = [
    {
      id: '01',
      title: 'Linear Global Logistics Infrastructure Platform',
      category: 'ENTERPRISE CORE',
      desc: 'Engineered a headless Next.js architecture coupled with an optimized Go backend. Removed modern hydration bottlenecks, reducing core bundle size by 42% for instant streaming.',
      stack: ['Next.js 15', 'Go', 'GraphQL'],
      metricLabel: 'EDGE LATENCY',
      metricValue: '<180ms',
      gridClass: 'md:col-span-2', // ম্যাসাইভ বড় কার্ড
    },
    {
      id: '02',
      title: 'Vanta Bespoke Content Core',
      category: 'CUSTOM WORDPRESS',
      desc: 'Architected a zero-plugin, custom Gutenberg system built for extreme global scaling and automated SEO schemas.',
      stack: ['Gutenberg', 'Timber', 'PHP 8.3'],
      metricLabel: 'BLOAT FACTOR',
      metricValue: '0.0%',
      gridClass: 'md:col-span-1', // ছোট কার্ড
    },
    {
      id: '03',
      title: 'Apex FinTech Core Engine',
      category: 'FINTECH INTERFACE',
      desc: 'Re-engineered a high-traffic asset engine into isolated atomic reactive structures with dynamic open-graph compilers.',
      stack: ['React 19', 'Zustand', 'JSON-LD'],
      metricLabel: 'FCP BENCHMARK',
      metricValue: '0.2s',
      gridClass: 'md:col-span-1', // ছোট কার্ড
    },
    {
      id: '04',
      title: 'Chronos AI Analytics Dashboard Layer',
      category: 'DATA SYSTEMS',
      desc: 'High-performance data visualization interface running complex matrix processing directly on edge runtime nodes without blocking user main-thread frames.',
      stack: ['Next.js', 'D3.js', 'Web Workers'],
      metricLabel: 'COMPUTE EFFICIENCY',
      metricValue: '+88%',
      gridClass: 'md:col-span-2', // ম্যাসাইভ বড় কার্ড
    },
    {
      id: '05',
      title: 'Solana Nexus High-Frequency Dex Client',
      category: 'WEB3 INFRASTRUCTURE',
      desc: 'Developed a native modern responsive dashboard maximizing asset socket pipelines to handle intense state mutations per second without UI stutter.',
      stack: ['TypeScript', 'Rust Shaders', 'Tailwind'],
      metricLabel: 'THROUGHPUT SCALE',
      metricValue: '4.5x',
      gridClass: 'md:col-span-2', // ম্যাসাইভ বড় কার্ড
    },
    {
      id: '06',
      title: 'E-Commerce headless engine for Muse',
      category: 'HEADLESS COMMERCE',
      desc: 'Full cloud-native checkout ecosystem engineered purely for atomic dynamic updates.',
      stack: ['Next.js', 'Stripe API', 'Redis'],
      metricLabel: 'CONVERSION RATES',
      metricValue: '+24%',
      gridClass: 'md:col-span-1', // ছোট কার্ড
    },
  ];

  return (
    <section className="relative overflow-hidden border-t border-[#DCDCD6] bg-[#EFEFEA] px-4 py-32 text-[#1A2420] transition-colors duration-300 sm:px-8 sm:py-40 lg:px-16 dark:border-[#141F1A] dark:bg-[#090D0B] dark:text-[#ECF1EE]">
      {/* Structural Grid Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#DCDCD6_1px,transparent_1px),linear-gradient(to_bottom,#DCDCD6_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:4rem_4rem] opacity-20 dark:bg-[linear-gradient(to_right,#141F1A_1px,transparent_1px),linear-gradient(to_bottom,#141F1A_1px,transparent_1px)] dark:opacity-10" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Section Header */}
        <div className="mb-20 max-w-3xl sm:mb-24">
          <span className="mb-6 block font-mono text-xs font-bold tracking-[0.3em] text-[#1B7A43] uppercase dark:text-[#52E095]">
            SELECTED DEPLOYMENTS
          </span>
          <h2 className="text-4xl leading-[1.05] font-normal tracking-tighter text-[#1A2420] sm:text-6xl dark:text-white">
            Case studies in production-grade architecture.
          </h2>
        </div>

        {/* Asymmetric Premium Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative flex h-full flex-col justify-between rounded-2xl border border-[#C9C9BF] bg-[#E8E8E0] p-8 transition-all duration-300 hover:border-[#1B7A43] lg:p-10 dark:border-[#16241D] dark:bg-[#0E1411] dark:hover:border-[#52E095] ${project.gridClass}`}
            >
              {/* Card Upper: Index, Tags and Description */}
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold text-[#1B7A43] dark:text-[#52E095]">
                        {project.id}
                      </span>
                      <span className="font-mono text-[9px] font-bold tracking-widest text-[#55635B] uppercase dark:text-[#8FA399]">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl leading-snug font-semibold tracking-tight text-[#1A2420] transition-colors duration-300 group-hover:text-[#1B7A43] sm:text-2xl dark:text-white dark:group-hover:text-[#52E095]">
                      {project.title}
                    </h3>
                  </div>

                  {/* Icon Vector Trigger */}
                  <div className="shrink-0 rounded-full border border-[#BCBCB0] bg-[#DFDFD5] p-2.5 text-[#55635B] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#1B7A43] group-hover:text-[#1B7A43] dark:border-[#1E3A2B] dark:bg-[#132219] dark:text-[#8FA399] dark:group-hover:border-[#52E095] dark:group-hover:text-[#52E095]">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Conditional Stack Rendering for clean layouts */}
                <p className="text-sm leading-relaxed font-normal text-[#334239] dark:text-[#C5D1C9]">
                  {project.desc}
                </p>

                {/* Tech Micro-Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded border border-[#B5B5A8] bg-[#D4D4C9] px-2 py-0.5 font-mono text-[10px] font-medium text-[#2C3E35] dark:border-[#234431] dark:bg-[#182C21] dark:text-[#A3B8AE]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Lower: Core System Benchmark */}
              <div className="mt-8 flex flex-col space-y-0.5 border-t border-[#C9C9BF] pt-6 dark:border-[#16241D]">
                <span className="font-mono text-[9px] font-bold tracking-widest text-[#55635B] uppercase dark:text-[#8FA399]">
                  {project.metricLabel}
                </span>
                <span className="font-mono text-xl font-bold text-[#1A2420] dark:text-white">
                  {project.metricValue}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
