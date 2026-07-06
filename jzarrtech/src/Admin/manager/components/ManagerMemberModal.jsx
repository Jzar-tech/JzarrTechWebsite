import AddMemberModal from "../../components/AddMemberModal";

const ManagerMemberModal = (props) => {
  return (
    <AddMemberModal
      {...props}
      allowedRoles={["Agent"]}
      defaultRole="Agent"
    />
  );
};

export default ManagerMemberModal;
