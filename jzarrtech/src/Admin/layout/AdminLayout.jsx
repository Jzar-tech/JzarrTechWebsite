import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { clearSession } from "../adminStore";

import "./AdminLayout.css";

const AdminLayout = ({
  children,
  onRefresh,
  onExportCsv,
  onExportPdf,
  onLogout,
  role = "Admin",
  title,
  subtitle,
}) => {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
      return;
    }

    clearSession();
    navigate("/admin/login");
  };

  return (
    <div
      className={`admin-layout ${
        sidebarOpen ? "sidebar-open" : "sidebar-collapsed"
      }`}
    >

      <Sidebar
        isOpen={sidebarOpen}
        onLogout={handleLogout}
        closeSidebar={() => setSidebarOpen(false)}
        role={role}
      />

      <div
        className="sidebar-overlay"
        onClick={() => setSidebarOpen(false)}
      />

      <div className="admin-content">

        <Navbar
          toggleSidebar={() => setSidebarOpen((prev) => !prev)}
          onRefresh={onRefresh}
          onExportCsv={onExportCsv}
          onExportPdf={onExportPdf}
          title={title}
          subtitle={subtitle}
        />

        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
