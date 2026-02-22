import { useEffect, useRef } from "react";
import { FaEnvelope, FaFileDownload } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from "./ContactForm";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const cardsRef = useRef([]);
  const formRef = useRef(null);

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

      // Description
      gsap.from(descRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Cards stagger animation
      gsap.from(cardsRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Form animation
      gsap.from(formRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="px-4 sm:px-10 py-20 bg-gradient-to-b from-black to-gray-900 text-white relative"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-red-400 mb-6 text-center">
          Let's Connect
        </h2>

        <p ref={descRef} className="text-gray-300 max-w-2xl mx-auto text-center text-lg mb-12">
          Have a question or want to work together? Feel free to reach out or download my resume.
        </p>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email Card */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 rounded-xl border border-red-500/30 hover:border-red-500/60 transition-all group hover:scale-[1.03] hover:-translate-y-1 duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <FaEnvelope className="text-2xl text-red-400 group-hover:scale-110 transition-transform" />
              <p className="text-sm uppercase tracking-wide text-gray-400">Email</p>
            </div>
            <a
              href="mailto:shabingeorge6705@gmail.com"
              className="text-lg text-red-400 hover:text-red-300 transition-colors break-all"
            >
              shabingeorge6705@gmail.com
            </a>
          </div>

          {/* Resume Card */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 rounded-xl border border-red-500/30 hover:border-red-500/60 transition-all group hover:scale-[1.03] hover:-translate-y-1 duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <FaFileDownload className="text-2xl text-red-400 group-hover:scale-110 transition-transform" />
              <p className="text-sm uppercase tracking-wide text-gray-400">Resume</p>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition-all shadow-lg shadow-red-500/30 hover:scale-105 active:scale-95"
            >
              View Resume (PDF)
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div
          ref={formRef}
          className="mb-12 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 p-8 rounded-xl border border-zinc-800"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Send Me a Message</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}