import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../hooks/useTheme.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  const links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Languages", link: "#languages" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const nav = navRef.current;

    const ctx = gsap.context(() => {
      // Navbar hide/show on scroll
      ScrollTrigger.create({
        start: "top -80",
        end: 99999,
        onUpdate: (self) => {
          if (self.direction === -1) {
            // Scrolling up
            gsap.to(nav, {
              yPercent: 0,
              duration: 0.3,
              ease: "power2.out",
              overwrite: "auto"
            });
          } else {
            // Scrolling down
            gsap.to(nav, {
              yPercent: -100,
              duration: 0.3,
              ease: "power2.in",
              overwrite: "auto"
            });
          }
        },
      });

      // Initial entrance animation with GSAP
      const tl = gsap.timeline();
      tl.fromTo(nav,
        { y: -100 },
        {
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        }
      ).fromTo(
        nav.querySelectorAll("h1, ul li"),
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.nav
      ref={navRef}
      className="fixed w-full backdrop-blur-md z-50 shadow-md px-6 py-4 flex justify-between items-center border-b transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border-color)",
      }}
    >
      <motion.h1
        className="text-2xl font-bold transition-colors duration-300"
        style={{ color: "var(--accent)" }}
        whileHover={{ scale: 1.05, color: "var(--accent-light)" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Shabin George
      </motion.h1>

      {/* Desktop Menu + Theme Toggle */}
      <div className="hidden md:flex gap-6 items-center">
        <ul className="flex gap-8">
          {links.map((l, index) => (
            <motion.li
              key={l.name}
            >
              <motion.a
                href={l.link}
                className="transition-colors duration-200 relative"
                style={{ color: "var(--text-primary)" }}
                whileHover={{ scale: 1.1, color: "var(--accent)" }}
                whileTap={{ scale: 0.95 }}
                data-testid={`nav-${l.name.toLowerCase()}`}
              >
                {l.name}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 transition-colors duration-200"
                  style={{ backgroundColor: "var(--accent)" }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <motion.button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-lg transition-colors duration-300 border"
          style={{
            backgroundColor: "var(--bg-secondary)",
            borderColor: "var(--accent)",
            color: "var(--accent)",
          }}
          whileHover={{ scale: 1.1, backgroundColor: "var(--accent)", color: "var(--bg-primary)" }}
          whileTap={{ scale: 0.95 }}
          data-testid="theme-toggle-btn"
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
        </motion.button>
      </div>

      {/* Mobile Menu Icon + Theme Toggle */}
      <div className="md:hidden flex items-center gap-4">
        {/* Mobile Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          className="p-2 rounded-lg transition-colors duration-300 border"
          style={{
            backgroundColor: "var(--bg-secondary)",
            borderColor: "var(--accent)",
            color: "var(--accent)",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          data-testid="theme-toggle-btn-mobile"
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
        </motion.button>

        <motion.div
          className="text-2xl transition-colors duration-300"
          style={{ color: "var(--text-primary)" }}
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
        >
          {open ? <FaTimes /> : <FaBars />}
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-16 left-0 w-full backdrop-blur-lg md:hidden border-b transition-colors duration-300"
            style={{
              backgroundColor: "var(--bg-primary)",
              borderColor: "var(--border-color)",
            }}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul
              className="flex flex-col items-center py-6 gap-6 transition-colors duration-300"
              style={{ color: "var(--text-primary)" }}
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {links.map((l) => (
                <motion.li
                  key={l.name}
                  variants={{
                    open: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        y: { stiffness: 1000, velocity: -100 },
                      },
                    },
                    closed: {
                      y: 50,
                      opacity: 0,
                      transition: {
                        y: { stiffness: 1000 },
                      },
                    },
                  }}
                >
                  <motion.a
                    href={l.link}
                    onClick={() => setOpen(false)}
                    className="text-lg transition-colors duration-200"
                    style={{ color: "var(--text-primary)" }}
                    whileHover={{ scale: 1.1, color: "var(--accent)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {l.name}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
