import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch API data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch users", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div>
      <h2>User List (Fetched from API)</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
