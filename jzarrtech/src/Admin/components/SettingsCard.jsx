import "./SettingsCard.css";

const SettingsCard = ({ title, children }) => {
  return (
    <div className="settings-card">

      <div className="settings-card-header">
        <h2>{title}</h2>
      </div>

      <div className="settings-card-body">
        {children}
      </div>

    </div>
  );
};

export default SettingsCard;