import React from 'react';
import XIcon from './icons/XIcon';
import PillIcon from './icons/PillIcon';
// import DollarSignIcon from './icons/DollarSignIcon'; // remove this
import dollaSign from './icons/dollasign.png'; // ✅ import your PNG instead
import pillChristmas from './icons/PillChristmasV2.png';

const Header: React.FC = () => {
  const coinUrl = "https://pump.fun";

  return (
    <header className="py-2 sm:py-[1.5vh] px-4 sm:px-[3vh] lg:px-[4vh] bg-[#1a1a1a] bg-opacity-80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-display text-[3vh] sm:text-[4.1vh] text-red-500 flex items-center leading-none">
          <img
            src={dollaSign}
            alt="Recruitmas Logo"
            className="h-[2.5vh] sm:h-[3.5vh] w-auto mr-1 sm:mr-[0.1vh] object-contain"
            style={{ filter: 'grayscale(100%) brightness(1000%)' }}
          />
          RECRUITMAS
        </h1>

        {/* Right-side links */}
        <div className="flex items-center space-x-3 sm:space-x-[2.2vh]">
          {/* X link */}
          <a
            href="https://x.com/RECRUIT_PF"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X page"
            className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125"
          >
            <XIcon className="w-[2.4vh] h-[2.4vh]" />
          </a>

          {/* pump.fun link */}
          <a
            href={coinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-.4 text-gray-400 hover:text-white transition-colors font-bold text-[2.64vh]"
          >
            <img src={pillChristmas} alt="Christmas Pill" className="w-[2.4vh] h-[2.4vh] mr-1 sm:mr-[1vh] object-contain" />
            <span className="hidden sm:inline">pump.fun</span>
          </a>

          {/* Buy Now button */}
          <a
            href={coinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-black font-bold py-1 px-3 sm:py-[0.6vh] sm:px-[1.7vh] rounded-full hover:bg-red-500 transition-all duration-300 transform hover:scale-105 text-sm sm:text-[2.2vh]"
          >
            Buy Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
