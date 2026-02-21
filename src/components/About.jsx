import { useEffect, useRef } from 'react';
import profile from "../assets/shabin.jpeg";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with ScrollTrigger
      gsap.fromTo(titleRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        }
      );

      // Image animation
      gsap.fromTo(imageRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Content stagger animation
      gsap.fromTo(contentRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Parallax effect for background
      gsap.to(".about-bg", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex flex-col md:flex-row items-center gap-10 px-10 py-20 relative overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* Animated background gradient */}
      <div
        className="about-bg absolute inset-0 opacity-50"
        style={{
          background: "linear-gradient(to bottom right, var(--bg-secondary), var(--bg-secondary), var(--bg-primary))",
        }}
      ></div>

      {/* Left Image */}
      <div ref={imageRef} className="relative z-10">
        <div className="relative group cursor-pointer">
          <div
            className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all"
            style={{
              backgroundColor: "var(--accent)",
              opacity: 0.2,
            }}
          ></div>
          <img
            src={profile}
            alt="Shabin George"
            className="w-60 h-60 rounded-2xl object-cover shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-300"
            style={{
              borderColor: "var(--accent)",
              borderWidth: "2px",
              borderOpacity: 0.3,
            }}
          />
        </div>
      </div>

      {/* Right Content */}
      <div ref={contentRef} className="relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-5"
          style={{ color: "var(--accent)" }}
        >
          About Me
        </h2>
        <p
          className="max-w-2xl leading-relaxed text-lg transition-colors duration-300"
          style={{ color: "var(--text-secondary)" }}
        >
          I'm <span style={{ color: "var(--accent)", fontWeight: "600" }}>Shabin George</span>,
          a 3rd year Computer Science Engineering student at Sri Krishna College of
          Technology. I enjoy building full-stack web applications, solving
          complex problems, and exploring cloud, machine learning, and
          cybersecurity.
        </p>

        <p
          className="mt-5 max-w-2xl leading-relaxed text-lg transition-colors duration-300"
          style={{ color: "var(--text-secondary)" }}
        >
          I have hands-on experience with Java, Spring Boot, REST APIs, React,
          MySQL, Docker, and DevOps tools. I'm always learning and creating new
          things to grow as a developer.
        </p>
      </div>
    </section>
  );
}
