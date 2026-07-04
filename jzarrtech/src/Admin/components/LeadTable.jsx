import { useMemo, useState } from "react";
import "./LeadTable.css";
import LeadDetailsModal from "./LeadDetailsModal";
import AssignLeadModal from "./AssignLeadModal";
import LeadDateFilter from "./LeadDateFilter";

const statusOptions = [
  "New Lead",
  "Pending",
  "Converted",
  "Unassigned",
  "Not Interested",
];

const normalizeText = (value = "") =>
  String(value).trim().toLowerCase().replace(/\s+/g, " ");

const safeText = (value = "") => String(value ?? "");

const matchesAgentLead = (assignedTo, currentUserName) => {
  if (!currentUserName) {
    return true;
  }

  const assigned = normalizeText(assignedTo);
  const user = normalizeText(currentUserName);

  if (!assigned || assigned === "no assignment") {
    return false;
  }

  if (assigned === user) {
    return true;
  }

  const assignedFirstName = assigned.split(" ")[0];
  const userFirstName = user.split(" ")[0];

  return assignedFirstName === userFirstName;
};

const LeadTable = ({
  leads = [],
  updateLead,
  teamMembers = [],
  viewerRole = "Admin",
  currentUserName = "",
  onViewLead,
}) => {
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [agentFilter, setAgentFilter] = useState("All Agents");
  const [selectedLead, setSelectedLead] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [showAssignModal, setShowAssignModal] = useState(false);

  const isAgentView = viewerRole === "Agent";
  const showAssignmentControls = !isAgentView;

  const activeTeamMembers = useMemo(
    () =>
      teamMembers.filter(
        (member) =>
          member.status === "Active" &&
          (viewerRole !== "Manager" || member.role === "Agent"),
      ),
    [teamMembers, viewerRole],
  );

  const scopedLeads = isAgentView
    ? leads.filter((lead) => matchesAgentLead(lead.assigned, currentUserName))
    : leads;

  const openLead = (lead) => {
    setSelectedLead(lead);
    setShowModal(true);
  };

  const closeLead = () => {
    setSelectedLead(null);
    setShowModal(false);
  };

  const filteredLeads = scopedLeads.filter((lead) => {
    const client = safeText(lead.client);
    const email = safeText(lead.email);
    const service = safeText(lead.service);
    const assigned = safeText(lead.assigned);
    const searchTerm = search.toLowerCase();
    const leadDate = safeText(lead.dateKey || lead.date).trim();

    const matchSearch =
      client.toLowerCase().includes(searchTerm) ||
      email.toLowerCase().includes(searchTerm) ||
      service.toLowerCase().includes(searchTerm);

    const matchDate =
      !dateFilter ||
      (leadDate &&
        leadDate >= dateFilter.startDate &&
        leadDate <= dateFilter.endDate);

    const matchStatus =
      statusFilter === "All Status" ||
      (statusFilter === "Unassigned"
        ? !lead.assigned || lead.assigned === "No Assignment"
        : safeText(lead.status) === statusFilter);

    const matchAgent =
      !showAssignmentControls ||
      agentFilter === "All Agents" ||
      assigned === agentFilter;

    return matchSearch && matchDate && matchStatus && matchAgent;
  });

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedLeads(filteredLeads.map((lead) => lead.id));
    } else {
      setSelectedLeads([]);
    }
  };

  const handleSelectLead = (id) => {
    if (selectedLeads.includes(id)) {
      setSelectedLeads(selectedLeads.filter((item) => item !== id));
      return;
    }

    setSelectedLeads([...selectedLeads, id]);
  };

  const handleBulkAssign = (memberName) => {
    leads.forEach((lead) => {
      if (selectedLeads.includes(lead.id)) {
        updateLead({
          ...lead,
          assigned: memberName,
        });
      }
    });

    setShowAssignModal(false);
    setSelectedLeads([]);
  };

  return (
    <>
      <div className="lead-table-container">
        <div className="table-header">
          <input
            type="text"
            className="search-box"
            placeholder="Search leads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <LeadDateFilter
            value={dateFilter}
            onApply={setDateFilter}
            onClear={() => setDateFilter(null)}
          />

          <select
            className="filter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Status</option>
            {statusOptions.map((status) => (
              <option key={status}>{status}</option>
            ))}
          </select>

          {showAssignmentControls && (
            <select
              className="filter"
              value={agentFilter}
              onChange={(e) => setAgentFilter(e.target.value)}
            >
              <option>All Agents</option>
              <option>No Assignment</option>
              {activeTeamMembers.map((member) => (
                <option key={member.id} value={member.name}>
                  {member.name}
                </option>
              ))}
            </select>
          )}

          <span className="results">{filteredLeads.length} Results</span>
        </div>

        {showAssignmentControls && selectedLeads.length > 0 && (
          <div className="bulk-action-bar">
            <span>
              {selectedLeads.length} Lead
              {selectedLeads.length > 1 ? "s" : ""} Selected
            </span>

            <button
              className="bulk-assign-btn"
              onClick={() => setShowAssignModal(true)}
              type="button"
            >
              Assign Selected
            </button>
          </div>
        )}

        <div className="table-scroll">
          <table className="lead-table">
            <thead>
              <tr>
                {showAssignmentControls && (
                  <th className="checkbox-column">
                    <input
                      type="checkbox"
                      checked={
                        filteredLeads.length > 0 &&
                        selectedLeads.length === filteredLeads.length
                      }
                      onChange={handleSelectAll}
                    />
                  </th>
                )}
                <th>ID</th>
                <th>Client</th>
                <th>Service</th>
                <th>Status</th>
                {!isAgentView && <th>Assigned To</th>}
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredLeads.map((lead) => (
                <tr
                  key={lead.id}
                  className={
                    selectedLeads.includes(lead.id) ? "selected-row" : ""
                  }
                >
                  {showAssignmentControls && (
                    <td className="checkbox-column">
                      <input
                        type="checkbox"
                        checked={selectedLeads.includes(lead.id)}
                        onChange={() => handleSelectLead(lead.id)}
                      />
                    </td>
                  )}

                  <td>#{lead.id}</td>

                  <td>
                    <strong>{lead.client}</strong>
                    <br />
                    <span>{lead.email}</span>
                  </td>

                  <td>{lead.service}</td>

                  <td>
                    {isAgentView ? (
                      <span
                        className={`status-select ${
                          lead.status === "New Lead"
                            ? "new"
                            : lead.status === "Pending"
                            ? "pending"
                            : lead.status === "Converted"
                            ? "converted"
                            : "not-interested"
                        }`}
                      >
                        {lead.status}
                      </span>
                    ) : (
                      <select
                        className={`status-select ${
                          lead.status === "New Lead"
                            ? "new"
                            : lead.status === "Pending"
                            ? "pending"
                            : lead.status === "Converted"
                            ? "converted"
                            : "not-interested"
                        }`}
                        value={lead.status}
                        onChange={(e) =>
                          updateLead({
                            ...lead,
                            status: e.target.value,
                          })
                        }
                      >
                        {statusOptions.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    )}
                  </td>

                  {!isAgentView && (
                    <td>
                      <select
                        className="assign-select"
                        value={lead.assigned}
                        onChange={(e) =>
                          updateLead({
                            ...lead,
                            assigned: e.target.value,
                          })
                        }
                      >
                        <option value="No Assignment">No Assignment</option>
                        {activeTeamMembers.map((member) => (
                          <option key={member.id} value={member.name}>
                            {member.name} ({member.role})
                          </option>
                        ))}
                      </select>
                    </td>
                  )}

                  <td>{lead.date}</td>

                  <td>
                    <button
                      className="view-btn"
                      onClick={() =>
                        onViewLead ? onViewLead(lead) : openLead(lead)
                      }
                      type="button"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {!onViewLead && showModal && (
        <LeadDetailsModal
          lead={selectedLead}
          closeModal={closeLead}
          updateLead={updateLead}
          statusOptions={statusOptions}
          teamMembers={activeTeamMembers}
          viewerRole={viewerRole}
          readOnly={isAgentView}
        />
      )}

      {showAssignmentControls && showAssignModal && (
        <AssignLeadModal
          teamMembers={activeTeamMembers}
          selectedCount={selectedLeads.length}
          onAssign={handleBulkAssign}
          onClose={() => setShowAssignModal(false)}
        />
      )}
    </>
  );
};

export default LeadTable;
