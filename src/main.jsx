import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Lazy load the App component for faster initial load
const App = lazy(() => import('./App.jsx'));

// Simple loading component
const Loading = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Preload critical fonts
const preloadFonts = () => {
  const fontUrls = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
  ];
  
  fontUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = url;
    document.head.appendChild(link);
    
    const styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.href = url;
    document.head.appendChild(styleLink);
  });
};

// Add preconnect for external resources
const addPreconnect = () => {
  const domains = ['https://images.unsplash.com', 'https://img.youtube.com'];
  
  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    document.head.appendChild(link);
    
    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = domain;
    document.head.appendChild(dnsPrefetch);
  });
};

// Initialize performance optimizations
const init = () => {
  preloadFonts();
  addPreconnect();
  
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </StrictMode>
  );
};

// Execute initialization
init();


