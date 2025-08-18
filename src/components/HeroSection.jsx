export default function HeroSection() {
  return (
    <section className="bg-black mt-[85px] text-white flex flex-col items-center justify-center py-16">
      {/* Heading */}
      <h1 className="text-4xl md:text-8xl font-extrabold mb-6">
        Who is Shiv?
      </h1>

      {/* Banner Image */}
      <img
        src="/banner.png" // Put your banner image in the public folder
        alt="Shiv Banner"
        className="w-full max-w-5xl rounded-lg shadow-lg"
      />
    </section>
  );
}