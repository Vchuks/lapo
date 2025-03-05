import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import CardProfile from "../pages/CardProfile";
import CardRequest from "../pages/CardRequest";
import Others from "../pages/Others";
import Header from "./Header";
import CreateProfile from "./CreateProfile";
import ActionsPage from "./ActionsPage";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="w-full bg-[#F1F7FF] overflow-y-scroll">
        <Header/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="card-profile" element={<CardProfile />} />
          <Route path="card-request" element={<CardRequest />} />
          <Route path="card-profile/create-profile" element={<CreateProfile />} />
          <Route path="card-request/request-details" element={<ActionsPage/>}/>
          <Route path="*" element={<Others />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
