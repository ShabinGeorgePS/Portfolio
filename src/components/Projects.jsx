import { useEffect, useRef } from 'react';
import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
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

      //Project cards stagger animation
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Parallax effect for project images
        const img = card.querySelector('img');
        if (img) {
          gsap.to(img, {
            yPercent: -20,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen px-10 py-20 bg-black text-white"
    >
      <h2
        ref={titleRef}
        className="text-4xl md:text-5xl font-bold mb-10 text-red-400 text-center"
      >
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={project.title}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl shadow-2xl overflow-hidden border border-zinc-800 hover:border-red-500/50 transition-all group hover:scale-[1.03] hover:-translate-y-2 duration-300"
            data-testid={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-red-400 group-hover:text-red-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex gap-2 flex-wrap mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-red-400/20 border border-red-400/50 text-red-300 rounded-md text-sm font-medium hover:bg-red-400/30 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-5 text-xl">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition-all hover:scale-125 hover:rotate-6"
                  data-testid={`project-github-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <FaGithub />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition-all hover:scale-125 hover:-rotate-6"
                  data-testid={`project-demo-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
