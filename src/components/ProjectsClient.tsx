"use client";

import { useState } from "react";
import type { Project, CmsSite, Tool } from "@/data/projects";
import SliderShell from "@/components/ui/SliderShell";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/projects/ProjectCard";
import CmsCard from "@/components/projects/CmsCard";
import ToolCard from "@/components/projects/ToolCard";
import ScrambleText from "@/components/ui/ScrambleText";

const TABS = [
  { key: "all",         label: "All" },
  { key: "completed",   label: "Completed" },
  { key: "active",      label: "In Progress" },
  { key: "development", label: "In Development" },
  { key: "rd",          label: "R&D" },
  { key: "pending",     label: "Pending" },
  { key: "upcoming",    label: "Upcoming" },
  { key: "placeholder", label: "Placeholder" },
];

export default function ProjectsClient({
  projects,
  cmsSites,
  tools,
}: {
  projects: Project[];
  cmsSites: CmsSite[];
  tools: Tool[];
}) {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? projects
    : projects.filter(p => p.status === active);

  return (
    <>
      {/* ── FILTER TABS ── */}
      <div className="filter-tabs">
        {TABS.map(tab => {
          const count = tab.key === "all"
            ? projects.length
            : projects.filter(p => p.status === tab.key).length;
          if (count === 0 && tab.key !== "all") return null;
          return (
            <button
              key={tab.key}
              className={`filter-tab${active === tab.key ? " is-active" : ""}`}
              onClick={() => setActive(tab.key)}
            >
              <ScrambleText>{tab.label}</ScrambleText>
              <span className="filter-tab__count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* ── PROJECT SLIDER ── */}
      <section style={{ padding: "0 40px 80px", maxWidth: "1200px", margin: "0 auto" }}>
        <SliderShell key={active} total={filtered.length} emptyLabel="No projects in this category yet.">
          {filtered.map(p => (
            <div key={p.slug} className="slider-card">
              <ProjectCard p={p} />
            </div>
          ))}
        </SliderShell>
      </section>

      <div className="sec-divider" style={{ background: "linear-gradient(90deg,transparent,rgba(128,203,196,0.2),transparent)" }} />

      {/* ── CMS & WEB PRESENCE ── */}
      <section style={{ padding: "0 40px 80px", maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader
          title="CMS & Web Presence"
          desc="WordPress institutional websites built for Politeknik Negeri Sriwijaya (POLSRI) and Poltekkes Kemenkes Palembang, 2020–present."
          count={cmsSites.length}
          accent="var(--cyan)"
        />
        <SliderShell total={cmsSites.length} emptyLabel="No sites yet.">
          {cmsSites.map(s => (
            <div key={s.id} className="slider-card">
              <CmsCard site={s} />
            </div>
          ))}
        </SliderShell>
      </section>

      <div className="sec-divider" style={{ background: "linear-gradient(90deg,transparent,rgba(206,147,216,0.2),transparent)" }} />

      {/* ── TOOLS & AUTOMATION ── */}
      <section style={{ padding: "0 40px 120px", maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader
          title="Tools & Automation"
          desc="Scripts, standalone tools, and workflow automations built for real daily problems."
          count={tools.length}
          accent="var(--purple-light)"
        />
        <SliderShell total={tools.length} emptyLabel="No tools yet.">
          {tools.map(t => (
            <div key={t.id} className="slider-card">
              <ToolCard tool={t} />
            </div>
          ))}
        </SliderShell>
      </section>
    </>
  );
}
