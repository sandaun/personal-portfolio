export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="lg:hidden flex items-center gap-4 mb-8">
        <span className="h-px w-8 bg-lightest-slate" />
        <h2 className="text-sm font-bold uppercase tracking-widest text-lightest-slate">
          About
        </h2>
      </div>

      <div className="space-y-4 text-slate">
        <p>
          I'm a frontend and mobile developer based in Barcelona, focused on building clear,
          reliable, and maintainable product experiences with React, React Native, and
          TypeScript. I enjoy working close to the product, where good engineering means
          understanding user needs, making pragmatic decisions, and shipping software that
          holds up in real use.
        </p>

        <p>
          Currently, I work at{' '}
          <a
            href="https://www.ailylabs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightest-slate hover:text-green transition-colors font-medium"
          >
            AILY LABS
          </a>
          , a decision intelligence company bringing applied AI into enterprise workflows. It
          is a context where interface quality, data clarity, and fast iteration matter, and
          where frontend work plays an important role in turning complex systems into usable
          products.
        </p>

        <p>
          My work is rooted in development: building mobile apps, web tools, shared UI
          foundations, and product-facing features with attention to code quality, testing,
          maintainability, and delivery.
        </p>

        <p>
          I work comfortably in English, Catalan, and Spanish, and I can handle basic German.
          That helps me collaborate naturally with local and international teams, across
          engineering, product, and business conversations.
        </p>
      </div>
    </section>
  )
}
