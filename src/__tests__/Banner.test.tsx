import { render, cleanup } from "@testing-library/react";
import Banner from "../Banner";
import { expect, test, afterEach } from "vitest";
afterEach(() => {
  cleanup();
});
test("Banner component renders without crashing", () => {
  render(<Banner />);
});

test("passes data to Banner to show", () => {
  const banner = render(<Banner />);

  expect(banner.getByTestId("text").innerText).toBe("Default");
});
