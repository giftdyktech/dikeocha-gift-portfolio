"use client";

import { motion } from "framer-motion";
 import { Code2, TrendingUp, Palette, Share2, Quote } from "lucide-react";
import { useLang } from "@/lib/context";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const SERVICE_ICONS = [Code2, TrendingUp, Palette, Share2];

const testimonials = [
  {
    name: "Macmaline N.O. Okehie",
    role: "CEO at Mac Habitat Dev ",
    avatar: "MO",
    text: "Gift's work exceeded every expectation. He delivered a flawless product with incredible attention to detail and speed. An absolute professional.",
  },
  {
    name: " Mr. Favour .O.",
    role: "CEO at Fintatech",
    avatar: "FO",
    text: "Working with Gift transformed our digital presence. He understood our vision immediately and built exactly what we needed. Highly recommended!",
  },
];

export default function About() {
  const { t } = useLang();
  const services = [
    t.about.services.web,
    t.about.services.mobile,
    t.about.services.api,
    t.about.services.ui,
  ];

  return (
    <div className="space-y-8">
      {/* Title */}
      <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
        <h2 className="section-title gold-underline mb-6">{t.about.title}</h2>
        <div className="space-y-4">
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {t.about.bio1}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {t.about.bio2}
          </p>
        </div>
      </motion.div>

      {/* What I'm Doing */}
      <motion.div variants={fadeUp} initial="hidden" animate="show" custom={1}>
        <h3 className="text-base font-semibold mb-4 gold-underline" style={{ color: "var(--text-primary)" }}>
          {t.about.whatIDo}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                custom={i + 2}
                initial="hidden"
                animate="show"
                whileHover={{ y: -4 }}
                className="card p-5 rounded-2xl flex gap-4"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--active-bg)", color: "var(--gold)" }}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>
                    {service.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div variants={fadeUp} initial="hidden" animate="show" custom={6}>
        <h3 className="text-base font-semibold mb-4 gold-underline" style={{ color: "var(--text-primary)" }}>
          {t.about.testimonials}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -4 }}
              className="card p-5 rounded-2xl relative"
            >
              <Quote
                size={32}
                className="absolute top-4 right-4 opacity-10"
                style={{ color: "var(--gold)" }}
              />
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0"
                  style={{ background: "var(--active-bg)", color: "var(--gold)" }}
                >
                  {item.avatar}
                </div>
                <div>
                  <p className="font-semibold text-xs" style={{ color: "var(--text-primary)" }}>
                    {item.name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {item.role}
                  </p>
                </div>
              </div>
              <p className="text-xs leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
                "{item.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      
    </div>
  );
}
