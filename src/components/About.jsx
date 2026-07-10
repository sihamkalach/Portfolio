import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import {
  FiSearch, FiLayers, FiCpu, FiShield, FiCheckCircle, FiGlobe,
} from "react-icons/fi";

const steps = [
  {
    step: "01",
    label: "Requirements & Analysis",
    description: "Gathering business needs, running workshops, creating functional specifications and user stories.",
    icon: <FiSearch />,
    color: "blue",
  },
  {
    step: "02",
    label: "Design & Architecture",
    description: "BPMN modeling, UML diagrams, PRD documentation, and solution blueprinting.",
    icon: <FiLayers />,
    color: "violet",
  },
  {
    step: "03",
    label: "Development & Integration",
    description: "Building web apps and REST APIs with React, Django, Node.js, PostgreSQL, and MongoDB.",
    icon: <FiCpu />,
    color: "cyan",
  },
  {
    step: "04",
    label: "Testing & Validation",
    description: "UAT, functional testing, performance tuning, and security hardening.",
    icon: <FiShield />,
    color: "emerald",
  },
  {
    step: "05",
    label: "Deployment & Impact",
    description: "Docker/Kubernetes containerization, AWS cloud deployment, and continuous improvement.",
    icon: <FiCheckCircle />,
    color: "orange",
  },
];

const stats = [
  { label: "Projects Completed", value: "10+", color: "blue" },
  { label: "Technologies Used", value: "15+", color: "violet" },
  { label: "Experience", value: "3×", color: "cyan" },
  { label: "Years of Study", value: "5", color: "emerald" },
];

const colorMap = {
  blue:    { bg: "bg-blue-500/8",    border: "border-blue-500/20",    text: "text-blue-400",    num: "text-blue-400" },
  violet:  { bg: "bg-violet-500/8",  border: "border-violet-500/20",  text: "text-violet-400",  num: "text-violet-400" },
  cyan:    { bg: "bg-cyan-500/8",    border: "border-cyan-500/20",    text: "text-cyan-400",    num: "text-cyan-400" },
  emerald: { bg: "bg-emerald-500/8", border: "border-emerald-500/20", text: "text-emerald-400", num: "text-emerald-400" },
  orange:  { bg: "bg-orange-500/8",  border: "border-orange-500/20",  text: "text-orange-400",  num: "text-orange-400" },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Subtle background tint */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-950/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* ── Top: Description + Stats ── */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest">About Me</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Building Digital Solutions{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  that Matter
                </span>
              </h2>
            </div>

            <div className="text-lg font-medium text-slate-300 min-h-[1.75rem]">
              <Typewriter
                words={[
                  "Digital Transformation Engineer",
                  "AI & Full-Stack Developer",
                  "Agile Scrum Practitioner",
                  "Business Process Analyst",
                  "Tech & Business Content Creator",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={65}
                deleteSpeed={45}
                delaySpeed={2000}
              />
            </div>

            <p className="text-slate-400 leading-relaxed">
              I'm a <span className="text-slate-200 font-medium">Digital Transformation & AI Engineer</span> specialized
              in designing and deploying innovative digital solutions. My expertise spans business process analysis,
              UML/BPMN modeling, full-stack development, and Agile project management.
            </p>

            <p className="text-slate-400 leading-relaxed">
              From building intranet platforms and HR systems to AI-powered recommendation engines and SaaS products —
              I bridge business strategy with technical execution to deliver measurable impact.
            </p>

            {/* Content creator callout */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.instagram.com/siham_kalach/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-500/20 hover:from-pink-500/20 hover:to-orange-500/20 transition-all group"
              >
                <FaInstagram className="text-pink-400 w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold">@siham_kalach</p>
                  <p className="text-slate-400 text-xs">Tech · Business · Marketing · Branding · Dev</p>
                </div>
              </a>
              <a
                href="https://www.youtube.com/@sihamkalach"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-all"
              >
                <FaYoutube className="text-red-500 w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold">@sihamkalach</p>
                  <p className="text-slate-400 text-xs">Tech tutorials & project walkthroughs</p>
                </div>
              </a>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              {[
                { icon: <FiGlobe />,       text: "Arabic · French · English" },
                { icon: <FiCheckCircle />, text: "Open to opportunities" },
                { icon: <FiCheckCircle />, text: "Freelance · Available" },
                { icon: <FiCheckCircle />, text: "Content Creator" },
              ].map((f) => (
                <div key={f.text} className="flex items-center gap-2 text-slate-400 text-sm">
                  <span className="text-blue-400 flex-shrink-0">{f.icon}</span>
                  {f.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => {
              const c = colorMap[s.color];
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.1 }}
                  className={`${c.bg} ${c.border} border rounded-2xl p-6 space-y-1.5`}
                >
                  <p className={`text-5xl font-black ${c.num} leading-none`}>{s.value}</p>
                  <p className="text-slate-400 text-sm font-medium leading-snug">{s.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Bottom: Process Steps ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 space-y-2"
          >
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest">My Approach</p>
            <h3 className="text-3xl sm:text-4xl font-black text-white">How I Deliver Value</h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step, idx) => {
              const c = colorMap[step.color];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`${c.bg} ${c.border} border rounded-2xl p-5 space-y-3 cursor-default`}
                >
                  <div className="flex items-start justify-between">
                    <div className={`p-2.5 rounded-xl ${c.bg} ${c.border} border`}>
                      <span className={`text-lg ${c.text}`}>{step.icon}</span>
                    </div>
                    <span className={`text-3xl font-black ${c.text} opacity-20 leading-none`}>{step.step}</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm leading-snug">{step.label}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
