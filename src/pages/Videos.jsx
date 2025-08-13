import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';

// Memoized video component for better performance
const VideoItem = memo(({ video, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`);

  // Try to load higher quality thumbnail first
  useEffect(() => {
    const img = new Image();
    img.src = `https://img.youtube.com/vi/${video.id}/sddefault.jpg`;
    img.onload = () => {
      setImageSrc(`https://img.youtube.com/vi/${video.id}/sddefault.jpg`);
      setImageLoaded(true);
    };
    img.onerror = () => {
      setImageLoaded(true);
    };
  }, [video.id]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="relative group"
    >
      <a
        href={`https://www.youtube.com/watch?v=${video.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block aspect-video relative overflow-hidden rounded-lg shadow-xl"
      >
        <div className={`absolute inset-0 bg-gray-800 ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`} />
        <img
          src={imageSrc}
          alt={video.title}
          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Youtube className="w-16 h-16 text-white" />
        </div>
      </a>
      
      {/* HGTV Featured Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-16 mb-8"
      >
        <motion.div
          animate={{
            textShadow: [
              "0 0 10px rgba(59, 130, 246, 0.5)",
              "0 0 20px rgba(59, 130, 246, 0.8)",
              "0 0 30px rgba(59, 130, 246, 1)",
              "0 0 20px rgba(59, 130, 246, 0.8)",
              "0 0 10px rgba(59, 130, 246, 0.5)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
          className="text-4xl md:text-5xl font-bold text-white tracking-wider"
        >
          AS FEATURED ON HGTV!
        </motion.div>
        <motion.div
          animate={{
            opacity: [0.3, 0.7, 1, 0.7, 0.3]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
          className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        />
      </motion.div>
    </motion.div>
  );
});

VideoItem.displayName = 'VideoItem';

const Videos = () => {
  // Updated with correct YouTube video IDs
  const videos = [
    {
      id: 'kCi-mFc2YZw',
      title: 'Stone Mason of Spring Featured Video'
    },
    {
      id: '5EigBRHsrv4',
      title: 'Stone Mason of Spring Pool Video'
    },
    {
      id: 'KpJNHY5i4AA',
      title: 'Stone Mason of Spring Pool Video 1'
    },
    {
      id: 'UeFGhdYqMEE',
      title: 'Stone Mason of Spring Pool Video 2'
    },
    {
      id: 'q4i4mQ9_rZk',
      title: 'Stone Mason of Spring Pool Video 3'
    },
    {
      id: 'lhqbManBfFk',
      title: 'Stone Mason of Spring Pool Video 4'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-center mb-12 text-white">Our Videos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videos.map((video, index) => (
              <VideoItem key={`${video.id}-${index}`} video={video} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Videos;

