"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, Mail, Phone, Plane, Dumbbell, BookOpen, PersonStanding } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo, stats } from "@/lib/data";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const interestIcons = [Plane, Dumbbell, PersonStanding, BookOpen];

const softSkills = [
  { label: "Fast Learner", color: "text-violet-400 bg-violet-500/10 border-violet-500/20" },
  { label: "Team Player", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
  { label: "Analytical Thinking", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  { label: "Time Management", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
  { label: "Problem Solver", color: "text-pink-400 bg-pink-500/10 border-pink-500/20" },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="About Me"
          title="Passionate about building"
          highlight="building"
          description="A brief look at who I am, what drives me, and what I bring to the table."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-6"
        >
          {/* Bio card — centered */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-10 gradient-border text-center">
            <p className="text-slate-300 text-xl italic leading-relaxed mb-5 max-w-2xl mx-auto">
              &ldquo;{personalInfo.quote}&rdquo;
            </p>
            <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto">
              {personalInfo.bio}
            </p>
          </motion.div>

          {/* Stats — 4 equal columns */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center gradient-border hover:bg-white/5 transition-all duration-300"
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Education + Contact */}
          <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-6 gradient-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center text-xl shrink-0">
                  🎓
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
                    Education
                  </p>
                  <h3 className="font-semibold text-white mb-1">Istanbul Topkapı University</h3>
                  <p className="text-sm text-cyan-400 font-medium mb-1.5">
                    Computer Engineering · Full Scholarship
                  </p>
                  <p className="text-sm text-slate-400">4th Year · 2022 — 2026</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                Contact
              </p>
              <div className="space-y-3">
                {[
                  { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: Phone, label: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
                  { icon: MapPin, label: personalInfo.location, href: null },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center border border-violet-500/20 shrink-0">
                      <Icon size={14} className="text-violet-400" />
                    </div>
                    {href ? (
                      <a href={href} className="text-slate-300 hover:text-white transition-colors text-sm truncate">
                        {label}
                      </a>
                    ) : (
                      <span className="text-slate-300 text-sm">{label}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interests + Soft Skills */}
          <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest, i) => {
                  const Icon = interestIcons[i];
                  return (
                    <div key={interest} className="flex items-center gap-2 px-3 py-2 glass rounded-xl border border-white/8">
                      <Icon size={14} className="text-cyan-400" />
                      <span className="text-slate-300 text-sm">{interest}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                Soft Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span key={skill.label} className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${skill.color}`}>
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
