import { Link, Outlet } from "react-router-dom";

export default function App1() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>App1 - Parent Component</h1>
      <nav>
        <Link to="app2" style={{ marginRight: 10 }}>Go to App2</Link>
        <Link to="app3">Go to App3</Link>
      </nav>
      <hr />
      <Outlet /> {/* Nested components will be rendered here */}
    </div>
  );
}
