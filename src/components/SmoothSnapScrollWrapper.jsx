import React, { useEffect, useRef } from "react";
import { useScrollContainer } from "../context/ScrollContext";

const SmoothSnapScrollWrapper = ({ children }) => {
  const { scrollRef: containerRef, updateActiveSection } = useScrollContainer();
  const isSnapping = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = Array.from(container.children);
    let scrollTimeout;

    const handleSnap = () => {
      const scrollY = container.scrollTop;
      const direction = scrollY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = scrollY;

      const viewportHeight = container.clientHeight;
      let closestIndex = 0;
      let minDelta = Infinity;

      sections.forEach((section, i) => {
        const delta = Math.abs(section.offsetTop - scrollY);
        if (delta < minDelta) {
          minDelta = delta;
          closestIndex = i;
        }
      });

      const current = sections[closestIndex];
      const next = sections[closestIndex + 1];
      const prev = sections[closestIndex - 1];
      const offsetFromCurrent = scrollY - current.offsetTop;
      const threshold = viewportHeight / 4;

      let targetSection = current;

      if (direction === "down" && offsetFromCurrent > threshold && next) {
        isSnapping.current = true;
        targetSection = next;
        next.scrollIntoView({ behavior: "smooth" });
      } else if (direction === "up" && offsetFromCurrent < -threshold && prev) {
        isSnapping.current = true;
        targetSection = prev;
        prev.scrollIntoView({ behavior: "smooth" });
      } else {
        isSnapping.current = true;
        targetSection = current;
        current.scrollIntoView({ behavior: "smooth" });
      }

      // Envoyer le message à la navbar avec la section active
      if (targetSection && targetSection.id) {
        updateActiveSection(targetSection.id);
      }

      setTimeout(() => {
        isSnapping.current = false;
      }, 800);
    };

    const onScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (!isSnapping.current) handleSnap();
      }, 150);
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, [containerRef]);

  return (
    <main
      ref={containerRef}
      className="smooth-scroll-wrapper"
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "none",
        scrollBehavior: "smooth",
      }}
    >
      {children}
    </main>
  );
};

export default SmoothSnapScrollWrapper;
