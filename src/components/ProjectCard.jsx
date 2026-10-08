import { Github, ExternalLink } from 'lucide-react'
import LinkButton from './LinkButton.jsx'

export default function ProjectCard({ p }) {
  return (
    <article className="card flex flex-col">
      <h3 className="text-xl font-bold text-white">{p.title}</h3>
      <p className="mt-3 text-slate-300">{p.description}</p>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
      {p.note && <p className="placeholder-tag mt-4 self-start">{p.note}</p>}
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">{p.tech.map((t) => <li key={t} className="badge">{t}</li>)}</ul>
      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        <LinkButton href={p.github} icon={Github}>GitHub Repository</LinkButton>
        <LinkButton href={p.demo} icon={ExternalLink} variant="primary">Live Demo</LinkButton>
      </div>
    </article>
  )
}
