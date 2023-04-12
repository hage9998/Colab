import { useEffect, useState } from "react";
import { useUserViewModel } from "./userViewModel";
import { User } from "../../types/user";

const UserView = () => {
  const { loadUsers, getUsers } = useUserViewModel();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    void loadUsers().then(() => setUsers(getUsers()));
  }, []);

  return (
    <div>
      {users.map(({ email }) => (
        <>{email}</>
      ))}
    </div>
  );
};

export default UserView;
