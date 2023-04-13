import { SetStateAction, useEffect, useState } from "react";
import { useUserViewModel } from "./userViewModel";
import { User } from "../../types/user";
import UserTable from "../../components/userTable";
import TransitionsModal from "../../components/userModal";

const UserView = () => {
  const { loadUsers, getUsers } = useUserViewModel();
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    void loadUsers().then(() => {
      setUsers(getUsers());
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div style={{ margin: "5vh" }}>
        <UserTable
          users={users}
          isLoading={isLoading}
          setOpenModal={setOpenModal}
        />
      </div>
      <TransitionsModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default UserView;
