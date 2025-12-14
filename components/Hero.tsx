import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import helmetLogo from './icons/RecruitHat.jpg';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const contractAddress = 'CA coming soon... Check X for update!';

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate dynamic styles based on scroll
  const bgZoom = 1 + scrollY / 2000; // Gentle zoom in
  const parallaxOffset = scrollY * 0.3; // Parallax speed for the texture

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-[2vh] pt-[15vh] pb-[6vh] overflow-hidden">

      {/* BACKGROUND LAYERS */}
      {/* Layer 1: Main Background Image (Your image will go here) */}
      {/* This layer will have a subtle zoom effect on scroll */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          // TODO: Replace this placeholder URL with the image you will provide.
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-light.png")',
          transform: `scale(${bgZoom})`,
          willChange: 'transform',
        }}
      ></div>

      {/* Layer 2: Parallax Texture Overlay */}
      {/* This layer moves at a different speed to create a depth effect. */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/subtle-carbon.png")',
          transform: `translateY(${parallaxOffset}px)`,
          willChange: 'transform',
        }}
      ></div>

      {/* Layer 3: Darkening Overlay */}
      {/* This ensures the text on top is always readable. */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* HERO CONTENT */}
      <AnimatedSection className="relative z-10">
        <h2 className="font-display text-[3.5vh] md:text-[7vh] lg:text-[8vh] leading-tight drop-shadow-lg">
          RECRUITING NORMIES
        </h2>
        <h2 className="font-display text-[3.5vh] md:text-[7vh] lg:text-[8vh] leading-tight text-red-500 drop-shadow-lg mt-[1vh]">
          TO THE TRENCHES WITH EARLY CHRISTMAS GIFTS
        </h2>

        <div className="mt-[6vh] flex justify-center">
          <img src={helmetLogo} alt="$RECRUITMAS Helmet Logo" className="w-full max-w-[72vh] drop-shadow-2xl" />
        </div>

        <div className="mt-[6vh] w-full max-w-[67.5vh] mx-auto px-4 sm:px-0">
          <div className="flex items-center bg-gray-900 border border-gray-700 rounded-lg p-2 sm:p-[1.5vh]">
            <input
              type="text"
              readOnly
              value={contractAddress}
              className="bg-transparent text-gray-400 text-sm sm:text-[2.25vh] w-full outline-none truncate"
              style={{ fontFamily: 'Unkempt, cursive', fontWeight: 'bold' }}
            />
            <button
              onClick={handleCopy}
              className="bg-red-600 text-black font-bold text-sm sm:text-[2.25vh] py-2 px-3 sm:py-[1.5vh] sm:px-[3vh] rounded-md hover:bg-red-500 transition-colors w-auto sm:w-[18vh] flex-shrink-0 ml-2"
              style={{ fontFamily: 'Unkempt, cursive', fontWeight: 'bold' }}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        <p className="mt-[3vh] max-w-[90vh] mx-auto text-gray-300 text-[2.76vh]" style={{ fontFamily: 'Unkempt, cursive', fontWeight: 'bold' }}>
          Santa G came from the North Pole to hit the streets and recruit people into the trenches - giving out gifts live on pump.fun
        </p>
      </AnimatedSection>
    </section>
  );
};

export default Hero;