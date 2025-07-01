import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = [
    { name: 'Motion Graphics', progress: 92, color: 'from-[#ff00c8] to-[#00e5ff]' },
    { name: 'Video Production', progress: 90, color: 'from-[#00e5ff] to-[#7c4dff]' },
    { name: 'Visual Effects', progress: 88, color: 'from-[#7c4dff] to-[#ff0037]' },
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 px-5 bg-[#161616] relative overflow-hidden"
    >
      {/* Futuristic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#ff00c8]/5 blur-[100px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#00e5ff]/5 blur-[100px]"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        {/* Grid lines for futuristic effect */}
        <div className="absolute inset-0 grid grid-cols-6 h-full opacity-10">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={`vline-${i}`} className="h-full w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent" style={{ left: `${(i / 6) * 100}%` }}></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-6 w-full opacity-10">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={`hline-${i}`} className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" style={{ top: `${(i / 6) * 100}%` }}></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold uppercase mb-4 font-['Syncopate',_sans-serif] tracking-wider"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
          >
            About Us
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-[#ff00c8] to-[#00e5ff] mx-auto"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="flex-1 parallax-element parallax-slow backdrop-blur-sm bg-black/20 p-8 rounded-xl border border-white/10"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            whileHover={{ boxShadow: "0 0 30px rgba(255, 0, 200, 0.2)" }}
          >
            <motion.p 
              className="text-lg mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="text-[#00e5ff] font-semibold">EDITORA</span> pushes the boundaries of digital creativity, crafting immersive visual experiences that captivate and inspire. Our team of designers, animators, and digital artists transform concepts into stunning visual realities.
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              With expertise in <span className="text-[#ff00c8] font-semibold">Motion Graphics</span> and video production, we deliver cutting-edge content that helps brands stand out in today's visual-centric world.
            </motion.p>
            
            {/* Interactive feature highlights */}
            <motion.div 
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {['Innovation', 'Precision', 'Creativity'].map((feature, i) => (
                <motion.div 
                  key={feature}
                  className="flex flex-col items-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                  whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#ff00c8] to-[#00e5ff] flex items-center justify-center mb-2">
                    {i === 0 && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"/><path d="m21 21-4.3-4.3"/></svg>
                    )}
                    {i === 1 && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 21h10"/><path d="M12 21v-6.5"/><path d="m16.5 8.5-4.5-4.5-4.5 4.5"/><path d="M4 12h16"/></svg>
                    )}
                    {i === 2 && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.3 6.2a4.55 4.55 0 0 0 5.4 0"/><path d="M7 10.5a4.5 4.5 0 0 0 10 0v-3a4.5 4.5 0 1 0-9 0v.5"/><path d="m12 12 2 7"/><path d="m10 14 4 5"/><path d="M8 16h8"/></svg>
                    )}
                  </div>
                  <div className="font-semibold text-center">{feature}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 parallax-element parallax-reverse"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8 backdrop-blur-sm bg-black/20 p-8 rounded-xl border border-white/10">
              {skills.map((skill, index) => (
                <div key={index} className="skill">
                  <div className="flex justify-between mb-2">
                    <motion.div 
                      className="font-semibold"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      {skill.name}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1, color: '#00e5ff' } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="font-mono"
                    >
                      {skill.progress}%
                    </motion.div>
                  </div>
                  <div className="h-3 bg-white/5 rounded-md overflow-hidden backdrop-blur-sm relative">
                    {/* Background pulse animation */}
                    <motion.div
                      className="absolute inset-0 bg-white/5"
                      animate={{
                        opacity: [0.1, 0.2, 0.1]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                    
                    {/* Progress bar with enhanced animation */}
                    <motion.div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-md relative`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.progress}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                      whileHover={{ filter: "brightness(1.3)" }}
                    >
                      {/* Moving highlight effect */}
                      <motion.div
                        className="absolute top-0 h-full w-[20%] bg-white/20 skew-x-12"
                        animate={{ x: ['-100%', '500%'] }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
              
              {/* Added graphic element */}
              <motion.div
                className="mt-12 w-full flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#ff00c8]/50 animate-spin" style={{ animationDuration: '10s' }}></div>
                  <div className="absolute inset-[15%] rounded-full border-2 border-dashed border-[#00e5ff]/50 animate-spin" style={{ animationDuration: '7s', animationDirection: 'reverse' }}></div>
                  <div className="absolute inset-[30%] rounded-full bg-gradient-to-r from-[#ff00c8]/20 to-[#00e5ff]/20 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold">EDITORA</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
