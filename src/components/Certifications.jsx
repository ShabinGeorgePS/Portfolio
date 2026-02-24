import { useEffect, useRef } from 'react';
import { FaCertificate, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { resumeData } from '../data/resumeData';

gsap.registerPlugin(ScrollTrigger);

export default function Certifications() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
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

      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="min-h-[50vh] px-6 py-20 transition-colors duration-300"
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
        Certifications
      </h2>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {resumeData.certifications.map((cert, index) => (
          <div
            key={cert.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="border rounded-xl p-6 hover:border-red-400/50 transition-all group hover:shadow-lg"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: "rgba(239,68,68,0.1)" }}
                >
                  <FaCertificate
                    className="text-2xl"
                    style={{ color: "var(--accent)" }}
                  />
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold group-hover:text-red-400 transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {cert.name}
                  </h3>
                  <p
                    className="text-sm mt-1 transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {cert.issuer}
                  </p>
                  <p
                    className="text-xs mt-1 transition-colors"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {cert.date}
                  </p>
                  {cert.description && (
                    <p
                      className="text-sm mt-3 transition-colors"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {cert.description}
                    </p>
                  )}
                  {cert.credentialId && (
                    <p
                      className="text-xs mt-2 transition-colors"
                      style={{ color: "var(--text-tertiary)" }}
                    >
                      Certificate ID: {cert.credentialId}
                    </p>
                  )}
                </div>
              </div>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors text-sm hover:opacity-80"
                  style={{ color: "var(--accent)" }}
                >
                  <FaCheckCircle />
                  <span>Verify</span>
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
