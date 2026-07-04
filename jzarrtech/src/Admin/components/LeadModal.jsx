import "./LeadModal.css";

const LeadModal = ({ lead, closeModal }) => {
  if (!lead) return null;

  return (
    <div className="lead-modal-overlay">

      <div className="lead-modal">

        <div className="modal-header">
          <h2>Lead Details</h2>

          <button
            className="close-btn"
            onClick={closeModal}
          >
            ✕
          </button>
        </div>

        <div className="modal-body">

          <div className="form-group">
            <label>Client Name</label>
            <input value={lead.client} readOnly />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input value={lead.email} readOnly />
          </div>

          <div className="form-group">
            <label>Service</label>
            <input value={lead.service} readOnly />
          </div>

          <div className="form-group">
            <label>Status</label>

            <select defaultValue={lead.status}>
              <option>New Lead</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

          <div className="form-group">
            <label>Assign Agent</label>

            <select defaultValue={lead.assigned}>
              <option>No Agent</option>
              <option>Ali</option>
              <option>Ahmed</option>
              <option>Umer</option>
            </select>
          </div>

        </div>

        <div className="modal-footer">

          <button
            className="cancel-btn"
            onClick={closeModal}
          >
            Close
          </button>

          <button className="save-btn">
            Save Changes
          </button>

        </div>

      </div>

    </div>
  );
};

export default LeadModal;