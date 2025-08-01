import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App1 from "./App1";
import App2 from "./App2";
import App3 from "./App3";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect / to /app */}
        <Route path="/" element={<Navigate to="/app" replace />} />

        {/* Prefix router: everything under /app */}
        <Route path="/app" element={<App1 />}>
          <Route path="app2" element={<App2 />} />
          <Route path="app3" element={<App3 />} />
        </Route>

        {/* Catch all unmatched routes */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
