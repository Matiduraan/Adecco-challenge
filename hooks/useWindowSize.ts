import { useState, useEffect } from "react";

export function useWindowSize() {
  const [isMobile, handleResizeScreenState] = useState(false);
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    handleResizeScreenState(windowSize.width < 1200);
  }, [windowSize]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { ...windowSize, isMobile };
}

interface IWindowSize {
  width: number;
  height: number;
}
