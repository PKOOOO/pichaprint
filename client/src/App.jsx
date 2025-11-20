import { useSnapshot } from "valtio";

import Canvas from "@/canvas";
import Customizer from "@/pages/Customizer";
import Home from "@/pages/Home";
import state from "@/store";

function App() {
  const snap = useSnapshot(state);
  const containerClass = snap.intro
    ? "min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-50 to-white"
    : "h-screen overflow-hidden bg-white";

  return (
    <main className={`app transition-all ease-in ${containerClass}`}>
      {snap.intro ? (
        <Home />
      ) : (
        <>
          <Canvas />
          <Customizer />
        </>
      )}
    </main>
  );
}

export default App;
