'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section className="relative overflow-hidden bg-zinc-50 dark:bg-[#0F0F18]">
      <div className="pointer-events-none absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl dark:bg-violet-600/20" />

      <div className="relative mx-auto max-w-5xl px-6 py-24 lg:py-32">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-[#0B0B12]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <div className="mb-4 font-mono text-xs tracking-wider text-violet-500 uppercase dark:text-violet-400">
                get in touch
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
                Let&apos;s build something{' '}
                <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                  great.
                </span>
              </h2>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                Tell us about your project and we&apos;ll get back to you within 24 hours with next
                steps.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <Mail className="h-4 w-4 text-violet-500" />
                hello@wexlye.com
              </div>
            </div>

            <form className="flex flex-col gap-4 border-t border-zinc-200 p-8 sm:p-12 lg:border-t-0 lg:border-l dark:border-zinc-800">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 ring-violet-500/30 outline-none focus:ring-2 dark:border-zinc-700 dark:bg-[#14141F] dark:text-white"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 ring-violet-500/30 outline-none focus:ring-2 dark:border-zinc-700 dark:bg-[#14141F] dark:text-white"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Project details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you're looking to build..."
                  className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 ring-violet-500/30 outline-none focus:ring-2 dark:border-zinc-700 dark:bg-[#14141F] dark:text-white"
                />
              </div>

              <Button
                size="lg"
                className="group mt-2 bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
              >
                Send message
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
