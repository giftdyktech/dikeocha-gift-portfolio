"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, Phone, MapPin, ChevronDown,
  Sun, Moon, Globe
} from "lucide-react";
import { useTheme, useLang } from "@/lib/context";
import { Language } from "@/translations";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const LANG_LABELS: Record<Language, string> = {
  en: "EN",
  ig: "IG",
  fr: "FR",
};

export default function Sidebar() {
  const [showContacts, setShowContacts] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLang();

  const contacts = [
    { icon: Mail, label: t.contact.email, value: t.contact.emailValue, href: `mailto:${t.contact.emailValue}` },
    { icon: Phone, label: t.contact.phone, value: t.contact.phoneValue, href: `tel:${t.contact.phoneValue}` },
    { icon: MapPin, label: t.contact.location, value: t.contact.locationValue, href: null },
  ];

  return (
    <aside className="sidebar rounded-2xl p-6 flex flex-col gap-5 w-full lg:w-[280px] xl:w-[300px] shrink-0">
      {/* Top Controls */}
      <div className="flex items-center justify-between">
        {/* Theme toggle */}
        <motion.button
          onClick={toggleTheme}
          whileTap={{ scale: 0.9 }}
          className="w-9 h-9 rounded-full flex items-center justify-center border"
          style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>

        {/* Language switcher */}
        <div className="relative">
          <motion.button
            onClick={() => setShowLangMenu((p) => !p)}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border"
            style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
          >
            <Globe size={13} />
            {LANG_LABELS[lang]}
            <ChevronDown size={12} className={`transition-transform ${showLangMenu ? "rotate-180" : ""}`} />
          </motion.button>

          <AnimatePresence>
            {showLangMenu && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="absolute right-0 top-10 z-50 card rounded-xl overflow-hidden min-w-[100px]"
              >
                {(["en", "ig", "fr"] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setShowLangMenu(false); }}
                    className="w-full px-4 py-2.5 text-left text-xs font-medium transition-colors"
                    style={{
                      color: lang === l ? "var(--gold)" : "var(--text-secondary)",
                      background: lang === l ? "var(--active-bg)" : "transparent",
                    }}
                  >
                    {l === "en" ? "🇬🇧 English" : l === "ig" ? "🇳🇬 Igbo" : "🇫🇷 Français"}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Avatar */}
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="avatar-ring w-28 h-28">
          <div className="w-full h-full rounded-full overflow-hidden">
            <img
              src="/my_pic.jpg"
              alt="Dikeocha Gift"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <div>
          <h1 className="font-display font-bold text-xl" style={{ color: "var(--text-primary)" }}>
            {t.hero.name}
          </h1>
          <span
            className="text-xs font-medium px-3 py-1 rounded-full mt-1 inline-block"
            style={{ background: "var(--active-bg)", color: "var(--gold)" }}
          >
            {t.hero.role}
          </span>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2">
          <div className="status-dot" />
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            Available for work
          </span>
        </div>
      </div>

      <div className="separator" />

      {/* Action Buttons */}
      <div className="flex flex-col gap-2">
         
          <button
  onClick={() => {
    const event = new CustomEvent("navigate", { detail: "contact" });
    window.dispatchEvent(event);
  }}
  className="btn-gold px-4 py-2.5 text-sm text-center font-semibold rounded-lg w-full"
>
  {t.hero.hireMe}
</button>
         

        
        <a
          href="/cv.pdf"
          download
          className="btn-outline px-4 py-2.5 text-sm text-center font-medium rounded-lg"
        >
          {t.hero.downloadCV}
        </a>
      </div>

      {/* Toggle Contacts */}
      <button
        onClick={() => setShowContacts((p) => !p)}
        className="flex items-center justify-between w-full text-sm font-medium"
        style={{ color: "var(--text-secondary)" }}
      >
        <span>{t.hero.showContacts}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${showContacts ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {showContacts && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "var(--active-bg)", color: "var(--gold)" }}
                  >
                    <Icon size={15} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-xs font-medium truncate block hover:underline"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social Links */}
      <div className="separator" />
      <div className="flex items-center justify-center gap-3">
        {[
          {
            icon: <FaGithub size={17} />,
            href: "https://github.com/giftdyktech",
            label: "GitHub",
          },
          {
            icon: <FaLinkedinIn size={17} />,
            href: "www.linkedin.com/in/giftdyk",
            label: "LinkedIn",
          },
          {
            icon: <FaXTwitter size={17} />,
            href: "https://x.com/GiftDyk",
            label: "Twitter",
          },
        ].map(({ icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all hover:border-yellow-400 hover:text-yellow-400"
            style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
          >
            {icon}
          </a>
        ))}
      </div>

    </aside>
  );
}
