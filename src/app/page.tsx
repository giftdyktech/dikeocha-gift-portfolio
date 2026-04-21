"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

type Section = "about" | "resume" | "portfolio" | "blog" | "contact";

const SECTIONS: Record<Section, React.ComponentType> = {
  about: About,
  resume: Resume,
  portfolio: Portfolio,
  blog: Blog,
  contact: Contact,
};

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
};

export default function Home() {
  const [active, setActive] = useState<Section>("about");

  useEffect(() => {
    const handler = (e: Event) => {
      const section = (e as CustomEvent).detail as Section;
      setActive(section);
    };
    window.addEventListener("navigate", handler);
    return () => window.removeEventListener("navigate", handler);
  }, []);

  const Component = SECTIONS[active];

  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8 noise">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 lg:items-start">
        {/* Sidebar */}
        <div className="lg:sticky lg:top-8">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <Nav active={active} onChange={setActive} />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="card rounded-2xl p-6 md:p-8"
            >
              <Component />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
