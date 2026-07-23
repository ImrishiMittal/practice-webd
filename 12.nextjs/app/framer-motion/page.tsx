"use client";

import { motion } from "motion/react";

export default function FramerMotionPage() {
  return (
    <div className="flex justify-center items-center h-screen">

      <motion.div
        initial={{
          opacity: 0,
          y: -100,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="bg-blue-600 text-white p-10 rounded-xl text-2xl"
      >
        Hello Framer Motion 🚀
      </motion.div>

    </div>
  );
}