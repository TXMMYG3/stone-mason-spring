import React, { useState, useEffect, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Thompson",
    text: "Joe and his team transformed our backyard into a paradise. The attention to detail was incredible!"
  },
  {
    name: "Michael Rodriguez",
    text: "Best pool contractors in the area! Professional, punctual, and the quality is outstanding."
  },
  {
    name: "Emily Chen",
    text: "We couldn't be happier with our new spa. The whole process was smooth and the result is beautiful."
  },
  {
    name: "David Wilson",
    text: "Stone Of Mason Spring built our dream pool. Their expertise and craftsmanship are unmatched."
  },
  {
    name: "Jennifer Martinez",
    text: "Outstanding service from start to finish. Our pool is the envy of the neighborhood!"
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const intervalRef = useRef(null);

  useEffect(() => {
    if (inView) {
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
      }, 4500);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [inView]);

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative bg-black/30 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto overflow-hidden"
    >
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut"
            }
          }
        }}
        className="text-3xl font-bold text-blue-400 mb-8 text-center"
      >
        Customer Reviews
      </motion.h2>
      
      <div className="relative h-48">
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.5,
                ease: "easeOut"
              }
            }
          }}
          className="flex justify-center mb-4"
        >
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="text-yellow-400 w-6 h-6 fill-current"
            />
          ))}
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              duration: 0.6,
              ease: "easeOut"
            }}
            className="absolute w-full"
          >
            <blockquote className="text-center">
              <p className="text-lg text-gray-200 italic mb-4">"{reviews[currentIndex].text}"</p>
              <footer className="text-blue-400">
                <cite className="font-medium">{reviews[currentIndex].name}</cite>
              </footer>
            </blockquote>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Background glow effect */}
      <div
        className="absolute inset-0 bg-gradient-radial from-blue-500/5 to-transparent opacity-0 transition-opacity duration-1000 -z-10"
        style={{ opacity: inView ? 0.8 : 0 }}
      />
    </motion.div>
  );
};

export default memo(Reviews);


