import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChartLine, FaClock, FaCheckCircle, FaInbox } from "react-icons/fa";
import AgentShell from "../components/AgentShell";
import StatCard from "../../components/StatCard";
import LeadTable from "../../components/LeadTable";
import {
  clearSession,
  getLeads,
  getSession,
  getTeamMembers,
  updateLeadRecord,
} from "../../adminStore";
import "./Dashboard.css";

const normalizeText = (value = "") =>
  String(value).trim().toLowerCase().replace(/\s+/g, " ");

const matchesAgentLead = (assignedTo, currentUserName) => {
  const assigned = normalizeText(assignedTo);
  const user = normalizeText(currentUserName);

  if (!assigned || assigned === "no assignment" || !user) {
    return false;
  }

  if (assigned === user) {
    return true;
  }

  return assigned.split(" ")[0] === user.split(" ")[0];
};

const Dashboard = () => {
  const navigate = useNavigate();
  const session = getSession();
  const currentUserName = session?.name || "";

  const [leads, setLeads] = useState(() => getLeads());
  const [teamMembers] = useState(() => getTeamMembers());

  useEffect(() => {
    const syncLeads = () => setLeads(getLeads());

    window.addEventListener("jzarrtech:leads-updated", syncLeads);

    return () => {
      window.removeEventListener("jzarrtech:leads-updated", syncLeads);
    };
  }, []);

  const assignedLeads = leads.filter((lead) =>
    matchesAgentLead(lead.assigned, currentUserName),
  );

  const updateLead = (updatedLead) => {
    const savedLead = updateLeadRecord(updatedLead);
    setLeads((prev) =>
      prev.map((lead) => (lead.id === savedLead.id ? savedLead : lead)),
    );
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleLogout = () => {
    clearSession();
    navigate("/admin/login");
  };

  const handleExportCsv = () => {
    const rows = [
      [
        "ID",
        "Client",
        "Email",
        "Phone",
        "Country",
        "Service",
        "Budget",
        "Website",
        "Message",
        "Status",
        "Assigned To",
        "Date",
      ],
      ...assignedLeads.map((lead) => [
        lead.id,
        lead.client,
        lead.email,
        lead.phone,
        lead.country,
        lead.service,
        lead.budget,
        lead.website,
        lead.message,
        lead.status,
        lead.assigned,
        lead.date,
      ]),
    ];

    const csv = rows
      .map((row) =>
        row.map((cell) => `"${String(cell ?? "").replace(/"/g, '""')}"`).join(","),
      )
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "jzarrtech-agent-leads.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleExportPdf = () => {
    const printWindow = window.open("", "_blank", "width=1100,height=800");

    if (!printWindow) {
      alert("Popup blocked. Please allow popups to export PDF.");
      return;
    }

    const rows = assignedLeads
      .map(
        (lead) => `
          <tr>
            <td>${lead.id}</td>
            <td>${lead.client}</td>
            <td>${lead.email}</td>
            <td>${lead.phone}</td>
            <td>${lead.country}</td>
            <td>${lead.service}</td>
            <td>${lead.status}</td>
            <td>${lead.assigned}</td>
            <td>${lead.date}</td>
          </tr>
        `,
      )
      .join("");

    printWindow.document.write(`
      <html>
        <head>
          <title>JzarrTech Agent Leads</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 24px; color: #0f172a; }
            h1 { margin-bottom: 16px; }
            table { width: 100%; border-collapse: collapse; font-size: 12px; }
            th, td { border: 1px solid #cbd5e1; padding: 8px; text-align: left; vertical-align: top; }
            th { background: #e2e8f0; }
          </style>
        </head>
        <body>
          <h1>JzarrTech Agent Leads</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Client</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Country</th>
                <th>Service</th>
                <th>Status</th>
                <th>Assigned To</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <AgentShell
      onRefresh={handleRefresh}
      onExportCsv={handleExportCsv}
      onExportPdf={handleExportPdf}
      onLogout={handleLogout}
    >
      <div className="stats-grid">
        <StatCard
          title="My Leads"
          value={assignedLeads.length}
          color="#3B82F6"
          icon={<FaInbox />}
        />

        <StatCard
          title="In Progress"
          value={assignedLeads.filter((lead) => lead.status === "In Progress").length}
          color="#10B981"
          icon={<FaClock />}
        />

        <StatCard
          title="Completed"
          value={assignedLeads.filter((lead) => lead.status === "Completed").length}
          color="#EC4899"
          icon={<FaCheckCircle />}
        />

        <StatCard
          title="All Assigned"
          value={assignedLeads.length}
          color="#F59E0B"
          icon={<FaChartLine />}
        />
      </div>

      <LeadTable
        leads={leads}
        updateLead={updateLead}
        teamMembers={teamMembers}
        viewerRole="Agent"
        currentUserName={currentUserName}
        onViewLead={(lead) => navigate(`/agent/leads/${lead.id}`)}
      />
    </AgentShell>
  );
};

export default Dashboard;
