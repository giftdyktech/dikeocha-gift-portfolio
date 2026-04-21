"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { useLang } from "@/lib/context";

const PROJECT_COLORS = [
  "from-yellow-400/20 to-orange-400/20",
  "from-blue-400/20 to-cyan-400/20",
  "from-purple-400/20 to-pink-400/20",
  "from-green-400/20 to-teal-400/20",
  "from-red-400/20 to-pink-400/20",
  "from-indigo-400/20 to-blue-400/20",
];

const PROJECT_TECH = [
  ["Next.js", "TypeScript", "Tailwind", "Stripe"],
  ["React", "Node.js", "MongoDB", "Socket.io"],
  ["Next.js", "Framer Motion", "Firebase"],
  ["React", "Express", "PostgreSQL"],
  ["Next.js", "OpenAI API", "Prisma"],
  ["React", "Recharts", "Node.js"],
];

type FilterKey = "all" | "web" | "apps" | "dev";

export default function Portfolio() {
  const { t } = useLang();
  const [active, setActive] = useState<FilterKey>("all");
  const [modal, setModal] = useState<number | null>(null);

  const projects = t.portfolio.projects;
  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title gold-underline"
      >
        {t.portfolio.title}
      </motion.h2>

      {/* Filter */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap gap-2"
      >
        {(["all", "web", "apps", "dev"] as FilterKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`filter-btn ${active === key ? "active" : ""}`}
          >
            {t.portfolio.filter[key]}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => {
            const originalIndex = projects.findIndex((p) => p.title === project.title);
            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => setModal(originalIndex)}
                className="card rounded-2xl overflow-hidden cursor-pointer group"
              >
                {/* Thumbnail */}
                <div
                  className={`h-40 bg-gradient-to-br ${PROJECT_COLORS[originalIndex]} flex items-center justify-center relative overflow-hidden`}
                >
                  <span className="text-4xl font-display font-bold opacity-20 select-none">
                    {project.title.charAt(0)}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <span className="text-white text-sm font-medium">View Details</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <span
                    className="text-xs font-medium mb-1 inline-block"
                    style={{ color: "var(--gold)" }}
                  >
                    {project.tag}
                  </span>
                  <h4 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                    {project.title}
                  </h4>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {PROJECT_TECH[originalIndex]?.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: "var(--active-bg)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modal !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModal(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="card rounded-2xl w-full max-w-lg pointer-events-auto overflow-hidden"
              >
                {/* Modal header image */}
                <div
                  className={`h-48 bg-gradient-to-br ${PROJECT_COLORS[modal]} flex items-center justify-center relative`}
                >
                  <span className="text-6xl font-display font-bold opacity-20">
                    {projects[modal]?.title.charAt(0)}
                  </span>
                  <button
                    onClick={() => setModal(null)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <span
                      className="text-xs font-medium"
                      style={{ color: "var(--gold)" }}
                    >
                      {projects[modal]?.tag}
                    </span>
                    <h3 className="font-display font-bold text-xl mt-1" style={{ color: "var(--text-primary)" }}>
                      {projects[modal]?.title}
                    </h3>
                  </div>

                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    A production-grade application built with modern web technologies. Designed for performance, scalability, and exceptional user experience.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TECH[modal]?.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full border"
                        style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline flex items-center gap-2 px-4 py-2.5 text-sm"
                    >
                      <Github size={15} /> GitHub
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold flex items-center gap-2 px-4 py-2.5 text-sm"
                    >
                      <ExternalLink size={15} /> Live Preview
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
