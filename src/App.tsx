import { useEffect, useState, useRef } from 'react'
import { Hero } from './components/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Footer } from './components/Footer'

export function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="min-h-screen bg-navy relative">
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 w-64 h-64 rounded-full opacity-20 mix-blend-screen transition-transform duration-100 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(100,255,218,0.3) 0%, rgba(100,255,218,0) 70%)',
          transform: `translate(${mousePosition.x - 128}px, ${mousePosition.y - 128}px)`,
        }}
      />
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="lg:flex lg:gap-24">
          <div className="lg:w-[45%] lg:max-w-[500px]">
            <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:pt-24 py-16">
              <Hero />
            </div>
          </div>
          
          <div className="lg:w-[55%] lg:pt-24">
            <About />
            <Experience />
            <Projects />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  )
}
