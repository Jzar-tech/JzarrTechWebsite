import AdminLayout from "../../layout/AdminLayout";

const AgentShell = ({
  children,
  onRefresh,
  onExportCsv,
  onExportPdf,
  onLogout,
}) => {
  return (
    <AdminLayout
      role="Agent"
      title="Agent Dashboard"
      subtitle="View your assigned leads only"
      onRefresh={onRefresh}
      onExportCsv={onExportCsv}
      onExportPdf={onExportPdf}
      onLogout={onLogout}
    >
      {children}
    </AdminLayout>
  );
};

export default AgentShell;
