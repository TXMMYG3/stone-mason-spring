import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Facebook, Youtube, ExternalLink } from 'lucide-react';

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
             className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105"
           >
             <div className="text-center">
               <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Phone size={24} className="text-white" />
               </div>
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
             className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105"
           >
             <div className="text-center">
               <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Mail size={24} className="text-white" />
               </div>
               <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
               <a 
                 href="mailto:stonemasonofspring@gmail.com" 
                 className="text-blue-400 hover:text-blue-300 text-base font-medium transition-colors duration-300 break-all"
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
             className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105"
           >
             <div className="text-center">
               <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Facebook size={24} className="text-white" />
               </div>
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
             className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105"
           >
             <div className="text-center">
               <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Youtube size={24} className="text-white" />
               </div>
               <h3 className="text-lg font-semibold text-white mb-2">Watch Us</h3>
               <a 
                 href="https://www.youtube.com/@stonemason6102" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-400 hover:text-blue-300 text-base font-medium transition-colors duration-300 flex items-center justify-center gap-2"
               >
                 YouTube
                 <ExternalLink size={14} />
               </a>
             </div>
           </motion.div>
         </div>

        
      </div>
    </section>
  );
};

export default ConnectWithUs;
