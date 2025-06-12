import { render, cleanup } from "@testing-library/react";
import App from "../App";
import { expect, test, afterEach } from "vitest";
import Banner from "../Banner";
afterEach(() => {
  cleanup();
});
test("alt text renders on App component", () => {
  const name = "Vite logo";
  const screen = render(<App />);
  const img = screen.getAllByRole("img");
  expect((img[0] as HTMLImageElement).alt).toBe(name);
});

test("passes data to Banner to show", () => {
  const text = "This is a banner";
  const banner = render(<Banner text={text} />);

  expect(banner.getByTestId("text").innerText).toBe(text);
});
