"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  const [failed, setFailed] = useState(false);
  return <div className={`project-visual theme-${project.theme}`}>
    <div className="project-concept" aria-hidden="true"><span className="concept-domain">{new URL(project.url).hostname.replace("www.", "")}</span><span className="concept-monogram">{project.monogram}<span>®</span></span><span className="concept-label">{project.label}</span><div className="concept-orbit" /></div>
    {project.image && !failed && <Image src={project.image} alt={`${project.title} website preview`} fill sizes="(max-width: 700px) 100vw, 50vw" className="project-image" onError={() => setFailed(true)} />}
    <span className="project-open"><ArrowUpRight size={22} /></span>
  </div>;
}
export default function Projects() {
  return (
    <section id="projects" className="shell section-space projects-section">
      <div className="section-heading"><div><p className="eyebrow">01 / Selected work</p><h2>Made to <span className="muted">make a mark.</span></h2></div><span className="small-note">A few things we’ve put into the world.</span></div>
      <div className="project-grid">{projects.map((project, index) => <a className="project-card" href={project.url} target="_blank" rel="noopener noreferrer" key={project.title} aria-label={`View ${project.title} (opens in a new tab)`}>
        <ProjectVisual project={project} />
        <div className="project-caption"><div><h3>{project.title}</h3><p>{project.category}</p></div><span className="project-index">0{index + 1}</span></div>
      </a>)}</div>
    </section>
  );
}
