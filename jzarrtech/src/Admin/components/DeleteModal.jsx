import "./DeleteModal.css";

const DeleteModal = ({
  title,
  message,
  onCancel,
  onDelete,
}) => {
  return (
    <div className="delete-overlay">

      <div className="delete-modal">

        <h2>{title}</h2>

        <p>{message}</p>

        <div className="delete-buttons">

          <button
            className="cancel-btn"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="delete-btn"
            onClick={onDelete}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
};

export default DeleteModal;