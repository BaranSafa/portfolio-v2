"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold gradient-text mb-1">Baran Safa Taşkın</p>
          <p className="text-slate-500 text-sm">
            Computer Engineering Student · Istanbul, Turkey
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full glass text-slate-400 hover:text-white hover:border-violet-500/40 transition-all duration-200 border border-white/8"
          >
            <GithubIcon width={16} height={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full glass text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all duration-200 border border-white/8"
          >
            <LinkedinIcon width={16} height={16} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="w-9 h-9 flex items-center justify-center rounded-full glass text-slate-400 hover:text-white hover:border-violet-500/40 transition-all duration-200 border border-white/8"
          >
            <Mail size={16} />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Built with Next.js
          </p>
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/20"
          >
            <ArrowUp size={15} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
