import { ArrowDown, Download, Mail, MapPin } from 'lucide-react'
import { site, links, skills } from '../config/siteConfig.js'

// Abstract "editor" graphic: lines are driven by config, shown in sequence on load.
function CodeWindow() {
  const stack = ['React', 'Node.js', 'Express', 'MongoDB']
  const lines = [
    <><span className="text-violet">const</span> <span className="text-accent">developer</span> = {'{'}</>,
    <>&nbsp;&nbsp;name: <span className="text-emerald-300">"{site.name}"</span>,</>,
    <>&nbsp;&nbsp;role: <span className="text-emerald-300">"{site.role}"</span>,</>,
    <>&nbsp;&nbsp;stack: [{stack.map((s, i) => <span key={s}><span className="text-emerald-300">"{s}"</span>{i < stack.length - 1 ? ', ' : ''}</span>)}],</>,
    <>&nbsp;&nbsp;studying: <span className="text-emerald-300">"B.Tech CST, MITS Gwalior"</span>,</>,
    <>&nbsp;&nbsp;lookingFor: <span className="text-emerald-300">"Internship"</span>,</>,
    <>{'}'}</>,
  ]
  return (
    <div role="img" aria-label="Decorative code editor showing a summary of Mayank's profile"
         className="w-full max-w-md rounded-xl border border-edge bg-panel shadow-2xl shadow-violet/10">
      <div className="flex items-center gap-2 border-b border-edge px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/70" /><span className="h-3 w-3 rounded-full bg-amber-300/70" /><span className="h-3 w-3 rounded-full bg-emerald-400/70" />
        <span className="ml-3 font-mono text-xs text-slate-400">developer.js</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-slate-300">
        {lines.map((l, i) => (
          <div key={i} className="animate-lineIn" style={{ animationDelay: `${i * 220 + 200}ms` }}>{l}</div>
        ))}
      </pre>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title"
             className="relative overflow-hidden bg-[radial-gradient(60rem_30rem_at_80%_-10%,rgba(124,156,255,.14),transparent),radial-gradient(40rem_25rem_at_0%_100%,rgba(167,139,250,.10),transparent)]">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 text-sm text-slate-400"><MapPin size={16} aria-hidden="true" /> {site.location}</p>
          <h1 id="hero-title" className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">{site.headline}</h1>
          <p className="mt-3 bg-gradient-to-r from-accent to-violet bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">{site.role}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">{site.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary"><ArrowDown size={16} aria-hidden="true" /> View Projects</a>
            <a href="#contact" className="btn btn-outline"><Mail size={16} aria-hidden="true" /> Contact Me</a>
            <a href={links.resume} download className="btn btn-outline"><Download size={16} aria-hidden="true" /> Download Resume</a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end"><CodeWindow /></div>
      </div>
    </section>
  )
}
