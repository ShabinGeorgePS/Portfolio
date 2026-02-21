import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const SectionTitle = ({ title, subtitle, centered = true }) => {
  const titleRef = useScrollAnimation(
    { opacity: 0, y: -30 },
    { opacity: 1, y: 0, duration: 0.8 }
  );

  const baseClasses = "font-bold text-red-400";
  const layoutClasses = centered ? "text-center" : "text-left";

  return (
    <div ref={titleRef}>
      <h2 className={`text-4xl md:text-5xl ${baseClasses} ${layoutClasses}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-gray-400 text-lg mt-3 ${layoutClasses}`}>{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;