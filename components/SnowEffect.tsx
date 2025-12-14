
import React, { useEffect, useState } from 'react';

const SnowEffect: React.FC = () => {
    const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: number; duration: number; delay: number; size: number }>>([]);

    useEffect(() => {
        const count = 50; // Number of snowflakes
        const newSnowflakes = Array.from({ length: count }).map((_, i) => ({
            id: i,
            left: Math.random() * 100, // Percentage
            duration: Math.random() * 5 + 5, // 5-10 seconds
            delay: Math.random() * 5, // 0-5 seconds
            size: Math.random() * 1 + 0.5, // 0.5rem - 1.5rem
        }));
        setSnowflakes(newSnowflakes);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
            <style>
                {`
          @keyframes snowfall {
            0% {
              transform: translateY(-10vh) translateX(0);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            100% {
              transform: translateY(110vh) translateX(20px);
              opacity: 0.3;
            }
          }
          .snowflake {
            position: absolute;
            top: -2rem;
            color: white;
            opacity: 0.8;
            animation-name: snowfall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}
            </style>
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="snowflake"
                    style={{
                        left: `${flake.left}%`,
                        fontSize: `${flake.size}rem`,
                        animationDuration: `${flake.duration}s`,
                        animationDelay: `-${flake.delay}s`, // Negative delay start immediately
                    }}
                >
                    ❄
                </div>
            ))}
        </div>
    );
};

export default SnowEffect;
