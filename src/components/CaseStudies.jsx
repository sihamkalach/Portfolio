import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";

const projects = [
  {
    title: "Fashionista",
    subtitle: "Full-Stack AI E-Commerce",
    stack: ["React", "Django REST", "AWS", "ML"],
    description: "Fashion e-commerce platform with Amazon-scraped product data and a machine learning recommendation engine.",
    highlights: ["ML-powered product recommendations", "AWS (S3, CloudFront, EC2, RDS)", "Security scanning & hardening"],
    github: "https://github.com/sihamkalach/Fashionista-Shop",
    youtube: "https://www.youtube.com/watch?v=yMZOFSPpfcQ",
    category: "Full-Stack",
  },
  {
    title: "2WatchM",
    subtitle: "Movie Recommendation Platform",
    stack: ["React", "Django", "TensorFlow", "TMDb API"],
    description: "Two-stage deep learning movie recommendation system with real-time personalization and fast retrieval indexing.",
    highlights: ["TensorFlow two-stage retrieval model", "ScaNN & BruteForce indexing", "Real-time personalization"],
    github: "https://github.com/sihamkalach/2WatchM",
    youtube: "https://www.youtube.com/watch?v=xJjvpY8yuuw",
    category: "AI / ML",
  },
  {
    title: "Smart School",
    subtitle: "Odoo Educational ERP Module",
    stack: ["Odoo", "Python", "PostgreSQL"],
    description: "Custom Odoo ERP module for managing educational institutions with role-based access and comprehensive reporting.",
    highlights: ["Department & course management", "Student / teacher tracking", "Role-based access control"],
    github: "https://github.com/sihamkalach/SmartSchool",
    youtube: null,
    category: "ERP",
  },
  {
    title: "OpenFood",
    subtitle: "Intelligent Food Recommendation",
    stack: ["React", "Django", "MongoDB", "FAISS"],
    description: "Semantic food recommendation engine using transformer embeddings and FAISS for fast similarity search.",
    highlights: ["NLP-based similarity search", "Nutrition & geography filters", "Modular REST API backend"],
    github: "https://github.com/sihamkalach/OpenFood",
    youtube: "https://www.youtube.com/watch?v=CzTiZeJsWoY",
    category: "AI / ML",
  },
  {
    title: "LuxScent",
    subtitle: "WordPress Perfume Store",
    stack: ["WordPress", "WooCommerce", "SEO"],
    description: "Premium perfume e-commerce store with WooCommerce product catalog and Yoast SEO optimization.",
    highlights: ["WooCommerce product catalog", "Yoast SEO & Google indexing", "User-friendly product search"],
    github: "https://github.com/sihamkalach/luxscentStore",
    youtube: "https://www.youtube.com/watch?v=K10o1QcODdQ",
    category: "Web",
  },
  {
    title: "Salpicon",
    subtitle: "Restaurant Website",
    stack: ["HTML", "CSS", "JavaScript", "AWS"],
    description: "Responsive restaurant website with interactive menu display, hosted and deployed on AWS.",
    highlights: ["Interactive menu & services", "Fully responsive design", "AWS hosting & deployment"],
    github: "https://github.com/sihamkalach/salpiconRestaurant",
    youtube: "https://www.youtube.com/watch?v=2WB_Hn0dt_Y",
    category: "Web",
  },
];

const categoryStyle = {
  "Full-Stack": "bg-blue-500/15 text-blue-400 border-blue-500/25",
  "AI / ML":    "bg-violet-500/15 text-violet-400 border-violet-500/25",
  "ERP":        "bg-orange-500/15 text-orange-400 border-orange-500/25",
  "Web":        "bg-cyan-500/15 text-cyan-400 border-cyan-500/25",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3 mb-14"
        >
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">Featured Projects</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            A selection from 10+ delivered projects spanning AI, full-stack development, ERP, and branding solutions.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm hover:border-slate-700 transition-colors duration-200"
            >
              {/* Top row: category badge */}
              <div className="mb-4">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryStyle[project.category]}`}>
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>
              <p className="text-slate-500 text-sm font-medium mt-0.5 mb-3">{project.subtitle}</p>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-slate-400 text-xs">
                    <span className="w-1 h-1 bg-blue-400 rounded-full flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
                {project.stack.map((s) => (
                  <span key={s} className="text-xs px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700 font-medium">
                    {s}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-2 pt-1">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 hover:border-slate-600 transition-colors text-xs font-semibold"
                  >
                    <FiGithub className="w-4 h-4" /> GitHub
                  </a>
                )}
                {project.youtube && (
                  <a
                    href={project.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 hover:bg-red-500/25 transition-colors text-xs font-semibold"
                  >
                    <FaYoutube className="w-4 h-4" /> Watch Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/sihamkalach"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 bg-slate-900/60 text-slate-300 font-semibold hover:text-white hover:border-slate-600 transition-colors text-sm"
          >
            <FiExternalLink className="w-4 h-4" />
            View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
