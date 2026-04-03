"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  highlight,
  description,
}: SectionHeadingProps) {
  const fullTitle = highlight
    ? title.replace(highlight, `<span class="gradient-text">${highlight}</span>`)
    : title;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-16"
    >
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 glass text-violet-400 border border-violet-500/20">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
        {label}
      </span>
      <h2
        className="text-4xl md:text-5xl font-bold text-slate-100 mb-4 leading-tight text-center"
        dangerouslySetInnerHTML={{ __html: fullTitle }}
      />
      {description && (
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
