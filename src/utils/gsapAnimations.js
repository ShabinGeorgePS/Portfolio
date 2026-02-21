import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade in animation on scroll
 * @param {HTMLElement} element - The element to animate
 * @param {number} duration - Animation duration
 */
export const fadeInOnScroll = (element, duration = 0.8) => {
  if (!element) return;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

/**
 * Staggered animation on scroll for multiple elements
 * @param {HTMLElement} container - Container with child elements
 * @param {string} childSelector - CSS selector for child elements
 * @param {number} staggerDelay - Delay between each element
 */
export const staggerAnimationOnScroll = (
  container,
  childSelector,
  staggerDelay = 0.1
) => {
  if (!container) return;

  const children = container.querySelectorAll(childSelector);

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
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

/**
 * Parallax effect for background
 * @param {HTMLElement} element - The element to apply parallax
 * @param {number} offset - Parallax offset amount
 */
export const parallaxEffect = (element, offset = -50) => {
  if (!element) return;

  gsap.to(element, {
    y: offset,
    scrollTrigger: {
      trigger: element,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      markers: false,
    },
  });
};

/**
 * Scale hover effect
 * @param {HTMLElement} element - The element to animate
 * @param {number} scale - Scale amount
 */
export const hoverScaleEffect = (element, scale = 1.05) => {
  if (!element) return;

  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      scale,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });
};

/**
 * Scroll progress animation
 * @param {HTMLElement} element - Progress bar element
 */
export const scrollProgressAnimation = (element) => {
  if (!element) return;

  gsap.to(element, {
    scaleX: 1,
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      markers: false,
    },
  });
};

/**
 * Text title animation (slight delay with fade)
 * @param {HTMLElement} element - Title element
 */
export const titleAnimation = (element) => {
  if (!element) return;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
};

/**
 * Create a reusable scroll trigger setup
 * @param {HTMLElement} element - Element to trigger animation
 * @param {object} fromVars - GSAP from animation variables
 * @param {object} toVars - GSAP to animation variables
 */
export const createScrollAnimation = (element, fromVars, toVars) => {
  if (!element) return;

  gsap.fromTo(element, fromVars, {
    ...toVars,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });
};
