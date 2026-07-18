import { Suspense } from "react";
import Joke from "@/components/Joke";
import Loading from "@/components/Loading";

export default function Page() {
  return (
    <main className="p-10 space-y-8">

      <h1 className="text-4xl font-bold">
        Suspense Demo
      </h1>

      <p>
        This text appears instantly.
      </p>

      <Suspense fallback={<Loading />}>
        <Joke />
      </Suspense>

      <footer>
        Footer loads immediately.
      </footer>

    </main>
  );
}