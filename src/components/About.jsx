import profile from "../assets/shabin.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center gap-10 px-10 py-20 bg-gray-900 text-white"
    >
      {/* Left Image */}
      <img
        src={profile}
        alt="Shabin George"
        className="w-60 h-60 rounded-2xl object-cover shadow-xl border border-gray-700"
      />

      {/* Right Content */}
      <div>
        <h2 className="text-4xl font-bold mb-5 text-red-500">About Me</h2>
        <p className="text-gray-300 max-w-2xl leading-relaxed">
          I'm <span className="text-red-400 font-semibold">Shabin George</span>,
          a 3rd year Computer Science Engineering student at Sri Krishna College of
          Technology. I enjoy building full-stack web applications, solving
          complex problems, and exploring cloud, machine learning, and
          cybersecurity.
        </p>

        <p className="mt-5 text-gray-300 max-w-2xl leading-relaxed">
          I have hands-on experience with Java, Spring Boot, REST APIs, React,
          MySQL, Docker, and DevOps tools. I'm always learning and creating new
          things to grow as a developer.
        </p>
      </div>
    </section>
  );
}
