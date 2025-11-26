import { motion, useAnimation } from "framer-motion";
import { useEffect,useState } from "react";
import { HandwrittenEffect } from "../funcs/Textfx";
const items = [
  "Music video concept clips with AAA visual quality",
  "Action scenes with consistent movement and continuity",
  "Hyper-realistic portraits",
  "Fantasy and sci-fi scenes with stable visual identity",
  "Promotional visuals for digital campaigns",
  "Concept trailers and short cinematic sequences"
];

function TextRotator({
  items = [],
  fontSize = 20,
  itemHeight = 80,
  duration = 0.8,
  hold = 1.4,
  easing = [0.25, 1, 0.25, 1],
  startDelay = 0 
}) {
  const controls = useAnimation();

  useEffect(() => {
    if (!items || items.length === 0) return;
    let mounted = true;

    (async () => {
      // Logic for the text rotation loop
      if (startDelay > 0) {
        await new Promise((res) => setTimeout(res, (startDelay * 1000) + 500)); 
      }

      if (!mounted) return;

      let i = 0;
      await controls.start({ y: 0, transition: { duration: 0 } });

      while (mounted) {
        await new Promise((res) => setTimeout(res, hold * 1000));

        const next = (i + 1) % items.length;
        const targetY = -next * itemHeight;

        await controls.start({
          y: targetY,
          transition: { duration, ease: easing }
        });

        i = next;
      }
    })();

    return () => {
      mounted = false;
    };
  }, [items, itemHeight, duration, hold, easing, controls, startDelay]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }} 
      whileInView={{ opacity: 1, x: 0 }} // <--- Changed from 'animate' to 'whileInView'
      viewport={{ once: true }}          // <--- Only happens once
      transition={{ 
        duration: 0.8, 
        delay: startDelay, 
        ease: "easeOut" 
      }}
      style={{ height: `${itemHeight}px`, overflow: "hidden" }}
    >
      <motion.div animate={controls} initial={{ y: 0 }}>
        {items.map((text, idx) => (
          <div
            key={idx}
            className="rounded-sm font-bold md:text-[35px] md:font-light md:font-anton flex bg-main items-center justify-center md:tracking-wider px-4"
            style={{
              height: `${itemHeight}px`,
              // fontSize: `${fontSize}px`
            }}
          >
            {text}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function Todevelop() {

  
  return (
    <>
      <div className="section md:mb-18  bg-black relative">
        {/* <video
          className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.15]  "
          src="./bgs/bg3.webm"
          autoPlay
          loop
          muted
          playsInline
        /> */}
        <img src="./bgs/bg3.webp" className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.15]  " />


        <div className="w-[80%]">
          <div className="text">
            <h2 className="text-white text-[32px] md:text-center mb-4 font-nycd">
              <HandwrittenEffect  text={'We work with creators, brands, and international studios to develop'}
              delay={0.2}
              />
              
            </h2>
          </div>

          <TextRotator
            fontSize={35}
            items={items}
            itemHeight={80}
            duration={1}
            hold={1.4}
            easing={[0.32, 0.72, 0, 1]}
            startDelay={1.4}
          />
          <h2 className="text-white text-[25px] md:text-center mt-5 font-nycd">
            <HandwrittenEffect delay={1.6} text={'always ensuring control over lighting, angles, continuity, atmosphere and visual storytelling'}/>
            
          </h2>
        </div>
      </div>
    </>
  );
}

export default Todevelop;
