/*import UserList from "@/components/UserList";

export default function UsersPage() {
  return (
    <div>
      <h1>Client Side Data Fetching</h1>

      <UserList />
    </div>
  );
}*/


export default async function UsersPage() {
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
  }