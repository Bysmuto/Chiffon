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

  const speed = 80;

  return (
    <>
      <div
        id="luthiAi"
        className="bg-white   fixed inset-0 flex flex-col justify-center items-center z-[999] h-screen"
      >
        <h1 className="text-5xl md:text-8xl mb-5 font-bold">Chiffon AI</h1>
        <div
          id="prompt"
          // Changed w-[90%] to w-[95%] for more room on mobile
          // Added 'gap-2' to space things out automatically
          className="flex items-center gap-2 px-3 py-3 border-2 border-black rounded-full w-[95%] md:w-[40%] bg-white"
        >
          {/* Added shrink-0 so this icon never gets squished */}
          <div className="rounded-full flex items-center justify-center shrink-0">
            <Plus size={22} />
          </div>

          {/* THE FIX: Changed min-w-[80%] to flex-1 */}
          {/* This lets it take up whatever space is left over */}
          <div
            id="promptText"
            className="flex-1 font-verdana text-[15px] md:text-[16px] overflow-hidden"
          >
            <div className="block md:hidden">
              <Typing text="I need well made AI video" speed={speed} />
            </div>

            {/* Desktop Typing */}
            <div className="hidden md:block">
              <Typing text="I need well made and reliable AI video" speed={speed} />
            </div>
          </div>

          {/* Grouped the right icons so they stay together nicely */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="rounded-full flex items-center justify-center">
              <Mic size={22} />
            </div>

            <div className="bg-black text-white rounded-full p-1 flex items-center justify-center">
              <ArrowUp size={22} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
