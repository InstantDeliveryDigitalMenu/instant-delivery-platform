import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/index.tsx";
import Register from "./pages/Register/index.tsx";

function GlobalRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="" />
        <Route Component={Home} path="/login" />
        <Route Component={Register} path="/register" />
      </Routes>
    </BrowserRouter>
  );
}

export default GlobalRoutes;
