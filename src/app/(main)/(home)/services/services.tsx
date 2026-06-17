import { Code2, Globe, Palette, Wrench } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Web Development',
    desc: 'Fully bespoke websites and web apps built on Next.js — fast, scalable, and built around your business, not a template.',
    tags: ['Next.js', 'React', 'TypeScript'],
  },
  {
    icon: Globe,
    title: 'WordPress Development',
    desc: 'Flexible, easy-to-manage WordPress sites for businesses that want full control without touching code.',
    tags: ['WordPress', 'WooCommerce', 'Elementor'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Interfaces designed around how your customers actually think and click — clean, on-brand, conversion-focused.',
    tags: ['Figma', 'Design Systems'],
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    desc: 'Ongoing updates, performance monitoring, and support so your site stays fast and secure long after launch.',
    tags: ['SEO', 'Performance', 'Security'],
  },
];

export default function Services() {
  return (
    <section className="relative bg-white dark:bg-[#0B0B12]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 font-mono text-xs tracking-wider text-violet-500 uppercase dark:text-violet-400">
            what we do
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Two ways to launch. One standard of quality.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, desc, tags }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 p-8 transition-colors hover:border-violet-300 dark:border-zinc-800 dark:bg-[#0F0F18] dark:hover:border-violet-500/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-zinc-900 dark:text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {desc}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs text-zinc-500 dark:text-zinc-500">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 px-2.5 py-1 dark:border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
