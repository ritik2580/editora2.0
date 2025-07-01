import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TeamMembers from './components/TeamMembers';
import Stats from './components/Stats';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import './styles/animations.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 🚫 Fix: prevent auto-scroll to #projects on first load
    setTimeout(() => {
      if (window.location.hash === '#projects') {
        history.replaceState(null, '', window.location.pathname);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    }, 10);

    // Load fonts
    const fontLink = document.createElement('link');
    fontLink.href =
      'https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Syne:wght@400;500;600;700;800&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // Set a minimum loader display time
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    // Prevent browser auto-restoring scroll
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Enable smooth scroll on anchor click (not on load)
    const enableSmoothScroll = () => {
      const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
      links.forEach((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          if (targetId && targetId !== '#') {
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        });
      });
    };

    window.addEventListener('load', enableSmoothScroll);

    // Preload images for smoother transitions
    const preloadImages = () => {
      const images = [
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
        'https://images.unsplash.com/photo-1547394765-185e1e68f34e',
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7'
      ];
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    preloadImages();

    return () => {
      clearTimeout(loaderTimer);
      window.removeEventListener('load', enableSmoothScroll);
    };
  }, []);

  return (
    <div className="relative">
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <TeamMembers />
            <Stats />
            <Reviews />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
