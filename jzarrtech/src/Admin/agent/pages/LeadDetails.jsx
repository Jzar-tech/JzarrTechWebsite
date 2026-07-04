import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaClock,
  FaHistory,
  FaSave,
  FaStickyNote,
  FaUserCircle,
} from "react-icons/fa";
import AgentShell from "../components/AgentShell";
import {
  appendLeadHistory,
  clearSession,
  getLeadById,
  getLeadHistory,
  getSession,
  updateLeadRecord,
} from "../../adminStore";
import "./LeadDetails.css";

const formatTime = (value) =>
  new Date(value).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

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

const LeadDetails = () => {
  const navigate = useNavigate();
  const { leadId } = useParams();
  const session = getSession();
  const currentUserName = session?.name || "";

  const [lead, setLead] = useState(() => getLeadById(leadId));
  const [note, setNote] = useState(lead?.followUpNote || "");
  const [status, setStatus] = useState(lead?.status || "New Lead");
  const [history, setHistory] = useState(() => getLeadHistory(leadId));
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const nextLead = getLeadById(leadId);
    setLead(nextLead);
    setNote(nextLead?.followUpNote || "");
    setStatus(nextLead?.status || "New Lead");
    setHistory(getLeadHistory(leadId));
    setFormError("");
  }, [leadId]);

  const canAccess = useMemo(() => {
    if (!lead) return false;
    return matchesAgentLead(lead.assigned, currentUserName);
  }, [lead, currentUserName]);

  const handleLogout = () => {
    clearSession();
    navigate("/admin/login");
  };

  const handleSave = () => {
    if (!lead) return;

    const trimmedNote = note.trim();
    if (!trimmedNote) {
      setFormError("A follow-up note is required to update the status.");
      return;
    }

    setFormError("");
    setSaving(true);

    const nextLead = {
      ...lead,
      status,
      followUpNote: trimmedNote,
    };

    const noteChanged = trimmedNote !== (lead.followUpNote || "").trim();
    const statusChanged = status !== lead.status;

    updateLeadRecord(nextLead);

    if (noteChanged && trimmedNote) {
      appendLeadHistory(lead.id, {
        author: currentUserName || "Agent",
        role: "Agent",
        type: "note",
        message: trimmedNote,
      });
    }

    if (statusChanged) {
      appendLeadHistory(lead.id, {
        author: currentUserName || "Agent",
        role: "Agent",
        type: "status",
        from: lead.status,
        to: status,
        message: `Status changed from ${lead.status} to ${status}.`,
      });
    }

    const refreshedLead = getLeadById(leadId);
    setLead(refreshedLead);
    setHistory(getLeadHistory(leadId));
    setSaving(false);
  };

  if (!lead) {
    return (
      <AgentShell onLogout={handleLogout}>
        <div className="agent-lead-details empty-state">
          <h1>Lead not found</h1>
          <p>The lead you requested does not exist anymore.</p>

          <button
            className="back-btn"
            type="button"
            onClick={() => navigate("/agent/dashboard")}
          >
            <FaArrowLeft />
            Back to Dashboard
          </button>
        </div>
      </AgentShell>
    );
  }

  if (!canAccess) {
    return (
      <AgentShell onLogout={handleLogout}>
        <div className="agent-lead-details empty-state">
          <h1>Access denied</h1>
          <p>This lead is not assigned to your account.</p>

          <button
            className="back-btn"
            type="button"
            onClick={() => navigate("/agent/dashboard")}
          >
            <FaArrowLeft />
            Back to Dashboard
          </button>
        </div>
      </AgentShell>
    );
  }

  return (
    <AgentShell onLogout={handleLogout}>
      <div className="agent-lead-details">
        <div className="details-hero">
          <button
            className="back-btn"
            type="button"
            onClick={() => navigate("/agent/dashboard")}
          >
            <FaArrowLeft />
            Back
          </button>

          <div>
            <span className="details-eyebrow">
              <FaUserCircle />
              Lead #{lead.id}
            </span>
            <h1>{lead.client}</h1>
            <p>{lead.service}</p>
          </div>
        </div>

        <div className="details-grid">
          <section className="details-card info-card">
            <div className="card-title">
              <FaHistory />
              Client Information
            </div>

            <div className="info-list">
              <div>
                <span>Email</span>
                <strong>{lead.email}</strong>
              </div>
              <div>
                <span>Phone</span>
                <strong>{lead.phone}</strong>
              </div>
              <div>
                <span>Country</span>
                <strong>{lead.country}</strong>
              </div>
              <div>
                <span>Service</span>
                <strong>{lead.service}</strong>
              </div>
              <div>
                <span>Budget</span>
                <strong>{lead.budget}</strong>
              </div>
              <div>
                <span>Website</span>
                <strong>{lead.website}</strong>
              </div>
              <div>
                <span>Status</span>
                <strong className={`status-pill ${normalizeText(lead.status)}`}>
                  {lead.status}
                </strong>
              </div>
              <div>
                <span>Assigned To</span>
                <strong>{lead.assigned}</strong>
              </div>
              <div>
                <span>Date</span>
                <strong>{lead.date}</strong>
              </div>
              <div className="full-width">
                <span>Message</span>
                <p>{lead.message}</p>
              </div>
            </div>
          </section>

          <aside className="details-card note-card">
            <div className="card-title">
              <FaStickyNote />
              Add Follow-Up Note
            </div>

            <div className="note-fields">
              <label>
                Update Status
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>New Lead</option>
                  <option>Pending</option>
                  <option>Converted</option>
                  <option>Not Interested</option>
                </select>
              </label>

              <label>
                Note <span className="required-asterisk">*</span>
                <textarea
                  rows="5"
                  value={note}
                  onChange={(e) => {
                    setNote(e.target.value);
                    if (formError) setFormError("");
                  }}
                  placeholder="Write follow-up note here..."
                />
              </label>
            </div>

            {formError && (
              <div className="note-error" role="alert">
                {formError}
              </div>
            )}

            <button
              className="save-note-btn"
              type="button"
              onClick={handleSave}
              disabled={saving}
            >
              <FaSave />
              {saving ? "Saving..." : "Update Lead"}
            </button>

            <div className="history-wrap">
              <div className="card-title small">
                <FaClock />
                Changes History
              </div>

              <div className="history-list">
                {history.length === 0 ? (
                  <div className="history-empty">No history yet.</div>
                ) : (
                  history
                    .slice()
                    .reverse()
                    .map((item) => (
                      <article key={item.id} className="history-item">
                        <div className="history-head">
                          <strong>
                            {item.author}
                            {item.role ? ` (${item.role})` : ""}
                          </strong>
                          <span>{formatTime(item.timestamp)}</span>
                        </div>

                        <p>
                          {item.type === "status" && item.from && item.to
                            ? `Status changed from ${item.from} to ${item.to}.`
                            : item.message}
                        </p>
                      </article>
                    ))
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </AgentShell>
  );
};

export default LeadDetails;
