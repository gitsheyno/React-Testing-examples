import { render } from "@testing-library/react";
import App from "../App";
import { expect, test } from "vitest";

test("alt text renders on App component", async () => {
  const name = "Vite logo";
  render(<App />);
  const screen = render(<App />);
  const img = screen.getAllByRole("img");
  expect((img[0] as HTMLImageElement).alt).toBe(name);
});
