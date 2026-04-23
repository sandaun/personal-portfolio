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
    period: 'Apr 2024 — Present',
    title: 'Software Engineer',
    company: 'AILY LABS',
    companyUrl: 'https://www.ailylabs.com',
    description:
      'Develop the Aily Labs app across iOS, Android, and web. Work on the Design System and Core team, maintaining shared UI foundations while collaborating with product, design, and engineering on end-to-end feature delivery.',
    tags: ['React Native', 'React', 'TypeScript', 'Design Systems', 'Jest', 'Appium'],
  },
  {
    period: 'Sep 2021 — Mar 2024',
    title: 'Mobile React Native Engineer',
    company: 'YEGO',
    companyUrl: 'https://www.yego.com',
    description:
      'Developed and deployed the YEGO customer app and internal Ranger app for iOS and Android. Migrated components from JavaScript to TypeScript and contributed to back-office tooling for vehicle operations.',
    tags: ['React Native', 'TypeScript', 'React', 'Redux', 'React Context', 'Mobile Apps'],
  },
  {
    period: 'Jan 2019 — Aug 2021',
    title: 'Fullstack Developer',
    company: 'Emjoy',
    companyUrl: 'https://www.crunchbase.com/organization/emjoy',
    description:
      'Built and shipped the Emjoy mobile app with React Native, maintained state with MobX, and developed internal back-office tools with React, Firebase Realtime Database, and Firebase Cloud Functions.',
    tags: ['React Native', 'React', 'MobX', 'Firebase', 'Node.js', 'Detox'],
  },
  {
    period: 'Jan 2017 — Jan 2019',
    title: 'Product Manager',
    company: 'Intesis Software',
    companyUrl: 'https://www.intesis.com',
    description:
      'Defined and specified new products and features while working closely with R&D through agile methodologies. This product background still shapes how I connect technical execution with user and business needs.',
    tags: ['Product Management', 'Agile', 'R&D Collaboration', 'Product Strategy'],
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
            className="portfolio-card group relative grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 p-4 -mx-4 rounded-lg"
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
                    className="translate-y-px opacity-0 transition-all duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
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
              className="translate-y-px transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
