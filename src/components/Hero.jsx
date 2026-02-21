import { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Robot3D from './Robot3D';
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
          buttonsRef.current.children,
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
      className="h-screen flex items-center px-10 bg-black text-white relative overflow-hidden"
    >
      {/* Animated gradient background with parallax */}
      <div className="hero-bg absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-black"></div>

      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div>
          <h1
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold mb-5"
          >
            Hi, I'm <span className="text-red-500">Shabin George</span>
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
              className="text-red-400 font-semibold"
              repeat={Infinity}
            />
          </div>

          <p
            ref={descRef}
            className="text-lg md:text-xl max-w-xl mb-10 text-gray-300 leading-relaxed"
          >
            A passionate Computer Science Engineer from Sri Krishna College of
            Technology. I build clean, modern, responsive websites and work on Java,
            Spring Boot, Cloud, ML, and Cybersecurity.
          </p>

          <div ref={buttonsRef} className="flex gap-5 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg text-white font-semibold transition-all shadow-lg shadow-red-500/50 hover:shadow-red-500/70 hover:scale-105 relative overflow-hidden group"
              data-testid="view-work-btn"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>

            <a
              href="#about"
              className="px-6 py-3 border-2 border-red-500 hover:bg-red-500 rounded-lg text-white font-semibold transition-all hover:scale-105"
              data-testid="about-me-btn"
            >
              About Me
            </a>
          </div>
        </div>

        {/* Right - 3D Robot */}
        <div className="h-[500px] w-full hidden md:block">
          <Robot3D />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <div className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
