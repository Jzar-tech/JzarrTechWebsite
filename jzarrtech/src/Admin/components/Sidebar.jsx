import "./Sidebar.css";
import {
  FaFolderOpen,
  FaHistory,
  FaUsers,
  FaCog,
  FaChartBar,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Sidebar = ({
  onLogout,
  isOpen,
  closeSidebar,
  role = "Admin",
}) => {
  const isManager = role === "Manager";
  const isAgent = role === "Agent";

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>

      {/* Close Button */}

      <button
        className="close-sidebar"
        onClick={closeSidebar}
        type="button"
      >
        <FaTimes />
      </button>

      {/* Logo */}

      <div className="logo">

        <h2>JZARR</h2>

        <p>
          {isAgent
            ? "AGENT PANEL"
            : isManager
              ? "MANAGER PANEL"
              : "ADMIN PANEL"}
        </p>

      </div>

      {/* Menu */}

      <ul className="menu">

        <li>

          <NavLink
            to={
              isAgent
                ? "/agent/dashboard"
                : isManager
                  ? "/manager/dashboard"
                  : "/admin/dashboard"
            }
            className={({ isActive }) =>
              isActive
                ? "menu-link active"
                : "menu-link"
            }
            onClick={closeSidebar}
          >
            <span className="menu-icon">
              <FaFolderOpen />
            </span>

            <span>{isAgent ? "My Leads" : "All Inquiries"}</span>

          </NavLink>

        </li>

        <li>

          <NavLink
            to={
              isAgent
                ? "/agent/activity"
                : isManager
                  ? "/manager/activity"
                  : "/admin/activity"
            }
            className={({ isActive }) =>
              isActive
                ? "menu-link active"
                : "menu-link"
            }
            onClick={closeSidebar}
          >
            <span className="menu-icon">
              <FaHistory />
            </span>

            <span>Activity Logs</span>

          </NavLink>

        </li>

        {!isAgent && (
          <li>

            <NavLink
              to={
                isManager
                  ? "/manager/team"
                  : "/admin/team"
              }
              className={({ isActive }) =>
                isActive
                  ? "menu-link active"
                  : "menu-link"
              }
              onClick={closeSidebar}
            >
              <span className="menu-icon">
                <FaUsers />
              </span>

              <span>{isManager ? "Agents" : "Team"}</span>

            </NavLink>

          </li>
        )}

        {!isManager && !isAgent && (
          <li>

            <NavLink
              to="/admin/settings"
              className={({ isActive }) =>
                isActive
                  ? "menu-link active"
                  : "menu-link"
              }
              onClick={closeSidebar}
            >
              <span className="menu-icon">
                <FaCog />
              </span>

              <span>Settings</span>

            </NavLink>

          </li>
        )}

        {!isManager && !isAgent && (
          <li>

            <NavLink
              to="/admin/reporting"
              className={({ isActive }) =>
                isActive
                  ? "menu-link active"
                  : "menu-link"
              }
              onClick={closeSidebar}
            >
              <span className="menu-icon">
                <FaChartBar />
              </span>

              <span>Reporting</span>

            </NavLink>

          </li>
        )}

      </ul>

      {/* Footer */}

      <div className="profile">

        <div className="avatar">

          JA

        </div>

        <div className="info">

          <h4>
            {isAgent
              ? "Jzarr Agent"
              : isManager
                ? "Jzarr Manager"
                : "Jzarr Admin"}
          </h4>

          <p>
            {isAgent
              ? "Agent"
              : isManager
                ? "Manager"
                : "Administrator"}
          </p>

        </div>

        <button
          className="sidebar-logout"
          onClick={onLogout}
          type="button"
        >
          <FaSignOutAlt />
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;
