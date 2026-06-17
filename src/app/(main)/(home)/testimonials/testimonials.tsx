import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Wexlye rebuilt our site in weeks, not months. Leads through the contact form doubled the first month after launch.',
    name: 'Sarah Mitchell',
    role: 'Founder, Northbound Studio',
  },
  {
    quote:
      'We needed a WordPress site we could actually update ourselves. They delivered exactly that — clean, fast, no headaches.',
    name: 'James Carter',
    role: 'Owner, Coastal & Co.',
  },
  {
    quote:
      "Communication was clear from day one, and the final build matched the design pixel for pixel. Easiest agency we've worked with.",
    name: 'Priya Nair',
    role: 'Marketing Lead, Lumen Health',
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-white dark:bg-[#0B0B12]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 font-mono text-xs tracking-wider text-violet-500 uppercase dark:text-violet-400">
            client voices
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Don&apos;t take our word for it.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-[#0F0F18]"
            >
              <div className="flex gap-1 text-cyan-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                &quot;{t.quote}&quot;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 font-mono text-sm font-semibold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
