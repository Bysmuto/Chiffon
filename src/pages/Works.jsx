import { useState, useEffect } from "react";
import { HandwrittenEffect } from "../funcs/Textfx";
import { motion } from "framer-motion";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const [selectedSlide, setSelectedSlide] = useState(null);

  const next = () => setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  const prev = () => setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  useEffect(() => {
    if (selectedSlide) return;
    const timer = setInterval(() => {
      next();
    }, 2200);
    return () => clearInterval(timer);
  }, [current, selectedSlide]);

  const getSlideStyles = (index) => {
    if (index === current) return "z-20 scale-100 opacity-100 translate-x-0";
    const prevIndex = (current - 1 + slides.length) % slides.length;
    const nextIndex = (current + 1) % slides.length;
    if (index === prevIndex) return "z-10 scale-90 opacity-60 -translate-x-8 md:-translate-x-48 -rotate-3 md:-rotate-6 bg-main";
    if (index === nextIndex) return "z-10 scale-90 opacity-60 translate-x-8 md:translate-x-48 rotate-3 md:rotate-6 bg-main";
    return "opacity-0 pointer-events-none scale-50 z-0";
  };

  return (
    <>
      {/* Modal (No changes here) */}
      {selectedSlide && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm cursor-pointer"
          onClick={() => setSelectedSlide(null)}
        >
          <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button className="absolute top-5 right-5 text-white text-4xl">&times;</button>
            <div className="w-full h-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
              {selectedSlide.type === "video" ? (
                <iframe src={selectedSlide.src} className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen />
              ) : (
                <img src={selectedSlide.src} className="w-full h-full object-contain" alt={selectedSlide.title} />
              )}
            </div>
            <h2 className="text-white text-2xl mt-4 font-anton">{selectedSlide.title}</h2>
            <p className="text-gray-300 mt-2 text-center max-w-2xl">{selectedSlide.desc}</p>
          </div>
        </div>
      )}

      {/* The Carousel - ANIMATED WRAPPER */}
      <motion.div
        // 1. Start invisible and 100px lower
        initial={{ opacity: 0, y: 100 }}
        // 2. Slide up when visible
        whileInView={{ opacity: 1, y: 0 }}
        // 3. Run once
        viewport={{ once: true, amount: 0.3 }}
        // 4. Smooth easing
        transition={{ duration: 1.2, ease: "easeOut" }}
        
        className="w-full md:w-[90%] h-[70%] flex items-center justify-center relative overflow-hidden py-10"
      >
        {/* Controls */}
        <button onClick={prev} className="absolute z-50 left-2 text-4xl font-bold md:left-20 md:text-6xl hover:scale-110 transition bg-white/50 rounded-full p-1 md:bg-transparent">‹</button>
        <button onClick={next} className="absolute right-2 font-bold md:right-20 z-50 text-4xl md:text-6xl hover:scale-110 transition bg-white/50 rounded-full p-1 md:bg-transparent">›</button>

        {/* Slides Container */}
        <div className="relative w-full h-full flex items-center justify-center perspective-1000">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              onClick={() => i === current && setSelectedSlide(slide)}
              className={`
                absolute w-[85%] md:w-[45%] p-3 md:p-4 bg-main rounded-2xl shadow-2xl 
                transition-all duration-500 ease-in-out cursor-pointer
                ${getSlideStyles(i)}
                ${i === current ? "hover:scale-[1.02]" : ""} 
              `}
            >
              <div className="w-full aspect-video bg-black rounded-lg overflow-hidden relative mb-4 shadow-inner pointer-events-none">
                {slide.type === "video" ? (
                  <img src={`https://img.youtube.com/vi/${slide.src.split("/").pop()}/0.jpg`} className="w-full h-full object-cover opacity-80" alt="video thumbnail" />
                ) : (
                  <img src={slide.src} className="w-full h-full object-cover" alt={slide.title} />
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <span className="text-white opacity-0 hover:opacity-100 transition duration-300 text-sm bg-black/50 px-2 py-1 rounded">Click to Expand</span>
                </div>
              </div>
              <div className="text-center space-y-1 md:space-y-2">
                <h2 className="text-lg md:text-2xl font-bold font-anton tracking-wide">{slide.title}</h2>
                
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
const slides = [
  {
    id: 1,
    title: "Imagem 1",
    desc: "descrição da imagem",
    type: "img",
    src: "./works/1.webp"
  },
  {
    id: 2,
    title: "Imagem 2",
    desc: "descrição da imagem",
    type: "img",
    src: "./works/2.webp"
  },
  {
    id: 3,
    title: "Imagem 3",
    desc: "descrição da imagem",
    type: "img",
    src: "./works/3.webp"
  },
  {
    id: 4,
    title: "Imagem 4",
    desc: "descrição da imagem",
    type: "img",
    src: "./works/4.webp"
  },
  {
    id: 5,
    title: "Imagem 5",
    desc: "descrição da imagem",
    type: "img",
    src: "./works/5.webp"
  },
  {
    id: 6,
    title: "Imagem 6",
    desc: "descrição da imagem",
    type: "img",
    src: "./works/6.webp"
  },
  {
    id: 7,
    title: "Imagem 7",
    desc: "descrição da imagem",
    type: "img",
    src: "./works/7.webp"
  },
  {
    id: 8,
    title: "Imagem 8",
    desc: "descrição da imagem",
    type: "img",
    src: "./works/8.webp"
  },
  {
    id: 9,
    title: "Imagem 9",
    desc: "descrição da imagem",
    type: "img",
    src: "./works/9.webp"
  },
  {
    id: 10,
    title: "Imagem 10",
    desc: "descrição da imagem",
    type: "img",
    src: "./works/10.webp"
  },
  {
    id: 11,
    title: "Imagem 11",
    desc: "descrição da imagem",
    type: "img",
    src: "./works/11.webp"
  }
];

function Works() {
  return (
    <div
      className="
       section bg-white relative mb-[-50px]  md:mb-1
      "
    >
      <div
        className="absolute inset-0 bg-center bg-cover opacity-[0.04] mix-blend-darken"
        style={{ backgroundImage: "url('./bgs/bg2.jpg')" }}
      ></div>
      <h1 className=" font-nycd mb-[-100px] md:mb-[0px] text-6xl font-bold  ">
        <HandwrittenEffect text={"Works"} delay={0.5} />
      </h1>

  
      
        <Carousel slides={slides} />
    
    </div>
  );
}

export default Works;
