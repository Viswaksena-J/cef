"use client";

import { useEffect, useState } from 'react';
import { motion, useSpring, useInView } from 'framer-motion';
import { useRef } from 'react';

export const AnimatedNumber = ({ value, text, color = 'text-[#90c459]' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    stiffness: 80,
    damping: 20
  });
  
  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [spring, isInView, value]);
  
  useEffect(() => {
    return spring.onChange(latest => {
      setCount(Math.floor(latest));
    });
  }, [spring]);
  
  return (
    <div ref={ref} className="flex flex-col items-center">
      <motion.h2 
        className={`text-6xl md:text-7xl font-bold ${color}`}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {count.toLocaleString()}+
      </motion.h2>
      <p className="text-white text-center mt-2">{text}</p>
    </div>
  );
}; 