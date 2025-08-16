import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Palette, Hammer, Heart } from 'lucide-react';

const OurProcess = () => {
  const steps = [
    {
      number: '1',
      title: 'Consultation',
      description: 'We begin with a free on-site consultation to understand your vision, assess your space, and discuss your budget and timeline expectations.',
      icon: MessageSquare,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      number: '2',
      title: 'Design & Planning',
      description: 'Our expert designers create detailed plans, collaborating closely with you to refine every aspect until it\'s perfect.',
      icon: Palette,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      number: '3',
      title: 'Construction',
      description: 'Our skilled craftsmen bring your design to life with meticulous attention to detail, using only the finest materials and construction techniques.',
      icon: Hammer,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      number: '4',
      title: 'Enjoyment',
      description: 'Experience the joy of your completed outdoor sanctuary, backed by our comprehensive support and maintenance services for years to come.',
      icon: Heart,
      color: 'from-blue-600 to-cyan-600'
    }
  ];

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
            Our Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From initial consultation to final enjoyment, we guide you through every step of creating your dream outdoor space.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 z-10">
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {step.number}
                  </div>
                </div>

                {/* Step Card */}
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 h-full">
                  <div className="text-center">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <IconComponent size={32} className="text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-600 to-transparent transform -translate-y-1/2 z-0" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6 text-lg">
            Ready to start your journey? Let's begin with step one!
          </p>
                     <a 
             href="https://cal.com/stonemason-of-spring/15min" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
           >
             <span>Start Your Journey Today</span>
             <MessageSquare size={20} />
           </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;

