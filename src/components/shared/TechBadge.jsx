import React from "react";

const TechBadge = ({ tech, variant = "outline" }) => {
  const baseClasses = "px-3 py-1 rounded text-sm font-semibold transition-all";

  if (variant === "filled") {
    return (
      <span className={`${baseClasses} bg-red-600 text-white hover:bg-red-700`}>
        {tech}
      </span>
    );
  }

  if (variant === "muted") {
    return (
      <span
        className={`${baseClasses} bg-zinc-800 text-gray-300 hover:text-white border border-zinc-700`}
      >
        {tech}
      </span>
    );
  }

  // default outline
  return (
    <span
      className={`${baseClasses} bg-zinc-900 text-red-400 border border-zinc-700 hover:border-red-500`}
    >
      {tech}
    </span>
  );
};

export default TechBadge;
