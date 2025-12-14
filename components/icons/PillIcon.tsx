import React from 'react';

const PillIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="-10 -10 52 52"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g transform="rotate(45 16 16)">
      {/* Red Hat (Behind) */}
      <path
        d="M8,8 C8,2 20,-6 24,8 L24,8"
        fill="#D42426"
        stroke="#232947"
        strokeWidth="3"
      />
      <circle cx="28" cy="18" r="4" fill="white" stroke="#232947" strokeWidth="2" />

      {/* Bottom Green part */}
      <path
        d="M8,16 L8,24 C8,28.4183 11.5817,32 16,32 C20.4183,32 24,28.4183 24,24 L24,16 Z"
        fill="#00B140"
      />
      {/* Top White part */}
      <path
        d="M24,16 L24,8 C24,3.58172 20.4183,0 16,0 C11.5817,0 8,3.58172 8,8 L8,16 Z"
        fill="#FFFFFF"
      />

      {/* Hat Brim overlay (White band at top) - approximated by just being the white top part, 
          but let's add a specific band if we want it to look like a hat on top. 
          Actually, the white top part of the pill serves well as the 'brim' or white cuff of the hat 
          if the hat is flopped over.
          Let's add a proper red hat shape flopping over.
      */}

      {/* Re-drawing Hat to be more visible and distinct */}
      {/* Hat Main Body */}
      <path
        d="M8,6 Q6,-5 16,-8 Q26,-5 24,6"
        fill="#D42426"
        stroke="#232947"
        strokeWidth="3"
      />
      {/* Hat ball */}
      <circle cx="26" cy="4" r="3.5" fill="white" stroke="#232947" strokeWidth="2" />

      {/* Outline of Pill Main Body (Redrawn on top to be clean) */}
      <path
        d="M16,0 C11.5817,0 8,3.58172 8,8 L8,24 C8,28.4183 11.5817,32 16,32 C20.4183,32 24,28.4183 24,24 L24,8 C24,3.58172 20.4183,0 16,0 Z"
        stroke="#232947"
        strokeWidth="3"
        fill="none"
      />

      {/* Center line */}
      <line
        x1="8"
        y1="16"
        x2="24"
        y2="16"
        stroke="#232947"
        strokeWidth="3"
      />
    </g>
  </svg>
);

export default PillIcon;