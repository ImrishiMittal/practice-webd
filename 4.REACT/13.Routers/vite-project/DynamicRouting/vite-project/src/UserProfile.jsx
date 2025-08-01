import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { id } = useParams(); // Extracts "id" from the URL

  return (
    <div>
      <h2>User Profile</h2>
      <p>Showing profile for user with ID: {id}</p>
    </div>
  );
}
