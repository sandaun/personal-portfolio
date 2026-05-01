import { useEffect, useRef, useState } from 'react'
import type { ReactElement, SVGProps } from 'react'

type SocialIcon = (props: SVGProps<SVGSVGElement>) => ReactElement

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  )
}

// Instagram is intentionally hidden for now.
// To restore it, add a brand icon and include it in socialLinks.
const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
]

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/sandaun', icon: GitHubIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/oriolcarbo/', icon: LinkedInIcon },
] satisfies Array<{ name: string; href?: string; icon: SocialIcon }>

export function Hero() {
  const [activeSection, setActiveSection] = useState('about')
  const pendingSectionRef = useRef<string | null>(null)
  const pendingSectionTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects']
      const scrollPosition = window.scrollY + 200
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2

      if (isAtBottom) {
        pendingSectionRef.current = null
        setActiveSection(sections[sections.length - 1])
        return
      }

      if (pendingSectionRef.current) {
        const pendingElement = document.getElementById(pendingSectionRef.current)

        if (pendingElement && Math.abs(pendingElement.offsetTop - window.scrollY) < 24) {
          pendingSectionRef.current = null
        } else {
          return
        }
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)

      if (pendingSectionTimeoutRef.current) {
        window.clearTimeout(pendingSectionTimeoutRef.current)
      }
    }
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      if (pendingSectionTimeoutRef.current) {
        window.clearTimeout(pendingSectionTimeoutRef.current)
      }

      pendingSectionRef.current = targetId
      setActiveSection(targetId)
      element.scrollIntoView({ behavior: 'smooth' })

      pendingSectionTimeoutRef.current = window.setTimeout(() => {
        pendingSectionRef.current = null
      }, 800)
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-lightest-slate">
          Oriol Carbó
        </h1>
        <h2 className="mt-3 text-lg sm:text-xl font-medium tracking-tight text-lightest-slate">
          Senior Frontend & Mobile Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate">
          I build product-focused React and React Native experiences that turn complex,
          AI-driven workflows into usable software.
        </p>

        <nav className="hidden lg:block">
          <ul className="mt-16 w-max space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`group flex items-center gap-4 text-sm font-bold uppercase tracking-widest transition-colors duration-150 ease-out ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-lightest-slate'
                      : 'text-slate hover:text-lightest-slate'
                  }`}
                >
                  <span
                    className={`h-px transition-all duration-150 ease-out ${
                      activeSection === item.href.replace('#', '')
                        ? 'w-16 bg-lightest-slate'
                        : 'w-8 bg-slate group-hover:w-16 group-hover:bg-lightest-slate'
                    }`}
                  />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex gap-6 mt-auto pt-24">
        {socialLinks.map((link) => {
          const Icon = link.icon

          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-slate hover:text-green hover:-translate-y-1 transition-all duration-300"
            >
              <Icon className="h-6 w-6" />
            </a>
          )
        })}
      </div>
    </div>
  )
}
