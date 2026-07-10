import { motion } from "framer-motion";
import { FiGithub, FiMail, FiPhone, FiLinkedin } from "react-icons/fi";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import SihamImage from "../assets/sihamimage.png";

const contactLinks = [
  {
    icon: <FiMail />,
    label: "Email",
    value: "sihamkalach3@gmail.com",
    href: "mailto:sihamkalach3@gmail.com",
    color: "blue",
  },
  {
    icon: <FiLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/sihamkalach",
    href: "https://www.linkedin.com/in/sihamkalach",
    color: "blue",
  },
  {
    icon: <FiGithub />,
    label: "GitHub",
    value: "github.com/sihamkalach",
    href: "https://github.com/sihamkalach",
    color: "violet",
  },
  {
    icon: <FaYoutube />,
    label: "YouTube",
    value: "@sihamkalach · Tech tutorials & projects",
    href: "https://www.youtube.com/@sihamkalach",
    color: "red",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    value: "@siham_kalach · Tech · Business · Branding · Dev",
    href: "https://www.instagram.com/siham_kalach/",
    color: "pink",
  },
  {
    icon: <FiPhone />,
    label: "Phone",
    value: "+212 720 498 527",
    href: "tel:+212720498527",
    color: "emerald",
  },
];

const colorMap = {
  blue:    "bg-blue-500/8 border-blue-500/20 text-blue-400",
  violet:  "bg-violet-500/8 border-violet-500/20 text-violet-400",
  red:     "bg-red-500/8 border-red-500/20 text-red-400",
  pink:    "bg-gradient-to-r from-pink-500/8 to-orange-500/8 border-pink-500/20 text-pink-400",
  emerald: "bg-emerald-500/8 border-emerald-500/20 text-emerald-400",
  cyan:    "bg-cyan-500/8 border-cyan-500/20 text-cyan-400",
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3 mb-16"
        >
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">Let's Connect</h2>
          <p className="text-slate-400 max-w-lg mx-auto text-base">
            Open to new opportunities, collaborations, and interesting projects.
            Feel free to reach out anytime!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {contactLinks.map((link, idx) => {
              const c = colorMap[link.color];
              const Tag = link.href ? "a" : "div";
              const extraProps = link.href
                ? {
                    href: link.href,
                    target: link.href.startsWith("mailto") || link.href.startsWith("tel") ? undefined : "_blank",
                    rel: "noopener noreferrer",
                  }
                : {};

              return (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07 }}
                >
                  <Tag
                    {...extraProps}
                    className={`flex items-center gap-4 p-4 rounded-xl border ${c} ${link.href ? "hover:opacity-80 transition-opacity cursor-pointer" : ""}`}
                  >
                    <span className="text-xl flex-shrink-0">{link.icon}</span>
                    <div>
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-0.5">
                        {link.label}
                      </p>
                      <p className="text-white text-sm font-medium">{link.value}</p>
                    </div>
                  </Tag>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Portrait image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/20 to-violet-500/15 blur-3xl scale-110" />
              <div className="relative rounded-3xl overflow-hidden border border-white/8 shadow-2xl">
                <img
                  src={SihamImage}
                  alt="Siham Kalach"
                  className="w-72 md:w-[380px] object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
