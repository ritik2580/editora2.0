import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clapperboard, Film, Calendar, Clock, Play, Pause,
  ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Video
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

interface ImmersiveGalleryProps {
  projects: Project[];
  onClose: () => void;
}

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const frames = Math.floor((seconds * 30) % 30);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}:${String(frames).padStart(2, '0')}`;
};

const ImmersiveGallery = ({ projects, onClose }: ImmersiveGalleryProps) => {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [view, setView] = useState<'grid' | 'theater'>('grid');
  const [zoom, setZoom] = useState(1);

  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Simulated random metrics
  const generateMetrics = () => ({
    duration: Math.floor(Math.random() * 90) + 30,
    clips: Math.floor(Math.random() * 25) + 5,
    transitions: Math.floor(Math.random() * 15) + 2,
    effects: Math.floor(Math.random() * 10) + 1,
  });
  const metrics = generateMetrics();

  useEffect(() => {
    if (playing) {
      progressRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIndex((prevIndex) => (prevIndex + 1) % projects.length);
            return 0;
          }
          return prev + 0.5;
        });
      }, 100);
    }
    return () => progressRef.current && clearInterval(progressRef.current);
  }, [playing]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
      if (e.key === ' ') {
        e.preventDefault();
        setPlaying(p => !p);
      }
      if (e.key === 'g') setView('grid');
      if (e.key === 't') setView('theater');
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [index]);

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % projects.length);
    setProgress(0);
  };
  const prevProject = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setProgress(0);
  };

  const handleZoom = (type: 'in' | 'out') => {
    setZoom((prev) => {
      if (type === 'in' && prev < 1.5) return prev + 0.1;
      if (type === 'out' && prev > 0.7) return prev - 0.1;
      return prev;
    });
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    setProgress(ratio * 100);
  };

  return (
    <div className="relative w-full h-full bg-[#0a0a0a] overflow-hidden rounded-xl border border-white/10">
      {/* Ambient Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute h-px w-full bg-white/10" style={{ top: `${(i + 1) * 5}%` }} />
        ))}
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute w-px h-full bg-white/10" style={{ left: `${(i + 1) * 5}%` }} />
        ))}
        <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] bg-[#ff00c8]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[25%] w-[250px] h-[250px] bg-[#00e5ff]/10 rounded-full blur-[100px]" />
      </div>

      {/* Toolbar */}
      <div className="absolute z-20 w-full flex justify-between items-center p-3 backdrop-blur-md bg-black/60 border-b border-white/10">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <h1 className="text-white text-sm md:text-base font-medium flex items-center">
            <Clapperboard size={16} className="mr-2" />
            EDITORA Video Gallery
          </h1>
        </div>
        <div className="flex gap-2">
          <button
            className={`px-3 py-1 text-xs rounded border ${
              view === 'grid'
                ? 'bg-[#ff00c8]/20 border-[#ff00c8]/30 text-white'
                : 'bg-white/10 border-white/20 text-white/70'
            }`}
            onClick={() => setView('grid')}
          >
            Grid
          </button>
          <button
            className={`px-3 py-1 text-xs rounded border ${
              view === 'theater'
                ? 'bg-[#00e5ff]/20 border-[#00e5ff]/30 text-white'
                : 'bg-white/10 border-white/20 text-white/70'
            }`}
            onClick={() => setView('theater')}
          >
            Theater
          </button>
        </div>
      </div>

      {/* Main View */}
      <div className="absolute inset-0 pt-16 pb-20 px-4 overflow-y-auto">
        <AnimatePresence mode="wait">
          {view === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              style={{ transform: `scale(${zoom})`, transformOrigin: 'center top' }}
            >
              {projects.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: i * 0.05 } }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`relative rounded-lg overflow-hidden border ${
                    index === i ? 'border-[#ff00c8]' : 'border-white/10'
                  } bg-black/50 group cursor-pointer`}
                  onClick={() => {
                    setIndex(i);
                    setView('theater');
                  }}
                >
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-all group-hover:scale-110" />
                  <div className="absolute bottom-0 w-full p-2 bg-gradient-to-t from-black via-black/50 to-transparent">
                    <h3 className="text-white text-sm font-semibold truncate">{p.title}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="theater"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-4"
            >
              {/* Theater video section */}
              <div className="relative aspect-video w-full rounded-md overflow-hidden border border-white/10 bg-black/40">
                <img src={projects[index].image} alt={projects[index].title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                  <button onClick={() => setPlaying(p => !p)} className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
                    {playing ? <Pause size={24} className="text-white" /> : <Play size={24} className="text-white" />}
                  </button>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 rounded text-white text-sm">
                  <Video size={14} className="inline mr-2" />
                  {projects[index].title}
                </div>
              </div>

              {/* Progress Bar */}
              <div
                ref={progressBarRef}
                onClick={handleProgressClick}
                className="w-full h-2 bg-white/10 rounded-full relative cursor-pointer"
              >
                <div
                  className="h-full bg-gradient-to-r from-[#ff00c8] to-[#00e5ff] rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Controls */}
              <div className="flex justify-between items-center mt-2">
                <div className="flex gap-2">
                  <button onClick={prevProject}><ChevronLeft size={18} className="text-white" /></button>
                  <button onClick={() => setPlaying(p => !p)}>
                    {playing ? <Pause size={18} className="text-white" /> : <Play size={18} className="text-white" />}
                  </button>
                  <button onClick={nextProject}><ChevronRight size={18} className="text-white" /></button>
                </div>
                <span className="text-xs text-white/50 font-mono">{formatTime((progress / 100) * 60)} / 01:00:00</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Zoom Controls */}
      <div className="absolute bottom-0 w-full p-3 flex justify-between items-center backdrop-blur-md bg-black/60 border-t border-white/10 z-10">
        <div className="flex items-center gap-2">
          <button onClick={() => handleZoom('out')} disabled={zoom <= 0.7} className="text-white/70 hover:text-white disabled:opacity-30"><ZoomOut size={16} /></button>
          <span className="text-white/70 text-xs">{Math.round(zoom * 100)}%</span>
          <button onClick={() => handleZoom('in')} disabled={zoom >= 1.5} className="text-white/70 hover:text-white disabled:opacity-30"><ZoomIn size={16} /></button>
        </div>
        <div className="text-xs text-white/50">{view === 'grid' ? `Gallery | ${projects.length} Projects` : `Viewing ${index + 1} / ${projects.length}`}</div>
      </div>
    </div>
  );
};

export default ImmersiveGallery;
