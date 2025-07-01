import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#161616] pt-16 pb-6 px-5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="text-2xl font-bold tracking-wider font-['Syncopate',_sans-serif] mb-2">EDITORA</div>
            <p className="text-gray-400 text-sm">Crafting Visual Experiences</p>
          </div>
          
          <div className="flex gap-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-[#ff00c8] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,0,200,0.5)] hover-scale hover-glow-neon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M11 21H7V13H4V9H7V8C7 5.23858 9.23858 3 12 3H13.5V6.28571C13.5 6.6802 13.1802 7 12.7857 7C11.7995 7 11 7.79949 11 8.78571V9H19V21H15V13H11V21Z"></path>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-[#ff00c8] hover:-translate-y-1 hover-glow-neon">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-[#ff00c8] hover:-translate-y-1 hover-glow-neon">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-[#ff00c8] hover:-translate-y-1 hover-glow-neon">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="py-6 border-t border-white/10 text-center">
          <ul className="flex flex-wrap justify-center gap-6 mb-6">
            <li><Link to="home" spy={true} smooth={true} duration={500} offset={-70} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm">Home</Link></li>
            <li><Link to="about" spy={true} smooth={true} duration={500} offset={-70} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm">About</Link></li>
            <li><Link to="projects" spy={true} smooth={true} duration={500} offset={-70} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm">Projects</Link></li>
            <li><Link to="founders" spy={true} smooth={true} duration={500} offset={-70} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm">Team</Link></li>
            <li><Link to="reviews" spy={true} smooth={true} duration={500} offset={-70} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm">Reviews</Link></li>
            <li><Link to="contact" spy={true} smooth={true} duration={500} offset={-70} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm">Contact</Link></li>
          </ul>
          
          <p className="text-gray-500 text-sm">&copy; {currentYear} EDITORA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
