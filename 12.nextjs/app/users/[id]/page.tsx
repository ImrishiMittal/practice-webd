import db from "@/lib/db";
import { notFound } from "next/navigation";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export default async function UserPage({ params }: Params) {
  const { id } = await params;

  let rows: any;

try {
  [rows] = await db.query(
    "SELECT * FROM users WHERE user_id = ?",
    [id]
  );
} catch (err) {
  console.error(err);
  throw err;
}

if (rows.length === 0) {
  notFound();
}

  const user = rows[0];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}