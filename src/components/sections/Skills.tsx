"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/lib/data";

function SkillBar({
  name,
  level,
  color,
  index,
}: {
  name: string;
  level: number;
  color: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-xs font-bold tabular-nums" style={{ color }}>
          {isInView ? level : 0}%
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.08 + 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
        />
      </div>
    </motion.div>
  );
}

function CategoryCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass rounded-2xl p-8 border border-white/8 hover:border-white/15 transition-all duration-500 relative overflow-hidden group"
    >
      {/* Glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 opacity-0 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${category.color}15 0%, transparent 60%)`,
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-7">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${category.color}15`, border: `1px solid ${category.color}30` }}
        >
          <div className="w-3 h-3 rounded-full" style={{ background: category.color }} />
        </div>
        <h3 className="font-bold text-lg text-white">{category.title}</h3>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={category.color}
            index={i}
          />
        ))}
      </div>

      {/* Bottom gradient line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${category.color}50, transparent)`,
        }}
      />
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative">
      {/* BG accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          label="Technical Skills"
          title="What I work with"
          highlight="work with"
          description="A breakdown of my technical expertise across AI/ML, web development, and supporting tools."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.title} category={cat} index={i} />
          ))}
        </div>

        {/* Core technologies strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass rounded-2xl p-6 border border-white/8"
        >
          <p className="text-sm text-slate-500 text-center mb-5 uppercase tracking-widest font-medium">
            Core Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Python", "TensorFlow", "Keras", "React", "Next.js", "TypeScript",
              "JavaScript", "PHP", "MySQL", "MongoDB", "Git", "C#",
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 glass border border-white/8 hover:border-violet-500/30 hover:text-white transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
