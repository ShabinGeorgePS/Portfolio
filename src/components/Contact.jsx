export default function Contact() {
  return (
    <section
      id="contact"
      className="px-10 py-20 bg-black text-white flex flex-col gap-6"
    >
      <h2 className="text-4xl font-bold text-red-400">Contact</h2>

      <p className="text-gray-300 max-w-2xl">
        If you&apos;d like to collaborate, discuss opportunities, or know more
        about my work, feel free to reach out or check my resume.
      </p>

      <div className="flex flex-col md:flex-row gap-4 md:items-center">
        <div>
          <p className="text-sm uppercase tracking-wide text-gray-400">
            Email
          </p>
          <a
            href="mailto:shabingeor6705@gmail.com"
            className="text-lg text-red-400 hover:text-red-300"
          >
            shabingeorge6705@gmail.com
          </a>
        </div>

        <div className="h-px md:h-10 md:w-px bg-zinc-700" />

        <div>
          <p className="text-sm uppercase tracking-wide text-gray-400">
            Resume
          </p>
          <a
            href="file:///C:/Users/shabi/OneDrive/Desktop/◉_◉/RESUME.pdf"
            className="inline-block mt-1 px-5 py-2 bg-red-500 hover:bg-red-600 rounded-lg font-semibold"
          >
            View Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

