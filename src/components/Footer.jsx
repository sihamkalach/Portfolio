import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import profile from "../assets/profile.png";

const socials = [
  { href: "https://github.com/sihamkalach",             icon: <FiGithub />,     label: "GitHub" },
  { href: "https://www.linkedin.com/in/sihamkalach",     icon: <FiLinkedin />,   label: "LinkedIn" },
  { href: "https://www.youtube.com/@sihamkalach",        icon: <FaYoutube />,    label: "YouTube" },
  { href: "https://www.instagram.com/siham_kalach/",     icon: <FaInstagram />,  label: "Instagram" },
  { href: "mailto:sihamkalach3@gmail.com",               icon: <FiMail />,       label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/80 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="relative h-7 w-7 flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/50 to-cyan-400/50 blur-md" />
            <img
              src={profile}
              alt="Siham Kalach"
              className="relative h-full w-full rounded-full object-cover ring-1 ring-white/20"
            />
          </div>
          <span className="text-white font-semibold text-sm">Siham Kalach</span>
          <span className="text-slate-600 text-xs hidden sm:inline">
            · Digital Transformation & AI Engineer
          </span>
        </div>

        {/* Copyright */}
        <p className="text-slate-600 text-xs order-last sm:order-none">
          © {new Date().getFullYear()} Siham Kalach. All rights reserved.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-1">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
