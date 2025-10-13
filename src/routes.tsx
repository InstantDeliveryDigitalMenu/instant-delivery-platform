import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/index.tsx';

function GlobalRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="" />
      </Routes>
    </BrowserRouter>
  );
}

export default GlobalRoutes;
