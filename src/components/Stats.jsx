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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
  );
};

export default memo(Stats);


