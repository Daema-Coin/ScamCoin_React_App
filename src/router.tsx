import { Route, Routes } from "react-router-dom";
import { Home, SignIn } from "@/pages";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default Router;
