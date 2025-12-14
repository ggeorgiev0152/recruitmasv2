import React from 'react';
import AnimatedSection from './AnimatedSection';
import PillIcon from './icons/PillIcon';
import pillChristmas from './icons/PillChristmasV2.png';

const MemeRevival: React.FC = () => {
  return (
    <section className="bg-red-950 py-[9vh] sm:py-[12vh]">
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-[6vh] items-center">
        <div className="flex justify-center md:justify-start">
          <img src={pillChristmas} alt="Christmas Pill" className="w-[28vh] h-[28vh] md:w-[38vh] md:h-[38vh] coin-float object-contain" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-display text-[4vh] md:text-[5.5vh] text-red-500">The Recruitment</h3>
          <p className="mt-[3vh] text-gray-300 leading-relaxed text-[3vh]" style={{ fontFamily: 'Unkempt, cursive', fontWeight: 'bold' }}>
            We introduce people to the trenches with real gifts and guide them into pump.fun
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default MemeRevival;