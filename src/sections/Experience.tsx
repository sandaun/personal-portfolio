import { ArrowUpRight } from 'lucide-react'

interface ExperienceItem {
  period: string
  title: string
  company: string
  companyUrl: string
  description: string
  tags: string[]
  subRoles?: string[]
}

const experiences: ExperienceItem[] = [
  {
    period: 'Current',
    title: 'Senior Frontend & Mobile Developer',
    company: 'AILY LABS',
    companyUrl: 'https://www.ailylabs.com',
    description:
      'Build product interfaces for an AI decision intelligence platform used by enterprise teams. Work at the intersection of product, design, and engineering to turn complex workflows into clear user experiences.',
    tags: ['TypeScript', 'React', 'React Native', 'AI Products', 'Product Engineering'],
  },
  {
    period: 'Previous',
    title: 'Product Manager',
    company: 'Intesis Software',
    companyUrl: 'https://www.intesis.com',
    description:
      'Worked across product, training, support, and customer-facing technical requests. This experience shaped a practical engineering style focused on accuracy, speed, and customer context.',
    tags: ['Product Management', 'Customer Context', 'Technical Support', 'Training'],
  },
  {
    period: '2018 — 2019',
    title: 'Full-Stack Web Development',
    company: 'Ironhack',
    companyUrl: 'https://www.ironhack.com',
    description:
      'Built a foundation in modern JavaScript application development, including React, TypeScript, Node.js, Express, MongoDB, API design, Git collaboration, and deployment practices.',
    tags: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24">
      <div className="lg:hidden flex items-center gap-4 mb-8">
        <span className="h-px w-8 bg-lightest-slate" />
        <h2 className="text-sm font-bold uppercase tracking-widest text-lightest-slate">
          Experience
        </h2>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <a
            key={index}
            href={exp.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 p-4 -mx-4 rounded-lg transition-all duration-300 hover:bg-light-navy/50 hover:shadow-[0_0_30px_rgba(100,255,218,0.05)]"
          >
            <div className="text-sm font-medium text-slate uppercase tracking-wider pt-1">
              {exp.period}
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-lightest-slate group-hover:text-green transition-colors leading-tight">
                <span className="inline-flex items-center gap-2">
                  {exp.title} · {exp.company}
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </span>
              </h3>

              {exp.subRoles && (
                <div className="flex flex-wrap gap-2 text-sm text-slate">
                  {exp.subRoles.map((role, i) => (
                    <span key={i}>{role}</span>
                  ))}
                </div>
              )}

              <p className="text-slate leading-relaxed">{exp.description}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}

        <div className="pt-4 px-4 -mx-4">
          <a
            href="https://www.linkedin.com/in/oriolcarbo/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-lightest-slate hover:text-green transition-colors font-medium"
          >
            View LinkedIn Profile
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
