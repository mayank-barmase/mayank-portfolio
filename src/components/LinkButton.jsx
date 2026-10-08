import { Link2Off } from 'lucide-react'

// Renders a real link when href is set, otherwise a clearly disabled placeholder button.
export default function LinkButton({ href, icon: Icon, children, variant = 'outline', ...rest }) {
  if (!href) {
    return (
      <span className="btn btn-disabled" aria-disabled="true" title="Placeholder: add this link in src/config/siteConfig.js">
        <Link2Off size={16} aria-hidden="true" /> {children} (add link)
      </span>
    )
  }
  const external = href.startsWith('http')
  return (
    <a href={href} className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-outline'}`}
       {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      {Icon && <Icon size={16} aria-hidden="true" />} {children}
    </a>
  )
}
