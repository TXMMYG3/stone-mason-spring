import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-12 text-blue-400 text-center">About Us</h1>
          
          <div className="space-y-12">
            <div className="prose prose-lg prose-invert mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-xl"
                >
                  <img 
                    src="/Images/Joe-DiPaulo.jpg" 
                    alt="Joe DiPaulo - Founder of Stone Mason of Spring" 
                    className="w-full h-auto object-cover rounded-lg"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </motion.div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl font-semibold mb-4 text-blue-400">About Joe DiPaulo and Stone Mason of Spring</h2>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Over 30 years of experience and 800+ gardens and poolscapes across the country. Joe was a true artist from humble beginnings who transformed Stone Mason into one of the nation's premier luxury pool design and construction teams.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-300">
                <p>
                  His success lay not just in his vision and craftsmanship but in his philosophy of treating each client like family. From design to completion, Joe approached each project as a work of art, and oversaw every detail to ensure the highest standard of excellence.
                </p>
                <p>
                  Joe leaves behind a legacy and standard unparalleled in the industry.
                </p>
              </div>
            </div>

            <div className="prose prose-lg prose-invert mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-xl"
                >
                  <img 
                    src="/Images/Tammy-Barnett.jpeg" 
                    alt="Tammy Barnett - Owner/Operator of Stone Mason of Spring" 
                    className="w-full h-auto object-cover rounded-lg"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </motion.div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl font-semibold mb-4 text-blue-400">Tammy Barnett - Owner/Operator</h2>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Tammy has been with Stone Mason of Spring for over 15 years as Joe's partner. She recently transitioned to sole owner and operator, upon Joe's passing.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-300">
                <p>
                  Tammy has served in every capacity within Stone Mason over the years from lead design, project management, sourcing material and stone, client support, and accounting. She has a background in Geology and design as well as 10 years of experience owning and operating a private label.
                </p>
                <p>
                  She shares Joe's values and vision for Stone Mason and is committed to carrying on Joe's Legacy. 
                </p>
              </div>
            </div>

            <div className="prose prose-lg prose-invert mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-xl"
                >
                  <img 
                    src="/Images/Aurelio.jpeg" 
                    alt="Aurelio Jimenez- Foreman at Stone Mason of Spring" 
                    className="w-full h-auto object-cover rounded-lg"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </motion.div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl font-semibold mb-4 text-blue-400">Aurelio Jimenez - Foreman</h2>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Aurelio has been with Stone Mason of Spring for over 28 years, serving as our lead foreman and master craftsman. His expertise in stone work and pool construction is unmatched in the industry.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-300">
                <p>
                  With a keen eye for detail and years of hands-on experience, Aurelio ensures that every project meets our exacting standards of quality and craftsmanship. His leadership on job sites and dedication to excellence make him an invaluable part of our team.
                </p>
                <p>
                  Aurelio's commitment to precision and his ability to bring complex designs to life have made him a trusted partner in creating some of our most spectacular pool and landscape projects.
                </p>
              </div>
            </div>

            <div className="prose prose-lg prose-invert mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-blue-400"></h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  
                </p>
                <p>
                  <a href="http://www.waterfirerock.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300"></a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

