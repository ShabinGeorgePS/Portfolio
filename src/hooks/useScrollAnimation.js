import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for scroll-triggered animations with GSAP
 * @param {object} fromVars - GSAP from animation variables
 * @param {object} toVars - GSAP to animation variables (includes animation properties)
 * @returns {object} ref to attach to element
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
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      ...toVars,
    };

    const ctx = gsap.context(() => {
      gsap.fromTo(elementRef.current, defaultFromVars, defaultToVars);
    });

    return () => ctx.revert();
  }, [fromVars, toVars]);

  return elementRef;
};

/**
 * Custom hook for staggered scroll animations
 * @param {string} childSelector - CSS selector for child elements to stagger
 * @param {number} staggerDelay - Delay between each element animation
 * @returns {object} ref to attach to container element
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
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: staggerDelay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
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
 * @param {number} offset - Parallax offset amount (default -50)
 * @returns {object} ref to attach to element
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
          markers: false,
        },
      });
    });

    return () => ctx.revert();
  }, [offset]);

  return elementRef;
};
