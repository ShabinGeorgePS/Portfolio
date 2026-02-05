import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-10 py-20 bg-black text-white"
    >
      <h2 className="text-4xl font-bold mb-10 text-red-400">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {skills.map((skill) => (
          <div
  key={skill.name}
  className="bg-zinc-900 p-6 rounded-xl flex flex-col items-center justify-center gap-3
  hover:scale-110 transition duration-300 ease-in-out shadow-lg hover:shadow-red-500/30"
>
  <skill.icon className="text-5xl text-red-400" />
  <p className="text-lg font-semibold">{skill.name}</p>
</div>

        ))}
      </div>
    </section>
  );
}
