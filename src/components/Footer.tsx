export function Footer() {
  return (
    <footer className="pt-24 pb-12">
      <p className="text-sm text-slate leading-relaxed max-w-xl">
        Loosely designed in{' '}
        <a
          href="https://www.figma.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lightest-slate hover:text-green transition-colors font-medium"
        >
          Figma
        </a>{' '}
        and coded in{' '}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lightest-slate hover:text-green transition-colors font-medium"
        >
          Visual Studio Code
        </a>{' '}
        by yours truly. Built with{' '}
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lightest-slate hover:text-green transition-colors font-medium"
        >
          React
        </a>
        ,{' '}
        <a
          href="https://vite.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lightest-slate hover:text-green transition-colors font-medium"
        >
          Vite
        </a>{' '}
        and{' '}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lightest-slate hover:text-green transition-colors font-medium"
        >
          Tailwind CSS
        </a>
        , deployed with{' '}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lightest-slate hover:text-green transition-colors font-medium"
        >
          Vercel
        </a>
        . All text is set in the{' '}
        <a
          href="https://rsms.me/inter/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lightest-slate hover:text-green transition-colors font-medium"
        >
          Inter
        </a>{' '}
        typeface.
      </p>
    </footer>
  )
}
