import { useState, useEffect } from "react";

import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";

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
        }`}
        style={{
          background: "var(--color-bg-primary)",
          color: "var(--color-text-primary)",
        }}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
