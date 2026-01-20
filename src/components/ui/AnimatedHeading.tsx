"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedHeading = ({ children, className }: AnimatedHeadingProps) => {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      const text = new SplitType(headingRef.current, {
        types: 'lines',
        lineClass: 'overflow-hidden'
      });

      gsap.from(text.lines, {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "expo.inOut",
        transformOrigin: "left top"
      });

      return () => text.revert();
    }
    return;
  }, []);

  return (
    <h1 ref={headingRef} className={className}>
      {children}
    </h1>
  );
};

export default AnimatedHeading;