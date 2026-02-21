import { useEffect, useRef } from 'react';
import { FaCertificate } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Certifications() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

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

      gsap.from(contentRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="min-h-[50vh] px-10 py-20 bg-gray-900 text-white"
    >
      <h2
        ref={titleRef}
        className="text-4xl md:text-5xl font-bold mb-10 text-red-400 text-center"
      >
        Certifications
      </h2>
      <div
        ref={contentRef}
        className="flex flex-col justify-center items-center h-40 border-2 border-dashed border-red-400/30 rounded-xl bg-zinc-900/50 max-w-4xl mx-auto hover:border-red-400/60 transition-all cursor-pointer group"
      >
        <FaCertificate className="text-4xl text-red-400/50 mb-3 group-hover:text-red-400 transition-colors group-hover:scale-110 transition-transform" />
        <p className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors">
          Certifications will be added here.
        </p>
      </div>
    </section>
  );
}