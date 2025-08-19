import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                   {/* Background Image */}
             <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/90" />
               <OptimizedImage 
                 src="/Images/Hero_image_Stone.jpg" 
                 alt="Stone Mason of Spring Hero Background"
                 className="absolute inset-0 w-full h-full object-cover"
                 priority={true}
                 loading="eager"
               />
             </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Headline */}
                           <motion.h1
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                 >
                   <span className="text-white">
                     Stone Mason of Spring
                   </span>
                 </motion.h1>

                 {/* Subtitle */}
                 <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.4 }}
                   className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
                 >
                   Crafting Aquatic Masterpieces, One Stone at a Time
                 </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
                               <Link
                     to="/gallery"
                     className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2 animate-pulse hover:animate-none"
                     style={{
                       boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(6, 182, 212, 0.3)'
                     }}
                   >
                     <span>View Our Work</span>
                     <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                   </Link>

                   <Link
                     to="/videos"
                     className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center space-x-2 animate-pulse hover:animate-none"
                     style={{
                       boxShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1)'
                     }}
                   >
                     <Play size={20} className="group-hover:scale-110 transition-transform" />
                     <span>Watch Videos</span>
                   </Link>
          </motion.div>

          
        </motion.div>
      </div>

      
    </section>
  );
};

export default Hero;
