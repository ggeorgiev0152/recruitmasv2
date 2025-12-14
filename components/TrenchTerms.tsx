import React, { useState, MouseEvent } from 'react';
import AnimatedSection from './AnimatedSection';
import dollaSign from './icons/dollasign.png'; // use PNG instead of component

interface PlusOne {
  id: number;
  x: number;
  y: number;
}

const TrenchTerms: React.FC = () => {
  const [plusOnes, setPlusOnes] = useState<PlusOne[]>([]);

  const terms = [
    { term: 'TRENCHES', def: 'MEMECOIN TRADING WORLD' },
    { term: 'TRENCHING', def: 'MEMECOIN TRADING' },
    { term: 'TRENCHER', def: 'MEMECOIN TRADER' },
    { term: 'APE', def: 'BUY A COIN WITHOUT DOING RESEARCH' },
    { term: 'PUMP', def: 'WHEN A COIN’S PRICE SHOOTS FAST' },
    { term: 'BULL', def: 'BELIEVING THE CRYPTO MARKET WILL GROW' },
    { term: 'BEAR', def: 'BELIEVING THE CRYPTO MARKET WILL DECLINE' },
    { term: 'MC', def: 'MARKET CAP OF GIVEN COIN' },
    { term: 'ATH', def: 'ALL-TIME HIGH OF A COIN' },
    { term: 'JEET', def: 'EXITING A TRADE TOO EARLY' },
    { term: 'DIAMOND HANDS', def: 'HOLDING STRONG DESPITE VOLATILITY' },
    { term: 'FOMO', def: 'FEAR OF MISSING OUT DUE TO HYPE' },
    { term: 'MOON', def: 'WHEN A COIN PUMPS AND GROWS FAST IN MC' },
    { term: 'LIQUIDITY', def: 'MONEY POOL ALLOWING BUY + SELL' },
    { term: 'DEV', def: 'CREATOR OF A COIN' },
    { term: 'RUG PULL', def: 'WHEN A DEV DRAINS ALL LIQUIDITY/MONEY' },
    { term: 'DEGEN', def: 'TRENCHER WHO TRADES WITHOUT THINKING' },
    { term: 'SHILL', def: 'SHARING/PUSHING A COIN' },
    { term: 'CONVICTION', def: "BELIEVING IN A COIN'S POTENTIAL" },
    { term: 'TOP BLAST', def: 'BUYING A COIN AT ITS ATH' },
  ];

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    // Prevent firing on interactive elements
    if (
      e.target instanceof HTMLInputElement ||
      e.target instanceof HTMLButtonElement ||
      e.target instanceof HTMLAnchorElement
    ) {
      return;
    }

    const newId = Date.now() + Math.random();
    const x = e.clientX + (Math.random() - 0.5) * 40;
    const y = e.clientY + (Math.random() - 0.5) * 40;

    const newPlusOne: PlusOne = { id: newId, x, y };
    setPlusOnes(prev => [...prev, newPlusOne]);

    setTimeout(() => {
      setPlusOnes(prev => prev.filter(p => p.id !== newId));
    }, 1000);
  };

  return (
    <AnimatedSection
      className="bg-[#1e1e1e] border-[0.3vh] border-red-600 p-[4vh] rounded-lg relative overflow-hidden"
      onClick={handleClick}
    >
      {/* floating +1 animations */}
      {plusOnes.map(p => (
        <div
          key={p.id}
          className="absolute text-red-600 font-bold text-[2.5vh] pointer-events-none select-none animate-floatUp"
          style={{ left: p.x, top: p.y }}
        >
          +1
        </div>
      ))}

      <h3 className="font-display text-[6vh] text-center text-white mb-[5vh]">
        TRENCH TERMS
      </h3>
      <div className="space-y-[1.8vh]">
        {terms.map((item, index) => (
          <p key={index} className="font-display text-[2.2vh] tracking-wide">
            <span className="text-red-500">{item.term}</span> –{' '}
            <span className="text-gray-300">{item.def}</span>
          </p>
        ))}
      </div>
      <h4 className="font-display text-[4.5vh] text-center text-white mt-[6vh] flex items-center justify-center">
        <img
          src={dollaSign}
          alt="Recruitmas Logo"
          className="h-[0.9em] w-auto mr-0 object-contain relative top-[-0.03em]"
          style={{ filter: 'grayscale(100%) brightness(1000%)' }}
        />
        RECRUITMAS
      </h4>
    </AnimatedSection>
  );
};

export default TrenchTerms;
