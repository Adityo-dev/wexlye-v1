'use client';

import { ArrowLeft, ArrowRight, Cpu, Gauge, ShieldCheck } from 'lucide-react';
import React, { useState } from 'react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  metricValue: string;
  metricLabel: string;
  icon: React.ReactNode;
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '01',
      quote:
        'Migrating our logistics infrastructure to their bespoke headless architecture eliminated our hydration latency entirely. Our core bundle size dropped by 42%, securing absolute instant data streaming for our global operations.',
      author: 'Marcus Vance',
      role: 'Chief of Product',
      company: 'Linear Logistics Group',
      metric: '4.2x Faster FCP',
      metricValue: '4.2x Faster FCP',
      metricLabel: 'EDGE SPEEDUP',
      icon: <Cpu className="h-5 w-5 text-[#1B7A43] dark:text-[#52E095]" />,
    },
    {
      id: '02',
      quote:
        'They delivered pure structural perfection. The custom framework has zero dependencies, absolute zero bloat, and our internal content engineering teams feel completely liberated. Absolute masterclass in modern clean code.',
      author: 'Sarah Jenkins',
      role: 'VP of Growth',
      company: 'Vanta Compliance',
      metric: '0.0% Bloat',
      metricValue: '0.0% Bloat',
      metricLabel: 'DEPENDENCY AUDIT',
      icon: <ShieldCheck className="h-5 w-5 text-[#1B7A43] dark:text-[#52E095]" />,
    },
    {
      id: '03',
      quote:
        'Their technical SEO compilation layer is literal magic. Automating dynamic JSON-LD data schemas directly into the compilation pipeline forced our organic crawling index rate to historic heights within 30 days.',
      author: 'David Kross',
      role: 'Technical Founder',
      company: 'Apex FinTech',
      metric: '+320% Scale',
      metricValue: '+320% Scale',
      metricLabel: 'ORGANIC CRAWL',
      icon: <Gauge className="h-5 w-5 text-[#1B7A43] dark:text-[#52E095]" />,
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section className="relative overflow-hidden border-t border-[#DCDCD6] bg-[#EFEFEA] px-4 py-32 text-[#1A2420] transition-colors duration-300 sm:px-8 sm:py-40 lg:px-16 dark:border-[#141F1A] dark:bg-[#090D0B] dark:text-[#ECF1EE]">
      {/* Structural Developer Grid Background Continuity */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#DCDCD6_1px,transparent_1px),linear-gradient(to_bottom,#DCDCD6_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:4rem_4rem] opacity-20 dark:bg-[linear-gradient(to_right,#141F1A_1px,transparent_1px),linear-gradient(to_bottom,#141F1A_1px,transparent_1px)] dark:opacity-10" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Top Control Header */}
        <div className="mb-16 flex items-end justify-between border-b border-[#C9C9BF] pb-10 sm:mb-20 dark:border-[#16241D]">
          <div className="space-y-4">
            <span className="block font-mono text-xs font-bold tracking-[0.3em] text-[#1B7A43] uppercase dark:text-[#52E095]">
              VERIFIED PROTOCOLS
            </span>
            <h2 className="text-3xl font-normal tracking-tighter text-[#1A2420] sm:text-5xl dark:text-white">
              Validated business impact.
            </h2>
          </div>

          {/* Premium Navigation Hub */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="rounded-xl border border-[#C9C9BF] bg-[#E8E8E0] p-3 text-[#1A2420] transition-all duration-300 hover:border-[#1B7A43] active:scale-95 dark:border-[#16241D] dark:bg-[#0E1411] dark:text-white dark:hover:border-[#52E095]"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextSlide}
              className="rounded-xl border border-[#C9C9BF] bg-[#E8E8E0] p-3 text-[#1A2420] transition-all duration-300 hover:border-[#1B7A43] active:scale-95 dark:border-[#16241D] dark:bg-[#0E1411] dark:text-white dark:hover:border-[#52E095]"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Main Interactive Stage Container */}
        <div className="grid min-h-[320px] grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Massive Statement Block */}
          <div className="transform space-y-8 transition-all duration-500 lg:col-span-8">
            <span className="block font-mono text-xs font-bold text-neutral-400 dark:text-neutral-500">
              SYS_NODE // {current.id}
            </span>

            {/* The Main High-Contrast Quote */}
            <p className="text-2xl leading-relaxed font-normal tracking-tight text-[#1A2420] transition-all duration-300 sm:text-4xl dark:text-white">
              {current.quote}
            </p>

            {/* Author Signature */}
            <div className="space-y-1 pt-4">
              <div className="text-base font-semibold text-[#1A2420] dark:text-white">
                {current.author}
              </div>
              <div className="font-mono text-xs text-[#55635B] dark:text-[#8FA399]">
                {current.role} —{' '}
                <span className="font-sans font-medium text-[#1A2420] dark:text-white">
                  {current.company}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Metric Showcase Container */}
          <div className="w-full border-[#C9C9BF] lg:col-span-4 lg:border-l lg:pl-12 dark:border-[#16241D]">
            <div className="group relative space-y-8 overflow-hidden rounded-2xl border border-[#C9C9BF] bg-[#E8E8E0] p-8 shadow-sm lg:p-10 dark:border-[#16241D] dark:bg-[#0E1411]">
              {/* Decorative Tech Icon */}
              <div className="w-fit rounded-xl border border-[#BCBCB0] bg-[#DFDFD5] p-3 dark:border-[#1E3A2B] dark:bg-[#132219]">
                {current.icon}
              </div>

              {/* Verified ROI Data */}
              <div className="space-y-1">
                <span className="block font-mono text-[10px] font-bold tracking-widest text-[#55635B] uppercase dark:text-[#8FA399]">
                  {current.metricLabel}
                </span>
                <span className="block font-mono text-3xl font-bold tracking-tight text-[#1B7A43] transition-all duration-300 sm:text-4xl dark:text-[#52E095]">
                  {current.metricValue}
                </span>
              </div>

              <p className="text-xs leading-relaxed font-normal text-[#55635B] dark:text-[#8FA399]">
                System architecture audited and fully deployment verified for global cloud
                distribution.
              </p>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 pt-2 font-mono text-[10px] font-bold text-[#1B7A43] dark:text-[#52E095]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1B7A43] dark:bg-[#52E095]" />
                <span>SIGNED VERDICT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Progress Nodes */}
        <div className="mt-16 flex gap-2 border-t border-[#C9C9BF] pt-8 dark:border-[#16241D]">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full font-mono transition-all duration-500 ${
                index === activeIndex
                  ? 'w-12 bg-[#1B7A43] dark:bg-[#52E095]'
                  : 'w-3 bg-[#C9C9BF] hover:bg-[#1B7A43]/50 dark:bg-[#16241D]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
