import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { site, links, isPlaceholderEmail } from '../config/siteConfig.js'

export default function Footer() {
  const icon = 'rounded-md p-2 text-slate-400 hover:text-accent'
  return (
    <footer className="border-t border-edge py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <p className="text-sm text-slate-400">&copy; {site.year} {site.name}. All rights reserved.</p>
        <div className="flex items-center gap-1">
          <a className={icon} href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
          <a className={icon} href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
          {!isPlaceholderEmail(links.email) && <a className={icon} href={`mailto:${links.email}`} aria-label="Email"><Mail size={20} /></a>}
          <button className="btn btn-outline ml-3 !py-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp size={16} aria-hidden="true" /> Back to top</button>
        </div>
      </div>
    </footer>
  )
}
