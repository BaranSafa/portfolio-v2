"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <SectionHeading
          label="Contact"
          title="Let's work together"
          highlight="work together"
          description="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        {/* Contact info row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-3 gap-4 mb-8"
        >
          {contactDetails.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="glass rounded-xl p-4 border border-white/8 flex items-center gap-3 hover:border-violet-500/30 transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                <Icon size={15} className="text-violet-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-0.5">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="text-slate-300 hover:text-white transition-colors text-sm font-medium truncate block"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-slate-300 text-sm font-medium truncate">{value}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl p-8 border border-white/8 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Your Name
              </label>
              <input
                {...register("name")}
                placeholder="Baran Safa"
                className={cn(
                  "w-full px-4 py-3 rounded-xl bg-white/5 border text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/40 transition-all text-sm",
                  errors.name
                    ? "border-red-500/50"
                    : "border-white/10 focus:border-violet-500/40"
                )}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1.5">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="you@example.com"
                className={cn(
                  "w-full px-4 py-3 rounded-xl bg-white/5 border text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/40 transition-all text-sm",
                  errors.email
                    ? "border-red-500/50"
                    : "border-white/10 focus:border-violet-500/40"
                )}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1.5">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
            <input
              {...register("subject")}
              placeholder="Project Collaboration"
              className={cn(
                "w-full px-4 py-3 rounded-xl bg-white/5 border text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/40 transition-all text-sm",
                errors.subject
                  ? "border-red-500/50"
                  : "border-white/10 focus:border-violet-500/40"
              )}
            />
            {errors.subject && (
              <p className="text-red-400 text-xs mt-1.5">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
            <textarea
              {...register("message")}
              rows={5}
              placeholder="Tell me about your project or idea..."
              className={cn(
                "w-full px-4 py-3 rounded-xl bg-white/5 border text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/40 transition-all text-sm resize-none",
                errors.message
                  ? "border-red-500/50"
                  : "border-white/10 focus:border-violet-500/40"
              )}
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1.5">{errors.message.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting || sent}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-lg",
              sent
                ? "bg-emerald-600 shadow-emerald-500/20"
                : "bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-violet-500/20"
            )}
          >
            {sent ? (
              <>
                <CheckCircle size={18} />
                Message Sent!
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-3 mt-6"
        >
          {[
            { icon: GithubIcon, href: personalInfo.github, label: "GitHub" },
            { icon: LinkedinIcon, href: personalInfo.linkedin, label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/8 text-slate-400 hover:text-white hover:border-violet-500/40 transition-all text-sm font-medium"
            >
              <Icon width={16} height={16} />
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
