import { useEffect, useRef } from "react";
import { projects } from "../data/projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Filter featured projects or show all
  const displayedProjects = projects.filter((p) => p.featured !== false);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen px-4 sm:px-10 py-20 bg-black text-white"
    >
      <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-12 text-red-400 text-center">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
