import { HandwrittenEffect } from "../funcs/Textfx";

const texts = [
  `We turn ideas into cinematic visuals, with extreme attention to lighting, texture, detail, and atmosphere.`,
  `We turn ideas into cinematic visuals, with extreme attention to lighting, texture, detail, and atmosphere.`
];

const displayText = texts.join(" • ");

function InfiniteCarousel() {
  return (
    <div className="w-full py-3 bg-black overflow-hidden flex group">
      {/* Track 1 */}
      <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
        <span className="text-2xl text-white mx-4">{displayText}</span>
        <span className="text-2xl text-white mx-4">•</span>
      </div>

      {/* Track 2 (Duplicate for seamless loop) */}
      <div
        className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]"
        aria-hidden="true"
      >
        <span className="text-2xl text-white mx-4">{displayText}</span>
        <span className="text-2xl text-white mx-4">•</span>
      </div>
    </div>
  );
}

export default function Presentation() {
  return (
    <div
      className="
       section bg-[var(--color1)]   relative  overflow-hidden
      "
    >
      <video
        className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.25] -z-50 "
        src="./bgs/bg1.webm"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="container w-[85%] flex flex-col   ">
        <video className="w-[700px] " src="./logo.webm" autoPlay loop muted playsInline />

        <h2 className="text-[26px] font-nycd my-3">
          <HandwrittenEffect
            text={
              "A creative studio specializing in hyper-realistic image and video production powered by AI"
            }
          />
        </h2>

        <InfiniteCarousel />
      </div>
    </div>
  );
}
