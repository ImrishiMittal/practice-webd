"use client";

import { useSearchParams } from "next/navigation";

export default function SearchInfo() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const page = searchParams.get("page");

  return (
    <div>
      <h2>Category: {category}</h2>
      <h2>Page: {page}</h2>
    </div>
  );
}