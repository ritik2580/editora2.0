import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface StatProps {
  value: number;
  suffix: string;
  title: string;
  delay: number;
  icon: React.ReactNode;
  gradient: string;
}

const Stat = ({ value, suffix, title, delay, icon, gradient }: StatProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const countingRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (inView) {
      const duration = 2000; // ms
      const totalFrames = 60;
      const timePerFrame = duration / totalFrames;
      let frame = 0;

      if (countingRef.current) {
        clearInterval(countingRef.current);
      }

      countingRef.current = setInterval(() => {
        frame++;
        const progress = Math.min(frame / totalFrames, 1);
        const currentCount = Math.floor(progress * value);
        
        setCount(currentCount);
        
        if (frame === totalFrames) {
          if (countingRef.current) clearInterval(countingRef.current);
        }
      }, timePerFrame);
    }
    
    return () => {
      if (countingRef.current) {
        clearInterval(countingRef.current);
      }
    };
  }, [inView, value]);

  return (
    <motion.div 
      ref={ref}
      className="bg-[#0a0a0a] border-2 border-transparent relative rounded-xl py-8 px-6 shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] overflow-hidden group"
      style={{ borderImageSource: `linear-gradient(to bottom right, ${gradient})`, borderImageSlice: 1 }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      {/* Animated gradient border */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, ${gradient}, transparent 60%)`,
          filter: 'blur(20px)',
          zIndex: 0
        }}
      />

      {/* Content with icon */}
      <div className="flex flex-col items-center relative z-10">
        <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center bg-gradient-to-br from-transparent to-black/30 border border-white/10">
          {icon}
        </div>
        <h3 
          className="text-5xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent animate-gradient-shift font-['Syncopate',_sans-serif]"
          style={{ backgroundImage: `linear-gradient(to right, ${gradient})` }}
        >
          {count}{suffix}
        </h3>
        <p className="text-gray-300 font-medium text-center">{title}</p>
      </div>
      
      {/* Background animation */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ 
          background: `linear-gradient(to right, ${gradient})`,
          width: inView ? '100%' : '0%',
          transition: `width 1.5s ease ${delay + 0.5}s`
        }}
        initial={{ width: 0 }}
        animate={inView ? { width: '100%' } : { width: 0 }}
        transition={{ duration: 1.5, delay: delay + 0.5 }}
      />
    </motion.div>
  );
};

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="track-record" 
      ref={ref}
      className="py-20 px-5 bg-[#161616] relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,0,200,0.4),_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(0,229,255,0.4),_transparent_50%)]"></div>
        
        {/* Grid pattern */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={`grid-h-${i}`} className="absolute h-px w-full bg-white/5" style={{ top: `${i * 10}%` }}></div>
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={`grid-v-${i}`} className="absolute w-px h-full bg-white/5" style={{ left: `${i * 10}%` }}></div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-['Syncopate',_sans-serif] tracking-wider">Track Record</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff00c8] to-[#00e5ff] mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-300">
            Our portfolio of success reflects our commitment to excellence in every project we undertake.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <Stat 
            value={70} 
            suffix="+" 
            title="Satisfied Clients" 
            delay={0.1} 
            gradient="rgba(255,0,200,1), rgba(255,0,127,0.8)"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff00c8" />
                    <stop offset="100%" stopColor="#ff0037" />
                  </linearGradient>
                </defs>
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            }
          />
          
          <Stat 
            value={300} 
            suffix="+" 
            title="Projects Delivered" 
            delay={0.2} 
            gradient="rgba(0,229,255,1), rgba(0,128,255,0.8)"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#grad2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00e5ff" />
                    <stop offset="100%" stopColor="#0080ff" />
                  </linearGradient>
                </defs>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.29 7 12 12 20.71 7"></polyline>
                <line x1="12" y1="22" x2="12" y2="12"></line>
              </svg>
            }
          />
          
          <Stat 
            value={2.5} 
            suffix="+" 
            title="Years of Excellence" 
            delay={0.3} 
            gradient="rgba(124,77,255,1), rgba(83,51,237,0.8)"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#grad3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c4dff" />
                    <stop offset="100%" stopColor="#5333ed" />
                  </linearGradient>
                </defs>
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            }
          />
          
          <Stat 
            value={95} 
            suffix="%" 
            title="Client Satisfaction" 
            delay={0.4} 
            gradient="rgba(255,64,55,1), rgba(255,117,0,0.8)"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#grad4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff4037" />
                    <stop offset="100%" stopColor="#ff7500" />
                  </linearGradient>
                </defs>
                <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                <path d="M22 12a10 10 0 0 1-10 10V12h10z"></path>
                <circle cx="12" cy="12" r="6"></circle>
              </svg>
            }
          />
        </div>
        
        {/* Added call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#ff00c8] to-[#00e5ff] text-white font-medium rounded-full hover:shadow-[0_0_20px_rgba(255,0,200,0.5)] transition-all duration-300 hover:-translate-y-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Join Our Client Success Stories
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
