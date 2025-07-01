import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => {
          const next = prev + Math.random() * 15;
          return next > 100 ? 100 : next;
        });
      } else {
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 200);
    
    return () => clearTimeout(timer);
  }, [progress, onComplete]);
  
  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <motion.div 
            className="w-24 h-24 rounded-full bg-gradient-to-r from-[#ff00c8] to-[#00e5ff] mx-auto mb-6 flex items-center justify-center"
            animate={{ 
              scale: [1, 1.1, 1],
              boxShadow: [
                '0 0 0 rgba(255, 0, 200, 0.7)',
                '0 0 20px rgba(255, 0, 200, 0.7)',
                '0 0 0 rgba(255, 0, 200, 0.7)'
              ]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <div className="w-[90px] h-[90px] bg-[#0a0a0a] rounded-full flex items-center justify-center">
              <div className="font-['Syncopate',_sans-serif] text-2xl font-bold">ES</div>
            </div>
          </motion.div>
          
          <motion.div
            className="text-2xl font-['Syncopate',_sans-serif] tracking-[5px] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            EDITORA
          </motion.div>
          
          <div className="w-[280px] h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#ff00c8] to-[#00e5ff]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>
          
          <motion.div
            className="mt-4 text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {progress < 100 ? 'Loading...' : 'Welcome!'}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
