import { Globe, Server, Database, Code2, Wrench } from 'lucide-react'
import Section from './Section.jsx'
import { skills } from '../config/siteConfig.js'

const icons = { Globe, Server, Database, Code2, Wrench }

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="The technologies and tools I work with.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ title, icon, items }) => {
          const Icon = icons[icon] || Code2
          return (
            <div key={title} className="card transition-colors hover:border-accent/60">
              <h3 className="flex items-center gap-2 text-lg font-bold text-white"><Icon size={20} className="text-accent" aria-hidden="true" />{title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">{items.map((s) => <li key={s} className="badge">{s}</li>)}</ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
