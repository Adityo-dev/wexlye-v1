export default function AboutSection() {
  return (
    <section className="relative border-t border-[#DCDCD6] bg-[#EFEFEA] px-4 py-32 text-[#1A2420] transition-colors duration-300 sm:px-8 sm:py-48 lg:px-16 dark:border-[#141F1A] dark:bg-[#090D0B] dark:text-[#ECF1EE]">
      {/* Structural Minimalist Grid System */}
      <div className="mx-auto w-full max-w-6xl">
        {/* Row 1: Massive Editorial Headline */}
        <div className="mb-24 max-w-5xl sm:mb-36">
          <span className="mb-6 block font-mono text-[10px] font-bold tracking-[0.3em] text-[#1B7A43] uppercase dark:text-[#52E095]">
            STUDIO OVERVIEW
          </span>
          <h2 className="text-4xl leading-[1.05] font-light tracking-tighter text-[#1A2420] sm:text-6xl md:max-w-4xl lg:text-7xl dark:text-white">
            We build web architecture that outpaces the market.
          </h2>
        </div>

        {/* Row 2: Monolith Split Screen Layout */}
        <div className="grid grid-cols-1 gap-12 border-t border-[#DCDCD6] pt-16 lg:grid-cols-12 lg:gap-16 dark:border-[#141F1A]">
          {/* Left Block: Bold Corporate Mission Statement */}
          <div className="lg:col-span-7">
            <p className="max-w-2xl text-xl leading-relaxed font-normal text-[#1A2420] sm:text-2xl dark:text-white">
              We operate at the intersection of rigorous code discipline and high-end enterprise
              scale. We do not construct websites; we engineer immutable web assets.
            </p>

            <div className="mt-12 max-w-xl space-y-6 text-sm leading-relaxed font-light text-[#55635B] sm:text-base dark:text-[#8FA399]">
              <p>
                Every deployment profile is stripped of bloated abstractions, slow dependencies, and
                standard drag-and-drop page builders. Our codebases are written in strict TypeScript
                and deployed via hyper-optimized Next.js and custom standalone WordPress
                architecture.
              </p>
              <p>
                The results are high-converting, incredibly robust systems built uncompromised for
                Speed, Lighthouse Metrics, and aggressive global scaling.
              </p>
            </div>
          </div>

          {/* Right Block: Pure High-End Metric Display (No Boxes, Pure Typography) */}
          <div className="flex flex-col justify-between gap-12 border-[#DCDCD6] lg:col-span-5 lg:border-l lg:pl-12 dark:border-[#141F1A]">
            <div className="space-y-1">
              <span className="block font-mono text-[52px] leading-none font-light tracking-tighter text-[#1B7A43] sm:text-[64px] dark:text-[#52E095]">
                &lt;0.4s
              </span>
              <span className="block pt-2 font-mono text-xs font-bold tracking-widest text-[#1A2420] uppercase dark:text-white">
                AVERAGE EDGE HYDRATION TIME
              </span>
              <p className="max-w-xs pt-1 text-xs font-light text-[#55635B] dark:text-[#8FA399]">
                Optimized execution loops ensuring instant page delivery worldwide.
              </p>
            </div>

            <div className="space-y-1 border-t border-neutral-300/40 pt-6 dark:border-neutral-900">
              <span className="block font-mono text-[52px] leading-none font-light tracking-tighter text-[#1A2420] sm:text-[64px] dark:text-white">
                100%
              </span>
              <span className="block pt-2 font-mono text-xs font-bold tracking-widest text-[#1A2420] uppercase dark:text-white">
                CORE WEB VITALS AUDIT
              </span>
              <p className="max-w-xs pt-1 text-xs font-light text-[#55635B] dark:text-[#8FA399]">
                Strict data hierarchies designed to achieve maximum performance scores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
