import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, LayoutGrid, Slideshow } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

interface PortfolioGalleryProps {
  projects: Project[];
  onClose: () => void;
  containerRef: React.RefObject<HTMLElement>;
}

const PortfolioGallery = ({ projects, onClose, containerRef }: PortfolioGalleryProps) => {
  const [mode, setMode] = useState<'grid' | 'showcase'>('grid');
  const [activeIndex, setActiveIndex] = useState(0);

  const handleProjectClick = (index: number) => {
    setActiveIndex(index);
    setMode('showcase');
  };

  const navigate = (dir: number) => {
    setActiveIndex((prev) => (prev + dir + projects.length) % projects.length);
  };

  const height = containerRef.current ? containerRef.current.offsetHeight - 150 : 600;

  return (
    <div
      className="relative bg-black text-white rounded-xl overflow-hidden shadow-2xl"
      style={{ height: `${height}px`, minHeight: '600px' }}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-white/10 bg-black/60 backdrop-blur z-10">
        <div className="text-lg font-semibold">PORTFOLIO</div>
        <div className="flex gap-3">
          <button
            className="hover:text-pink-400 transition"
            onClick={() => setMode(mode === 'grid' ? 'showcase' : 'grid')}
          >
            {mode === 'grid' ? <Slideshow size={20} /> : <LayoutGrid size={20} />}
          </button>
          <button onClick={onClose} className="hover:text-red-400 transition">
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 overflow-y-auto h-full">
        <AnimatePresence mode="wait">
          {mode === 'grid' ? (
            <motion.div
              key="grid"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="relative group rounded-lg overflow-hidden bg-white/10 backdrop-blur hover:scale-[1.02] transition cursor-pointer"
                  onClick={() => handleProjectClick(index)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-white/70">{project.category}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <span className="text-white text-sm">Click to view</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="showcase"
              className="flex flex-col items-center justify-center space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="w-full max-w-4xl aspect-video relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={projects[activeIndex].image}
                  alt={projects[activeIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent px-6 py-4">
                  <h2 className="text-2xl font-bold">{projects[activeIndex].title}</h2>
                  <p className="text-sm text-white/70">{projects[activeIndex].category}</p>
                  <a
                    href={projects[activeIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-5 py-2 rounded-md bg-pink-600 hover:bg-pink-700 transition text-white text-sm"
                  >
                    Open Project
                  </a>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-4 items-center">
                <button
                  onClick={() => navigate(-1)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20"
                >
                  <ArrowLeft size={20} />
                </button>
                <div className="text-sm text-white/60">
                  {activeIndex + 1} / {projects.length}
                </div>
                <button
                  onClick={() => navigate(1)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PortfolioGallery;
