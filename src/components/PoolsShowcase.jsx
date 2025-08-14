import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PoolsShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const poolImages = [
    '/src/Public/Images/Pool_Images/IMG 1101-10 4a FINAL WEB) Luxury Pool - View From Spa Falls 0292013.jpg',
    '/src/Public/Images/Pool_Images/IMG 1816-1830 4b) St Lauren Water World 012810.jpg',
    '/src/Public/Images/Pool_Images/IMG34532-34 4 FINAL Resize to 159 RATIO Zen SS)  Bedrrom Veiw II 722014.jpg',
    '/src/Public/Images/Pool_Images/WEB Image 1 Stone Mason - Living Magazine.jpg'
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % poolImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + poolImages.length) % poolImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
         <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Luxury Pools
            </span>
          </h2>
                           <p className="text-xl text-gray-300 max-w-3xl mx-auto italic">
                   Transform your backyard into a stunning oasis with our custom-designed luxury pools. 
                   Each project is crafted with precision and artistry.
                 </p>
        </motion.div>

                                      {/* Continuous Carousel Container */}
               <div className="relative max-w-6xl mx-auto overflow-hidden">
                 <div className="relative h-96 md:h-[500px] rounded-2xl shadow-2xl">
                   {/* Image Container with Continuous Scroll */}
                   <motion.div
                     className="flex h-full"
                     animate={{
                       x: `-${currentIndex * 100}%`
                     }}
                     transition={{
                       duration: 1.2,
                       ease: "easeInOut"
                     }}
                   >
                     {poolImages.map((image, index) => (
                       <div
                         key={index}
                         className="relative flex-shrink-0 w-full h-full"
                       >
                         <img
                           src={image}
                           alt={`Luxury Pool Design ${index + 1}`}
                           className="w-full h-full object-cover"
                         />
                         {/* Overlay */}
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                       </div>
                     ))}
                   </motion.div>

                   {/* Navigation Buttons */}
                   <button
                     onClick={prevSlide}
                     className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10"
                   >
                     <ChevronLeft size={24} />
                   </button>
                   <button
                     onClick={nextSlide}
                     className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10"
                   >
                     <ChevronRight size={24} />
                   </button>

                   {/* Dots Indicator */}
                   <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                     {poolImages.map((_, index) => (
                       <button
                         key={index}
                         onClick={() => setCurrentIndex(index)}
                         className={`w-3 h-3 rounded-full transition-all duration-300 ${
                           index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                         }`}
                       />
                     ))}
                   </div>
                 </div>
               </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6">
            Ready to create your dream pool? Let's discuss your vision.
          </p>
                           <a 
                   href="https://cal.com/stonemason-of-spring/15min" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                 >
                   Start Your Journey Today
                 </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PoolsShowcase;
