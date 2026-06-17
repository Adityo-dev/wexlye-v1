import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'Northbound Studio',
    category: 'Custom Web Development',
    stack: ['Next.js', 'Tailwind', 'Stripe'],
  },
  {
    name: 'Coastal & Co.',
    category: 'WordPress E-commerce',
    stack: ['WordPress', 'WooCommerce'],
  },
  {
    name: 'Lumen Health',
    category: 'Custom Web Development',
    stack: ['Next.js', 'Sanity CMS'],
  },
];

export default function Portfolio() {
  return (
    <section className="relative bg-zinc-50 dark:bg-[#0F0F18]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div>
          <div className="mb-4 font-mono text-xs tracking-wider text-violet-500 uppercase dark:text-violet-400">
            selected work
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Real businesses, real results.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group cursor-pointer overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-[#14141F]"
            >
              <div className="relative h-48 bg-gradient-to-br from-violet-500/20 via-zinc-200 to-cyan-400/20 dark:from-violet-500/20 dark:via-zinc-900 dark:to-cyan-400/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
                    project preview
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white opacity-0 shadow-md transition-opacity group-hover:opacity-100 dark:bg-zinc-900">
                  <ArrowUpRight className="h-4 w-4 text-zinc-900 dark:text-white" />
                </div>
              </div>
              <div className="p-6">
                <p className="font-mono text-xs tracking-wider text-zinc-400 uppercase dark:text-zinc-500">
                  {project.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-white">
                  {project.name}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-zinc-500">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-200 px-2.5 py-1 dark:border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
