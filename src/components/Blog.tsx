"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { useLang } from "@/lib/context";

const BLOG_GRADIENTS = [
  "from-yellow-400/20 to-orange-500/20",
  "from-blue-400/20 to-purple-500/20",
  "from-green-400/20 to-cyan-500/20",
];

const READ_TIMES = ["5 min read", "7 min read", "4 min read"];

export default function Blog() {
  const { t } = useLang();

  return (
    <div className="space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title gold-underline"
      >
        {t.blog.title}
      </motion.h2>

      <div className="grid grid-cols-1 gap-5">
        {t.blog.posts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="card rounded-2xl overflow-hidden cursor-pointer group flex flex-col sm:flex-row"
          >
            {/* Thumbnail */}
            <div
              className={`bg-gradient-to-br ${BLOG_GRADIENTS[i]} h-40 sm:h-auto sm:w-48 shrink-0 flex items-center justify-center`}
            >
              <span className="text-5xl font-display font-bold opacity-20 select-none">
                {(i + 1).toString().padStart(2, "0")}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: "var(--active-bg)", color: "var(--gold)" }}
                  >
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
                    <Clock size={12} />
                    <span className="text-xs">{READ_TIMES[i]}</span>
                  </div>
                </div>

                <h3
                  className="font-display font-semibold text-lg mb-2 group-hover:text-yellow-400 transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {post.date}
                </span>
                <motion.span
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-1 text-xs font-semibold"
                  style={{ color: "var(--gold)" }}
                >
                  Read More <ArrowRight size={14} />
                </motion.span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
