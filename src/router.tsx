import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/order" element={<Home />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default Router;
