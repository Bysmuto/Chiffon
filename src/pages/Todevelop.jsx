import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
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
  itemHeight = 80, // px
  duration = 0.8, // seconds (time to animate between items)
  hold = 1.4, // seconds (time to stay on each item)
  easing = [0.25, 1, 0.25, 1]
}) {
  const controls = useAnimation();

  useEffect(() => {
    if (!items || items.length === 0) return;
    let mounted = true;

    (async () => {
      let i = 0;
      // start at first item
      await controls.start({ y: 0, transition: { duration: 0 } });

      while (mounted) {
        // stay on current item
        await new Promise((res) => setTimeout(res, hold * 1000));

        // calc next index
        const next = (i + 1) % items.length;
        const targetY = -next * itemHeight;

        // animate to next
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
  }, [items, itemHeight, duration, hold, easing, controls]);

  return (
    <div style={{ height: `${itemHeight}px`, overflow: "hidden" }}>
      <motion.div animate={controls} initial={{ y: 0 }}>
        {items.map((text, idx) => (
          <div
            key={idx}
            className="rounded-sm font-anton flex bg-[var(--color1)] items-center justify-center tracking-wider  px-4"
            style={{
              height: `${itemHeight}px`,
              fontSize: `${fontSize}px`
            }}
          >
            {text}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function Todevelop() {
  return (
    <>
      <div className="section mb-16 bg-[var(--color2)] bg-black relative">
        <video
          className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.15] -z-50 "
          src="./bgs/bg3.webm"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="w-[80%]">
          <div className="text">
            <h2 className="text-white text-[32px] text-center mb-4 font-nycd">
              <HandwrittenEffect text={'We work with creators, brands, and international studios to develop'}/>
              
            </h2>
          </div>

          <TextRotator
            fontSize={35}
            items={items}
            itemHeight={80}
            duration={1}
            hold={1}
            easing={[0.32, 0.72, 0, 1]}
          />
          <h2 className="text-white text-[25px] text-center mt-5 font-nycd">
            <HandwrittenEffect text={'always ensuring control over lighting, angles, continuity, atmosphere and visual storytelling'}/>
            
          </h2>
        </div>
      </div>
    </>
  );
}

export default Todevelop;
