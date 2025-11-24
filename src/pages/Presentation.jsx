import { HandwrittenEffect } from "../funcs/Textfx";
import { motion } from "framer-motion";
const texts = [
  `We turn ideas into cinematic visuals, with extreme attention to lighting, texture, detail, and atmosphere.`,
  `We turn ideas into cinematic visuals, with extreme attention to lighting, texture, detail, and atmosphere.`
];

const displayText = texts.join(" • ");

const intro = 5.5


function InfiniteCarousel({ delay = 0 }) {
  // Define your text content

  return (
    <motion.div
      className="w-full py-3 bg-black font-anton tracking-wide overflow-hidden flex group"
      initial={{ opacity: 0, x: -200 }}
      // 1. Only run this when the user scrolls to it
      whileInView={{ opacity: 1, x: 0 }}
      // 2. Play it once and don't reset it
      viewport={{ once: true }}
      transition={{
        duration: 1.8,
        delay: delay,
        ease: "easeOut"
      }}
    >
      {/* Track 1 */}
      <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
        <span className="text-2xl  text-white mx-4">{displayText}</span>
        <span className="text-2xl text-white mx-4">•</span>
      </div>

      {/* Track 2 */}
      <div
        className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]"
        aria-hidden="true"
      >
        <span className="text-2xl text-white mx-4">{displayText}</span>
        <span className="text-2xl text-white mx-4">•</span>
      </div>
    </motion.div>
  );
}
export default function Presentation() {
  return (
    <div
      className="
       section bg-main b relative  overflow-hidden
      "
    >
      <video
        className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.2] mix-blend-darken -z-50 "
        src="./bgs/bg1.webm"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="container w-[85%] flex flex-col   ">
        <motion.div
          initial={{
            y: -120,
            opacity: 0
          }}
          whileInView={{
            y: 0,
            opacity: 1
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: "spring",
            mass: 2.5,
            stiffness: 180,
            damping: 12,
            delay:intro+ 0.2
          }}
        >
          {" "}
          <img className="w-[700px] " src="./logo.webp" />
        </motion.div>

        <h2 className="text-xl md:text-[26px] font-nycd  my-3">
          <HandwrittenEffect
            text={
              "A creative studio specializing in hyper-realistic image and video production powered by AI"
            }
            delay={intro+0.5}
          />
        </h2>

        <InfiniteCarousel delay={intro+1} />
      </div>
    </div>
  );
}
