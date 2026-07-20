import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-red-500">
        404
      </h1>

      <p className="mt-4 text-xl">
        User Not Found 😢
      </p>

      <Link
        href="/"
        className="mt-6 rounded bg-blue-600 px-4 py-2 text-white"
      >
        Go Home
      </Link>
    </div>
  );
}