"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const filters = [
  { label: "All", value: "all" },
  { label: "AI & ML", value: "ai" },
  { label: "Web Dev", value: "web" },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
        className="relative max-w-2xl w-full glass rounded-3xl p-8 border border-white/10 shadow-2xl z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
        >
          <X size={16} />
        </button>

        <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-6 opacity-80`} />

        <div className="flex items-start gap-3 mb-6">
          <div>
            <span
              className={cn(
                "text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 inline-block",
                project.category === "ai"
                  ? "bg-violet-500/15 text-violet-400 border border-violet-500/20"
                  : "bg-cyan-500/15 text-cyan-400 border border-cyan-500/20"
              )}
            >
              {project.category === "ai" ? "AI & ML" : "Web Dev"}
            </span>
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          </div>
        </div>

        <p className="text-slate-300 leading-relaxed mb-8">{project.longDescription}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg text-xs font-medium text-slate-400 bg-white/5 border border-white/8"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 text-sm font-medium text-slate-300 hover:text-white hover:border-violet-500/40 transition-all"
            >
              <GithubIcon width={16} height={16} />
              View Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 transition-all"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  onClick,
  index,
}: {
  project: Project;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      className="glass rounded-2xl overflow-hidden border border-white/8 hover:border-white/15 cursor-pointer group transition-all duration-300 relative"
    >
      {/* Top gradient bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

      {/* Card glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(circle at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 60%)`,
        }}
      />

      <div className="p-7">
        <div className="flex items-start justify-between mb-4">
          <span
            className={cn(
              "text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full",
              project.category === "ai"
                ? "bg-violet-500/15 text-violet-400 border border-violet-500/20"
                : "bg-cyan-500/15 text-cyan-400 border border-cyan-500/20"
            )}
          >
            {project.category === "ai" ? "AI & ML" : "Web Dev"}
          </span>

          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
              >
                <GithubIcon width={14} height={14} />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs text-slate-400 bg-white/5 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1 text-xs font-medium text-violet-400 group-hover:gap-2 transition-all">
          <span>View Details</span>
          <ChevronRight size={13} />
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "ai" | "web">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Projects"
          title="Things I've built"
          highlight="I've built"
          description="A selection of projects ranging from machine learning research to full-stack web applications."
        />

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value as "all" | "ai" | "web")}
              className={cn(
                "px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer",
                activeFilter === f.value
                  ? "bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/20"
                  : "glass text-slate-400 hover:text-white border border-white/8"
              )}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/BaranSafa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-slate-400 hover:text-white hover:border-violet-500/40 transition-all text-sm font-medium"
          >
            <GithubIcon width={16} height={16} />
            See more on GitHub
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
