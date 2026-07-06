import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  FaChartLine,
  FaUserSlash,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import AdminLayout from "../layout/AdminLayout";
import StatCard from "../components/StatCard";
import LeadTable from "../components/LeadTable";
import { clearSession, getLeads, getTeamMembers, updateLeadRecord } from "../adminStore";
import "./Reporting.css";

const isUnassignedLead = (lead) =>
  !lead.assigned || lead.assigned === "No Assignment";

const getScopeConfig = (scope) => {
  switch (scope) {
    case "unassigned":
      return {
        title: "Unassigned Leads",
        subtitle: "Unassigned lead reporting",
        description: "Showing unassigned leads from all inquiries.",
      };
    case "in-progress":
      return {
        title: "In Progress Leads",
        subtitle: "In progress lead reporting",
        description: "Showing leads currently marked as In Progress.",
      };
    case "completed":
      return {
        title: "Completed Leads",
        subtitle: "Completed lead reporting",
        description: "Showing leads currently marked as Completed.",
      };
    default:
      return {
        title: "Total Leads",
        subtitle: "All inquiries reporting",
        description: "Showing all leads from the inquiries dashboard.",
      };
  }
};

const Reporting = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const rawScope = searchParams.get("scope");
  const scope =
    rawScope === "unassigned" ||
    rawScope === "in-progress" ||
    rawScope === "completed"
      ? rawScope
      : "all";

  const [leads, setLeads] = useState(() => getLeads());
  const [teamMembers] = useState(() => getTeamMembers());

  useEffect(() => {
    const syncLeads = () => setLeads(getLeads());

    window.addEventListener("jzarrtech:leads-updated", syncLeads);

    return () => {
      window.removeEventListener("jzarrtech:leads-updated", syncLeads);
    };
  }, []);

  const filteredLeads = useMemo(
    () => {
      if (scope === "unassigned") {
        return leads.filter(isUnassignedLead);
      }

      if (scope === "in-progress") {
        return leads.filter((lead) => lead.status === "In Progress");
      }

      if (scope === "completed") {
        return leads.filter((lead) => lead.status === "Completed");
      }

      return leads;
    },
    [leads, scope],
  );

  const scopeConfig = getScopeConfig(scope);

  const navigateToScope = (nextScope) => {
    navigate(`/admin/reporting?scope=${nextScope}`);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleLogout = () => {
    clearSession();
    navigate("/admin/login");
  };

  const updateLead = (updatedLead) => {
    const savedLead = updateLeadRecord(updatedLead);
    setLeads((prev) =>
      prev.map((lead) => (lead.id === savedLead.id ? savedLead : lead)),
    );
  };

  return (
    <AdminLayout
      onRefresh={handleRefresh}
      onLogout={handleLogout}
      role="Admin"
      title="Reporting"
      subtitle={scopeConfig.subtitle}
    >
      <div className="reporting-header">
        <div>
          <h1>Reporting</h1>
          <p>{scopeConfig.description}</p>
        </div>

        <div className="reporting-scope">
          <span>Current View</span>
          <strong>{scopeConfig.title}</strong>
        </div>
      </div>

      <div className="reporting-stats">
        <StatCard
          title="Total Leads"
          value={leads.length}
          color="#3B82F6"
          icon={<FaChartLine />}
          onClick={() => navigateToScope("all")}
        />

        <StatCard
          title="Unassigned"
          value={leads.filter(isUnassignedLead).length}
          color="#F59E0B"
          icon={<FaUserSlash />}
          onClick={() => navigateToScope("unassigned")}
        />

        <StatCard
          title="In Progress"
          value={leads.filter((lead) => lead.status === "In Progress").length}
          color="#10B981"
          icon={<FaClock />}
          onClick={() => navigateToScope("in-progress")}
        />

        <StatCard
          title="Completed"
          value={leads.filter((lead) => lead.status === "Completed").length}
          color="#EC4899"
          icon={<FaCheckCircle />}
          onClick={() => navigateToScope("completed")}
        />
      </div>

      <LeadTable
        leads={filteredLeads}
        updateLead={updateLead}
        teamMembers={teamMembers}
        viewerRole="Admin"
      />
    </AdminLayout>
  );
};

export default Reporting;
