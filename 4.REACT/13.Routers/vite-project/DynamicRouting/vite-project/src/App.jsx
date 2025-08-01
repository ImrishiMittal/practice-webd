import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App1 from "./App1";
import UserProfile from "./UserProfile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/app" />} />
        <Route path="/app" element={<App1 />} />
        <Route path="/app/user/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
