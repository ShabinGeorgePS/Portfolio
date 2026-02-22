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
          toggleActions: "play none none reverse",
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
            toggleActions: "play none none reverse",
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
      className="min-h-[50vh] px-6 py-20 bg-gray-900 text-white"
    >
      <h2
        ref={titleRef}
        className="text-4xl md:text-5xl font-bold mb-10 text-red-400 text-center"
      >
        Certifications
      </h2>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {resumeData.certifications.map((cert, index) => (
          <div
            key={cert.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-zinc-900/80 border border-red-400/20 rounded-xl p-6 hover:border-red-400/50 transition-all group hover:shadow-lg hover:shadow-red-400/10"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="bg-red-400/10 p-3 rounded-lg">
                  <FaCertificate className="text-2xl text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs mt-1">{cert.date}</p>
                  {cert.description && (
                    <p className="text-gray-400 text-sm mt-3">{cert.description}</p>
                  )}
                  {cert.credentialId && (
                    <p className="text-gray-500 text-xs mt-2">
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
                  className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm"
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
