import { useState,useEffect } from "react";
import { HandwrittenEffect } from "../funcs/Textfx";


const slides = [
  {
    id: 1,
    title: "Imagem 1",
    desc: "descrição da imagem",
    type: "img",
    src: './works/1.webp'
  },
  {
    id: 2,
    title: "Imagem 2",
    desc: "descrição da imagem",
    type: "img",
    src: './works/2.webp'
  },
  {
    id: 3,
    title: "Imagem 3",
    desc: "descrição da imagem",
    type: "img",
    src: './works/3.webp'
  },
  {
    id: 4,
    title: "Imagem 4",
    desc: "descrição da imagem",
    type: "img",
    src: './works/4.webp'
  },
  {
    id: 5,
    title: "Imagem 5",
    desc: "descrição da imagem",
    type: "img",
    src: './works/5.webp'
  },
  {
    id: 6,
    title: "Imagem 6",
    desc: "descrição da imagem",
    type: "img",
    src: './works/6.webp'
  },
  {
    id: 7,
    title: "Imagem 7",
    desc: "descrição da imagem",
    type: "img",
    src: './works/7.webp'
  },
  {
    id: 8,
    title: "Imagem 8",
    desc: "descrição da imagem",
    type: "img",
    src: './works/8.webp'
  },
  {
    id: 9,
    title: "Imagem 9",
    desc: "descrição da imagem",
    type: "img",
    src: './works/9.webp'
  },
  {
    id: 10,
    title: "Imagem 10",
    desc: "descrição da imagem",
    type: "img",
    src: './works/10.webp'
  },
  {
    id: 11,
    title: "Imagem 11",
    desc: "descrição da imagem",
    type: "img",
    src: './works/11.webp'
  },
];


function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  const prev = () => setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

useEffect(() => {
  // 1. Start the timer
  const timer = setInterval(() => {
    next(); 
  }, 2000);

  return () => clearInterval(timer);
}, [current]);

  // Helper to determine position (Active, Prev, Next, or Hidden)
  const getSlideStyles = (index) => {
    if (index === current) return "z-20 scale-100 opacity-100 translate-x-0";
    
    // Handle wrapping for Previous slide (e.g. if current is 0, prev is last index)
    if (index === (current - 1 + slides.length) % slides.length) {
      return "z-10 scale-75 opacity-60 -translate-x-48 -rotate-6 bg-main"; // Left
    }
    
    // Handle wrapping for Next slide
    if (index === (current + 1) % slides.length) {
      return "z-10 scale-75 opacity-60 translate-x-48 rotate-6 bg-main"; // Right
    }

    return "opacity-0 pointer-events-none scale-50 z-0"; // Hidden
  };

  return (
    <div className="w-[90%] h-[70%] flex items-center justify-center relative overflow-hidden">
      
      {/* Controls */}
      <button onClick={prev} className="absolute left-10 z-50 text-5xl hover:scale-110 transition">‹</button>
      <button onClick={next} className="absolute right-10 z-50 text-5xl hover:scale-110 transition">›</button>

      {/* Slides Container */}
      <div className="relative w-full h-full flex items-center justify-center perspective-1000">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`
              absolute w-[60%] md:w-[45%] p-4 bg-main rounded-2xl shadow-2xl 
              transition-all duration-500 ease-in-out
              ${getSlideStyles(i)}
            `}
          >
        
            <div className="w-full aspect-video bg-black rounded-lg overflow-hidden relative mb-4 shadow-inner">
              {slide.type === "video" ? (
                <iframe
                  src={slide.src}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <img 
                  src={slide.src} 
                  className="w-full h-full object-cover" // object-cover prevents stretching
                  alt={slide.title} 
                />
              )}
            </div>

            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold font-anton  tracking-wide">
                {slide.title}
              </h2>
              <p className="text-sm text-gray-600 font-medium line-clamp-2">
                {slide.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



 function Works() {
  return (
    <div
      className="
       section bg-white relative mb-16
      "
    >
      <div
        className="absolute inset-0 bg-center bg-cover opacity-[0.05] -z-50 mix-blend-darken"
        style={{ backgroundImage: "url('./bgs/bg2.jpg')" }}
      ></div>
      <h1 className=" font-nycd  text-6xl font-bold mb-8 "> <HandwrittenEffect text={'Works'}/> </h1>
      <Carousel slides={slides}/>
    </div>
  );
}


export default Works;