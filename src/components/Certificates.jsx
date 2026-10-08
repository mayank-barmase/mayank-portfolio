import { Award, ShieldCheck } from 'lucide-react'
import Section from './Section.jsx'
import LinkButton from './LinkButton.jsx'
import { certificates } from '../config/siteConfig.js'

export default function Certificates() {
  return (
    <Section id="certificates" title="Certificates">
      <div className="grid gap-6 sm:grid-cols-2">
        {certificates.map((c) => (
          <article key={c.title} className="card">
            {c.image ? (
              <img src={c.image} alt={`${c.title} certificate`} loading="lazy" className="mb-4 aspect-[4/3] w-full rounded-lg border border-edge object-cover" />
            ) : (
              <div className="mb-4 grid aspect-[4/3] w-full place-items-center rounded-lg border border-dashed border-edge bg-ink text-center text-sm text-slate-400" role="img" aria-label={`Placeholder for ${c.title} certificate image`}>
                <span><Award className="mx-auto mb-2 text-violet" aria-hidden="true" />Certificate image placeholder</span>
              </div>
            )}
            <h3 className="text-lg font-bold text-white">{c.title}</h3>
            <p className="text-sm text-slate-300">{c.issuer}</p>
            <p className="text-sm text-slate-400">{c.date}</p>
            <div className="mt-4"><LinkButton href={c.verifyUrl} icon={ShieldCheck}>Verify</LinkButton></div>
          </article>
        ))}
      </div>
    </Section>
  )
}
