import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import PoolsShowcase from './components/PoolsShowcase.jsx';
import SpasShowcase from './components/SpasShowcase.jsx';
import ConnectWithUs from './components/ConnectWithUs.jsx';

// Lazy load components for better performance
const Reviews = lazy(() => import('./components/Reviews.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Videos = lazy(() => import('./pages/Videos.jsx'));
const Gallery = lazy(() => import('./pages/Gallery.jsx'));

// Loading component for lazy-loaded routes
const Loading = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App bg-black text-white min-h-screen">
        <Navigation />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Stats />
              <PoolsShowcase />
              <SpasShowcase />
              <ConnectWithUs />
              <Suspense fallback={<Loading />}>
                <Reviews />
              </Suspense>
            </>
          } />
          
          <Route path="/about" element={
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          } />
          
          <Route path="/videos" element={
            <Suspense fallback={<Loading />}>
              <Videos />
            </Suspense>
          } />
          
          <Route path="/gallery" element={
            <Suspense fallback={<Loading />}>
              <Gallery />
            </Suspense>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




