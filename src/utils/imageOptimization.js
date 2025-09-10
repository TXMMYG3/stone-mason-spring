// Image optimization utilities
export const IMAGE_QUALITY = {
  HIGH: 0.9,
  MEDIUM: 0.7,
  LOW: 0.5
};

export const IMAGE_SIZES = {
  THUMBNAIL: '300x300',
  MEDIUM: '600x600',
  LARGE: '1200x1200',
  HERO: '1920x1080'
};

// Critical images that should be preloaded
export const CRITICAL_IMAGES = [
  '/Images/Hero_image_Stone.jpg',
  '/Images/Joe-DiPaulo.jpg',
  '/Images/Tammy-Barnett.jpeg',
  '/Images/Aurelio.jpeg'
];

// Lazy load images
export const LAZY_IMAGES = [
  '/Images/Pool_Images/',
  '/Images/Spas/',
  '/Images/Pools_Tab_Extras/',
  '/Images/Pools_Tab_Gallery/',
  '/Images/Stained-Glass-tab/',
  '/Images/Construction/'
];

// Image loading strategies
export const LOADING_STRATEGIES = {
  EAGER: 'eager', // Load immediately
  LAZY: 'lazy',   // Load when in viewport
  PRIORITY: 'high' // High priority loading
};

// Error fallback images
export const FALLBACK_IMAGES = {
  PROFILE: '/Images/placeholder-profile.jpg',
  POOL: '/Images/placeholder-pool.jpg',
  SPA: '/Images/placeholder-spa.jpg',
  GENERAL: '/Images/placeholder-general.jpg'
};

// Image optimization function
export const optimizeImageUrl = (url, size = 'MEDIUM', quality = 'MEDIUM') => {
  // This would integrate with an image CDN service
  // For now, return the original URL
  return url;
};

// Check if image is in viewport
export const isInViewport = (element) => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Debounce function for scroll events
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

