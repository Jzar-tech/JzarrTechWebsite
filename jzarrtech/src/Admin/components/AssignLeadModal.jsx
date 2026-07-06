import { useState } from "react";
import "./AssignLeadModal.css";

const AssignLeadModal = ({
  selectedCount,
  onClose,
  onAssign,
  teamMembers = [],
}) => {
  const [selectedMember, setSelectedMember] = useState("");

  const activeMembers = teamMembers || [];

  const handleAssign = () => {
    if (!selectedMember) {
      alert("Please select a Manager or Agent.");
      return;
    }

    onAssign(selectedMember);
  };

  return (
    <div className="assign-modal-overlay">
      <div className="assign-modal">
        <div className="assign-header">
          <h2>Assign Selected Leads</h2>

          <button
            className="close-btn"
            onClick={onClose}
            type="button"
          >
            ×
          </button>
        </div>

        <div className="assign-body">
          <p className="selected-count">
            Selected Leads :
            <span>{selectedCount}</span>
          </p>

          <h4>Select Team Member</h4>

          <div className="member-list">
            {activeMembers.map((member) => (
              <label
                key={member.id}
                className={`member-card ${
                  selectedMember === member.name
                    ? "active"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="member"
                  value={member.name}
                  checked={selectedMember === member.name}
                  onChange={(e) =>
                    setSelectedMember(e.target.value)
                  }
                />

                <div className="avatar">
                  {member.name.charAt(0)}
                </div>

                <div>
                  <h5>{member.name}</h5>
                  <p>{member.role}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="assign-footer">
          <button
            className="cancel-btn"
            onClick={onClose}
            type="button"
          >
            Cancel
          </button>

          <button
            className="assign-btn"
            onClick={handleAssign}
            type="button"
          >
            Assign Leads
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignLeadModal;
