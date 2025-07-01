import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full px-5 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-black/80 backdrop-blur-md border-b border-white/5 shadow-lg' : 'py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="logo text-2xl font-bold tracking-wider font-['Syncopate',_sans-serif]">
          <span>EDITORA</span>
        </div>
        
        <nav className={`transition-all duration-300 ${
          isMenuOpen 
            ? 'fixed top-0 right-0 h-screen w-[70%] bg-[#0a0a0a] flex flex-col items-center justify-center z-[99]' 
            : 'fixed top-0 right-[-100%] h-screen w-[70%] bg-[#0a0a0a] flex flex-col items-center justify-center z-[99] md:static md:h-auto md:w-auto md:bg-transparent'
        }`}>
          <ul className={`flex ${isMenuOpen ? 'flex-col gap-8' : 'flex-col gap-8 md:flex-row md:gap-10'}`}>
            <li><Link 
              to="home" 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-70}
              className="uppercase text-sm font-medium tracking-wide relative cursor-pointer hover:text-[#ff00c8] transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#ff00c8] after:transition-all hover:after:w-full hover-glow-neon"
              onClick={() => setIsMenuOpen(false)}
              activeClass="after:w-full text-[#ff00c8]"
            >
              Home
            </Link></li>
            <li><Link 
              to="about" 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-70}
              className="uppercase text-sm font-medium tracking-wide relative cursor-pointer hover:text-[#ff00c8] transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#ff00c8] after:transition-all hover:after:w-full"
              onClick={() => setIsMenuOpen(false)}
              activeClass="after:w-full text-[#ff00c8]"
            >
              About
            </Link></li>
            <li><Link 
              to="projects" 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-70}
              className="uppercase text-sm font-medium tracking-wide relative cursor-pointer hover:text-[#ff00c8] transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#ff00c8] after:transition-all hover:after:w-full"
              onClick={() => setIsMenuOpen(false)}
              activeClass="after:w-full text-[#ff00c8]"
            >
              Projects
            </Link></li>
            <li><Link 
              to="founders" 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-70}
              className="uppercase text-sm font-medium tracking-wide relative cursor-pointer hover:text-[#ff00c8] transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#ff00c8] after:transition-all hover:after:w-full"
              onClick={() => setIsMenuOpen(false)}
              activeClass="after:w-full text-[#ff00c8]"
            >
              Team
            </Link></li>
            <li><Link 
              to="reviews" 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-70}
              className="uppercase text-sm font-medium tracking-wide relative cursor-pointer hover:text-[#ff00c8] transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#ff00c8] after:transition-all hover:after:w-full"
              onClick={() => setIsMenuOpen(false)}
              activeClass="after:w-full text-[#ff00c8]"
            >
              Reviews
            </Link></li>
            <li><Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-70}
              className="uppercase text-sm font-medium tracking-wide relative cursor-pointer hover:text-[#ff00c8] transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#ff00c8] after:transition-all hover:after:w-full"
              onClick={() => setIsMenuOpen(false)}
              activeClass="after:w-full text-[#ff00c8]"
            >
              Contact
            </Link></li>
          </ul>
        </nav>
        
        <div 
          className="menu-toggle flex flex-col gap-[5px] cursor-pointer z-[100] md:hidden hover-scale" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          role="button"
        >
          <div className={`w-7 h-[2px] bg-white transition-all duration-300 ${
            isMenuOpen ? 'transform rotate-45 translate-y-[7px]' : ''
          }`}></div>
          <div className={`w-7 h-[2px] bg-white transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}></div>
          <div className={`w-7 h-[2px] bg-white transition-all duration-300 ${
            isMenuOpen ? 'transform -rotate-45 -translate-y-[7px]' : ''
          }`}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
