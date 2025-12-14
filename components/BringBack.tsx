import React from 'react';
import AnimatedSection from './AnimatedSection';
import PillIcon from './icons/PillIcon';
import helmetLogo from './icons/RecruitHat.jpg';
import pillChristmas from './icons/PillChristmasV2.png';

import christmasPattern from './icons/ChristmasPattern.png';

const BringBack: React.FC = () => {
  const coinUrl = "https://pump.fun";

  return (
    <section className="py-[9vh] sm:py-[15vh] bg-gradient-to-b from-red-950 to-black text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none" style={{ backgroundImage: `url(${christmasPattern})` }} />
      <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-display text-[6vh] md:text-[8.4vh] text-red-600 drop-shadow-md" style={{ WebkitTextStroke: '0.8px black' }}>
          JOIN THE TRENCHES
        </h2>
        <div className="mt-[6vh] flex justify-center relative">
          <img src={pillChristmas} alt="Christmas Pill" className="absolute -top-[5vh] -z-0 w-[24vh] h-[24vh] opacity-20 object-contain" />
          <img src={helmetLogo} alt="$RECRUITMAS Helmet Logo" className="w-full max-w-[79vh] drop-shadow-2xl" />
        </div>
        <div className="mt-[4vh] mx-auto max-w-[85vh] backdrop-blur-[3px] bg-black/[0.15] rounded-3xl p-6 border border-white/10 shadow-xl">
          <p className="text-red-500 text-[3.6vh] leading-[1.5] max-w-[75vh] mx-auto" style={{ fontFamily: 'Unkempt, cursive', fontWeight: '900', WebkitTextStroke: '1.0px black' }}>
            The trenches opened a new world for many of us.<br />But most people still don’t know they exist.<br /><br />This RECRUITMAS, we take it to the streets - introducing normies to the trenches through real gifts and real guidance.
          </p>
          <p className="mt-[2vh] text-red-500 text-[3.6vh] font-bold leading-[1.5]" style={{ fontFamily: 'Unkempt, cursive', fontWeight: '900', WebkitTextStroke: '1.0px black' }}>Recruiting normies - one gift at a time.</p>
        </div>
        <div className="mt-[5vh]">
          <a href={coinUrl} target="_blank" rel="noopener noreferrer" className="bg-red-600 text-black border-4 border-red-600 font-bold py-[1.5vh] px-[4vh] rounded-full hover:bg-red-500 transition-all duration-300 transform hover:scale-105 text-[2vh]">
            ENLIST NOW
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default BringBack;