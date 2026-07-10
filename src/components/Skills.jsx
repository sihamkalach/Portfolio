import { motion } from "framer-motion";
import { FiFileText, FiLayers, FiSettings, FiCode, FiCheckCircle } from "react-icons/fi";
import {
  FaReact, FaPython, FaDocker, FaNodeJs, FaGitAlt,
} from "react-icons/fa";
import {
  SiDjango, SiPostgresql, SiMongodb, SiKubernetes,
  SiAmazonwebservices, SiJavascript,
} from "react-icons/si";

const techLogos = [
  { icon: <FaReact />,                  label: "React.js",   color: "text-cyan-400",    bg: "bg-cyan-500/10 border-cyan-500/20" },
  { icon: <FaPython />,                 label: "Python",     color: "text-yellow-400",  bg: "bg-yellow-500/10 border-yellow-500/20" },
  { icon: <SiDjango />,                 label: "Django",     color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
  { icon: <FaNodeJs />,                 label: "Node.js",    color: "text-green-500",   bg: "bg-green-500/10 border-green-500/20" },
  { icon: <SiJavascript />,             label: "JavaScript", color: "text-yellow-300",  bg: "bg-yellow-400/10 border-yellow-400/20" },
  { icon: <SiPostgresql />,             label: "PostgreSQL", color: "text-sky-400",     bg: "bg-sky-500/10 border-sky-500/20" },
  { icon: <SiMongodb />,                label: "MongoDB",    color: "text-green-400",   bg: "bg-green-400/10 border-green-400/20" },
  { icon: <FaDocker />,                 label: "Docker",     color: "text-blue-400",    bg: "bg-blue-400/10 border-blue-400/20" },
  { icon: <SiKubernetes />,             label: "Kubernetes", color: "text-blue-500",    bg: "bg-blue-500/10 border-blue-500/20" },
  { icon: <SiAmazonwebservices />,      label: "AWS",        color: "text-orange-400",  bg: "bg-orange-400/10 border-orange-400/20" },
  { icon: <FaGitAlt />,                 label: "Git",        color: "text-red-400",     bg: "bg-red-400/10 border-red-400/20" },
];

const skillGroups = [
  {
    title: "Functional Analysis",
    subtitle: "& Digital Transformation",
    icon: <FiFileText />,
    color: "blue",
    items: [
      "Requirements Gathering & Analysis",
      "Business Process Digitalization",
      "Functional Specifications",
      "User Stories & Use Cases",
      "UAT & Functional Testing",
      "User Support & Training",
    ],
  },
  {
    title: "Modeling",
    subtitle: "& Solution Design",
    icon: <FiLayers />,
    color: "violet",
    items: [
      "BPMN (AS-IS / TO-BE)",
      "UML (Use Case, Class, Sequence)",
      "Product Requirements Document",
      "Process Mapping",
      "Functional Benchmarking",
      "System Architecture Design",
    ],
  },
  {
    title: "Project Management",
    subtitle: "& Collaboration",
    icon: <FiSettings />,
    color: "cyan",
    items: [
      "Agile Scrum & Kanban",
      "Workshop Facilitation",
      "Business / Technical Coordination",
      "Risk Management",
      "Deliverable Tracking",
      "Jira & Change Management",
    ],
  },
  {
    title: "Technology Stack",
    subtitle: "& Development",
    icon: <FiCode />,
    color: "emerald",
    items: [
      "Python · Django REST Framework",
      "React.js · Node.js · JavaScript",
      "PostgreSQL · MongoDB · SQL",
      "REST APIs · Docker · Kubernetes",
      "AWS Cloud Services",
    ],
  },
];

const colorMap = {
  blue: {
    bg:      "bg-blue-500/5",
    border:  "border-blue-500/20",
    iconBg:  "bg-blue-500/15",
    text:    "text-blue-400",
    sub:     "text-blue-400",
    divider: "from-blue-500/0 via-blue-500/30 to-blue-500/0",
    check:   "text-blue-400",
  },
  violet: {
    bg:      "bg-violet-500/5",
    border:  "border-violet-500/20",
    iconBg:  "bg-violet-500/15",
    text:    "text-violet-400",
    sub:     "text-violet-400",
    divider: "from-violet-500/0 via-violet-500/30 to-violet-500/0",
    check:   "text-violet-400",
  },
  cyan: {
    bg:      "bg-cyan-500/5",
    border:  "border-cyan-500/20",
    iconBg:  "bg-cyan-500/15",
    text:    "text-cyan-400",
    sub:     "text-cyan-400",
    divider: "from-cyan-500/0 via-cyan-500/30 to-cyan-500/0",
    check:   "text-cyan-400",
  },
  emerald: {
    bg:      "bg-emerald-500/5",
    border:  "border-emerald-500/20",
    iconBg:  "bg-emerald-500/15",
    text:    "text-emerald-400",
    sub:     "text-emerald-400",
    divider: "from-emerald-500/0 via-emerald-500/30 to-emerald-500/0",
    check:   "text-emerald-400",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-violet-600/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3 mb-14"
        >
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Expertise</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">Skills & Competencies</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            A comprehensive skill set spanning business analysis, solution design,
            project management, and full-stack development.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, idx) => {
            const c = colorMap[group.color];
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.12, type: "spring", stiffness: 80, damping: 16 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative rounded-2xl ${c.bg} ${c.border} border p-6 flex flex-col gap-5`}
              >
                {/* Icon + Title */}
                <div className="space-y-3">
                  <div className={`inline-flex p-3 rounded-xl ${c.iconBg} ${c.text} text-xl`}>
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base leading-tight">{group.title}</h3>
                    <p className={`${c.sub} text-sm font-medium`}>{group.subtitle}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className={`h-px bg-gradient-to-r ${c.divider}`} />

                {/* Skill list */}
                <ul className="space-y-2.5 flex-1">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                      <FiCheckCircle className={`${c.check} mt-0.5 flex-shrink-0 w-3.5 h-3.5`} />
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* ── Tech Logos Visual Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14"
        >
          <p className="text-center text-slate-500 text-xs font-semibold uppercase tracking-widest mb-6">
            Technologies I Work With
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {techLogos.map((t, idx) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                whileHover={{ scale: 1.12, y: -3, transition: { duration: 0.15 } }}
                className={`flex flex-col items-center gap-2 px-4 py-3 rounded-2xl border ${t.bg} cursor-default`}
              >
                <span className={`text-3xl ${t.color}`}>{t.icon}</span>
                <span className="text-slate-400 text-xs font-medium">{t.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
