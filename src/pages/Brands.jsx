import { useId } from "react";
import { HandwrittenEffect } from "../funcs/Textfx";
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

const LogoCarousel = ({ logos = [], speed = 20, className = "",color }) => {
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
            <div className={`flex items-center justify-center  ${className}`} 
              style={{ background:color}}
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

      <div className="w-[70%] relativev z-10 flex flex-col">
        <h1 className="font-nycd text-8xl text-center "><HandwrittenEffect text={'Brands'}/></h1>
        <p className="mb-8 text-2xl font-anton  tracking-wide  text-center">
          some of the companies that have trusted us with their visual production
        </p>
        <div className=" bg-[var(--color1)] bg-black p-3 rounded-lg">
          <LogoCarousel speed={15} logos={logos} className="h-20 rounded-lg" color={'#feff88'}/>
        </div>
      </div>
    </div>
  );
}

export default Brands;
