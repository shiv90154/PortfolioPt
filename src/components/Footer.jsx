import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white  py-8">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <div className="flex items-center justify-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.2, rotate: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Heart className="w-8 h-8 fill-pink- text-pink-500 group-hover:fill-pink-400 transition-colors" />
            </motion.div>
            <h3 className="text-lg md:text-3xl tracking-tight group-hover:text-pink-300 transition-colors">
              CREATED BY ME
            </h3>
          </div>

          <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent my-1" />

          <div className="text-xs text-white/60 md:text-2xl flex flex-col items-center">
            <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED</p>
          
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;