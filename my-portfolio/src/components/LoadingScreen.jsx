import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete, fadeOut = false }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World />";
  const [showElements, setShowElements] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          setShowElements(false);

          setTimeout(() => {
            onComplete();
          }, 300);
        }, 800);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete, fullText]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ background: "var(--color-bg-primary)" }}
    >
      <div
        className={`transition-opacity duration-300 flex flex-col items-center ${
          showElements ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="mb-4 text-4xl font-mono font-bold text-center w-100"
          style={{ color: "var(--color-text-primary)" }}
        >
          <span
            style={{
              background: "var(--gradient-accent)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {text}
          </span>
          <span
            className="animate-blink ml-1"
            style={{ color: "var(--color-primary)" }}
          >
            |
          </span>
        </div>

        <div
          className="w-[200px] h-[2px] rounded relative overflow-hidden"
          style={{ background: "var(--color-bg-accent)" }}
        >
          <div
            className="h-full w-[40%] absolute"
            style={{
              background: "var(--gradient-accent)",
              boxShadow: "var(--shadow-glow)",
              animation: "moveLoadingBar 1.5s infinite ease-in-out",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
