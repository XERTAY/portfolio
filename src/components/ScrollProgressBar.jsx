import React, { useEffect, useState } from "react";
import "../styles/scrollProgressBar.css";
import { useScrollContainer } from "../context/ScrollContext";

const ScrollProgressBar = () => {
  const scrollRef = useScrollContainer();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const scrollProgress = (scrollTop / scrollHeight) * 100;
      setProgress(scrollProgress);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);

  return (
    <div className="scroll-progress-container">
      <div
        className="scroll-progress-bar"
        style={{ height: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
