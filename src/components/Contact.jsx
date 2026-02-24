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
          toggleActions: "play none none none",
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
          toggleActions: "play none none none",
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
          toggleActions: "play none none none",
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
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="px-4 sm:px-10 py-20 relative transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-6 text-center transition-colors duration-300"
          style={{ color: "var(--accent)" }}
        >
          Let's Connect
        </h2>

        <p
          ref={descRef}
          className="max-w-2xl mx-auto text-center text-lg mb-12 transition-colors duration-300"
          style={{ color: "var(--text-secondary)" }}
        >
          Have a question or want to work together? Feel free to reach out or download my resume.
        </p>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email Card */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="p-6 rounded-xl border hover:border-red-500/60 transition-all group hover:scale-[1.03] hover:-translate-y-1 duration-300"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <FaEnvelope
                className="text-2xl group-hover:scale-110 transition-transform"
                style={{ color: "var(--accent)" }}
              />
              <p
                className="text-sm uppercase tracking-wide"
                style={{ color: "var(--text-tertiary)" }}
              >
                Email
              </p>
            </div>
            <a
              href="mailto:shabingeorge6705@gmail.com"
              className="text-lg transition-colors hover:opacity-80 break-all"
              style={{ color: "var(--accent)" }}
            >
              shabingeorge6705@gmail.com
            </a>
          </div>

          {/* Resume Card */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="p-6 rounded-xl border hover:border-red-500/60 transition-all group hover:scale-[1.03] hover:-translate-y-1 duration-300"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <FaFileDownload
                className="text-2xl group-hover:scale-110 transition-transform"
                style={{ color: "var(--accent)" }}
              />
              <p
                className="text-sm uppercase tracking-wide"
                style={{ color: "var(--text-tertiary)" }}
              >
                Resume
              </p>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-all shadow-lg shadow-red-500/30 hover:scale-105 active:scale-95"
            >
              View Resume (PDF)
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div
          ref={formRef}
          className="mb-12 p-8 rounded-xl border transition-colors duration-300"
          style={{
            backgroundColor: "var(--bg-secondary)",
            borderColor: "var(--border)",
          }}
        >
          <h3
            className="text-2xl font-bold mb-6 text-center transition-colors duration-300"
            style={{ color: "var(--text-primary)" }}
          >
            Send Me a Message
          </h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}