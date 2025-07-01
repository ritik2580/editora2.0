import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import ImmersiveGallery from './ImmersiveGallery';

const projects = [
  {
    id: 1,
    title: 'Moment Marketing',
    category: 'Video EDITING',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=60',
    link: 'https://drive.google.com/file/d/1TRxmyCmYgoMKh7OJO5pffKL5rv8IDHF5/view?usp=drive_link'
  },
  {
    id: 2,
    title: 'Reality Of Crypto Currency',
    category: 'Vertical Short EDITING',
    image: 'https://vip-go.premiumbeat.com/wp-content/uploads/2018/04/editing-cover.jpg?resize=875,490',
    link: 'https://drive.google.com/file/d/1zmZM0VSPT0O1O9cOI2xug9IraS7nWtB6/view?usp=drive_link'
  },
  {
    id: 3,
    title: 'Doctor Google',
    category: 'Vertical Short EDITING',
    image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=600&auto=format&fit=crop&q=60',
    link: 'https://drive.google.com/file/d/1elc-TktK6Njps_Yb_Gh5IdxAT33zy-R_/view?usp=drive_link'
  },
  {
    id: 4,
    title: 'JIM Corbet National Park',
    category: 'Documentary Style',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Jim_Corbett%2C_c._1907.png',
    link: 'https://drive.google.com/file/d/1eKpEvNJYPi38gsrprPLplFVgF6LarMGo/view?usp=drive_link'
  },
  {
    id: 5,
    title: 'Cinematic Product Launch',
    category: 'Commercial EDITING',
    image: 'https://images.unsplash.com/photo-1492044715545-15ddedd84e5e?w=600&auto=format&fit=crop&q=60',
    link: 'https://drive.google.com/file/d/1TRxmyCmYgoMKh7OJO5pffKL5rv8IDHF5/view?usp=drive_link'
  },
  {
    id: 6,
    title: 'Wildlife Documentary',
    category: 'Documentary EDITING',
    image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&auto=format&fit=crop&q=60',
    link: 'https://drive.google.com/file/d/1TRxmyCmYgoMKh7OJO5pffKL5rv8IDHF5/view?usp=drive_link'
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSolarView, setShowSolarView] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollTo = (index: number) => {
    if (galleryRef.current) {
      const projectItems = galleryRef.current.querySelectorAll('.project-item');
      if (projectItems[index]) {
        projectItems[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
      setActiveIndex(index);
    }
  };

  const handlePrevClick = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    scrollToProject(activeIndex === 0 ? projects.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    scrollToProject(activeIndex === projects.length - 1 ? 0 : activeIndex + 1);
  };

  const startAutoScroll = () => {
    autoScrollIntervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const newIndex = prev === projects.length - 1 ? 0 : prev + 1;
        scrollToProject(newIndex);
        return newIndex;
      });
    }, 4000);
  };

  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
  };

  const handleViewToggle = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowSolarView(!showSolarView);
      setIsTransitioning(false);
    }, 800);
  };

  useEffect(() => {
    if (!showSolarView && !isTransitioning) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }
    return () => stopAutoScroll();
  }, [activeIndex, showSolarView, isTransitioning]);

  return (
    <section 
      id="projects" 
      ref={(el) => {
        ref(el);
        if (el) sectionRef.current = el;
      }}
      className="py-20 px-5 bg-[#0a0a0a] relative overflow-hidden min-h-[80vh]"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 font-['Syncopate',_sans-serif]">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff00c8] to-[#00e5ff] mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Explore our creative work – each project showcases our expertise in video editing, animation, and motion graphics.
          </p>
        </div>
        
        {/* View Toggle Button */}
        <div className="flex justify-center mb-8">
          <motion.button
            onClick={handleViewToggle}
            disabled={isTransitioning}
            className={`px-6 py-2.5 bg-gradient-to-r from-[#ff00c8] to-[#00e5ff] rounded-full text-white text-sm font-medium shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(255,0,200,0.4)] relative overflow-hidden ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">
              {showSolarView ? 'Switch to Gallery View' : 'Experience Video Production Studio'}
            </span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#00e5ff] to-[#ff00c8]"
              initial={{ x: '-100%' }}
              animate={{ x: isTransitioning ? '0%' : '-100%' }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </div>
        
        <AnimatePresence mode="wait">
          {isTransitioning && (
            <motion.div 
              key="transition"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0] }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#ff00c8] to-[#00e5ff] blur-xl"></div>
            </motion.div>
          )}
          
          {!showSolarView ? (
            <motion.div 
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative max-w-6xl mx-auto"
              onMouseEnter={stopAutoScroll}
              onMouseLeave={startAutoScroll}
            >
              <div className="text-center mb-8">
                <span className="text-gray-400">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto mt-2 relative">
                  <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
                </div>
              </div>
              
              <button 
                className="absolute top-1/2 left-4 z-10 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#ff00c8] transition-all duration-300 focus:outline-none"
                onClick={handlePrevClick}
                aria-label="Previous project"
              >
                &#10094;
              </button>
              
              <button 
                className="absolute top-1/2 right-4 z-10 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#ff00c8] transition-all duration-300 focus:outline-none"
                onClick={handleNextClick}
                aria-label="Next project"
              >
                &#10095;
              </button>
              
              <div 
                ref={galleryRef}
                className="overflow-x-auto hide-scrollbar snap-x snap-mandatory flex gap-6 py-4"
              >
                {projects.map((project, index) => (
                  <motion.a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`project-item flex-shrink-0 w-[280px] md:w-[350px] snap-center rounded-xl overflow-hidden bg-[#161616] border border-white/10 shadow-lg hover-3d hover-glow-neon ${index === activeIndex ? 'ring-2 ring-[#ff00c8]' : ''}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ 
                      y: -10, 
                      boxShadow: "0 15px 30px rgba(255, 0, 200, 0.3)",
                      transition: { duration: 0.3 } 
                    }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                      <p className="text-sm text-gray-400">{project.category}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              <div className="flex justify-center mt-8 gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-gradient-to-r from-[#ff00c8] to-[#00e5ff] scale-125' 
                        : 'bg-white/20'
                    }`}
                    onClick={() => {
                      setActiveIndex(index);
                      scrollToProject(index);
                    }}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="solar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
              style={{ 
                height: sectionRef.current ? `${sectionRef.current.offsetHeight - 200}px` : '600px',
                minHeight: '600px'
              }}
            >
              <ImmersiveGallery 
                projects={projects} 
                onClose={() => setShowSolarView(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Parallax stars background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white animate-float-parallax"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
