"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { timeline } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading
          label="Background"
          title="Education & Experience"
          highlight="Experience"
          description="My academic journey and professional background."
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/30 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.type === "education" ? GraduationCap : Briefcase;
              const iconColor =
                item.type === "education" ? "from-violet-600 to-purple-600" : "from-cyan-600 to-teal-600";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "relative flex items-start gap-8",
                    "md:w-[calc(50%-2rem)]",
                    isLeft ? "md:ml-auto md:pl-10" : "md:mr-auto md:pr-10 md:flex-row-reverse",
                    "pl-16 md:pl-0"
                  )}
                >
                  {/* Node */}
                  <div
                    className={cn(
                      "absolute left-0 md:left-auto top-0",
                      isLeft ? "md:-left-[calc(2rem+20px)]" : "md:-right-[calc(2rem+20px)]",
                      "flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br shrink-0 shadow-lg z-10",
                      iconColor
                    )}
                    style={{
                      [isLeft ? "marginLeft" : "marginRight"]: undefined,
                    }}
                  >
                    <Icon size={16} className="text-white" />
                  </div>

                  {/* Card */}
                  <div className="glass rounded-2xl p-6 border border-white/8 hover:border-white/15 transition-all duration-300 flex-1 group">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={cn(
                          "text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border",
                          item.type === "education"
                            ? "text-violet-400 bg-violet-500/10 border-violet-500/20"
                            : "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
                        )}
                      >
                        {item.type}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">{item.period}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-violet-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-cyan-400 mb-3">{item.subtitle}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
