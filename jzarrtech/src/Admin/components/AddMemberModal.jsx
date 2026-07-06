import { useState, useEffect } from "react";
import "./AddMemberModal.css";

const AddMemberModal = ({
  closeModal,
  addMember,
  updateMember,
  editingMember,
  allowedRoles = ["Agent", "Manager"],
  defaultRole = "Agent",
}) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: defaultRole,
    password: "",
    confirmPassword: "",
  });

  // Edit Mode
  useEffect(() => {

    if (editingMember) {

      setFormData({
        name: editingMember.name,
        email: editingMember.email,
        role: editingMember.role,
        password: "",
        confirmPassword: "",
      });

    }

  }, [editingMember]);

  useEffect(() => {
    if (!editingMember) {
      setFormData((prev) => ({
        ...prev,
        role: defaultRole,
      }));
    }
  }, [defaultRole, editingMember]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = () => {

  if (!formData.name || !formData.email) {
    alert("Please fill all required fields");
    return;
  }

  // EDIT MODE
  if (editingMember) {

    if (
      formData.password &&
      formData.password !== formData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    updateMember({
      ...editingMember,
      name: formData.name,
      email: formData.email,
      role: formData.role,

      // Password sirf tab update hoga jab user enter kare
      password: formData.password
        ? formData.password
        : editingMember.password,
    });

  }

  // ADD MODE
  else {

    if (
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please enter password");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    addMember({
      name: formData.name,
      email: formData.email,
      role: formData.role,
      password: formData.password,
      status: "Active",
    });

  }

  closeModal();

};

  return (
    <div className="modal-overlay">

      <div className="add-member-modal">

        <h2>
          {editingMember
            ? "Edit Team Member"
            : "Add Team Member"}
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          {allowedRoles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>

   <input
  type="password"
  name="password"
  placeholder={
    editingMember
      ? "New Password (optional)"
      : "Password"
  }
  value={formData.password}
  onChange={handleChange}
/>

<input
  type="password"
  name="confirmPassword"
  placeholder={
    editingMember
      ? "Confirm New Password"
      : "Confirm Password"
  }
  value={formData.confirmPassword}
  onChange={handleChange}
/>
        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={closeModal}
          >
            Cancel
          </button>

          <button
            className="create-btn"
            onClick={handleSubmit}
          >
            {editingMember
              ? "Update Member"
              : "Create Member"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default AddMemberModal;
