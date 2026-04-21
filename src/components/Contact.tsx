"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { useLang } from "@/lib/context";

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const info = [
    { icon: Mail, label: t.contact.email, value: t.contact.emailValue, href: `mailto:${t.contact.emailValue}` },
    { icon: Phone, label: t.contact.phone, value: t.contact.phoneValue, href: `tel:${t.contact.phoneValue}` },
    { icon: MapPin, label: t.contact.location, value: t.contact.locationValue, href: null },
  ];

  return (
    <div className="space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title gold-underline"
      >
        {t.contact.title}
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 flex flex-col gap-4"
        >
          <h3
            className="font-semibold text-base gold-underline mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            {t.contact.subtitle}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {t.contact.reachOut}
          </p>

          <div className="flex flex-col gap-3 mt-2">
            {info.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="card p-4 rounded-xl flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--active-bg)", color: "var(--gold)" }}
                >
                  <Icon size={16} />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-medium hover:underline" style={{ color: "var(--text-primary)" }}>
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-3"
        >
          <div className="card p-6 rounded-2xl">
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 gap-4"
              >
                <CheckCircle size={52} className="text-green-400" />
                <p className="font-semibold text-base" style={{ color: "var(--text-primary)" }}>
                  Message sent!
                </p>
                <p className="text-sm text-center" style={{ color: "var(--text-secondary)" }}>
                  I'll reply within 24 hours.
                </p>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-xl mb-4"
                style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}
              >
                <AlertCircle size={18} className="text-red-400 shrink-0" />
                <p className="text-sm text-red-400">{errorMsg || "Something went wrong. Please try again."}</p>
              </motion.div>
            )}

            {status !== "success" && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder={t.contact.namePlaceholder}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="form-input"
                  />
                  <input
                    type="email"
                    required
                    placeholder={t.contact.emailPlaceholder}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="form-input"
                  />
                </div>

                <textarea
                  required
                  rows={6}
                  placeholder={t.contact.messagePlaceholder}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="form-input resize-none"
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === "loading"}
                  className="btn-gold w-full py-3 text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send size={15} />
                      {t.contact.send}
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
