import { Route, Routes } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default Router;
