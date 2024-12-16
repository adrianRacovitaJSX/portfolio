'use client';
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  delay?: number;
}

export const BorderBeam = ({
  className,
  size = 800, 
  duration = 2, 
  borderWidth = 0.6,
  delay = 0,
}: BorderBeamProps) => {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--border-width": borderWidth,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 h-[calc(var(--border-width)*1px)] w-full",
        "overflow-hidden",
        
        // Beam effect
        "after:absolute after:h-full after:w-[calc(var(--size)*1px)]",
        "after:animate-border-beam-bottom after:[animation-delay:var(--delay)]",
        "after:[background:linear-gradient(to_right,transparent,#34D399_40%,#065F46_60%,transparent)]",
        
        className,
      )}
    />
  );
};