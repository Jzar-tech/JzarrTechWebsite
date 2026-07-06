import { useEffect, useMemo, useState } from "react";
import "./LeadDetailsModal.css";

const LeadDetailsModal = ({
  lead,
  closeModal,
  updateLead,
  statusOptions,
  teamMembers = [],
  viewerRole = "Admin",
  readOnly = false,
}) => {
  const [formData, setFormData] = useState(lead);

  const isReadOnly = readOnly || viewerRole === "Agent";

  const activeTeamMembers = useMemo(
    () =>
      teamMembers.filter(
        (member) =>
          member.status === "Active" &&
          (viewerRole !== "Manager" || member.role === "Agent"),
      ),
    [teamMembers, viewerRole],
  );

  useEffect(() => {
    setFormData(lead);
  }, [lead]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (isReadOnly) {
      closeModal();
      return;
    }

    updateLead(formData);
    closeModal();
  };

  if (!lead) return null;

  return (
    <div className="lead-modal-overlay">
      <div className="lead-modal">
        <div className="lead-modal-header">
          <div>
            <h2>Lead Details</h2>
            <p>Review contact form submission fields</p>
          </div>

          <button className="close-btn" onClick={closeModal} type="button">
            ×
          </button>
        </div>

        <div className="lead-details">
          <div className="detail-item">
            <label>Client Name</label>
            <input
              name="client"
              value={formData.client}
              onChange={handleChange}
              readOnly={isReadOnly}
            />
          </div>

          <div className="detail-item">
            <label>Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              readOnly={isReadOnly}
            />
          </div>

          <div className="detail-item">
            <label>Phone</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              readOnly={isReadOnly}
            />
          </div>

          <div className="detail-item">
            <label>Country</label>
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              readOnly={isReadOnly}
            />
          </div>

          <div className="detail-item">
            <label>Service</label>
            <input
              name="service"
              value={formData.service}
              onChange={handleChange}
              readOnly={isReadOnly}
            />
          </div>

          <div className="detail-item">
            <label>Total Payment</label>
            <input
              name="totalPayment"
              value={formData.totalPayment || ""}
              onChange={handleChange}
              readOnly={isReadOnly}
            />
          </div>

          <div className="detail-item">
            <label>Remaining Payment</label>
            <input
              name="remainingPayment"
              value={formData.remainingPayment || ""}
              onChange={handleChange}
              readOnly={isReadOnly}
            />
          </div>

          <div className="detail-item">
            <label>Received Payment</label>
            <input
              name="receivedPayment"
              value={formData.receivedPayment || ""}
              onChange={handleChange}
              readOnly={isReadOnly}
            />
          </div>

          <div className="detail-item">
            <label>Website</label>
            <input
              name="website"
              value={formData.website}
              onChange={handleChange}
              readOnly={isReadOnly}
            />
          </div>

          <div className="detail-item">
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              disabled={isReadOnly}
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="detail-item">
            <label>Assign To</label>
            <select
              name="assigned"
              value={formData.assigned}
              onChange={handleChange}
              disabled={isReadOnly}
            >
              <option value="No Assignment">No Assignment</option>
              {activeTeamMembers.map((member) => (
                <option key={member.id} value={member.name}>
                  {member.name}
                </option>
              ))}
            </select>
          </div>

          <div className="detail-item">
            <label>Date</label>
            <input
              name="date"
              value={formData.date}
              onChange={handleChange}
              readOnly={isReadOnly}
            />
          </div>

          <div className="detail-item full-width">
            <label>Message</label>
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              readOnly={isReadOnly}
            />
          </div>
        </div>

        <div className="lead-modal-footer">
          <button className="cancel-btn" onClick={closeModal} type="button">
            Cancel
          </button>

          {!isReadOnly && (
            <button className="save-btn" onClick={handleSave} type="button">
              Save Changes
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadDetailsModal;
