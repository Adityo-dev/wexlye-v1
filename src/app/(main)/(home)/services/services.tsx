'use client';

import { ArrowUpRight, Code, Layers, Search } from 'lucide-react';
import React from 'react';

interface ServiceItem {
  num: string;
  title: string;
  stack: string[];
  desc: string;
  metric: string;
  icon: React.ReactNode;
}

export default function ServicesSection() {
  const services: ServiceItem[] = [
    {
      num: '01',
      title: 'Custom Web Development',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand'],
      desc: 'Engineering bleeding-edge web applications optimized for speed, scalability, and exceptional UX. We eliminate hydration lag, write strict components, and ensure global edge-delivery.',
      metric: 'Sub-0.4s Edge Latency',
      icon: <Code className="h-5 w-5 text-[#1B7A43] dark:text-[#52E095]" />,
    },
    {
      num: '02',
      title: 'Enterprise Bespoke WordPress',
      stack: ['Custom Block Themes', 'Timber / Twig', 'GraphQL', 'WP-REST'],
      desc: 'Reversing the industry trend of heavy, unoptimized plugins. We build raw, custom Gutenberg and Headless WordPress systems engineered purely for speed, security, and editorial freedom.',
      metric: 'Zero Bloated Builders',
      icon: <Layers className="h-5 w-5 text-[#1B7A43] dark:text-[#52E095]" />,
    },
    {
      num: '03',
      title: 'Technical SEO & Growth Strategy',
      stack: ['Semantic DOM', 'JSON-LD Automation', 'Dynamic OG', 'Web Vitals'],
      desc: "Embedding search relevance into the compilation layer. We optimize your web application's structure from the crawling level up, guaranteeing perfect Lighthouse metrics and organic discoverability.",
      metric: '100% Core Web Vitals Score',
      icon: <Search className="h-5 w-5 text-[#1B7A43] dark:text-[#52E095]" />,
    },
  ];

  return (
    <section className="relative overflow-hidden border-t border-[#DCDCD6] bg-[#EFEFEA] px-4 py-32 text-[#1A2420] transition-colors duration-300 sm:px-8 sm:py-40 lg:px-16 dark:border-[#141F1A] dark:bg-[#090D0B] dark:text-[#ECF1EE]">
      {/* Structural Grid Background Continuity */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#DCDCD6_1px,transparent_1px),linear-gradient(to_bottom,#DCDCD6_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:4rem_4rem] opacity-20 dark:bg-[linear-gradient(to_right,#141F1A_1px,transparent_1px),linear-gradient(to_bottom,#141F1A_1px,transparent_1px)] dark:opacity-10" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Section Header */}
        <div className="mb-20 max-w-3xl sm:mb-24">
          <span className="mb-6 block font-mono text-xs font-bold tracking-[0.3em] text-[#1B7A43] uppercase dark:text-[#52E095]">
            CORE CAPABILITIES
          </span>
          <h2 className="text-4xl leading-[1.05] font-normal tracking-tighter text-[#1A2420] sm:text-6xl dark:text-white">
            Architectural solutions engineered for business metrics.
          </h2>
        </div>

        {/* Services Premium Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-[#C9C9BF] bg-[#E8E8E0] p-8 transition-all duration-300 hover:border-[#1B7A43] lg:p-10 dark:border-[#16241D] dark:bg-[#0E1411] dark:hover:border-[#52E095]"
            >
              {/* Top Section: Icon, Index & Title */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  {/* Premium Micro Icon Container */}
                  <div className="rounded-lg border border-[#BCBCB0] bg-[#DFDFD5] p-3 dark:border-[#1E3A2B] dark:bg-[#132219]">
                    {service.icon}
                  </div>
                  {/* Index Number - Sharper Color */}
                  <span className="font-mono text-xs font-bold text-[#55635B] dark:text-[#8FA399]">
                    {service.num}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold tracking-tight text-[#1A2420] transition-colors duration-300 group-hover:text-[#1B7A43] dark:text-white dark:group-hover:text-[#52E095]">
                    {service.title}
                  </h3>

                  {/* Tech Micro-Tags - Enhanced Visibility */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {service.stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded border border-[#B5B5A8] bg-[#D4D4C9] px-2 py-0.5 font-mono text-[10px] font-medium text-[#2C3E35] dark:border-[#234431] dark:bg-[#182C21] dark:text-[#A3B8AE]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description - Fixed Blur/Fade with font-normal and deep contrast colors */}
                <p className="pt-2 text-sm leading-relaxed font-normal text-[#334239] dark:text-[#C5D1C9]">
                  {service.desc}
                </p>
              </div>

              {/* Bottom Section: Metric Benchmark & Interaction Arrow */}
              <div className="mt-8 flex items-end justify-between border-t border-[#C9C9BF] pt-8 dark:border-[#16241D]">
                <div className="space-y-1">
                  <span className="block font-mono text-[10px] font-bold tracking-widest text-[#55635B] uppercase dark:text-[#8FA399]">
                    BENCHMARK
                  </span>
                  <span className="block font-mono text-sm font-bold text-[#1A2420] dark:text-white">
                    {service.metric}
                  </span>
                </div>

                {/* Micro Action Button - Sharp Borders */}
                <div className="rounded-full border border-[#BCBCB0] bg-transparent p-2.5 text-[#55635B] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#1B7A43] group-hover:text-[#1B7A43] dark:border-[#1E3A2B] dark:text-[#8FA399] dark:group-hover:border-[#52E095] dark:group-hover:text-[#52E095]">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
