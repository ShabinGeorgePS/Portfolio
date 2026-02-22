import React, { useState } from "react";
import { useLazyLoad } from "../hooks/useLazyLoad";
import { getImagePlaceholder } from "../utils/imageOptimization";

const LazyImage = ({
  src,
  alt = "Image",
  className = "",
  width = 600,
  height = 400,
  lazyLoad = true,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useLazyLoad();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const placeholderClasses = getImagePlaceholder(
    imageError ? "error" : "skeleton"
  );

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/Loader */}
      {!imageLoaded && !imageError && (
        <div
          className={`absolute inset-0 ${placeholderClasses} animate-pulse`}
          style={{ aspectRatio: width / height }}
        />
      )}

      {/* Error State */}
      {imageError && (
        <div className={`absolute inset-0 ${getImagePlaceholder("error")} flex items-center justify-center`}>
          <span className="text-gray-400 text-sm">Failed to load image</span>
        </div>
      )}

      {/* Image */}
      <img
        ref={imgRef}
        src={lazyLoad ? undefined : src}
        data-src={lazyLoad ? src : undefined}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading={lazyLoad ? "lazy" : "eager"}
        decoding="async"
        referrerPolicy="no-referrer"
        crossOrigin="anonymous"
      />
    </div>
  );
};

export default LazyImage;
