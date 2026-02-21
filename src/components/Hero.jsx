import { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import SkillsShowcase from './SkillsShowcase';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP timeline for entrance animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
      })
        .from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          descRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ".hero-btn",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
          },
          "-=0.4"
        );

      // Parallax effect for background
      gsap.to(".hero-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Floating animation for scroll indicator
      gsap.to(scrollRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
      className="h-screen flex items-center px-4 sm:px-10 relative overflow-hidden transition-colors duration-300"
    >
      {/* Animated gradient background with parallax */}
      <div
        className="hero-bg absolute inset-0"
        style={{
          background: "linear-gradient(to bottom right, rgba(220, 38, 38, 0.1), transparent, var(--bg-primary))",
        }}
      ></div>

      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div>
          <h1
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold mb-5"
          >
            Hi, I'm <span style={{ color: "var(--accent)" }}>Shabin George</span>
          </h1>

          <div ref={subtitleRef} className="text-2xl md:text-3xl mb-6 h-20">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Java & Spring Boot Expert',
                2000,
                'Cloud Enthusiast',
                2000,
                'ML & AI Explorer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="font-semibold transition-colors duration-300"
              style={{ color: "var(--accent-light)" }}
              repeat={Infinity}
            />
          </div>

          <p
            ref={descRef}
            className="text-lg md:text-xl max-w-xl mb-10 leading-relaxed transition-colors duration-300"
            style={{ color: "var(--text-secondary)" }}
          >
            A passionate Computer Science Engineer from Sri Krishna College of
            Technology. I build clean, modern, responsive websites and work on Java,
            Spring Boot, Cloud, ML, and Cybersecurity.
          </p>

          <div ref={buttonsRef} className="flex gap-5 flex-wrap">
            <a
              href="#projects"
              className="hero-btn px-6 py-3 rounded-lg text-white font-semibold transition-all shadow-lg hover:scale-105 relative overflow-hidden group"
              style={{
                backgroundColor: "var(--accent)",
              }}
              data-testid="view-work-btn"
            >
              <span className="relative z-10">View My Work</span>
              <div
                className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                style={{ backgroundColor: "var(--accent-dark)" }}
              ></div>
            </a>

            <a
              href="#about"
              className="hero-btn px-6 py-3 rounded-lg text-white font-semibold transition-all hover:scale-105"
              style={{
                borderWidth: "2px",
                borderColor: "var(--accent)",
                backgroundColor: "transparent",
              }}
              data-testid="about-me-btn"
            >
              About Me
            </a>
          </div>
        </div>

        {/* Right - Skills Showcase */}
        <div className="hidden md:block">
          <SkillsShowcase />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <div
          className="w-6 h-10 rounded-full flex justify-center transition-colors duration-300"
          style={{
            borderWidth: "2px",
            borderColor: "var(--accent)",
          }}
        >
          <div
            className="w-1 h-3 rounded-full mt-2 transition-colors duration-300"
            style={{ backgroundColor: "var(--accent)" }}
          ></div>
        </div>
      </div>
    </section>
  );
}
