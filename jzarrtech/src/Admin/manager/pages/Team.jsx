import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ManagerShell from "../components/ManagerShell";
import TeamTable from "../../components/TeamTable";
import ManagerMemberModal from "../components/ManagerMemberModal";
import DeleteModal from "../../components/DeleteModal";
import "./Team.css";
import {
  clearSession,
  addTeamMember,
  deleteTeamMember,
  getTeamMembers,
  updateTeamMember,
} from "../../adminStore";

const Team = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState(() =>
    getTeamMembers().filter((member) => member.role === "Agent"),
  );
  const [openModal, setOpenModal] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const syncAgents = (nextMembers) => {
    setMembers(nextMembers.filter((member) => member.role === "Agent"));
  };

  const confirmDelete = (member) => {
    setSelectedMember(member);
    setShowDeleteModal(true);
  };

  const deleteMember = () => {
    const nextMembers = deleteTeamMember(selectedMember.id);
    syncAgents(nextMembers);
    setShowDeleteModal(false);
    setSelectedMember(null);
  };

  const addMember = (newMember) => {
    const createdMember = addTeamMember(newMember);
    setMembers((prev) =>
      [...prev, createdMember].filter((member) => member.role === "Agent"),
    );
  };

  const updateMember = (updatedMember) => {
    updateTeamMember(updatedMember);
    setMembers((prev) =>
      prev
        .map((member) =>
          member.id === updatedMember.id ? updatedMember : member,
        )
        .filter((member) => member.role === "Agent"),
    );
  };

  const handleAddMember = () => {
    setEditingMember(null);
    setOpenModal(true);
  };

  const handleEditMember = (member) => {
    setEditingMember(member);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditingMember(null);
  };

  const handleLogout = () => {
    clearSession();
    navigate("/admin/login");
  };

  return (
    <ManagerShell onLogout={handleLogout}>
      <div className="team-header">
        <div>
          <h1>Agents Management</h1>
          <p>Create and manage agent accounts only</p>
        </div>

        <button className="add-member-btn" onClick={handleAddMember}>
          + Add Agent
        </button>
      </div>

      <TeamTable
        members={members}
        deleteMember={confirmDelete}
        editMember={handleEditMember}
      />

      {openModal && (
        <ManagerMemberModal
          closeModal={handleCloseModal}
          addMember={addMember}
          updateMember={updateMember}
          editingMember={editingMember}
        />
      )}

      {showDeleteModal && (
        <DeleteModal
          title="Delete Agent"
          message={`Are you sure you want to delete "${selectedMember?.name}"? This action cannot be undone.`}
          onCancel={() => {
            setShowDeleteModal(false);
            setSelectedMember(null);
          }}
          onDelete={deleteMember}
        />
      )}
    </ManagerShell>
  );
};

export default Team;
