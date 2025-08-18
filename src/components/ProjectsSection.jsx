import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    { 
      year: "2022", 
      name: "Obys Agency", 
      description: "Design Studio",
      url: "https://example.com/obys-agency",
      category: "design"
    },
    { 
      year: "2021", 
      name: "Infos", 
      description: "Designing Studio Website", 
      tagline: "Connects the brands",
      url: "https://example.com/infos",
      category: "development"
    },
    // ... other projects
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Selected <span className="text-pink-400">Projects</span>
          </h2>
          <div className="h-px w-40 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto" />
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div 
                onClick={() => window.open(project.url, "_blank")}
                className="cursor-pointer p-8 rounded-xl border-2 border-white/10 hover:border-pink-400 transition-all duration-300"
              >
                {/* White animated line */}
                <motion.div
                  className="absolute left-0 bottom-0 h-0.5 bg-white"
                  initial={{ width: 0 }}
                  animate={{
                    width: hoveredProject === index ? "100%" : 0
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                
                <div className="grid grid-cols-12 gap-6 items-center">
                  <div className="col-span-12 md:col-span-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                      project.category === 'design' 
                        ? 'bg-pink-400/10 text-pink-400' 
                        : 'bg-blue-400/10 text-blue-400'
                    }`}>
                      {project.category}
                    </span>
                    <p className="text-gray-400 group-hover:text-white transition-colors">
                      {project.year}
                    </p>
                  </div>
                  
                  <div className="col-span-12 md:col-span-8">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-medium group-hover:text-pink-400 transition-colors">
                        {project.name}
                      </h3>
                      <FiExternalLink className="text-gray-400 group-hover:text-pink-400 transition-colors" />
                    </div>
                    {project.tagline && (
                      <p className="text-gray-400 mt-2">{project.tagline}</p>
                    )}
                    <p className="text-gray-300 mt-3">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}