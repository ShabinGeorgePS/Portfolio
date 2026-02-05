import { education } from "../data/edu";

export default function Education() {
  return (
    <section id="education" className="min-h-screen px-10 py-20 bg-black text-white">
      <h2 className="text-4xl font-bold mb-10 text-red-400">Education</h2>

      <div className="border-l-2 border-red-400 ml-3">
        {education.map((edu, index) => (
          <div key={index} className="mb-10 ml-6 relative">
            <div className="w-4 h-4 bg-red-400 rounded-full absolute -left-[11px] top-1"></div>

            {/* Logo */}
            <img
              src={edu.logo}
              alt={edu.college}
              className="w-20 h-20 rounded-full object-cover mb-4 border border-red-400"
            />

            <h3 className="text-2xl font-bold">{edu.degree}</h3>
            <p className="text-gray-300">{edu.college}</p>
            <p className="text-red-300 font-semibold">{edu.year}</p>

            {edu.details && (
              <p className="text-gray-400 mt-2 max-w-2xl">{edu.details}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
