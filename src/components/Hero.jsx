export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center px-10 bg-black text-white"
    >
      <h1 className="text-5xl font-bold mb-5">
        Hi, I'm <span className="text-red-500">Shabin George</span>
      </h1>

      <p className="text-xl max-w-xl mb-10 text-gray-300">
        A passionate Computer Science Engineer from Sri Krishna College of
        Technology. I build clean, modern, responsive websites and work on Java,
        Spring Boot, Cloud, ML, and Cybersecurity.
      </p>

      <div className="flex gap-5">
        <a
          href="#projects"
          className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg text-white font-semibold transition"
        >
          View My Work
        </a>

        <a
          href="#about"
          className="px-6 py-3 border border-red-500 hover:bg-red-500 rounded-lg text-white font-semibold transition"
        >
          About Me
        </a>
      </div>
    </section>
  );
}
