import { useEffect, useRef } from "react";

/**
 * Custom hook for lazy loading elements with Intersection Observer
 * @param {object} options - Intersection Observer options
 * @returns {object} ref to attach to element and loading state
 */
export const useLazyLoad = (options = {}) => {
  const elementRef = useRef(null);
  const defaultOptions = {
    root: null,
    rootMargin: "50px",
    threshold: 0.01,
    ...options,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;

          // If it's an image, load the src
          if (element.tagName === "IMG" && element.dataset.src) {
            element.src = element.dataset.src;
            element.classList.remove("opacity-0");
            element.classList.add("opacity-100");
          }

          // Add visible class for other elements
          element.classList.add("visible");
          observer.unobserve(element);
        }
      });
    }, defaultOptions);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      observer.disconnect();
    };
  }, [defaultOptions]);

  return elementRef;
};
