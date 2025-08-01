import { Outlet, Link } from "react-router-dom";

export default function App1() {
  return (
    <div>
      <h1>App1: Root Layout at /app</h1>
      <nav>
        <Link to="app2">Go to App2</Link> |{" "}
        <Link to="app3">Go to App3</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
