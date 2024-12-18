import { Routes, Route } from "react-router-dom";
import OverViewPage from "./pages/OverViewPage";
import Transports from "./pages/Transports";
import Drivers from "./pages/Drivers";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import Companies from "./pages/Companies";
function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* BG */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<OverViewPage />} />
        <Route path="/transports" element={<Transports />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
