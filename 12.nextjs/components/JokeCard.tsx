"use client";

import { useState } from "react";
import type { Joke } from "@/app/jokes/page";

interface Props {
  initialJoke: Joke;
}

export default function JokeCard({ initialJoke }: Props) {
  const [joke, setJoke] = useState(initialJoke);
  const [loading, setLoading] = useState(false);

  async function getNewJoke() {
    setLoading(true);

    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );

      const data = await response.json();

      setJoke(data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">

      <h1 className="text-3xl font-bold text-center mb-6">
        Random Joke Generator
      </h1>

      <h2 className="text-xl font-semibold mb-4">
        {joke.setup}
      </h2>

      <p className="text-gray-600 text-lg mb-8">
        {joke.punchline}
      </p>

      <button
        onClick={getNewJoke}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
      >
        {loading ? "Loading..." : "Generate New Joke"}
      </button>

    </div>
  );
}