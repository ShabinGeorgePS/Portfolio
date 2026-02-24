import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for scroll-triggered animations with GSAP
 */
export const useScrollAnimation = (fromVars = {}, toVars = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const defaultFromVars = {
      opacity: 0,
      y: 30,
      ...fromVars,
    };

    const defaultToVars = {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true,
      },
      ...toVars,
    };

    const ctx = gsap.context(() => {
      gsap.fromTo(elementRef.current, defaultFromVars, defaultToVars);
    });

    return () => ctx.revert();
  }, []);

  return elementRef;
};

/**
 * Custom hook for staggered scroll animations
 */
export const useStaggerAnimation = (childSelector, staggerDelay = 0.1) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const children = containerRef.current.querySelectorAll(childSelector);
    if (children.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: staggerDelay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [childSelector, staggerDelay]);

  return containerRef;
};

/**
 * Custom hook for parallax effect on scroll
 */
export const useParallax = (offset = -50) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(elementRef.current, {
        y: offset,
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, [offset]);

  return elementRef;
};
