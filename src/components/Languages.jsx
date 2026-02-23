import { useEffect, useRef } from 'react';
import Marquee from "react-fast-marquee";
import { FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Languages() {
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  const languages = [
    { name: "Java", icon: FaJava, desc: "Object-oriented programming, data structures" },
    { name: "C++", icon: SiCplusplus, desc: "System programming, algorithms" },
      { name: "Python", icon: FaPython, desc: "Scripting, data analysis, machine learning" },

  ];


  return (
    <section
      id="languages"
      ref={sectionRef}
      className="min-h-[60vh] px-10 py-20 bg-black text-white overflow-hidden"
    >
      <h2
        ref={titleRef}
        className="text-4xl md:text-5xl font-bold mb-10 text-red-400 text-center"
      >
        Programming Languages
      </h2>

      {/* Marquee effect */}
      <Marquee 
      play= {false}
        // gradient={false}
        // speed={40}
        // pauseOnHover={true}
        // className="py-8"
      >
        {[...languages, ...languages, ...languages].map((lang, index) => (
          <div
            key={index}
            className="mx-6 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-red-500/30 rounded-2xl px-8 py-6 flex items-center gap-4 shadow-lg hover:shadow-red-500/40 transition-all group min-w-[350px] hover:scale-105"
            data-testid={index === 0 ? `language-${lang.name.toLowerCase()}` : undefined}
          >
            <div className="transform group-hover:rotate-12 transition-transform duration-300">
              <lang.icon className="text-5xl text-red-400 group-hover:text-red-300 transition-colors" />
            </div>
            <div>
              <p className="text-2xl font-semibold group-hover:text-red-300 transition-colors">{lang.name}</p>
              <p className="text-gray-300 text-sm max-w-xs leading-relaxed">
                {lang.desc}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}