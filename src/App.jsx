import ChiffonAi from "./pages/chiffonAi";
import Presentation from "./pages/Presentation";
import Works from "./pages/Works";
import Brands from "./pages/Brands";
import Todevelop from "./pages/Todevelop";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <video
        className="fixed inset-0 pointer-events-none z-[9999] w-full h-full object-cover opacity-[0.2] mix-blend-screen"
        src="overlay.webm"
        autoPlay
        loop
        muted
        playsInline
      />
      <ChiffonAi time={5.5} />
      <Presentation />
      <Works />
      <Todevelop />
      <Brands />
      <Contact />
    </>
  );
}

export default App;
