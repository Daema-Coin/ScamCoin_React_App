import { Route, Routes } from "react-router-dom";
import { Cart, Done, Home, SignIn } from "@/pages";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/done" element={<Done />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default Router;
