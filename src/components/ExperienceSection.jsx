import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const experiences = [
  {
    year: "Jul - Aug 2023",
    role: "Frontend Developer",
    company: "Cyberous",
    duration: "45 days (Remote)",
    description: "Developed responsive user interfaces and implemented modern React components for web applications.",
    link: "https://cyberous.in/",
    skills: ["React", "JavaScript", "CSS3", "Responsive Design"]
  },
  {
    year: "Jul - Aug 2024",
    role: "Frontend Developer",
    company: "HopingMinds",
    duration: "45 days (Online)",
    description: "Created interactive web interfaces and optimized frontend performance for better user experience.",
    link: "https://hopingminds.com/",
    skills: ["React", "TypeScript", "Tailwind CSS", "API Integration"]
  },
  {
    year: "Jul 2025 - Present",
    role: "Full Stack Developer",
    company: "Career Info Wisdom Solutions",
    duration: "Ongoing",
    description: "Building full-stack applications with modern frameworks, handling both frontend and backend development.",
    link: "https://careerinfowisitsolution.com/",
    skills: ["Next.js", "Node.js", "MongoDB", "REST APIs"]
  }
];

export default function ExperienceSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        {/* Premium Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-px w-16 bg-white/30" />
            <span className="text-sm tracking-widest font-medium text-white/80">PROFESSIONAL JOURNEY</span>
            <div className="h-px w-16 bg-white/30" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="font-light">My</span> <span className="text-pink-400">Work Experience</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Key positions that shaped my technical expertise and professional growth
          </p>
        </motion.div>

        {/* Elevated Experience Timeline */}
        <div className="space-y-12 relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 h-full w-px bg-white/10 -translate-x-1/2" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative z-10"
              >
                <div className={`flex flex-col md:flex-row gap-8 items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Date */}
                  <div className={`md:w-1/2 ${isLeft ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <p className="text-white/60 text-sm mt-1 md:mt-0">
                      {exp.year}
                    </p>
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${isLeft ? 'md:pl-8' : 'md:pr-8'}`}>
                    <div className={`relative pl-8 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:rounded-full before:bg-white before:border-4 before:border-black ${!isLeft && 'md:pl-0 md:pr-8 md:before:left-auto md:before:right-0'}`}>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-semibold">{exp.role}</h3>
                            <div className="flex items-center gap-2">
                              <p className="text-white/80">{exp.company}</p>
                              <a 
                                href={exp.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white/50 hover:text-white transition"
                              >
                                <FiExternalLink size={14} />
                              </a>
                            </div>
                          </div>
                          <span className="text-xs bg-white/10 text-white/60 px-2 py-1 rounded">
                            {exp.duration}
                          </span>
                        </div>
                        <p className="text-white/70 mb-4 text-sm">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span 
                              key={i}
                              className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}