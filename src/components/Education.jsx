import Section from './Section.jsx'
import { education } from '../config/siteConfig.js'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="relative max-w-3xl space-y-8 border-l border-edge pl-8">
        {education.map((e) => (
          <li key={e.degree} className="relative">
            <span className="absolute -left-[2.45rem] top-6 h-3 w-3 rounded-full border-2 border-ink bg-accent" aria-hidden="true" />
            <div className="card">
              <h3 className="text-lg font-bold text-white">{e.degree}</h3>
              <p className="mt-1 text-slate-300">{e.school}</p>
              <p className="mt-2 text-sm text-slate-400">{e.period}{e.extra && ` | ${e.extra}`}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
