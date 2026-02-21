import { useEffect, useRef } from 'react';
import Marquee from "react-fast-marquee";
import { skills } from "../data/skills";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

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
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split skills into two rows for dual marquee effect
  const midpoint = Math.ceil(skills.length / 2);
  const firstRow = skills.slice(0, midpoint);
  const secondRow = skills.slice(midpoint);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen px-10 py-20 relative overflow-hidden transition-colors duration-300"
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
        Skills & Technologies
      </h2>

      <div className="space-y-8">
        {/* First marquee row (left to right) */}
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {[...firstRow, ...firstRow].map((skill, index) => (
            <div
              key={index}
              className="mx-4 p-6 rounded-xl flex flex-col items-center justify-center gap-3 shadow-lg hover:scale-110 transition-all group min-w-[140px]"
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderColor: "var(--accent)",
                borderWidth: "1px",
                borderOpacity: 0.3,
              }}
              data-testid={index === 0 ? `skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}` : undefined}
            >
              <div className="transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                <skill.icon
                  className="text-5xl transition-colors"
                  style={{ color: "var(--accent)" }}
                />
              </div>
              <p
                className="text-base font-semibold text-center transition-colors"
                style={{ color: "var(--text-primary)" }}
              >
                {skill.name}
              </p>
            </div>
          ))}
        </Marquee>

        {/* Second marquee row (right to left) */}
        <Marquee gradient={false} speed={50} direction="right" pauseOnHover={true}>
          {[...secondRow, ...secondRow].map((skill, index) => (
            <div
              key={index}
              className="mx-4 p-6 rounded-xl flex flex-col items-center justify-center gap-3 shadow-lg hover:scale-110 transition-all group min-w-[140px]"
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderColor: "var(--accent)",
                borderWidth: "1px",
                borderOpacity: 0.3,
              }}
            >
              <div className="transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                <skill.icon
                  className="text-5xl transition-colors"
                  style={{ color: "var(--accent)" }}
                />
              </div>
              <p
                className="text-base font-semibold text-center transition-colors"
                style={{ color: "var(--text-primary)" }}
              >
                {skill.name}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
