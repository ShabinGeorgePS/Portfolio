import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ProjectCard = ({ project }) => {
  const cardRef = useScrollAnimation(
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8 }
  );

  return (
    <div
      ref={cardRef}
      className="group relative rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 border hover:border-red-500/50"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border)",
      }}
    >
      {/* Image Container */}
      <div
        className="relative overflow-hidden h-48 flex items-center justify-center"
        style={{ backgroundColor: "var(--bg-tertiary)" }}
      >
        <img
          src={project.image}
          alt={project.imageAlt || project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
            {project.category}
          </span>
        </div>

        {/* Overlay Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3
          className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors"
          style={{ color: "var(--text-primary)" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm mb-4 line-clamp-2 h-10 transition-colors"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded border hover:border-red-500 transition-colors"
              style={{
                backgroundColor: "var(--bg-tertiary)",
                color: "var(--accent)",
                borderColor: "var(--border)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features (truncated) */}
        {project.features && project.features.length > 0 && (
          <div className="mb-4 text-xs">
            <p
              className="font-semibold mb-1 transition-colors"
              style={{ color: "var(--text-secondary)" }}
            >
              Key Features:
            </p>
            <ul className="list-disc list-inside space-y-0.5">
              {project.features.slice(0, 2).map((feature) => (
                <li
                  key={feature}
                  className="line-clamp-1 transition-colors"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        <div
          className="flex gap-3 pt-4 border-t transition-colors"
          style={{ borderColor: "var(--border)" }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded transition-colors text-sm font-semibold"
          >
            <FaGithub className="w-4 h-4" />
            Code
          </a>
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 text-white py-2 rounded border transition-colors text-sm font-semibold"
              style={{
                backgroundColor: "var(--bg-tertiary)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
