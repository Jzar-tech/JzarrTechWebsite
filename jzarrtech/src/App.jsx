import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AIAgents from "./pages/AIAgents";
import ScrollToTop from "./components/ScrollToTop";
import CustomWebsites from "./pages/CustomWebsites";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Ecommerce from "./pages/Ecommerce";
import MobileApps from "./pages/MobileApps";
import ContactConsultation from "./pages/ContactConsultation";
import Seo from "./pages/Seo";
import Api from "./pages/Api";
import Graphics from "./pages/Graphics";
import Aboutus from "./pages/Aboutus";
import Ourprocess from "./pages/Ourprocess";
import Landingpage from "./pages/Landingpage";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import Login from "./Admin/Login";
import Dashboard from "./Admin/pages/Dashboard";
import ActivityLogs from "./Admin/pages/ActivityLogs";
import Team from "./Admin/pages/Team";
import Settings from "./Admin/pages/Settings";
import Reporting from "./Admin/pages/Reporting";
import ProtectedRoleRoute from "./Admin/ProtectedRoleRoute";
import ManagerDashboard from "./Admin/manager/pages/Dashboard";
import ManagerActivityLogs from "./Admin/manager/pages/ActivityLogs";
import ManagerTeam from "./Admin/manager/pages/Team";
import AgentDashboard from "./Admin/agent/pages/Dashboard";
import AgentActivityLogs from "./Admin/agent/pages/ActivityLogs";
import AgentLeadDetails from "./Admin/agent/pages/LeadDetails";
import { Navigate } from "react-router-dom";
import Thankyou from "./pages/Thankyou";



function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-agents" element={<AIAgents />} />
        <Route path="/custom-websites" element={<CustomWebsites />} />
        <Route path="/Ecommerce" element={<Ecommerce />} />
        <Route path="/MobileApps" element={<MobileApps />} />
        <Route path="/Seo" element={<Seo />} />
        <Route path="/contact-consultation" element={<ContactConsultation />} />
        <Route path="/Api" element={<Api />} />
        <Route path="/Graphics" element={<Graphics />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Ourprocess" element={<Ourprocess />} />
        <Route path="/IT-Services" element={<Landingpage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/login" element={<Navigate to="/admin/login" replace />} />
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/manager" element={<Navigate to="/manager/dashboard" replace />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/manager/login" element={<Navigate to="/admin/login" replace />} />
        <Route path="/agent/login" element={<Navigate to="/admin/login" replace />}
       />
       <Route path="/thank-you" element={<Thankyou />} />
        
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoleRoute allowedRoles={["Admin"]}>
              <Dashboard />
            </ProtectedRoleRoute>
          }
        />
        <Route
          path="/admin/activity"
          element={
            <ProtectedRoleRoute allowedRoles={["Admin"]}>
              <ActivityLogs />
            </ProtectedRoleRoute>
          }
        />
        <Route
          path="/admin/team"
          element={
            <ProtectedRoleRoute allowedRoles={["Admin"]}>
              <Team />
            </ProtectedRoleRoute>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <ProtectedRoleRoute allowedRoles={["Admin"]}>
              <Settings />
            </ProtectedRoleRoute>
          }
        />
        <Route
          path="/admin/reporting"
          element={
            <ProtectedRoleRoute allowedRoles={["Admin"]}>
              <Reporting />
            </ProtectedRoleRoute>
          }
        />
        <Route
          path="/manager/dashboard"
          element={
            <ProtectedRoleRoute allowedRoles={["Manager"]}>
              <ManagerDashboard />
            </ProtectedRoleRoute>
          }
        />
        <Route
          path="/manager/activity"
          element={
            <ProtectedRoleRoute allowedRoles={["Manager"]}>
              <ManagerActivityLogs />
            </ProtectedRoleRoute>
          }
        />
        <Route
          path="/manager/team"
          element={
            <ProtectedRoleRoute allowedRoles={["Manager"]}>
              <ManagerTeam />
            </ProtectedRoleRoute>
          }
        />
        <Route
          path="/agent/dashboard"
          element={
            <ProtectedRoleRoute allowedRoles={["Agent"]}>
              <AgentDashboard />
            </ProtectedRoleRoute>
          }
        />
        <Route
          path="/agent/activity"
          element={
            <ProtectedRoleRoute allowedRoles={["Agent"]}>
              <AgentActivityLogs />
            </ProtectedRoleRoute>
          }
        />
        <Route
          path="/agent/leads/:leadId"
          element={
            <ProtectedRoleRoute allowedRoles={["Agent"]}>
              <AgentLeadDetails />
            </ProtectedRoleRoute>
          }
        />





        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
