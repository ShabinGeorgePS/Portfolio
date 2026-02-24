import { useEffect, useRef } from 'react';
import { education } from "../data/edu";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(timelineRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.from(card, {
            x: -100,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="min-h-screen px-10 py-20 transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <h2
        ref={titleRef}
        className="text-4xl md:text-5xl font-bold mb-10 text-center transition-colors duration-300"
        style={{ color: "var(--accent)" }}
      >
        Education
      </h2>

      <div
        className="relative border-l-2 ml-3 max-w-4xl mx-auto"
        style={{ borderColor: "var(--accent)" }}
        ref={timelineRef}
      >
        {education.map((edu, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="mb-10 ml-6 relative"
          >
            {/* Timeline dot */}
            <div
              className="w-4 h-4 rounded-full absolute -left-[11px] top-1 animate-pulse"
              style={{ backgroundColor: "var(--accent)" }}
            />

            {/* Card */}
            <div
              className="p-6 rounded-xl border hover:border-red-500/50 transition-all hover:scale-[1.02] hover:translate-x-2 duration-300"
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderColor: "var(--border)",
              }}
            >
              {/* Logo */}
              <img
                src={edu.logo}
                alt={edu.college}
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 hover:rotate-12 hover:scale-110 transition-all duration-300"
                style={{ borderColor: "var(--accent)" }}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
              />

              <h3
                className="text-2xl font-bold transition-colors"
                style={{ color: "var(--accent)" }}
              >
                {edu.degree}
              </h3>
              <p
                className="text-lg transition-colors"
                style={{ color: "var(--text-secondary)" }}
              >
                {edu.college}
              </p>
              <p
                className="font-semibold mt-1 transition-colors"
                style={{ color: "var(--accent)" }}
              >
                {edu.year}
              </p>

              {edu.details && (
                <p
                  className="mt-3 leading-relaxed transition-colors"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {edu.details}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}