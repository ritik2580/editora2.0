import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-between px-5 py-20 relative overflow-hidden bg-[radial-gradient(circle_at_center,_#181818,_#0a0a0a)]"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Gradient background shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
          <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-[#ff00c8]/10 filter blur-[80px]"></div>
          <div className="absolute bottom-[20%] left-[10%] w-[250px] h-[250px] rounded-full bg-[#00e5ff]/10 filter blur-[60px]"></div>
        </div>
        <motion.div 
          className="max-w-xl z-10 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-5 font-['Syncopate',_sans-serif] relative glitch"
            data-text="EDITORA"
          >
            EDITORA
            <span className="absolute top-0 left-0 w-full h-full opacity-80 text-[#ff00c8] z-[-1] animate-glitch"></span>
            <span className="absolute top-0 left-0 w-full h-full opacity-80 text-[#00e5ff] z-[-2] animate-glitch-2"></span>
          </h1>
          <p className="text-xl md:text-2xl mb-10">
            Where Imagination Takes <span className="text-[#ff00c8]">Form</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="px-8 py-3 rounded-full bg-[#ff00c8] text-white font-semibold uppercase text-sm tracking-wider hover:bg-[#ff0037] transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,43,81,0.2)] cursor-pointer text-center"
            >
              Explore Work
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="px-8 py-3 rounded-full border border-white text-white font-semibold uppercase text-sm tracking-wider hover:bg-white hover:text-[#0a0a0a] transition-all duration-300 hover:transform hover:-translate-y-1 cursor-pointer text-center"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual relative flex justify-center items-center z-[1] mt-16 md:mt-0 parallax-element"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <div className="circle-animation absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-tr from-[#00e5ff] to-[#ff00c8] opacity-10 animate-rotate animate-gradient-shift"></div>
          
          <div className="absolute w-[280px] h-[280px] md:w-[480px] md:h-[480px] lg:w-[580px] lg:h-[580px] rounded-full border border-white/5 animate-rotate" style={{ animationDuration: '30s' }}></div>
          <div className="absolute w-[260px] h-[260px] md:w-[460px] md:h-[460px] lg:w-[560px] lg:h-[560px] rounded-full border border-white/5 animate-rotate" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
          
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 6,
              ease: "easeInOut"
            }}
          >
            <img 
              src="logo.png" 
              alt="EDITORA Logo" 
              className={`hero-logo w-[150px] md:w-[200px] max-w-[60vw] rounded-full z-[2] opacity-0 transform translate-y-[50px] transition-all duration-600 ease-out ${
                isVisible ? 'opacity-100 translate-y-0 animate-bounce-logo shadow-glow' : ''
              } hover-glow`}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
