import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <div>
      <nav className="bg-black bg-opacity-80 py-4 px-6 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white flex items-center">
              <span className="text-orange-600 mr-1">IRON</span>PULSE
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-orange-600 transition-colors font-medium">HOME</a>
            <a href="#" className="text-white hover:text-orange-600 transition-colors font-medium">CLASSES</a>
            <a href="#" className="text-white hover:text-orange-600 transition-colors font-medium">SERVICES</a>
            <a href="#" className="text-white hover:text-orange-600 transition-colors font-medium">ABOUT</a>
            <a href="#" className="text-white hover:text-orange-600 transition-colors font-medium">TRAINERS</a>
            <a href="#" className="text-white hover:text-orange-600 transition-colors font-medium">BLOG</a>
            <a href="#" className="text-white hover:text-orange-600 transition-colors font-medium">CONTACT</a>
          </div>

          {/* Join Button (Uncomment if needed) */}
          {/* 
          <a href="#" className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-6 font-medium transition-colors duration-300 rounded-button cursor-pointer whitespace-nowrap">
            JOIN US TODAY
          </a> 
          */}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white ml-4 focus:outline-none cursor-pointer"
            onClick={toggleMenu}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-white hover:text-orange-600 transition-colors font-medium">HOME</a>
              <a href="#" className="text-white hover:text-orange-600 transition-colors font-medium">CLASSES</a>
              <a href="#" className="text-white hover:text-orange-600 transition-colors font-medium">SERVICES</a>
              <a href="#" className="text-white hover:text-orange-600 transition-colors font-medium">ABOUT</a>
              <a href="#" className="text-white hover:text-orange-600 transition-colors font-medium">TRAINERS</a>
              <a href="#" className="text-white hover:text-orange-600 transition-colors font-medium">BLOG</a>
              <a href="#" className="text-white hover:text-orange-600 transition-colors font-medium">CONTACT</a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
