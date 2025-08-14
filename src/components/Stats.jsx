import React, { useRef, useEffect, memo } from 'react';
import { motion, useInView } from 'framer-motion';
import { School as Pool, Trees as Tree, Users, Clock } from 'lucide-react';

const AnimatedNumber = memo(({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [number, setNumber] = React.useState(0);
  const numericValue = parseInt(value);
  
  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const duration = 1800; // 1.8 seconds duration
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setNumber(Math.floor(progress * numericValue));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref} className="text-3xl font-bold">
      {number}{value.includes('+') ? '+' : ''}
    </span>
  );
});

AnimatedNumber.displayName = 'AnimatedNumber';

const stats = [
  {
    icon: Pool,
    value: '800+',
    label: 'Pools & Gardens Built',
  },
  {
    icon: Tree,
    value: '2',
    label: 'Acre Nursery',
  },
  {
    icon: Users,
    value: '1000+',
    label: 'Happy Clients',
  },
  {
    icon: Clock,
    value: '30+',
    label: 'Years Experience',
  }
];

const Stats = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-6 bg-black/30 rounded-lg backdrop-blur-sm"
              >
                <motion.div
                  whileHover={{ y: [-2, 2] }}
                  transition={{
                    y: {
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }
                  }}
                  className="text-white mb-4"
                >
                  <Icon size={40} />
                </motion.div>
                <div className="mb-2">
                  <AnimatedNumber value={stat.value} />
                </div>
                <p className="text-sm text-center text-white">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
                     <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
             <span className="text-blue-400 font-semibold">Three decades of excellence</span> has established us as the premier pool and spa craftsmen in Spring. 
             With over <span className="text-blue-400 font-semibold">800 custom pools</span> and countless satisfied clients, our <span className="text-blue-400 font-semibold">two-acre nursery</span> provides the perfect 
             elements to create your personal paradise. When you choose Stone Mason of Spring, you're not just 
             getting a pool—you're investing in a legacy of <span className="text-blue-400 font-semibold">artistry, precision, and unparalleled beauty</span>.
           </p>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Stats);



