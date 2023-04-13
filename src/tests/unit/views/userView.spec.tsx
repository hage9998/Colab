import { render } from "@testing-library/react";
import UserView from "../../../views/userView";
import "@testing-library/jest-dom";

it("Should the page match snapshot", () => {
  const view = render(<UserView />);

  expect(view).toMatchSnapshot();
});
