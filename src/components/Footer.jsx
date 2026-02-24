import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { socialLinks } from "../data/social";

export default function Footer() {
  const footerRef = useRef(null);
  const socialsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (socialsRef.current) {
        gsap.from(socialsRef.current.children, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      className="border-t py-8 px-4 sm:px-10 transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8">
          {/* Social Links */}
          <div ref={socialsRef} className="flex justify-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-full border hover:bg-red-500 hover:border-red-500 transition-all hover:scale-125 hover:rotate-12 active:scale-95 ${social.color}`}
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border)",
                  }}
                  title={social.label}
                >
                  <Icon className="text-lg" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t my-6"
          style={{ borderColor: "var(--border)" }}
        />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p
            className="text-sm transition-colors"
            style={{ color: "var(--text-tertiary)" }}
          >
            © {currentYear} Shabin George. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
