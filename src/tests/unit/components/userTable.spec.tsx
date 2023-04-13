import { fakeUser } from "../../mocks/users";
import { render, fireEvent } from "@testing-library/react";
import UserTable from "../../../components/userTable";
import "@testing-library/jest-dom";

const setOpenModalMock = jest.fn();
const setSelectedUser = jest.fn();

const makeSut = (openModal: boolean = false) => {
  return render(
    <UserTable
      users={[fakeUser]}
      isLoading={false}
      setOpenModal={setOpenModalMock}
      setSelectedUser={setSelectedUser}
    />
  );
};

describe("Test user table", () => {
  test("should render user table correctly", () => {
    const { queryByTestId } = makeSut(true);

    expect(queryByTestId("user-table")).toBeVisible();
  });

  test("should display user data in table", () => {
    const {
      name: { first },
      location: { state },
      cell,
    } = fakeUser;
    const { getAllByText } = makeSut(true);

    expect(getAllByText(first)[0]).toBeVisible();
    expect(getAllByText(state)[0]).toBeVisible();
    expect(getAllByText(cell)[0]).toBeVisible();
  });

  test("should emit click event when table row clicked", () => {
    const { getByTestId } = makeSut(true);

    fireEvent.click(getByTestId("table-row-0"));

    expect(setOpenModalMock).toBeCalledWith(true);
    expect(setSelectedUser).toBeCalledWith(fakeUser.login.uuid);
  });
});
