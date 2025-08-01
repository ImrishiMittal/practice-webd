import { Link } from "react-router-dom";

export default function App1() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Select a user profile:</p>
      <ul>
        <li><Link to="/app/user/101">User 101</Link></li>
        <li><Link to="/app/user/202">User 202</Link></li>
      </ul>
    </div>
  );
}
