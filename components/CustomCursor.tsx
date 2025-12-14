import React, { useState, useEffect } from 'react';
import pillChristmas from './icons/PillChristmasV2.png';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Start off-screen

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setPosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div
      className="custom-cursor-wrapper"
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      <div className="custom-cursor-rotator">
        <img src={pillChristmas} alt="Cursor" className="w-[4.5vh] h-[4.5vh] object-contain" />
      </div>
    </div>
  );
};

export default CustomCursor;
