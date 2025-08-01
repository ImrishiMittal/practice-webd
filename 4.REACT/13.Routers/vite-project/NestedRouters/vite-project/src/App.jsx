import { BrowserRouter, Routes, Route } from "react-router-dom";
import App1 from "./App1";
import App2 from "./App2";
import App3 from "./App3";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App1 />}>
          <Route path="app2" element={<App2 />} />
          <Route path="app3" element={<App3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
