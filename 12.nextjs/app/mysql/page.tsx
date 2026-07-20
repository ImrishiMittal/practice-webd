import db from "@/lib/db";

export default async function MySQLPage() {
  const [rows] = await db.query("SELECT * FROM users");

  return (
    <div>
      <h1>MySQL Connected ✅</h1>

      <pre>{JSON.stringify(rows, null, 2)}</pre>
    </div>
  );
}