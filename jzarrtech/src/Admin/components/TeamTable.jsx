import "./TeamTable.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const TeamTable = ({
  members,
  deleteMember,
  editMember,
}) => {

  return (

    <div className="team-table-container">

      <table className="team-table">

        <thead>

          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {members.map((member) => (

            <tr key={member.id}>

              <td>#{member.id}</td>

              <td>{member.name}</td>

              <td>{member.email}</td>

              <td>

                <span
                  className={
                    member.role === "Manager"
                      ? "role manager"
                      : "role agent"
                  }
                >
                  {member.role}
                </span>

              </td>

              <td>

                <span
                  className={
                    member.status === "Active"
                      ? "status active"
                      : "status inactive"
                  }
                >
                  {member.status}
                </span>

              </td>

              <td>

                <button
  className="edit-btn"
  onClick={() => editMember(member)}
>
  <FaEdit />
</button>

               <button
  className="delete-btn"
  onClick={() => deleteMember(member)}
>
  <FaTrash />
</button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
};

export default TeamTable;