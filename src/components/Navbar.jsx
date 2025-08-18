export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black ">
      {/* Name - Big and Bold */}
      <h1 className="text-4xl font-extrabold text-white md:text-6xl">
        Shiv Kumar
      </h1>

    
      {/* Resume Button */}
      <a
        href="/resume.pdf"
        download
        className="bg-sky-400 text-white md:text-2xl px-6 py-2 rounded-full font-medium shadow-lg shadow-sky-500/50 hover:bg-sky-300 transition"
      >
        Get My Resume Offline
      </a>
    </nav>
  );
}
