"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  console.log("Running on Client");

  return (
    <div className="mt-5">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setCount(count + 1)}
      >
        Count: {count}
      </button>
    </div>
  );
}