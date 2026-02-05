import { FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

export default function Languages() {
  const languages = [
    { name: "Java", icon: FaJava },
    { name: "C++", icon: SiCplusplus },
  ];

  return (
    <section
      id="languages"
      className="min-h-[60vh] px-10 py-20 bg-black text-white"
    >
      <h2 className="text-4xl font-bold mb-10 text-red-400">Languages</h2>

      <div className="flex flex-wrap gap-8">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="bg-zinc-900/80 border border-red-500/30 rounded-2xl px-8 py-6 flex items-center gap-4 shadow-lg shadow-red-500/20 hover:-translate-y-2 hover:shadow-red-500/40 transition-transform duration-300"
          >
            <lang.icon className="text-5xl text-red-400" />
            <div>
              <p className="text-2xl font-semibold">{lang.name}</p>
              <p className="text-gray-300 text-sm max-w-xs">
                Strong foundation in {lang.name} for problem solving, data
                structures, algorithms, and building real‑world applications.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

