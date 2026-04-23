import { useEffect, useRef, useState } from 'react'
import { BookOpen, Codepen, Github, Instagram, Linkedin } from 'lucide-react'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
]

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/oriolcarbo', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/oriolcarbo/', icon: Linkedin },
  { name: 'CodePen', icon: Codepen },
  { name: 'Instagram', icon: Instagram },
  { name: 'Goodreads', icon: BookOpen },
]

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
              <span
                key={link.name}
                aria-label={link.name}
                className={className}
              >
                <Icon size={22} strokeWidth={1.5} />
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
              <Icon size={22} strokeWidth={1.5} />
            </a>
          )
        })}
      </div>
    </div>
  )
}
