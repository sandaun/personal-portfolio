import { ArrowUpRight } from 'lucide-react'

interface Project {
  title: string
  description: string
  link: string
  tags: string[]
  image?: string
  imageAlt?: string
}

const projects: Project[] = [
  {
    title: 'AILY LABS Product Work',
    description:
      'Frontend and mobile work for Aily’s Decision Intelligence suite, including app experiences that surface real-time insights, recommendations, and agent-assisted decisions for enterprise teams.',
    link: 'https://www.ailylabs.com/product',
    tags: ['React', 'React Native', 'TypeScript', 'Decision Intelligence'],
    image: '/images/projects/aily-pro-x.webp',
    imageAlt: 'Aily ProX mobile product screen',
  },
  {
    title: 'Personal GitHub Repository',
    description:
      'A place for ongoing coding projects and experiments, started alongside the move into full-stack JavaScript and kept as a practical record of learning and shipping.',
    link: 'https://github.com/sandaun',
    tags: ['JavaScript', 'TypeScript', 'React', 'Node.js'],
  },
  {
    title: 'Portfolio Website',
    description:
      'A focused portfolio built with React, Vite, and Tailwind CSS to present product engineering experience without the noise of a template-driven resume page.',
    link: 'https://github.com/sandaun/portfolio-nextjs',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    image: '/images/projects/portfolio-home.png',
    imageAlt: 'Oriol Carbó portfolio homepage screenshot',
  },
]

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <div className="lg:hidden flex items-center gap-4 mb-8">
        <span className="h-px w-8 bg-lightest-slate" />
        <h2 className="text-sm font-bold uppercase tracking-widest text-lightest-slate">
          Projects
        </h2>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-card group relative grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 p-4 -mx-4 rounded-lg"
          >
            <div className="relative pt-1">
              {project.image ? (
                <div className="overflow-hidden rounded border-2 border-lightest-slate/10 bg-light-navy transition-colors group-hover:border-lightest-slate/30">
                  <img
                    src={project.image}
                    alt={project.imageAlt ?? `${project.title} screenshot`}
                    className="aspect-video h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="text-sm font-medium text-slate uppercase tracking-wider">
                  Selected work
                </div>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-lightest-slate group-hover:text-green transition-colors leading-tight">
                <span className="inline-flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight
                    size={16}
                    className="translate-y-px opacity-0 transition-all duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </span>
              </h3>

              <p className="text-slate leading-relaxed">{project.description}</p>

              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
