import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Info, Youtube, Menu, X, Image } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    // For home path, check if it's exactly the root
    if (path === '/') {
      return location.pathname === '/';
    }
    // For section links on homepage (like #pools, #spas)
    if (path.startsWith('/#') && location.pathname === '/') {
      return false; // We don't want to highlight these when just on homepage
    }
    // For other paths, check if the location pathname matches
    return location.pathname === path;
  };

  const navItems = [
    { id: '/', icon: Home, label: 'Home' },
    { id: '/gallery', icon: Image, label: 'Gallery' },
    { id: '/videos', icon: Youtube, label: 'Videos' },
    { id: '/about', icon: Info, label: 'About Us' },
  ];

  const handleClick = (path) => {
    console.log('Clicked path:', path);
    console.log('Current pathname:', location.pathname);
    
    if (path.startsWith('/#')) {
      const sectionId = path.substring(2); // Remove the '/#' part
      
      // If we're not on the homepage, navigate to homepage with the hash
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollToSection: sectionId } });
      } else {
        // If we're already on the homepage, just scroll to the section
        const element = document.getElementById(sectionId);
        if (element) {
          // Get the height of the fixed navigation bar
          const navHeight = document.querySelector('nav')?.offsetHeight || 0;
          
          // Calculate the element's position relative to the viewport
          const elementPosition = element.getBoundingClientRect().top;
          
          // Calculate the position to scroll to (element position - nav height)
          const offsetPosition = elementPosition + window.pageYOffset - navHeight - 20; // Added 20px extra padding
          
          // Scroll to the adjusted position
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    } else {
      // For regular page navigation, check if we're already on that page
      if (path === location.pathname) {
        console.log('Snap back triggered!');
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        setIsMenuOpen(false);
        return;
      }
    }
    
    setIsMenuOpen(false);
  };

  const headerVariants = {
    hidden: {
      y: -100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      y: -20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            variants={itemVariants}
            className="text-white text-xl md:text-2xl font-bold"
          >
            <Link to="/" className="flex items-center space-x-2">
              <span className="hidden sm:inline">Stone Mason Of Spring</span>
              <span className="sm:hidden">SMS</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.id.startsWith('/#') ? (
                    <button
                      onClick={() => handleClick(item.id)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors
                        ${isActive(item.id) 
                          ? 'text-white bg-white/10' 
                          : 'text-gray-300 hover:text-white bg-white/5'}`}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </button>
                  ) : (
                    <Link
                      to={item.id}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors
                        ${isActive(item.id) 
                          ? 'text-white bg-white/10' 
                          : 'text-gray-300 hover:text-white bg-white/5'}`}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            variants={itemVariants}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black/95 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-2"
                  >
                    {item.id.startsWith('/#') ? (
                      <button
                        onClick={() => handleClick(item.id)}
                        className={`w-full flex items-center space-x-4 px-4 py-3 rounded-lg transition-colors
                          ${isActive(item.id) 
                            ? 'text-white bg-white/10' 
                            : 'text-gray-300 hover:text-white bg-white/5'}`}
                      >
                        <Icon size={24} />
                        <span className="text-lg">{item.label}</span>
                      </button>
                    ) : (
                      <Link
                        to={item.id}
                        onClick={() => setIsMenuOpen(false)}
                        className={`w-full flex items-center space-x-4 px-4 py-3 rounded-lg transition-colors
                          ${isActive(item.id) 
                            ? 'text-white bg-white/10' 
                            : 'text-gray-300 hover:text-white bg-white/5'}`}
                      >
                        <Icon size={24} />
                        <span className="text-lg">{item.label}</span>
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;



