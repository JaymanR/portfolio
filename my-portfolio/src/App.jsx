import { useState, useEffect } from "react";

import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";

import "./App.css";
import "./index.css";

function App() {
  const [loadingState, setLoadingState] = useState("loading");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (loadingState === "transitioning") {
      const timer = setTimeout(() => {
        setLoadingState("complete");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [loadingState]);

  return (
    <>
      {loadingState !== "complete" && (
        <LoadingScreen
          onComplete={() => setLoadingState("transitioning")}
          fadeOut={loadingState === "transitioning"}
        />
      )}
      <div
        className={`min-h-screen transition-opacity duration-1000 ${
          loadingState !== "loading" ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </>
  );
}

export default App;
