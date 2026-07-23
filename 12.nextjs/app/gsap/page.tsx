"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GsapPage() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(boxRef.current, {
      opacity: 0,
      y: -10,
      x: 100,
      duration: 2,
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        ref={boxRef}
        className="bg-green-600 text-white p-10 rounded-xl"
      >
        Hello GSAP 🚀
      </div>
    </div>
  );
}