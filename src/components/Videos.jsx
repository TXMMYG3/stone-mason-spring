import React from 'react';
import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';

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
    <section id="videos" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-video relative overflow-hidden rounded-lg shadow-xl"
              >
                {/* Using sddefault for higher quality thumbnails that are still reliable */}
                <img
                  src={`https://img.youtube.com/vi/${video.id}/sddefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to mqdefault if sddefault fails
                    const target = e.target;
                    target.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Youtube className="w-16 h-16 text-white" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;



