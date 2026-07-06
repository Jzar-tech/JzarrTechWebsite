import "./StatCard.css";

const StatCard = ({ title, value, color, icon, onClick }) => {
  const CardTag = onClick ? "button" : "div";

  return (
    <CardTag
      className={`stat-card ${onClick ? "stat-card-button" : ""}`}
      style={{ "--accent": color }}
      onClick={onClick}
      type={onClick ? "button" : undefined}
    >
      <div className="card-top">
        <div className="card-heading">
          <span className="card-icon">{icon}</span>
          <h4>{title}</h4>
        </div>
        <div className="card-dot"></div>
      </div>

      <h2>{value}</h2>
    </CardTag>
  );
};

export default StatCard;
