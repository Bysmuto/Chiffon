import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import your pages
import ChiffonAi from "./pages/chiffonAi";
import Presentation from "./pages/Presentation";
import Works from "./pages/Works";
import Brands from "./pages/Brands";
import Todevelop from "./pages/Todevelop";
import Contact from "./pages/Contact";

// 1. The Wrapper Component for the Fold Animation
const FoldSection = ({ children, isLast }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [-20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const brightness = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  return (
    <motion.div
      ref={ref}
      className="section"
      style={{
        // 👇 CHECK: If it's the last one, normal height. If not, extra long.
        height: isLast ? '100vh' : '120vh',
        paddingBottom: isLast ? '0' : '20vh',
        
        position: 'sticky',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 -15px 15px rgba(36, 36, 36, 0.2)',
        overflow: 'hidden',
        perspective: '1000px',
        transformOrigin: 'top center',
        rotateX,
        scale,
        filter: useTransform(brightness, b => `brightness(${b})`),
        zIndex: 10
      }}
    >
      {children}
    </motion.div>
  );
};
const intro =5.5

// 2. The Main App Component
function App() {
  
  // Logic to lock scroll for 5.5 seconds
  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';

    // Timer matches your intro time
    const timer = setTimeout(() => {
      // Unlock scroll
      document.body.style.overflow = 'unset';
    }, intro*1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ChiffonAi time={intro} />
      
      <div style={{ perspective: "1000px", background: "#000" }}>
        {/* <video
          className="fixed inset-0 pointer-events-none z-[9999] w-full h-full object-cover opacity-[0.09] mix-blend-screen"
          src="overlay.webm"
          autoPlay
          loop
          muted
          playsInline
        /> */}

        <FoldSection>
          <Presentation intro={intro}/>
        </FoldSection>

        <FoldSection>
          <Works />
        </FoldSection>

        <FoldSection>
          <Todevelop />
        </FoldSection>

        <FoldSection>
          <Brands />
        </FoldSection>

        <FoldSection isLast={true}>
  <Contact />
</FoldSection>
      </div>
    </>
  );
}

export default App;