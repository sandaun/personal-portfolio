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

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 1000 1000" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M295.42 6c-53.2 2.51-89.53 11-121.29 23.48-32.87 12.81-60.73 30-88.45 57.82S40.89 143 28.17 175.92c-12.31 31.83-20.65 68.19-23 121.42S2.3 367.68 2.56 503.46 3.42 656.26 6 709.6c2.54 53.19 11 89.51 23.48 121.28 12.83 32.87 30 60.72 57.83 88.45S143 964.09 176 976.83c31.8 12.29 68.17 20.67 121.39 23s70.35 2.87 206.09 2.61 152.83-.86 206.16-3.39S799.1 988 830.88 975.58c32.87-12.86 60.74-30 88.45-57.84S964.1 862 976.81 829.06c12.32-31.8 20.69-68.17 23-121.35 2.33-53.37 2.88-70.41 2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862 40.87 829.07 28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33 2.3 501.54 2.56 348.75 3.4 295.42 6m5.84 903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29 2.53-202c2.08-48.71 10.23-75.21 17-92.84 9-23.39 19.84-40 37.29-57.57s34.1-28.39 57.43-37.51c17.62-6.88 44.06-15.06 92.79-17.38 52.73-2.5 68.53-3 202-3.29s149.31.21 202.06 2.53c48.71 2.12 75.22 10.19 92.83 17 23.37 9 40 19.81 57.57 37.29s28.4 34.07 37.52 57.45c6.89 17.57 15.07 44 17.37 92.76 2.51 52.73 3.08 68.54 3.32 202s-.23 149.31-2.54 202c-2.13 48.75-10.21 75.23-17 92.89-9 23.35-19.85 40-37.31 57.56s-34.09 28.38-57.43 37.5c-17.6 6.87-44.07 15.07-92.76 17.39-52.73 2.48-68.53 3-202.05 3.29s-149.27-.25-202-2.53m407.6-674.61a60 60 0 1 0 59.88-60.1 60 60 0 0 0-59.88 60.1M245.77 503c.28 141.8 115.44 256.49 257.21 256.22S759.52 643.8 759.25 502 643.79 245.48 502 245.76 245.5 361.22 245.77 503m90.06-.18a166.67 166.67 0 1 1 167 166.34 166.65 166.65 0 0 1-167-166.34" />
    </svg>
  )
}

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
]

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/oriolcarbo', icon: GitHubIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/oriolcarbo/', icon: LinkedInIcon },
  { name: 'Instagram', icon: InstagramIcon },
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
        <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-lightest-slate tracking-tight mb-4">
          Oriol Carbó
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-lightest-slate mb-4">
          Senior Frontend & Mobile Developer
        </h2>
        <p className="text-lg text-slate max-w-md mb-12">
          I build product-focused React and React Native experiences for teams turning complex ideas into usable software.
        </p>

        <nav className="hidden lg:block">
          <ul className="space-y-4">
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
          const className = 'text-slate hover:text-green hover:-translate-y-1 transition-all duration-300'

          if (!('href' in link)) {
            return (
              <span key={link.name} aria-label={link.name} className={className}>
                <Icon className="h-6 w-6" />
              </span>
            )
          }

          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className={className}
            >
              <Icon className="h-6 w-6" />
            </a>
          )
        })}
      </div>
    </div>
  )
}
