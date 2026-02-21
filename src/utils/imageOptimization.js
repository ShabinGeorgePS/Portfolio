/**
 * Generate optimized image URL with dimensions and quality
 * @param {string} url - Original image URL
 * @param {number} width - Target width in pixels
 * @param {number} height - Target height in pixels
 * @param {number} quality - Quality from 1-100
 * @returns {string} Optimized URL
 */
export const getOptimizedImageUrl = (
  url,
  width = 600,
  height = 400,
  quality = 80
) => {
  if (!url) return "";

  // For placeholder URLs, return as-is
  if (url.includes("placeholder")) {
    return url;
  }

  // If it's a data URL, return as-is
  if (url.startsWith("data:")) {
    return url;
  }

  // For other URLs, append optimization params if supported
  // This is a basic implementation - adjust based on your image service
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}w=${width}&h=${height}&q=${quality}&auto=format`;
};

/**
 * Generate srcset string for responsive images
 * @param {string} baseUrl - Base image URL
 * @returns {string} srcset attribute value
 */
export const generateSrcSet = (baseUrl) => {
  if (!baseUrl) return "";

  const sizes = [320, 640, 960, 1280];
  return sizes
    .map((size) => `${getOptimizedImageUrl(baseUrl, size, (size * 2) / 3)} ${size}w`)
    .join(", ");
};

/**
 * Generate sizes attribute for responsive images
 * @returns {string} sizes attribute value
 */
export const generateSizes = () => {
  return "(max-width: 640px) 320px, (max-width: 768px) 640px, (max-width: 1024px) 960px, 1280px";
};

/**
 * Check if image is properly sized for responsiveness
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @returns {boolean} True if aspect ratio is reasonable
 */
export const isValidImageAspectRatio = (width, height) => {
  if (!width || !height) return true; // Skip validation for unknown dimensions

  const ratio = width / height;
  // Allow aspect ratios between 0.5 and 2.0
  return ratio >= 0.5 && ratio <= 2.0;
};

/**
 * Get image placeholder while loading
 * @param {string} type - 'skeleton' or 'error'
 * @returns {string} CSS classes for placeholder
 */
export const getImagePlaceholder = (type = "skeleton") => {
  if (type === "error") {
    return "bg-red-900 flex items-center justify-center";
  }
  return "bg-gradient-to-r from-gray-900 to-zinc-800 animate-pulse flex items-center justify-center";
};

/**
 * Lazy load images using Intersection Observer
 * @param {HTMLImageElement} img - Image element
 * @returns {Promise} Resolves when image loads
 */
export const lazyLoadImage = (img) => {
  return new Promise((resolve, reject) => {
    if (!img) {
      reject("Image element not provided");
      return;
    }

    if (!("IntersectionObserver" in window)) {
      // Fallback for browsers without IntersectionObserver
      img.src = img.dataset.src;
      resolve();
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;

          img.onload = () => {
            img.classList.remove("opacity-0");
            img.classList.add("opacity-100");
            observer.unobserve(img);
            resolve();
          };

          img.onerror = () => {
            observer.unobserve(img);
            reject("Failed to load image");
          };
        }
      });
    });

    observer.observe(img);
  });
};

/**
 * Preload image for better performance
 * @param {string} url - Image URL
 * @returns {Promise} Resolves when image is loaded
 */
export const preloadImage = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(url);
    img.onerror = () => reject(url);
    img.src = url;
  });
};

/**
 * Get image dimensions from URL
 * @param {string} url - Image URL
 * @returns {Promise} Resolves with {width, height}
 */
export const getImageDimensions = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    img.onerror = () => {
      reject("Failed to load image");
    };
    img.src = url;
  });
};
