import { useEffect, useState } from "react";
import { Plus, Mic, ArrowUp } from "lucide-react";

function Typing({ text, speed }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;

      if (i > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="cursor"
      style={{
        whiteSpace: "pre"
      }}
    >
      {display}
    </span>
  );
}

export default function ChiffonAi({ time }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, time * 1000);
  }, []);

  if (!show) return null;

  const text = "I need well made and realiable AI video ";
  const speed = 70;

  return (
    <>
      <div
        id="luthiAi"
        className="bg-[var(--color1)]  fixed inset-0 flex flex-col justify-center items-center z-[999] h-screen"
      >
        <h1 className="text-7xl md:text-9xl mb-5 font-anton">Chiffon IA</h1>
        <div
          id="prompt"
          className="flex items-center px-4 py-4 border-2 border-black rounded-full w-[40%] bg-[#f5f7ec]"
        >
          <div className="rounded-full mr-1 p-1 flex items-center justify-center">
            <Plus size={22} />
          </div>

          <div id="promptText" className="font-verdana min-w-[80%]  text-[16px]">
            <Typing text={text} speed={speed} />
          </div>

          <div className="rounded-full  mr-1 p-1  flex items-center justify-center">
            <Mic size={22} />
          </div>

          <div className="bg-black text-white mr-2 rounded-full p-1 flex items-center justify-center">
            <ArrowUp size={22} />
          </div>
        </div>
      </div>
    </>
  );
}
