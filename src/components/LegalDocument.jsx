/**
 * Página legal generada desde su Markdown en `docs/`: el `.md` es el único texto que se edita.
 * El primer `# ` es el título de la página; una línea "**Última actualización:** ..." se omite
 * del cuerpo porque el encabezado de `LegalLayout` ya la muestra.
 */
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import LegalLayout from './LegalLayout'

const external = (href = '') => /^https?:/.test(href)

const components = {
  h2: ({ children }) => <h2 className="text-white font-bold text-lg sm:text-xl pt-6 first:pt-0">{children}</h2>,
  h3: ({ children }) => <h3 className="text-white/80 font-semibold text-base pt-2">{children}</h3>,
  strong: ({ children }) => <strong className="text-white/80">{children}</strong>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-primary hover:underline"
      {...(external(href) ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className="list-disc pl-5 space-y-2">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-5 space-y-2">{children}</ol>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-primary/40 pl-4 text-white/50">{children}</blockquote>
  ),
  hr: () => <hr className="border-white/8" />,
  table: ({ children }) => (
    <div className="overflow-x-auto rounded-xl border border-white/8">
      <table className="w-full text-sm border-collapse">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="text-left text-white/70 font-semibold px-4 py-3 border-b border-white/8 bg-white/3">{children}</th>
  ),
  td: ({ children }) => <td className="px-4 py-3 align-top leading-relaxed border-b border-white/5">{children}</td>,
}

export default function LegalDocument({ source, badge, updated }) {
  const [, title = ''] = source.match(/^#\s+(.+)$/m) ?? []
  const body = source.replace(/^#\s+.+$/m, '').replace(/^\*\*Última actualización:\*\*.*$/m, '')

  return (
    <LegalLayout badge={badge} title={title} updated={updated}>
      <div className="text-white/55 text-sm sm:text-base leading-relaxed space-y-4">
        <Markdown remarkPlugins={[remarkGfm]} components={components}>
          {body}
        </Markdown>
      </div>
    </LegalLayout>
  )
}
