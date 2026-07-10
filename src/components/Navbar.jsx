import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "../assets/profile.png";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ active, onNav }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNav("home")}
            className="flex items-center gap-3 group"
          >
            <div className="relative h-9 w-9 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
              <img
                src={profile}
                alt="Siham Kalach"
                className="relative h-full w-full rounded-full object-cover ring-2 ring-blue-500/30"
              />
            </div>
            <span className="font-bold text-white tracking-tight text-sm hidden sm:inline">
              Siham Kalach
            </span>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-0.5 text-sm font-medium">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => onNav(s.id)}
                  className={`relative px-3 py-1.5 rounded-lg transition-colors duration-200 ${
                    active === s.id ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {active === s.id && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-lg bg-white/10"
                      transition={{ type: "spring", duration: 0.45, bounce: 0.2 }}
                    />
                  )}
                  <span className="relative">{s.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M6 6L18 18M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-4 grid gap-1">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { onNav(s.id); setOpen(false); }}
                    className={`w-full rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                      active === s.id
                        ? "bg-blue-500/15 text-blue-300"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
