import React from 'react';
import { motion } from 'framer-motion';

const ReviewsIntro = () => {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our innovative designs and master craftsmanship create timeless aquatic sanctuaries. 
            Hear what our delighted clients have to say.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsIntro;
