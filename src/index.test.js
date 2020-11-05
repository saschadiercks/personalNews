import React from "react";
import { render } from "@testing-library/react";
import TimerCollection from "./timer/TimerCollection";

test("renders learn react link", () => {
  const { getByText } = render(<TimerCollection />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
