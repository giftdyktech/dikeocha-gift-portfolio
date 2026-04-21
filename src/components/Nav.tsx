"use client";

import { motion } from "framer-motion";
import { User, FileText, Briefcase, BookOpen, MessageSquare } from "lucide-react";
import { useLang } from "@/lib/context";

type Section = "about" | "resume" | "portfolio" | "blog" | "contact";

interface NavProps {
  active: Section;
  onChange: (s: Section) => void;
}

const ICONS: Record<Section, React.ElementType> = {
  about: User,
  resume: FileText,
  portfolio: Briefcase,
  blog: BookOpen,
  contact: MessageSquare,
};

const SECTIONS: Section[] = ["about", "resume", "portfolio", "blog", "contact"];

export default function Nav({ active, onChange }: NavProps) {
  const { t } = useLang();

  return (
    <nav className="card rounded-2xl px-3 py-3 mb-6">
      <ul className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
        {SECTIONS.map((section) => {
          const Icon = ICONS[section];
          const isActive = active === section;
          return (
            <li key={section} className="shrink-0">
              <motion.button
                onClick={() => onChange(section)}
                whileTap={{ scale: 0.95 }}
                className={`nav-item flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${isActive ? "active" : ""}`}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{t.nav[section]}</span>
              </motion.button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
