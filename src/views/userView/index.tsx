import { useEffect, useState } from "react";
import { useUserViewModel } from "./userViewModel";
import { User } from "../../types/user";
import UserTable from "../../components/userTable";

const UserView = () => {
  const { loadUsers, getUsers } = useUserViewModel();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    void loadUsers().then(() => setUsers(getUsers()));
  }, []);

  return (
    <div>
      <UserTable users={users} />
    </div>
  );
};

export default UserView;
