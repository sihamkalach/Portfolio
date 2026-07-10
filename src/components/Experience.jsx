import { motion } from "framer-motion";
import { FiMapPin, FiCalendar, FiArrowRight } from "react-icons/fi";

const experiences = [
  {
    role: "Freelance Developer & Brand Consultant",
    company: "Independent Clients",
    date: "2025 – Present",
    location: "Remote",
    current: true,
    tasks: [
      "Designing and developing custom web applications for clients across different industries.",
      "Building brand identities: visual design, brand strategy, naming, and digital presence.",
      "Delivering end-to-end digital solutions — from requirements gathering to deployment.",
      "Consulting on digital transformation, process automation, and tech stack selection.",
      "Managing client relationships, timelines, and deliverables in an Agile workflow.",
    ],
    tech: ["React.js", "Django REST", "Node.js", "PostgreSQL", "Branding", "Digital Strategy", "Agile"],
    color: "emerald",
  },
  {
    role: "Digital Transformation & AI Engineer",
    company: "SIANA / Al Boraq – filiale ONCF/SNCF",
    type: "Internship",
    date: "Feb 2026 – Jun 2026",
    location: "Tanger, Morocco",
    current: false,
    tasks: [
      "Contributed to digital transformation of internal processes through analysis, design, and implementation of IS solutions.",
      "Analyzed existing business processes, identified digitalization opportunities, and proposed automation-based solutions.",
      "Designed functional and technical architectures, defined system workflows, and created UML models.",
      "Developed the SIANA Intranet platform using React.js, Node.js, and MongoDB to digitalize collaborative services.",
      "Developed the SIANA-RH platform using Django REST Framework and PostgreSQL for HR business data management.",
      "Followed Agile Scrum methodologies with task management, technical documentation, and stakeholder coordination.",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Django REST", "PostgreSQL", "UML", "BPMN", "Agile Scrum"],
    color: "blue",
  },
  {
    role: "Full-Stack Developer & Product Analyst",
    company: "Honest Media",
    type: "Internship",
    date: "Jul 2025 – Sep 2025",
    location: "Al-Hoceima, Morocco",
    current: false,
    tasks: [
      "Contributed to the development of a SaaS platform for automating website creation for SMEs.",
      "Designed and developed features using React.js, Django REST Framework, and PostgreSQL.",
      "Analyzed user needs and translated business objectives into scalable technical solutions.",
      "Developed and integrated REST APIs for communication between application layers.",
      "Conducted benchmarking of SaaS solutions, CMS platforms, and No-Code platforms.",
    ],
    tech: ["React.js", "Django REST", "PostgreSQL", "REST APIs", "UML", "Agile Scrum", "Jira"],
    color: "violet",
  },
];

const colorMap = {
  emerald: {
    dot:    "bg-emerald-500",
    border: "border-emerald-500/25",
    arrow:  "text-emerald-400",
    tag:    "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  },
  blue: {
    dot:    "bg-blue-500",
    border: "border-blue-500/25",
    arrow:  "text-blue-400",
    tag:    "bg-blue-500/10 text-blue-300 border-blue-500/20",
  },
  violet: {
    dot:    "bg-violet-500",
    border: "border-violet-500/25",
    arrow:  "text-violet-400",
    tag:    "bg-violet-500/10 text-violet-300 border-violet-500/20",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3 mb-16"
        >
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Career</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500 via-blue-500 to-transparent opacity-25" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => {
              const c = colorMap[exp.color];
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={exp.role + exp.date}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: idx * 0.12, type: "spring", stiffness: 80, damping: 16 }}
                  className={`relative flex flex-col md:flex-row gap-6 ${isLeft ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-7 z-10">
                    <div className={`w-3.5 h-3.5 rounded-full ${c.dot} ring-4 ring-slate-950 shadow-lg ${exp.current ? "animate-pulse" : ""}`} />
                  </div>

                  {/* Card */}
                  <div className={`md:w-1/2 pl-12 md:pl-0 ${isLeft ? "md:pr-10" : "md:pl-10"}`}>
                    <div className={`rounded-2xl border ${c.border} bg-slate-900/60 backdrop-blur-sm p-6 space-y-4 hover:bg-slate-900/80 transition-colors duration-200`}>

                      {/* Badges row */}
                      <div className="flex flex-wrap gap-2">
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                            Active
                          </span>
                        )}
                        {exp.type && (
                          <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border ${colorMap[exp.color].tag}`}>
                            {exp.type}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <div>
                        <h3 className="text-lg font-bold text-white leading-tight">{exp.role}</h3>
                        <p className="text-slate-400 font-medium text-sm mt-0.5">{exp.company}</p>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <FiCalendar className="w-3.5 h-3.5" /> {exp.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FiMapPin className="w-3.5 h-3.5" /> {exp.location}
                        </span>
                      </div>

                      {/* Tasks */}
                      <ul className="space-y-2">
                        {exp.tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-300 text-sm leading-relaxed">
                            <FiArrowRight className={`${c.arrow} mt-0.5 flex-shrink-0 w-3.5 h-3.5`} />
                            {task}
                          </li>
                        ))}
                      </ul>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {exp.tech.map((t) => (
                          <span key={t} className={`text-xs px-2.5 py-1 rounded-lg border ${c.tag} font-medium`}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
