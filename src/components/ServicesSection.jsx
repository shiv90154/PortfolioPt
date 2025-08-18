import React from "react";
import { motion } from "framer-motion";
import { 
  FaCode, 
  FaVideo, 
  FaImage,
  FaPaintBrush,
  FaMobile,
  FaRocket
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description: "Modern, responsive websites with React, Next.js and Tailwind CSS",
    icon: <FaCode className="w-8 h-8" />,
    color: "text-blue-400"
  },
  {
    title: "Video Editing",
    description: "Professional editing for YouTube, social media & commercials",
    icon: <FaVideo className="w-8 h-8" />,
    color: "text-purple-400"
  },
  {
    title: "YouTube Thumbnails",
    description: "Eye-catching thumbnails that boost click-through rates",
    icon: <FaImage className="w-8 h-8" />,
    color: "text-red-400"
  },
  {
    title: "Banner Design",
    description: "Stunning banners for websites, social media & advertisements",
    icon: <FaPaintBrush className="w-8 h-8" />,
    color: "text-green-400"
  },
  {
    title: "Mobile UI/UX",
    description: "Intuitive mobile interfaces with Figma & Adobe XD",
    icon: <FaMobile className="w-8 h-8" />,
    color: "text-yellow-400"
  },
  {
    title: "Content Creation",
    description: "Engaging social media content & graphics",
    icon: <FaImage className="w-8 h-8" />,
    color: "text-pink-400"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
        
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-pink-400">Services</span> I Provide
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional solutions tailored to your digital needs. Quality work with creative excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="border-2 border-white/20 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 group-hover:border-pink-400 group-hover:shadow-lg group-hover:shadow-pink-400/20">
                <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-white/10 backdrop-blur-sm`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 flex-grow">
                  {service.description}
                </p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-pink-400 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}