import db from "@/lib/db";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

// Runs during build
export async function generateStaticParams() {
  const [rows]: any = await db.query(
    "SELECT user_id FROM users"
  );

  return rows.map((user: any) => ({
    id: user.user_id.toString(),
  }));
}

export default async function UserPage({ params }: Props) {
  const { id } = await params;

  const [rows]: any = await db.query(
    "SELECT * FROM users WHERE user_id = ?",
    [id]
  );

  if (rows.length === 0) {
    notFound();
  }

  const user = rows[0];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">
        {user.name}
      </h1>

      <p>{user.email}</p>

      <p>{user.role}</p>
    </div>
  );
}