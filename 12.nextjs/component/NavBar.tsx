import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-gray-900 px-8 py-4 text-white">
      <h1 className="text-2xl font-bold">
        NextLearn
      </h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>

        <Link href="/about">About</Link>

        <Link href="/services">Services</Link>

        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}