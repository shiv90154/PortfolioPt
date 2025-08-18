// src/components/SmoothScroll.jsx
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.1,  // Animation smoothness (0.1 = smooth but slower)
      smoothWheel: true,
    });

    // 2. RAF loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 3. Cleanup
    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}