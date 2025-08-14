import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ConnectWithUs = () => {
  return (
              <section className="py-12 px-4 bg-black">
       <div className="max-w-4xl mx-auto">
         {/* Section Header */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="text-center mb-8"
         >
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
             Connect With Us
           </h2>
           <p className="text-lg text-gray-300 max-w-2xl mx-auto">
             Ready to start your dream project? Get in touch with us today.
           </p>
         </motion.div>

                 {/* Contact Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
           {/* Phone */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.1 }}
             viewport={{ once: true }}
             className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
           >
             <div className="text-center">
               <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
               <a 
                 href="tel:281-363-4102" 
                 className="text-blue-400 hover:text-blue-300 text-base font-medium transition-colors duration-300"
               >
                 281-363-4102
               </a>
             </div>
           </motion.div>

           {/* Email */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ once: true }}
             className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
           >
             <div className="text-center">
               <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
               <a 
                 href="mailto:stonemasonofspring@gmail.com" 
                 className="text-purple-400 hover:text-purple-300 text-base font-medium transition-colors duration-300 break-all"
               >
                 stonemasonofspring@gmail.com
               </a>
             </div>
           </motion.div>

           {/* Facebook */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             viewport={{ once: true }}
             className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
           >
             <div className="text-center">
               <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
               <a 
                 href="https://www.facebook.com/stonemasonodspringtexas/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-400 hover:text-blue-300 text-base font-medium transition-colors duration-300 flex items-center justify-center gap-2"
               >
                 Facebook
                 <ExternalLink size={14} />
               </a>
             </div>
           </motion.div>

           {/* YouTube */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             viewport={{ once: true }}
             className="bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105"
           >
             <div className="text-center">
               <h3 className="text-lg font-semibold text-white mb-2">Watch Us</h3>
               <a 
                 href="https://www.youtube.com/@stonemason6102" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-red-400 hover:text-red-300 text-base font-medium transition-colors duration-300 flex items-center justify-center gap-2"
               >
                 YouTube
                 <ExternalLink size={14} />
               </a>
             </div>
           </motion.div>
         </div>

                 {/* Call to Action */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.5 }}
           viewport={{ once: true }}
           className="text-center"
         >
           <p className="text-gray-300 mb-6 text-base">
             Ready to start your project? Schedule a consultation today!
           </p>
           <a 
             href="https://cal.com/stonemason-of-spring/15min" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
           >
             <span>Schedule Consultation</span>
             <ExternalLink size={16} />
           </a>
         </motion.div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
