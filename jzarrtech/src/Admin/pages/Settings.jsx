import AdminLayout from "../layout/AdminLayout";
import SettingsCard from "../components/SettingsCard";
import "./Settings.css";

const Settings = () => {
  return (

    <AdminLayout>

      <div className="settings-header">

        <h1>Settings</h1>

        <p>Manage your company & admin preferences</p>

      </div>

      

      {/* Admin */}

      {/* Security */}

      <SettingsCard title="Security">

        <div className="settings-grid">

          <input
            type="password"
            placeholder="Current Password"
          />

          <input
            type="password"
            placeholder="New Password"
          />

          <input
            type="password"
            placeholder="Confirm Password"
          />

        </div>

        <button className="save-btn">
          Update Password
        </button>

      </SettingsCard>

      

    </AdminLayout>

  );
};

export default Settings;