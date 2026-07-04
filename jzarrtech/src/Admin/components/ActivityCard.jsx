import "./ActivityCard.css";
import {
  FaUserPlus,
  FaUserEdit,
  FaClipboardList,
  FaSignInAlt,
} from "react-icons/fa";

const ActivityCard = ({ activity }) => {

  const getIcon = () => {

    if (activity.type === "Lead")
      return <FaClipboardList />;

    if (activity.type === "Team")
      return <FaUserPlus />;

    if (activity.type === "System")
      return <FaSignInAlt />;

    return <FaUserEdit />;
  };

  return (

    <div className="activity-card">

      <div className="activity-icon">
        {getIcon()}
      </div>

      <div className="activity-content">

        <h3>{activity.title}</h3>

        <p>{activity.description}</p>

        <div className="activity-footer">

          <span>{activity.user}</span>

          <span>{activity.time}</span>

        </div>

      </div>

    </div>

  );
};

export default ActivityCard;