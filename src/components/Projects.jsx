import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-10 py-20 bg-black text-white"
    >
      <h2 className="text-4xl font-bold mb-10 text-red-400">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-red-500/20 transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-5"
            />

            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex gap-2 flex-wrap mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-red-400/20 border border-red-400 text-red-300 rounded-md text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-5 text-xl">
              <a
                href={project.github}
                target="_blank"
                className="hover:text-red-400"
              >
                <FaGithub />
              </a>
              <a
                href={project.demo}
                target="_blank"
                className="hover:text-red-400"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
