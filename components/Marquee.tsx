import React from 'react';
import dollaSign from './icons/dollasign.png'; // use PNG instead of component

interface MarqueeProps {
  reverse?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ reverse = false }) => {
  const MarqueeSegment: React.FC = () => (
    <span className="font-display text-[3vh] md:text-[4vh] tracking-wider text-white flex items-center flex-shrink-0 mx-[1vh]">
      <img
        src={dollaSign}
        alt="Recruit Logo"
        className="h-[0.99em] w-auto mx-0 object-contain relative top-[-0.05em]"
        style={{ filter: 'grayscale(100%) brightness(1000%)' }}
      />
      RECRUITMAS  • GIFTING NORMIES INTO THE TRENCHES IRL  •
    </span>
  );

  return (
    <div className="bg-black py-[2vh] overflow-hidden whitespace-nowrap">
      <div className={`marquee-track flex ${reverse ? 'reverse' : ''}`}>
        <div className="marquee-item flex">
          {Array.from({ length: 10 }).map((_, i) => (
            <MarqueeSegment key={`a-${i}`} />
          ))}
        </div>
        <div className="marquee-item flex" aria-hidden="true">
          {Array.from({ length: 10 }).map((_, i) => (
            <MarqueeSegment key={`b-${i}`} />
          ))}
        </div>
      </div>
      <style>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 44s linear infinite; /* faster + seamless */
        }
        .marquee-track.reverse {
          animation-direction: reverse;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .marquee-item {
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
