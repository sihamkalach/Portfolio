import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaReact, FaPython, FaDocker, FaNodeJs, FaYoutube, FaInstagram } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiMongodb, SiKubernetes, SiAmazonwebservices } from "react-icons/si";
import { FiArrowRight, FiGithub } from "react-icons/fi";
import profile from "../assets/profile.png";

const techBadges = [
  { icon: <FaReact className="text-cyan-400" />,          label: "React.js" },
  { icon: <FaPython className="text-yellow-400" />,        label: "Python" },
  { icon: <SiDjango className="text-emerald-400" />,       label: "Django REST" },
  { icon: <FaNodeJs className="text-green-500" />,         label: "Node.js" },
  { icon: <SiPostgresql className="text-sky-400" />,       label: "PostgreSQL" },
  { icon: <SiMongodb className="text-green-400" />,        label: "MongoDB" },
  { icon: <FaDocker className="text-blue-400" />,          label: "Docker" },
  { icon: <SiKubernetes className="text-blue-500" />,      label: "Kubernetes" },
  { icon: <SiAmazonwebservices className="text-orange-400" />, label: "AWS" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/5 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-cyan-600/15 rounded-full blur-3xl animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0)_0%,rgba(2,6,23,0.8)_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 w-full grid lg:grid-cols-2 gap-14 items-center">

        {/* ── Left: Text ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-7 order-2 lg:order-1"
        >
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium"
          >
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Open to new opportunities
          </motion.div>

          {/* Name + typewriter */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Siham Kalach
              </span>
            </h1>
            <div className="text-xl sm:text-2xl font-semibold text-slate-300 min-h-[2rem]">
              <Typewriter
                words={[
                  "Digital Transformation Engineer",
                  "AI & Full-Stack Developer",
                  "Agile Project Manager",
                  "Business Process Analyst",
                  "Tech Content Creator",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={2500}
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
            Digital Transformation & AI Engineer specialized in designing and deploying
            innovative digital solutions — bridging{" "}
            <span className="text-blue-400 font-medium">business strategy</span>,{" "}
            <span className="text-cyan-400 font-medium">full-stack development</span>, and{" "}
            <span className="text-violet-400 font-medium">AI technologies</span> to deliver
            measurable impact. Also creating content on{" "}
            <span className="text-pink-400 font-medium">tech, marketing & business</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <motion.button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow text-sm"
            >
              View Projects <FiArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.a
              href="https://www.youtube.com/@sihamkalach"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 font-semibold hover:bg-red-500/20 transition-colors text-sm"
            >
              <FaYoutube className="w-4 h-4" /> YouTube
            </motion.a>

            <motion.a
              href="https://www.instagram.com/siham_kalach/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-pink-500/30 bg-gradient-to-r from-pink-500/10 to-orange-500/10 text-pink-400 font-semibold hover:from-pink-500/20 hover:to-orange-500/20 transition-all text-sm"
            >
              <FaInstagram className="w-4 h-4" /> Instagram
            </motion.a>

            <motion.a
              href="https://github.com/sihamkalach"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-900/50 text-slate-300 font-semibold hover:text-white hover:border-slate-600 transition-colors text-sm"
            >
              <FiGithub className="w-4 h-4" /> GitHub
            </motion.a>
          </div>

          {/* Tech badges */}
          <div>
            <p className="text-slate-500 text-xs mb-3 font-semibold uppercase tracking-widest">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {techBadges.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.07 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-medium hover:border-slate-600 hover:text-white transition-colors"
                >
                  {t.icon}
                  {t.label}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Right: Image ── */}
        <motion.div
          className="flex justify-center lg:justify-end order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Ambient glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/30 via-cyan-500/20 to-violet-500/25 blur-3xl scale-110" />

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px]">
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500 via-cyan-400 to-violet-500 p-px">
                <div className="w-full h-full rounded-3xl bg-slate-950 overflow-hidden">
                  <img
                    src={profile}
                    alt="Siham Kalach"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-5 top-8 bg-slate-800 border border-slate-700 rounded-2xl px-3.5 py-2.5 shadow-xl flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                <span className="text-xs font-semibold text-white whitespace-nowrap">10+ Projects Shipped</span>
              </motion.div>

              {/* Floating badge — bottom left: Instagram creator */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="absolute -left-5 bottom-14 bg-slate-800 border border-pink-500/30 rounded-2xl px-3.5 py-2.5 shadow-xl flex items-center gap-2"
              >
                <FaInstagram className="text-pink-400 w-3.5 h-3.5 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-200">@siham_kalach</span>
              </motion.div>

              {/* Floating badge — bottom right: YouTube */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute -bottom-4 right-6 bg-slate-800 border border-red-500/30 rounded-2xl px-3.5 py-2 shadow-xl flex items-center gap-2"
              >
                <FaYoutube className="text-red-500 w-3.5 h-3.5 flex-shrink-0" />
                <span className="text-xs font-semibold text-white">@sihamkalach</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
