import { GraduationCap, Target } from 'lucide-react'
import Section from './Section.jsx'
import { about, site } from '../config/siteConfig.js'

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-5 text-lg leading-relaxed lg:col-span-2">
          {about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="space-y-4">
          <div className="card flex gap-3"><GraduationCap className="shrink-0 text-accent" aria-hidden="true" />
            <p className="text-sm">B.Tech CST, 2nd Year<br /><span className="text-slate-400">MITS Gwalior, CGPA 7.71</span></p></div>
          <div className="card flex gap-3"><Target className="shrink-0 text-violet" aria-hidden="true" />
            <p className="text-sm">Looking for<br /><span className="text-slate-400">{site.goal}</span></p></div>
        </div>
      </div>
    </Section>
  )
}
