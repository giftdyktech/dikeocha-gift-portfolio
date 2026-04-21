"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { useLang } from "@/lib/context";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const SKILLS = [
  { name: "HTML", level: 92 },
  { name: "CSS/SASS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "TypeScript", level: 65 }, 
  { name: "React JS", level: 70 },
  { name: "Next.js", level: 65 },      
  { name: "Tailwind CSS", level: 78 },
  { name: "Figma", level: 90 },
  { name: "Framer Motion", level: 75 }  
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate="show"
      custom={delay}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{name}</span>
        <span className="text-xs font-semibold" style={{ color: "var(--gold)" }}>{level}%</span>
      </div>
      <div className="skill-bar-bg">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: animated ? `${level}%` : 0 }}
          transition={{ duration: 1.2, delay: delay * 0.08, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Resume() {
  const { t } = useLang();

  return (
    <div className="space-y-8">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
        className="section-title gold-underline"
      >
        {t.resume.title}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="flex items-center gap-3 mb-5"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "var(--active-bg)", color: "var(--gold)" }}
            >
              <GraduationCap size={18} />
            </div>
            <h3 className="font-semibold text-base" style={{ color: "var(--text-primary)" }}>
              {t.resume.education}
            </h3>
          </motion.div>

          <div className="space-y-4">
            {t.resume.edu.map((item, i) => (
              <motion.div
                key={item.school}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={i + 2}
                className="card p-5 rounded-2xl relative pl-6"
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{ background: "linear-gradient(to bottom, var(--gold), transparent)" }}
                />
                <span
                  className="inline-block text-xs font-medium px-2.5 py-1 rounded-md mb-2"
                  style={{ background: "var(--active-bg)", color: "var(--gold)" }}
                >
                  {item.period}
                </span>
                <h4 className="font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>
                  {item.school}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="flex items-center gap-3 mb-5"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "var(--active-bg)", color: "var(--gold)" }}
            >
              <Briefcase size={18} />
            </div>
            <h3 className="font-semibold text-base" style={{ color: "var(--text-primary)" }}>
              {t.resume.experience}
            </h3>
          </motion.div>

          <div className="space-y-4">
            {t.resume.exp.map((item, i) => (
              <motion.div
                key={item.role}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={i + 2}
                className="card p-5 rounded-2xl relative pl-6"
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{ background: "linear-gradient(to bottom, var(--gold), transparent)" }}
                />
                <span
                  className="inline-block text-xs font-medium px-2.5 py-1 rounded-md mb-2"
                  style={{ background: "var(--active-bg)", color: "var(--gold)" }}
                >
                  {item.period}
                </span>
                <h4 className="font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>
                  {item.role}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div>
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          className="font-semibold text-base mb-5 gold-underline"
          style={{ color: "var(--text-primary)" }}
        >
          {t.resume.skills}
        </motion.h3>
        <div className="card p-6 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SKILLS.map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
