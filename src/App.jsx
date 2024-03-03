import { Navigate, Route, Routes } from "react-router-dom";

import Register from "./pages/register";
import SalgsOversitPage from "./components/salgsOversit/salgsOversit";
import UserLevelCrud from "./pages/userCrud";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/behandlingsliste" element={<SalgsOversitPage />} />
      <Route path="/salgsoversikt" element={<SalgsOversitPage />} />
      <Route path="/salgsrapporter" element={<SalgsOversitPage />} />
      <Route path="/user-crud" element={<UserLevelCrud />} />
      <Route path="*" element={<Navigate to="/register" />} />
    </Routes>
  );
}

export default App;
