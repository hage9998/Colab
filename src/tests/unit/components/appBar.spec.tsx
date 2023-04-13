import UserAppBar from "../../../components/appBar";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should render appBar correctly", () => {
  const { getByTestId } = render(<UserAppBar />);

  expect(getByTestId("user-app-bar")).toBeVisible();
});
