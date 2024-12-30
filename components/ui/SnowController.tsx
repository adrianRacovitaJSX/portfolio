"use client";

import React, { useState, useEffect } from 'react';
import { Snowflake } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useSnow } from './SnowProvider';

interface SnowflakeType {
  id: number;
  style: {
    left: string;
    animationDuration: string;
    transform: string;
  };
}

const SnowflakeIcon = () => (
  <div className="absolute text-blue-300/70 dark:text-slate-200/70">❄</div>
);

export const SnowToggle = () => {
  const { isSnowing, toggleSnow } = useSnow();
  
  return (
    <button
      onClick={toggleSnow}
      className="p-2 rounded-full 
                 bg-white/10 dark:bg-black/50 
                 hover:bg-white/20 dark:hover:bg-black/70 
                 backdrop-blur-sm transition-colors duration-300
                 text-slate-700 dark:text-slate-200"
      aria-label={isSnowing ? 'Desactivar nieve' : 'Activar nieve'}
    >
      <Snowflake 
        size={20} 
        className={`transition-transform duration-300 ${isSnowing ? 'rotate-0' : '-rotate-90'}`}
      />
    </button>
  );
};

const SnowContainer = ({ snowflakes }: { snowflakes: SnowflakeType[] }) => (
  <div id="snow-container" className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
    {snowflakes.map((snowflake) => (
      <div
        key={snowflake.id}
        style={snowflake.style}
        className="animate-fall"
      >
        <SnowflakeIcon />
      </div>
    ))}
  </div>
);

const SnowController = () => {
  const [snowflakes, setSnowflakes] = useState<SnowflakeType[]>([]);
  const { isSnowing } = useSnow();

  const createSnowflake = (): SnowflakeType => {
    const id = Math.random();
    const left = Math.random() * 100;
    const animationDuration = 7 + Math.random() * 13;
    const size = 0.5 + Math.random() * 1;

    return {
      id,
      style: {
        left: `${left}%`,
        animationDuration: `${animationDuration}s`,
        transform: `scale(${size})`,
      }
    };
  };

  useEffect(() => {
    if (!isSnowing) {
      setSnowflakes([]);
      return;
    }

    const interval = setInterval(() => {
      setSnowflakes(prev => {
        if (prev.length >= 50) {
          const [, ...rest] = prev;
          return [...rest, createSnowflake()];
        }
        return [...prev, createSnowflake()];
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isSnowing]);

  useEffect(() => {
    const cleanup = setInterval(() => {
      setSnowflakes(prev => prev.slice(-30));
    }, 10000);

    return () => clearInterval(cleanup);
  }, []);

  return (
    <>
      <SnowToggle />
      {typeof window !== 'undefined' && createPortal(
        <SnowContainer snowflakes={snowflakes} />,
        document.body
      )}
      
      <style jsx global>{`
        @keyframes fall {
          0% {
            transform: translateY(-5vh) rotate(0deg);
          }
          100% {
            transform: translateY(105vh) rotate(360deg);
          }
        }
        .animate-fall {
          position: absolute;
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: 1;
        }
      `}</style>
    </>
  );
};

export default SnowController;