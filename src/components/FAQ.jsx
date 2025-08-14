import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = React.memo(({ question, answer, isOpen, toggleOpen, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
    >
      <button
        onClick={toggleOpen}
        className={`w-full text-left p-4 rounded-lg flex justify-between items-center transition-colors ${
          isOpen 
            ? 'bg-blue-600 text-white' 
            : 'bg-blue-900/30 hover:bg-blue-900/50 text-white'
        }`}
      >
        <span className="font-medium text-lg">{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-blue-900/20 rounded-b-lg text-gray-300">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

FAQItem.displayName = 'FAQItem';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = useCallback((index) => {
    setOpenIndex(openIndex === index ? null : index);
  }, [openIndex]);

  const faqs = [
    {
      question: "What are the health benefits of owning a pool?",
      answer: "Owning a pool provides numerous health benefits including low-impact cardiovascular exercise, stress reduction, improved sleep quality, and joint pain relief. Swimming regularly can burn up to 500 calories per hour while being gentle on your joints. The therapeutic effects of water immersion also help reduce anxiety and promote overall mental wellbeing. For families, it encourages physical activity and provides a healthy recreational option right at home."
    },
    {
      question: "Why choose stone for pool construction over other materials?",
      answer: "Stone offers superior durability, longevity, and aesthetic appeal compared to other materials. Natural stone withstands harsh weather conditions, pool chemicals, and time without deteriorating. Each stone installation is unique, providing character and elegance that manufactured materials cannot match. Stone also maintains temperature stability, stays cooler underfoot in hot weather, and creates a seamless transition between your pool and the surrounding landscape. While the initial investment may be higher, stone pools require less maintenance and have significantly longer lifespans."
    },
    {
      question: "How does a custom stone pool add value to my property?",
      answer: "A professionally designed and constructed stone pool significantly increases property value, often returning 70-80% of the investment at resale. Beyond monetary value, it creates a luxury outdoor living space that transforms your property into a private resort. Stone pools are considered premium features in real estate listings and can be the deciding factor for potential buyers. The timeless appeal of natural stone ensures your investment maintains its value over decades, unlike trends in manufactured materials that can quickly become dated."
    },
    {
      question: "What maintenance is required for stone pools?",
      answer: "Stone pools require less maintenance than many alternative materials. Regular cleaning with appropriate pH-balanced cleaners, occasional resealing (typically every 3-5 years depending on usage), and standard water chemistry maintenance are the primary requirements. Stone is naturally resistant to algae growth compared to other surfaces. Our pools are designed with efficient filtration systems that further reduce maintenance needs. We provide comprehensive care instructions and offer maintenance service plans to ensure your stone pool remains beautiful for generations."
    },
    {
      question: "How long does it take to build a custom stone pool?",
      answer: "The timeline for a custom stone pool project typically ranges from 8-12 weeks from groundbreaking to completion, depending on complexity, size, and additional features. Our process begins with a thorough design phase (2-3 weeks) before construction starts. We provide detailed project timelines during the planning phase and keep clients updated throughout the process. While stone installation requires skilled craftsmanship that cannot be rushed, our experienced team works efficiently to minimize disruption while ensuring exceptional quality. Weather conditions may affect the timeline, particularly during excavation and stone setting phases."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            toggleOpen={() => toggleFAQ(index)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(FAQ);



