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
          reliable product experiences with React, React Native, and TypeScript. I like work
          that sits close to users, where engineering decisions have to hold up in real product
          conversations.
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
          , a decision intelligence company bringing applied AI into enterprise workflows. That
          context fits how I like to build: practical interfaces, fast feedback loops, and a
          strong bias toward software that helps people make better decisions.
        </p>

        <p>
          My background combines hands-on engineering with product and client-facing experience.
          I trained in modern web development at{' '}
          <a
            href="https://www.ironhack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightest-slate hover:text-green transition-colors font-medium"
          >
            Ironhack
          </a>{' '}
          across the MERN stack, and I also hold a PMC-I certification from Pragmatic Marketing.
          That mix keeps me grounded in both code quality and product outcomes.
        </p>

        <p>
          I work comfortably in English, Catalan, and Spanish, and I can handle basic German.
          That helps me move naturally between local teams, international product discussions,
          and the kind of cross-functional collaboration that makes software better.
        </p>
      </div>
    </section>
  )
}
