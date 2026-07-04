import AdminLayout from "../layout/AdminLayout";
import ActivityCard from "../components/ActivityCard";
import activities from "../data/activities";
import "./ActivityLogs.css";

const ActivityLogs = () => {

  return (

    <AdminLayout>

      <div className="activity-header">

        <div>

          <h1>Activity Logs</h1>

          <p>Track all dashboard activities</p>

        </div>

      </div>

      <div className="activity-summary">

        <div className="summary-box">
          <h2>15</h2>
          <p>Today's Activities</p>
        </div>

        <div className="summary-box">
          <h2>64</h2>
          <p>This Week</p>
        </div>

        <div className="summary-box">
          <h2>210</h2>
          <p>This Month</p>
        </div>

      </div>

      <div className="activity-search">

        <input
          type="text"
          placeholder="Search activity..."
        />

      </div>

      <div className="activity-list">

        {activities.map((activity) => (

          <ActivityCard
            key={activity.id}
            activity={activity}
          />

        ))}

      </div>

    </AdminLayout>

  );
};

export default ActivityLogs;