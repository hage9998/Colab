import UserModal from "../../../components/userModal";
import { fakeUser } from "../../mocks/users";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

const setOpenModalMock = jest.fn();

const makeSut = (openModal: boolean = false) => {
  return render(
    <UserModal
      openModal={openModal}
      setOpenModal={setOpenModalMock}
      user={fakeUser}
    />
  );
};

describe("Test user modal", () => {
  test("should not show user modal", () => {
    const { queryByTestId } = makeSut();

    expect(queryByTestId("user-modal")).toBe(null);
  });

  test("should render user modal correctly", () => {
    const { queryByTestId } = makeSut(true);

    expect(queryByTestId("user-modal")).toBeVisible();
  });

  test("should display some user data in modal", () => {
    const {
      name: { first, last },
      location: { state, city },
    } = fakeUser;
    const { getAllByDisplayValue } = makeSut(true);

    expect(getAllByDisplayValue(first, { exact: false })[0]).toBeVisible();
    expect(getAllByDisplayValue(last, { exact: false })[0]).toBeVisible();
    expect(getAllByDisplayValue(state, { exact: false })[0]).toBeVisible();
    expect(getAllByDisplayValue(city, { exact: false })[0]).toBeVisible();
  });
});
