import { useEffect, useState } from "react";
import { getUsers } from "./services/userService";

const User = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (!selectedUserId) {
      setSelectedUser(null);
      return;
    }

    getUsers().then(data => {
      const user = data.find(
        u => u.id === Number(selectedUserId)
      );
      setSelectedUser(user);
    });
  }, [selectedUserId]);

  useEffect(() => {
    getUsers().then(data => setUsers(data));
  }, []);

  return (
    <div>
      <select
        value={selectedUserId}
        onChange={(e) => setSelectedUserId(e.target.value)}
      >
        <option value="">Select user</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      {selectedUser && (
        <div>
          <p>Name: {selectedUser.name}</p>
          <p>Email: {selectedUser.email}</p>
          <p>City: {selectedUser.address.city}</p>
          <p>Company: {selectedUser.company.name}</p>
        </div>
      )}
    </div>
  );
};

export default User;
