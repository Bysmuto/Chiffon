import { useId } from "react";
import { HandwrittenEffect } from "../funcs/Textfx";
import { motion } from "framer-motion";
const logos = [
  {
    name: "",
    icon: <img className="h-[90%] w-[90%]" src="./logos/1.webp" />
  },
  {
    name: "",
    icon: <img className="h-[90%] w-[90%]" src="./logos/2.webp" />
  },
  {
    name: "",
    icon: <img className="h-[90%] w-[90%]" src="./logos/3.webp" />
  },
  {
    name: "",
    icon: <img className="h-[90%] w-[90%]" src="./logos/4.webp" />
  },
  {
    name: "",
    icon: <img className="h-[90%] w-[90%]" src="./logos/5.webp" />
  },
  {
    name: "",
    icon: <img className="h-[90%] w-[90%]" src="./logos/6.webp" />
  },
  {
    name: "",
    icon: <img className="h-[90%] w-[90%]" src="./logos/7.webp" />
  },
  {
    name: "",
    icon: <img className="h-[90%] w-[90%]" src="./logos/8.webp" />
  }
];

const LogoCarousel = ({ logos = [], speed = 20, className = "", color }) => {
  // Use React's hook to guarantee a unique ID for this instance
  const uniqueId = useId();

  // Use the ID to create unique class names
  const animationName = `infinite-scroll-${uniqueId}`;
  const animationClass = `animate-${animationName}`;

  const infiniteLogos = [...logos, ...logos];

  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      {/* 2. Inject the unique animation styles */}
      <style>{`
        @keyframes ${animationName} {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        .${animationClass} {
          /* Use the 'speed' prop directly for this unique instance */
          animation: ${animationName} ${speed}s linear infinite; 
        }
        .${animationClass}:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Apply the unique class name */}
      <div className={`flex w-max ${animationClass}`}>
        {infiniteLogos.map((logo, index) => (
          <div
            key={index}
            className={`mx-4 flex-shrink-0 flex flex-col items-center justify-center`}
          >
            <div
              className={`flex items-center justify-center  ${className}`}
              style={{ background: color }}
            >
              {logo.icon}
            </div>

            {logo.name && <span className="mt-2 text-sm font-medium">{logo.name}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

function Brands() {
  return (
    <div className="section  bg-white relative overflow-hidden mb-16">
      <div className="absolute opacity-[0.12] inset-0 flex flex-col justify-between pointer-events-none">
        <LogoCarousel speed={40} logos={logos} className="h-[50px]   " />

        <LogoCarousel speed={50} logos={logos} className="h-[120px]  " />

        <LogoCarousel speed={60} logos={logos} className="h-[320px] " />

        <LogoCarousel speed={40} logos={logos} className="h-[100px]  " />
      </div>

      <div className="w-[90%] p-1 md:w-[70%] relativev z-10 flex flex-col">
        <h1 className="font-anton text-7xl md:text-8xl md:text-center ">
          <HandwrittenEffect delay={0.5} text={"Brands"} />
        </h1>
        <motion.div
          initial={{
            x: -60, // Start 400px up in the air
            opacity: 0 // Invisible
            // Tilted left for character
          }}
          // 2. Trigger: When in view, drop to the ground
          whileInView={{
            x: 0, // Land on the ground line
            opacity: 1 // Become visible
            // Straighten out upon impact
          }}
          // 3. Run once when 50% visible
          viewport={{ once: true, amount: 0.5 }}
          // 4. The "Cartoon Physics" Engine
          transition={{
            type: "spring", // Use physics, not time duration
            mass: 1.5, // Makes it feel heavy (slower bounces)
            stiffness: 180, // How snappy the spring is
            damping: 12, // How bouncy it is (lower = more bouncy)
            delay: 0.6 // A tiny beat before dropping
          }}
        >
          <p className="mb-3 text-xl md:text-2xl font-nycd  tracking-wide  md:text-center">
            some of the companies that have trusted us with their visual production
          </p>
        </motion.div>

        <motion.div
          initial={{
            x: -120,
            opacity: 0
          }}
          whileInView={{
            x: 0,
            opacity: 1
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: "spring",
            mass: 2.5,
            stiffness: 180,
            damping: 12,
            delay: 1
          }}
          className="  bg-black p-3 rounded-lg"
        >
          <LogoCarousel speed={15} logos={logos} className="h-[60px]  md:h-20 rounded-lg" color={"#fdff73"} />
        </motion.div>
      </div>
    </div>
  );
}

export default Brands;
