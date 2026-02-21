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
      className="group relative bg-zinc-900 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 border border-zinc-800 hover:border-red-500/50"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-900 to-zinc-800 flex items-center justify-center">
        <img
          src={project.image}
          alt={project.imageAlt || project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
            {project.category}
          </span>
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 h-10">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-zinc-800 text-red-400 text-xs px-2 py-1 rounded border border-zinc-700 hover:border-red-500 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features (truncated) */}
        {project.features && project.features.length > 0 && (
          <div className="mb-4 text-xs text-gray-400">
            <p className="font-semibold text-gray-300 mb-1">Key Features:</p>
            <ul className="list-disc list-inside space-y-0.5">
              {project.features.slice(0, 2).map((feature) => (
                <li key={feature} className="text-gray-500 line-clamp-1">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-zinc-800">
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
              className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white py-2 rounded border border-zinc-700 transition-colors text-sm font-semibold"
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
