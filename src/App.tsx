import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';
import FactoryHall from "@/pages/FactoryHall";
import QianduSearch from "@/pages/QianduSearch";
import LYLProfile from "@/pages/profiles/LYLProfile";
import WYGProfile from "@/pages/profiles/WYGProfile";
import LMSProfile from "@/pages/profiles/LMSProfile";
import CompanyWebsite from "@/pages/CompanyWebsite";
import IntranetLogin from "@/pages/intranet/IntranetLogin";
import HREmployeePage from "@/pages/intranet/HREmployeePage";
import WarehouseManagerPage from "@/pages/intranet/WarehouseManagerPage";
import SeniorEngineerPage from "@/pages/intranet/SeniorEngineerPage";
import ReceptionistPage from "@/pages/intranet/ReceptionistPage";
import FullStory from "@/pages/FullStory";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  const login = (username: string) => {
    setIsAuthenticated(true);
    setCurrentUser(username);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, currentUser, login, logout }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/factory-hall" element={<FactoryHall />} />
        <Route path="/qiandu-search" element={<QianduSearch />} />
        <Route path="/profile/lyl" element={<LYLProfile />} />
        <Route path="/profile/wyg" element={<WYGProfile />} />
        <Route path="/profile/lms" element={<LMSProfile />} />
        <Route path="/company-website" element={<CompanyWebsite />} />
        <Route path="/intranet/login" element={<IntranetLogin />} />
        <Route path="/intranet/hr" element={<HREmployeePage />} />
        <Route path="/intranet/warehouse" element={<WarehouseManagerPage />} />
        <Route path="/intranet/engineer" element={<SeniorEngineerPage />} />
        <Route path="/intranet/receptionist" element={<ReceptionistPage />} />
        <Route path="/full-story" element={<FullStory />} />
      </Routes>
    </AuthContext.Provider>
  );
}
