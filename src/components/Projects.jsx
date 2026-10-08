import Section from './Section.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../config/siteConfig.js'

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Things I've built while learning.">
      <div className="grid gap-6 lg:grid-cols-2">{projects.map((p) => <ProjectCard key={p.title} p={p} />)}</div>
    </Section>
  )
}
