"use client";

import { useEffect } from "react";

export default function Curtain() {
  useEffect(() => {
    const t = setTimeout(() => document.body.classList.add("loaded"), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div id="curtain" aria-hidden="true">
      <div className="panel left" />
      <div className="panel right" />
      <div className="rule" />
    </div>
  );
}