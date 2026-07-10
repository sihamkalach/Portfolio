import { motion } from "framer-motion";
import { FiDownload, FiAward } from "react-icons/fi";

const certs = [
  {
    title: "AWS Solutions Architect",
    subtitle: "Knowledge Badge",
    org: "Amazon Web Services",
    date: "2024",
    img: "/certs/aws_architect.png",
    pdf: "/certs/AWS course completion certificate.pdf",
    desc: "Cloud architecture, scalable systems, and infrastructure best practices.",
    color: "orange",
  },
  {
    title: "React Basics",
    subtitle: "Frontend Development",
    org: "Meta",
    date: "2024",
    img: "/certs/react.png",
    pdf: "/certs/React certificate.pdf",
    desc: "Building interactive front-end applications with reusable React components.",
    color: "blue",
  },
  {
    title: "Python for Data Science",
    subtitle: "AI & Development",
    org: "IBM",
    date: "2024",
    img: "/certs/python.png",
    pdf: "/certs/python certificate.pdf",
    desc: "Python programming, AI model building, and data-driven decision making.",
    color: "yellow",
  },
  {
    title: "Migrating to the AWS Cloud",
    subtitle: "Cloud Migration",
    org: "Coursera & AWS",
    date: "2024",
    img: "/certs/migrating_to_aws.png",
    pdf: "/certs/Migrating to the aws cloud certificate.pdf",
    desc: "Practical cloud migration strategies, patterns, and AWS tooling.",
    color: "cyan",
  },
];

const colorMap = {
  orange: {
    bg:     "bg-orange-500/5",
    border: "border-orange-500/20",
    iconBg: "bg-orange-500/15 border-orange-500/20",
    text:   "text-orange-400",
  },
  blue: {
    bg:     "bg-blue-500/5",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/15 border-blue-500/20",
    text:   "text-blue-400",
  },
  yellow: {
    bg:     "bg-yellow-500/5",
    border: "border-yellow-500/20",
    iconBg: "bg-yellow-500/15 border-yellow-500/20",
    text:   "text-yellow-400",
  },
  cyan: {
    bg:     "bg-cyan-500/5",
    border: "border-cyan-500/20",
    iconBg: "bg-cyan-500/15 border-cyan-500/20",
    text:   "text-cyan-400",
  },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-cyan-600/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3 mb-14"
        >
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Credentials</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">Certifications</h2>
          <p className="text-slate-400 max-w-md mx-auto text-base">
            Verified credentials from AWS, Meta, and IBM in cloud, frontend, and AI development.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((cert, idx) => {
            const c = colorMap[cert.color];
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`group relative flex flex-col rounded-2xl ${c.bg} ${c.border} border p-5 gap-4 backdrop-blur-sm`}
              >
                {/* Award icon */}
                <div className={`inline-flex p-2.5 rounded-xl ${c.iconBg} border w-fit`}>
                  <FiAward className={`${c.text} w-4 h-4`} />
                </div>

                {/* Certificate image */}
                <div className="rounded-xl overflow-hidden border border-white/8 aspect-video bg-slate-800">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <div className="space-y-1 flex-1">
                  <h3 className="text-white font-bold text-sm leading-snug">{cert.title}</h3>
                  <p className={`${c.text} text-xs font-semibold`}>{cert.subtitle}</p>
                  <p className="text-slate-500 text-xs">{cert.org} · {cert.date}</p>
                  <p className="text-slate-400 text-xs leading-relaxed pt-1">{cert.desc}</p>
                </div>

                {/* Download link */}
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold ${c.text} hover:opacity-75 transition-opacity`}
                >
                  <FiDownload className="w-3.5 h-3.5" /> Download Certificate
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
