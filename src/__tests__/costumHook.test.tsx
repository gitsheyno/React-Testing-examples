import { waitFor, renderHook } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import { useGetRandomJoke } from "../hooks/useRandomJoke";
const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

test("renders null at first itteration", async () => {
  const { result } = renderHook(() => useGetRandomJoke());
  expect(result.current).toBeNull();
  waitFor(() => {
    expect(result.current).toBeNull();
  });
});

test("fetches a joke with", async () => {
  fetchMocker.mockResponseOnce(
    JSON.stringify({
      setup: "Joke with ID 10",
      punchline: "Ha!",
    }),
    { status: 200 }
  );

  const { result } = renderHook(() => useGetRandomJoke());

  await waitFor(() => {
    expect(result.current).toBe("Joke with ID 10");
  });
});
