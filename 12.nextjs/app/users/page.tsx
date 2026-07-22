/*import UserList from "@/components/UserList";

export default function UsersPage() {
  return (
    <div>
      <h1>Client Side Data Fetching</h1>

      <UserList />
    </div>
  );
}*/


/*export default async function UsersPage() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
  
    const users = await response.json();
  
    return (
      <div>
        <h1>Users</h1>
  
        {users.map((user: any) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    );
  }*/

  /*export default function UsersPage() {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold">
          Users Page
        </h1>
      </div>
    );
  }*/

  import db from "@/lib/db";

export default async function UsersPage() {

  const [rows]: any = await db.query(
    "SELECT * FROM users"
  );

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-5">
        Users
      </h1>

      {rows.map((user: any) => (
        <div
          key={user.user_id}
          className="border p-3 mb-2 rounded"
        >
          <p>Name : {user.name}</p>
          <p>Email : {user.email}</p>
          <p>Role : {user.role}</p>
        </div>
      ))}

    </div>
  );
}