export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 id={`${id}-title`} className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 max-w-2xl text-slate-400">{subtitle}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
