"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let tx = 0,
      ty = 0,
      rx = 0,
      ry = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      tx = e.clientX;
      ty = e.clientY;
      const hide = (e.target as HTMLElement)?.closest("[data-hide-cursor]");
      dot.style.opacity = hide ? "0" : "1";
      ring.style.opacity = hide ? "0" : "1";
    };
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    // Delegated so it keeps working after client-side navigation
    // swaps page content in under this persistent layout.
    const grow = () => {
      ring.style.width = "54px";
      ring.style.height = "54px";
      ring.style.borderColor = "rgba(226,192,141,.9)";
    };
    const shrink = () => {
      ring.style.width = "34px";
      ring.style.height = "34px";
      ring.style.borderColor = "rgba(184,147,90,.6)";
    };
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest("a, button, input, textarea")) grow();
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest("a, button, input, textarea")) shrink();
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div id="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}