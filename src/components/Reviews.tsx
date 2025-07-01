import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    quote: "EDITORA transformed our brand with stunning motion graphics that perfectly captured our vision. Their creativity and technical skill are unmatched.",
    rating: 5,
    author: {
      name: "Michael Chen",
      title: "Creative Director, Zenith Media",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop"
    }
  },
  {
    id: 2,
    quote: "The project exceeded all our expectations. The team's attention to detail and innovative approach made our product launch a huge success.",
    rating: 5,
    author: {
      name: "Sarah Johnson",
      title: "Marketing VP, NexGen Tech",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop"
    }
  },
  {
    id: 3,
    quote: "Working with EDITORA was effortless. Their team understood our needs immediately and delivered a video campaign that drove engagement beyond our targets.",
    rating: 4.5,
    author: {
      name: "David Rodriguez",
      title: "CEO, Pulse Innovations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop"
    }
  }
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  
  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };
  
  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };
  
  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`star-${i}`} className="inline-block w-3 h-3 relative star-filled"></span>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <span key="half-star" className="inline-block w-3 h-3 relative star-half-filled"></span>
      );
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="inline-block w-3 h-3 relative star-empty"></span>
      );
    }
    
    return stars;
  };

  return (
    <section 
      id="reviews" 
      ref={ref}
      className="py-20 px-5 bg-[#0a0a0a] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,0,200,0.1),_transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 font-['Syncopate',_sans-serif]">Client Reviews</h2>
          <div className="w-20 h-1 bg-[#ff00c8] mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto relative">
          <div className="h-[400px] md:h-[300px] relative overflow-hidden">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
                  index === activeIndex ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-[50px] scale-90'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView && index === activeIndex ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.9, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-[rgba(22,22,22,0.7)] backdrop-blur-md border border-[rgba(255,0,200,0.3)] rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between shadow-[0_10px_30px_rgba(0,229,255,0.1),_0_0_10px_rgba(255,0,200,0.1)] relative overflow-hidden hover-3d">
                  <div className="before:content-[''] before:absolute before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-tr before:from-transparent before:via-[rgba(255,0,200,0.1)] before:to-transparent before:rotate-45 before:animate-shine"></div>
                  
                  <div>
                    <p className="text-lg md:text-xl mb-6 relative before:content-['\201C'] before:text-6xl before:absolute before:top-[-20px] before:left-[-10px] before:text-[#ff00c8] before:opacity-20 before:font-serif">
                      {review.quote}
                    </p>
                    
                    <div className="flex gap-1.5 mb-6">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-[#00e5ff]"
                      style={{ backgroundImage: `url(${review.author.image})` }}
                    ></div>
                    <div>
                      <div className="font-semibold">{review.author.name}</div>
                      <div className="text-sm text-gray-400">{review.author.title}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center items-center gap-5 mt-8">
            <button 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white transition-all duration-300 hover:bg-[#ff00c8] hover:scale-110"
              onClick={handlePrev}
              aria-label="Previous review"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-gradient-to-r from-[#ff00c8] to-[#00e5ff] scale-125' 
                      : 'bg-white/20'
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to review ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white transition-all duration-300 hover:bg-[#ff00c8] hover:scale-110"
              onClick={handleNext}
              aria-label="Next review"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
