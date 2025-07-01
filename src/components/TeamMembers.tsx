import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const founders = [
  {
    name: 'Laxman Singh Panwar',
    role: 'Founder',
    bio: 'Laxman Singh Panwar is the founder of Frame Forge Studio. He has a strong interest in visual storytelling and enjoys bringing creative ideas to life through video.',
    image: 'laxman.jpg'
  },
  {
    name: 'Ayush Rawat',
    role: 'Co-Founder',
    bio: 'Ayush Rawat is the co-founder bringing valuable experience in the video editing field. With a background in content creation and a practical approach to problem-solving.',
    image: 'ayush.jpg'
  }
];

const TeamMembers = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="founders" 
      ref={ref}
      className="py-20 px-5 bg-[#161616]"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 font-['Syncopate',_sans-serif]">Our Team</h2>
          <div className="w-20 h-1 bg-[#ff00c8] mx-auto"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-10">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              className="bg-[#111] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,229,255,0.1)] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_15px_30px_rgba(0,229,255,0.2)] hover-3d w-full max-w-xs"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0, 229, 255, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <div 
                className="h-[300px] bg-cover bg-center"
                style={{ backgroundImage: `url(${founder.image})` }}
              ></div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1 text-[#00e5ff]">{founder.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{founder.role}</p>
                <p className="text-gray-300 text-sm">{founder.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
