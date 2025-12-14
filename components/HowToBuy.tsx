import React from 'react';
import AnimatedSection from './AnimatedSection';
import PillIcon from './icons/PillIcon';
import XIcon from './icons/XIcon';
import LivePumpFunIcon from './icons/PumpFunIcon';
import dollaSign from './icons/dollasign.png'; // use PNG instead of component
import pillChristmas from './icons/PillChristmasV2.png';

const HowToBuy: React.FC = () => {
  const coinUrl = "https://pump.fun";

  const steps = [
    'DOWNLOAD PUMP.FUN',
    'OPEN PUMP.FUN',
    'CREATE ACCOUNT',
    'CLICK PROFILE ICON',
    'SELECT "INSTANT DEPOSIT"',
    'CHOOSE AMOUNT TO DEPOSIT',
    'CONFIRM TRANSACTION',
    'APE',
  ];

  return (
    <AnimatedSection className="bg-[#1e1e1e] border-[0.3vh] border-red-600 p-[5vh] rounded-lg flex flex-col justify-between">
      <div>
        <h3 className="font-display text-[5vh] text-center text-white mb-[4vh] flex items-center justify-center">
          <img
            src={dollaSign}
            alt="Recruitmas Logo"
            className="h-[0.9em] w-auto mr- object-contain relative top-[-0.05em]"  // mr-2 → mr-4
            style={{ filter: 'grayscale(100%) brightness(1000%)' }}
          />
          RECRUITMAS
        </h3>
        <ul className="space-y-[2vh]">
          {steps.map((step, index) => (
            <li key={index} className="flex items-center">
              <img src={pillChristmas} alt="Christmas Pill" className="w-[4vh] h-[4vh] mr-[2vh] object-contain" />
              <span className="font-display text-[2.5vh] tracking-wide text-gray-200">{step}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-[6vh] text-center">
        <div className="border-t border-red-800 w-1/2 mx-auto"></div>
        <p className="font-display text-red-500 mt-[2vh]">SIGN UP TO JOIN THE TRENCHES</p>
        <div className="mt-[3vh] flex justify-center items-center space-x-[2vh]">
          <div className="flex items-center space-x-[1.5vh]">
            <a
              href="https://x.com/RECRUIT_PF"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X page"
            >
              <XIcon className="w-[2.5vh] h-[2.5vh] hover:text-red-500 transition-colors" />
            </a>
            <span className="font-display text-white-400 ">RECRUITMAS_PF</span>
          </div>
          <a
            href={coinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <LivePumpFunIcon />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HowToBuy;
