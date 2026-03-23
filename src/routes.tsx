import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Authorized/Home/index.tsx";
import EntherpriseRegister from "./pages/Authorized/EntherpriseRegister/index.tsx";
import Login from "./pages/Unauthorized/Login/index.tsx";
import Register from "./pages/Unauthorized/Register/index.tsx";

function GlobalRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Unauthorized Routes*/}
        <Route Component={() => <Navigate replace to="/login" />} path="/" />
        <Route Component={Login} path="/login" />
        <Route Component={Register} path="/register" />

        {/*Authorized Routes*/}
        <Route Component={EntherpriseRegister} path="/entherprese-register" />
        <Route Component={Home} path="/home" />
      </Routes>
    </BrowserRouter>
  );
}

export default GlobalRoutes;
