import JokeCard from "@/components/JokeCard";

export interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

async function getJoke(): Promise<Joke> {
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch joke");
  }

  return response.json();
}

export default async function JokePage() {
  const joke = await getJoke();

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <JokeCard initialJoke={joke} />
    </main>
  );
}