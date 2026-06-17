import { Handshake, Sparkles, Zap } from 'lucide-react';

const principles = [
  {
    icon: Sparkles,
    title: 'Craft',
    desc: 'Every pixel and every line of code is intentional — no bloated templates, no shortcuts.',
  },
  {
    icon: Zap,
    title: 'Speed',
    desc: 'Modern tooling means your site ships faster, without sacrificing quality.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    desc: 'We stick around after launch — your growth is the actual metric we track.',
  },
];

export default function AboutSection() {
  return (
    <section className="relative bg-zinc-50 dark:bg-[#0F0F18]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32">
        <div>
          <div className="mb-4 font-mono text-xs tracking-wider text-violet-500 uppercase dark:text-violet-400">
            our story
          </div>
          <h2 className="text-3xl leading-tight font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Built by developers, for businesses that refuse to settle.
          </h2>
          <p className="mt-6 text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
            Wexlye started with a simple frustration: businesses were stuck choosing between cheap,
            templated websites that look identical to everyone else&#39;s, or expensive agencies
            that take months to ship anything. We built Wexlye to close that gap — custom
            development speed, WordPress flexibility, and a team that treats your project like our
            own.
          </p>
          <p className="mt-4 text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
            Today we work with founders, local businesses, and growing teams who need a website that
            actually does its job: convert.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {principles.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#14141F]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">{title}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
