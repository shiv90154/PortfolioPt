import { FaGithub } from "react-icons/fa";

export default function IntroSection() {
  return (
    <section className="bg-black text-white text-center py-16 px-6">
      {/* Heading */}
      <h2 className="text-2xl md:text-8xl font-bold mb-4">Hi!</h2>

      {/* Main Intro Text */}
      <p className="text-2xl md:text-8xl font-bold leading-snug max-w-5xl mx-auto mb-10">
        I'm Shiv, a{" "}
        <span className="text-pink-400">Full Stack Developer</span> and{" "}
        <span className="text-pink-400">UI/UX Designer</span> focused on
        building robust, scalable applications with seamless user experiences.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        {/* Say Hi Button */}
        <a
          href="mailto:shiva90154@gmail.com"
          className="flex md:text-3xl items-center justify-center gap-2 bg-sky-400 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg shadow-sky-500/50 hover:bg-sky-300 transition"
        >
          Say Hi 👋
        </a>

        {/* Watch My Repo Button */}
        <a
          href="https://github.com/shiv90154"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center md:text-3xl justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg shadow-red-500/50 hover:bg-red-400 transition"
        >
          Watch my repo <FaGithub size={22} />
        </a>
      </div>
    </section>
  );
}