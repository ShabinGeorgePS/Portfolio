import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

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
          });
        } else {
          // Scrolling down
          gsap.to(nav, {
            yPercent: -100,
            duration: 0.3,
            ease: "power2.in",
          });
        }
      },
    });

    // Initial entrance animation with GSAP
    const tl = gsap.timeline();
    tl.from(nav, {
      y: -100,
      duration: 0.5,
      ease: "power3.out",
    }).from(
      nav.querySelectorAll("h1, ul li"),
      {
        y: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.3"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <motion.nav
      ref={navRef}
      className="fixed w-full bg-black/30 backdrop-blur-md z-50 shadow-md px-6 py-4 flex justify-between items-center border-b border-red-500/20"
    >
      <motion.h1
        className="text-2xl font-bold text-red-400"
        whileHover={{ scale: 1.05, color: "#ef4444" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Shabin George
      </motion.h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8">
        {links.map((l, index) => (
          <motion.li
            key={l.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.a
              href={l.link}
              className="text-white hover:text-red-400 duration-200 relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              data-testid={`nav-${l.name.toLowerCase()}`}
            >
              {l.name}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <motion.div
        className="md:hidden text-2xl text-white"
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
      >
        {open ? <FaTimes /> : <FaBars />}
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-black/95 backdrop-blur-lg md:hidden border-b border-red-500/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul
              className="flex flex-col items-center py-6 gap-6 text-white"
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
                    className="text-lg hover:text-red-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
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
