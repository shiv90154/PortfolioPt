import React from "react";
import { motion } from "framer-motion";
import { 
  Linkedin,
  Instagram,
  Github,
  MessageCircle 
} from "lucide-react";

const FlipLink = ({ children, href }) => {
  const DURATION = 0.25;
  const STAGGER = 0.025;

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      target="_blank"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-semibold uppercase text-white/90 sm:text-6xl md:text-7xl hover:text-pink-400 transition-colors duration-300"
      style={{ lineHeight: 0.75 }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block text-pink-400"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default function SocialConnections() {
  const socialLinks = [
    {
      name: "LINKEDIN",
      href: "https://www.linkedin.com/in/shiv-kumar-627b24247/",
      icon: <Linkedin className="text-white/90 group-hover:text-pink-400 transition-colors duration-300" />,
      iconPosition: "left"
    },
    {
      name: "INSTAGRAM",
      href: "https://www.instagram.com/shivbhardwaj______/",
      icon: <Instagram className="text-white/90 group-hover:text-pink-400 transition-colors duration-300" />,
      iconPosition: "right"
    },
    {
      name: "GITHUB",
      href: "https://github.com/shiv90154",
      icon: <Github className="text-white/90 group-hover:text-pink-400 transition-colors duration-300" />,
      iconPosition: "left"
    },
    {
      name: "WHATSAPP",
      href: "https://wa.me/9015484696",
      icon: <MessageCircle className="text-white/90 group-hover:text-pink-400 transition-colors duration-300" />,
      iconPosition: "right"
    }
  ];

  return (
    <section className="py-24 px-4 bg-black rounded-xl border border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Get in touch section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl md:text-8xl font-extrabold text-white mb-4">
YOU CAN GET IN TOUCH WITH ME VIA        </h3>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto" />
        </motion.div>

        {/* Social links */}
        <div className="grid place-content-center gap-12 md:gap-8">
          {socialLinks.map((link, index) => (
            <motion.div 
              key={index}
              className="group flex items-center justify-center gap-6 md:gap-8"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 10, 
                duration: 0.5, 
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
            >
              {link.iconPosition === "left" && (
                <motion.div 
                  className="w-14 h-14 md:w-20 md:h-20 p-2"
                  whileHover={{ rotate: 10 }}
                >
                  {React.cloneElement(link.icon, { 
                    size: "100%",
                    className: `${link.icon.props.className} w-full h-full`
                  })}
                </motion.div>
              )}
              
              <FlipLink href={link.href}>
                {link.name}
              </FlipLink>
              
              {link.iconPosition === "right" && (
                <motion.div 
                  className="w-14 h-14 md:w-20 md:h-20 p-2"
                  whileHover={{ rotate: -10 }}
                >
                  {React.cloneElement(link.icon, { 
                    size: "100%",
                    className: `${link.icon.props.className} w-full h-full`
                  })}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}