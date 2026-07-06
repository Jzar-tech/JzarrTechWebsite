import AdminLayout from "../../layout/AdminLayout";

const ManagerShell = ({
  children,
  onRefresh,
  onExportCsv,
  onExportPdf,
  onLogout,
}) => {
  return (
    <AdminLayout
      role="Manager"
      title="Manager Dashboard"
      subtitle="Manage assigned leads and agents"
      onRefresh={onRefresh}
      onExportCsv={onExportCsv}
      onExportPdf={onExportPdf}
      onLogout={onLogout}
    >
      {children}
    </AdminLayout>
  );
};

export default ManagerShell;
