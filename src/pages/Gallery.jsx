import React, { useState, useCallback, useMemo, memo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ZoomIn } from 'lucide-react';

// Memoized image component for better performance
const GalleryImage = memo(({ image, index, onClick }) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Load image immediately when component mounts
  useEffect(() => {
    setShouldLoad(true);
  }, []);

  const handleImageError = () => {
    console.error(`Failed to load image: ${image.src}`);
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log(`Successfully loaded image: ${image.src}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { delay: index * 0.03, duration: 0.5 }
      }}
      whileHover={{ scale: 1.03 }}
      className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
      onClick={onClick}
    >
      {shouldLoad && (
        <>
          {!imageError ? (
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
              loading="eager"
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-sm">Image not found</p>
                <p className="text-xs mt-1">{image.alt}</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="flex items-center justify-between w-full">
              <p className="text-white text-sm font-medium">{image.alt}</p>
              <ZoomIn className="text-white w-5 h-5" />
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
});

GalleryImage.displayName = 'GalleryImage';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('pools');

  // Gallery images with Construction category populated
  const galleryImages = useMemo(() => [
    // Pools category images
    { src: '/Images/Pools_Tab_Extras/IMG_9525 4a FINAL WEB) Stream.jpg', alt: 'Beautiful Garden Stream', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/IMG_9612_3_4 4a FINAL WEB) Front FallII 05302013.jpg', alt: 'Front Waterfall Feature', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/IMG_9673_4_5_ 4a FINAL WEB) Garden Stream 05302013.jpg', alt: 'Garden Stream Design', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/IMG2056 -79 4a FINAL WEB) InsideOut 111313.jpg', alt: 'Inside Out Pool Design', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/IMG2342-59 4a FINAL WEB) Daves Place 111313.jpg', alt: 'Custom Pool at Daves Place', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/IMG7915-7 4)  Evening Light Williams - 1015.jpg', alt: 'Evening Light Pool View', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/IMG34532-34 4 FINAL Resize to 159 RATIO Zen SS)  Bedrrom Veiw II 722014.jpg', alt: 'Zen Style Pool from Bedroom View', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/_DM34720-52 4a FINAL 159 Ratio Zen SS) Pano In Face 722014.jpg', alt: 'Zen Style Pool Panoramic View', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/_DM35212-14 4 FAINL Left Only 133 RatioTopaz Clean) Evening Falls Left 722014.jpg', alt: 'Evening Falls Left Side View', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/_DM35767 68 4 FINAL WEB) Night Falls 722014.jpg', alt: 'Night Falls Illuminated', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/_DM34895_6_7_ 4aaa Web FINAL ) Palms I Owens 722140.jpg', alt: 'Palm Tree Pool Design', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/_DM34857_8_9 4a FINAL WEB ) 2Two Palms 722014.jpg', alt: 'Two Palms Pool Feature', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/_DM35070-2 4 WEB FINAL) RIght Side Pool 722014 copy 2.jpg', alt: 'Right Side Pool View', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/_DM35347-49 4 Final) Resize Zen SS 159 Ratio Lake Boat House 722014 copy.jpg', alt: 'Lake Boat House Pool', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/_DM37141 4  FINAL WEB120 Ratio) Spa to Hone Rob&Heidi 11072014.jpg', alt: 'Spa to Home Connection', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/_DM37234 4 FINAL WEB) Overall II.jpg', alt: 'Overall Pool Design View', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/_DM36020- 4  FINAL WEB Resize 159 Ratio  Zen SS) Home & Pool.jpg', alt: 'Home and Pool Integration', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/_DM36038-40 WEB FINAL 119 Ratio) Night Falls.jpg', alt: 'Night Falls Feature', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/_DM36104-160 4 WEB FINAL Resize to 18 in wide) Patio Spa.jpg', alt: 'Patio Spa Design', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/_DM36264-67 4a LEVELS FINAL Resize 119 Ratio) Water Cave copy.jpg', alt: 'Water Cave Feature', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/_DM36297-302 4 WEB FINAL Resize 159 Zen SS) Patio Falls.jpg', alt: 'Patio Falls Design', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/_DM37269 4FINal  159) Lagoon to Home Landscape Rob&Heidi 11072014.jpg', alt: 'Lagoon to Home Landscape', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/_DM37292..94 4 WEB 159 Ratio FINAL ) Side Entraence 1172014.jpg', alt: 'Side Entrance Pool View', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/IMG_1130 McCullar - On the Edge V3 Sharpened with HP Liner Blend NR.jpg', alt: 'On the Edge Pool Design', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/_DM37323 4 FINAL) NRS Water Cave 11072017 Rob& Heidi.jpg', alt: 'Water Cave Feature', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/_DM37299 _ 524 4aaaaa FINAL WEB Levels SH) Water Cavge Night Falls Rob & Heidi.jpg', alt: 'Water Cave Night Falls', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/IMG_1623-Neal_Cave.jpg', alt: 'Neal Cave Pool Feature', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/IMG_1263 Heflin - Pebbled Steps.jpg', alt: 'Pebbled Steps Design', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/IMG_1299 Pool - Barbara and Falls.jpg', alt: 'Barbara and Falls Pool', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/IMG_1049 Ables Falls.jpg', alt: 'Ables Falls Feature', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/IMG_1189 Heflin - Barbara on Falls.jpg', alt: 'Barbara on Falls', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/IMG_1697-Neal_Garden Pool.jpg', alt: 'Neal Garden Pool', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/IMG_10792 Ables-Pool on Lake.jpg', alt: 'Pool on Lake View', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/IMG_1128 Pool - Spa - Copy.jpg', alt: 'Pool and Spa Combination', category: 'pools' },
    { src: '/Images/Pools_Tab_Extras/IMG_1162 Pool - Garden Falls Bridge.jpg', alt: 'Garden Falls Bridge', category: 'pools' },
    
    // Construction category images
    { src: '/Images/Construction/IMG_4183.JPG', alt: 'Construction Process - Foundation Work', category: 'construction' },
    { src: '/Images/Construction/IMG_4360.JPG', alt: 'Construction Process - Site Preparation', category: 'construction' },
    { src: '/Images/Construction/IMG_3761.JPG', alt: 'Construction Process - Excavation', category: 'construction' },
    { src: '/Images/Construction/IMG_4361.JPG', alt: 'Construction Process - Structural Work', category: 'construction' },
    { src: '/Images/Construction/IMG_3925.JPG', alt: 'Construction Process - Stone Installation', category: 'construction' },
    { src: '/Images/Construction/IMG_3983.JPG', alt: 'Construction Process - Pool Shell', category: 'construction' },
    { src: '/Images/Construction/IMG_4174.JPG', alt: 'Construction Process - Plumbing Installation', category: 'construction' },
    { src: '/Images/Construction/IMG_3984.JPG', alt: 'Construction Process - Equipment Setup', category: 'construction' },
    { src: '/Images/Construction/IMG_4175.JPG', alt: 'Construction Process - Electrical Work', category: 'construction' },
    { src: '/Images/Construction/IMG_3985.JPG', alt: 'Construction Process - Waterproofing', category: 'construction' },
    { src: '/Images/Construction/IMG_4178.JPG', alt: 'Construction Process - Stone Setting', category: 'construction' },
    { src: '/Images/Construction/IMG_4179.JPG', alt: 'Construction Process - Detail Work', category: 'construction' },
    { src: '/Images/Construction/IMG_4204.JPG', alt: 'Construction Process - Finishing Touches', category: 'construction' },
    { src: '/Images/Construction/IMG_4231.JPG', alt: 'Construction Process - Quality Control', category: 'construction' },
    { src: '/Images/Construction/IMG_4232.JPG', alt: 'Construction Process - Final Inspection', category: 'construction' },
    { src: '/Images/Construction/IMG_4362.JPG', alt: 'Construction Process - Completion Phase', category: 'construction' },
    { src: '/Images/Construction/IMG_4221.JPG', alt: 'Construction Process - Testing Systems', category: 'construction' },
    { src: '/Images/Construction/IMG_4192.JPG', alt: 'Construction Process - Landscape Preparation', category: 'construction' },
    { src: '/Images/Construction/IMG_3680.JPG', alt: 'Construction Process - Initial Setup', category: 'construction' },
    { src: '/Images/Construction/IMG_3679.JPG', alt: 'Construction Process - Site Survey', category: 'construction' },
    { src: '/Images/Construction/IMG_3685.JPG', alt: 'Construction Process - Ground Breaking', category: 'construction' },
    { src: '/Images/Construction/IMG_3755.JPG', alt: 'Construction Process - Heavy Equipment', category: 'construction' },
    { src: '/Images/Construction/IMG_3876.JPG', alt: 'Construction Process - Concrete Work', category: 'construction' },
    { src: '/Images/Construction/IMG_3674.JPG', alt: 'Construction Process - Planning Phase', category: 'construction' },
    { src: '/Images/Construction/IMG_3916.JPG', alt: 'Construction Process - Skilled Craftsmanship', category: 'construction' },
    { src: '/Images/Construction/IMG_3924.JPG', alt: 'Construction Process - Precision Work', category: 'construction' },
    { src: '/Images/Construction/IMG_3913.JPG', alt: 'Construction Process - Team Collaboration', category: 'construction' },
    { src: '/Images/Construction/IMG_3978.JPG', alt: 'Construction Process - Material Handling', category: 'construction' },
    { src: '/Images/Construction/IMG_3979.JPG', alt: 'Construction Process - Safety Protocols', category: 'construction' },
    { src: '/Images/Construction/IMG_3917.JPG', alt: 'Construction Process - Expert Installation', category: 'construction' },
    
    // Architectural Stained Glass category images
    { src: '/Images/Stained-Glass-tab/IMG_8832.JPG', alt: 'Architectural Stained Glass Design', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8834.JPG', alt: 'Custom Stained Glass Window', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8835.JPG', alt: 'Decorative Glass Panel', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8836.JPG', alt: 'Artistic Glass Installation', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8837.JPG', alt: 'Stained Glass Art Feature', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8718.JPG', alt: 'Glass Wall Design', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8717.JPG', alt: 'Custom Glass Door', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8120.JPG', alt: 'Stained Glass Window Panel', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8119.JPG', alt: 'Decorative Glass Feature', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8736.JPG', alt: 'Architectural Glass Element', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8755.JPG', alt: 'Custom Stained Glass Design', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8757.JPG', alt: 'Glass Fountain Feature', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8790.JPG', alt: 'Stained Glass Awning', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8829.JPG', alt: 'Glass Trellis Design', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8830.JPG', alt: 'Decorative Glass Screen', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8831.JPG', alt: 'Artistic Glass Panel', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8833.JPG', alt: 'Custom Glass Installation', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8838.JPG', alt: 'Stained Glass Window Art', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8791.JPG', alt: 'Glass Wall Feature', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8795.JPG', alt: 'Decorative Glass Door', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8080.JPG', alt: 'Architectural Glass Design', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8116.JPG', alt: 'Custom Stained Glass Panel', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8117.JPG', alt: 'Glass Art Installation', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8118.JPG', alt: 'Stained Glass Feature', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8462.JPG', alt: 'Decorative Glass Element', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8822.JPG', alt: 'Glass Fountain Design', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8825.JPG', alt: 'Custom Glass Work', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8771.JPG', alt: 'Stained Glass Window', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8788.JPG', alt: 'Architectural Glass Panel', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8789.JPG', alt: 'Glass Art Feature', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8796.JPG', alt: 'Decorative Glass Installation', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8797.JPG', alt: 'Custom Stained Glass', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8798.JPG', alt: 'Glass Wall Art', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8799.JPG', alt: 'Stained Glass Design', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8800.JPG', alt: 'Architectural Glass Feature', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8801.JPG', alt: 'Glass Panel Installation', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8802.JPG', alt: 'Decorative Glass Art', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8820.JPG', alt: 'Custom Glass Feature', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8821.JPG', alt: 'Stained Glass Window Design', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8716.JPG', alt: 'Glass Door Feature', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8734.JPG', alt: 'Architectural Glass Work', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8737.JPG', alt: 'Custom Glass Panel', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8738.JPG', alt: 'Stained Glass Art', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8739.JPG', alt: 'Decorative Glass Design', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8750.JPG', alt: 'Glass Installation Feature', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8751.JPG', alt: 'Custom Stained Glass Work', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8752.JPG', alt: 'Architectural Glass Element', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8753.JPG', alt: 'Glass Art Installation', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8754.JPG', alt: 'Stained Glass Feature', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8758.JPG', alt: 'Decorative Glass Panel', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8824.JPG', alt: 'Custom Glass Design', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8827.JPG', alt: 'Glass Wall Installation', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8828.JPG', alt: 'Stained Glass Window Art', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8769.JPG', alt: 'Architectural Glass Design', category: 'stained-glass' },
    { src: '/Images/Stained-Glass-tab/IMG_8770.JPG', alt: 'Custom Glass Art Feature', category: 'stained-glass' },
  ], []);

  const filteredImages = useMemo(() => 
    galleryImages.filter(img => img.category === selectedCategory),
    [selectedCategory, galleryImages]
  );

  const categories = useMemo(() => [
    { id: 'pools', label: 'Pools' },
    { id: 'construction', label: 'Construction' },
    { id: 'stained-glass', label: 'Architectural Stained Glass' }
  ], []);

  // Description for Architectural Stained Glass
  const stainedGlassDescription = "Over the course of 30 years Stone Mason of Spring has introduced an array of art glass and architectural glass features on many of its projects. Our stained-glass studio is endeavoring to create upon request custom designs that take the form of doors, windows, glass walls, fountains, awnings and trellises, and more";

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const handleImageClick = useCallback((src) => {
    setSelectedImage(src);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  // Preload images when category changes
  useEffect(() => {
    const imagesToPreload = filteredImages.slice(0, 12); // Preload first 12 images
    imagesToPreload.forEach(image => {
      const img = new Image();
      img.src = image.src;
    });
  }, [selectedCategory, filteredImages]);
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-6 text-center">Project Gallery</h1>
          <p className="text-center max-w-2xl mx-auto mb-12 text-blue-300 italic">
            Browse our collection of <span className="text-white font-medium">stunning projects</span> showcasing our craftsmanship and attention to detail in creating beautiful outdoor spaces.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map(category => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
          
          {/* Pools Caption - Only show when pools category is selected */}
          {selectedCategory === 'pools' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto mb-12 p-6 bg-blue-900/30 rounded-lg backdrop-blur-sm"
            >
              <p className="text-center text-white leading-relaxed font-medium">
                Where Luxury Meets Natural Beauty. View Our Prized Collection Of Pools.
              </p>
            </motion.div>
          )}
          
          {/* Construction Caption - Only show when construction category is selected */}
          {selectedCategory === 'construction' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto mb-12 p-6 bg-blue-900/30 rounded-lg backdrop-blur-sm"
            >
              <p className="text-center text-white leading-relaxed font-medium">
                Craftsmanship You Can Trust - Behind The Scenes Of Our Oasis Projects
              </p>
            </motion.div>
          )}
          
          {/* Stained Glass Description - Only show when stained-glass category is selected */}
          {selectedCategory === 'stained-glass' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto mb-12 p-6 bg-blue-900/30 rounded-lg backdrop-blur-sm"
            >
              <p className="text-center text-white leading-relaxed">
                {stainedGlassDescription}
              </p>
            </motion.div>
          )}
          
          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredImages.map((image, index) => (
              <GalleryImage
                key={`${image.src}-${index}`}
                image={image}
                index={index}
                onClick={() => handleImageClick(image.src)}
              />
            ))}
          </motion.div>
          
          {/* Lightbox */}
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={handleCloseLightbox}
            >
              <motion.button
                className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage} 
                  alt="Enlarged view"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;

