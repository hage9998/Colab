import { useEffect, useMemo, useState } from "react";
import { useUserViewModel } from "./userViewModel";
import { User } from "../../types/user";
import UserTable from "../../components/userTable";
import UserModal from "../../components/userModal";

const UserView = () => {
  const { loadUsers, getUsers } = useUserViewModel();
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string | undefined>();

  useEffect(() => {
    void loadUsers().then(() => {
      setUsers(getUsers());
      setIsLoading(false);
    });
  }, []);

  const getSelectedUser = useMemo(
    () => users.find((element) => element.login.uuid === selectedUser),
    [selectedUser]
  );

  return (
    <>
      <div style={{ margin: "5vh" }}>
        <UserTable
          users={users}
          isLoading={isLoading}
          setOpenModal={setOpenModal}
          setSelectedUser={setSelectedUser}
        />
      </div>
      <UserModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        user={getSelectedUser}
      />
    </>
  );
};

export default UserView;
