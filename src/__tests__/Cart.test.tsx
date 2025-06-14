import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import TextCart from "../TextCart";

test("snapshot test for TextCart", () => {
  const { asFragment } = render(<TextCart />);
  expect(asFragment()).toMatchSnapshot();
});
