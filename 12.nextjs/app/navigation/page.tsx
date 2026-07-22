"use client";

import { useRouter } from "next/navigation";

export default function NavigationDemo() {
  const router = useRouter();

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">
        useRouter Demo
      </h1>

      <button
        onClick={() => router.push("/users")}
        className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
      >
        router.push()
      </button>

      <button
        onClick={() => router.replace("/")}
        className="bg-green-600 text-white px-4 py-2 rounded mr-2"
      >
        router.replace()
      </button>

      <button
        onClick={() => router.back()}
        className="bg-red-600 text-white px-4 py-2 rounded mr-2"
      >
        router.back()
      </button>

      <button
        onClick={() => router.forward()}
        className="bg-purple-600 text-white px-4 py-2 rounded mr-2"
      >
        router.forward()
      </button>

      <button
        onClick={() => router.refresh()}
        className="bg-orange-600 text-white px-4 py-2 rounded"
      >
        router.refresh()
      </button>
    </div>
  );
}