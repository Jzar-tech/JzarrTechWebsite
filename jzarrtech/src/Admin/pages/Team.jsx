import { useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import TeamTable from "../components/TeamTable";
import AddMemberModal from "../components/AddMemberModal";
import "./Team.css";
import DeleteModal from "../components/DeleteModal";
import {
  addTeamMember,
  deleteTeamMember,
  getTeamMembers,
  updateTeamMember,
} from "../adminStore";

const Team = () => {
  const [members, setMembers] = useState(() => getTeamMembers());

  const [openModal, setOpenModal] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  // Delete Member
  const confirmDelete = (member) => {
    setSelectedMember(member);
    setShowDeleteModal(true);
  };

  const deleteMember = () => {
    const nextMembers = deleteTeamMember(selectedMember.id);
    setMembers(nextMembers);

    setShowDeleteModal(false);
    setSelectedMember(null);
  };

  // Add Member
  const addMember = (newMember) => {
    const createdMember = addTeamMember({
      ...newMember,
      id: `member-${Date.now()}`,
    });

    setMembers((prev) => [...prev, createdMember]);
  };

  // Update Member
  const updateMember = (updatedMember) => {
    const nextMembers = members.map((member) =>
      member.id === updatedMember.id ? updatedMember : member
    );

    updateTeamMember(updatedMember);
    setMembers(nextMembers);
  };

  // Open Add Modal
  const handleAddMember = () => {
    setEditingMember(null);
    setOpenModal(true);
  };

  // Open Edit Modal
  const handleEditMember = (member) => {
    setEditingMember(member);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
    setEditingMember(null);
  };

  return (
    <AdminLayout
      role="Admin"
      title="Admin Dashboard"
      subtitle="Manage customer inquiries & assignments"
    >
      <div className="team-header">
        <div>
          <h1>Team Management</h1>
          <p>Manage Agents & Managers</p>
        </div>

        <button
          className="add-member-btn"
          onClick={handleAddMember}
        >
          + Add Member
        </button>
      </div>

      <TeamTable
        members={members}
        deleteMember={confirmDelete}
        editMember={handleEditMember}
      />

      {openModal && (
        <AddMemberModal
          closeModal={handleCloseModal}
          addMember={addMember}
          updateMember={updateMember}
          editingMember={editingMember}
          allowedRoles={["Agent", "Manager"]}
          defaultRole="Agent"
        />
      )}

      {showDeleteModal && (
        <DeleteModal
          title="Delete Team Member"
          message={`Are you sure you want to delete "${selectedMember?.name}"? This action cannot be undone.`}
          onCancel={() => {
            setShowDeleteModal(false);
            setSelectedMember(null);
          }}
          onDelete={deleteMember}
        />
      )}
    </AdminLayout>
  );
};

export default Team;
