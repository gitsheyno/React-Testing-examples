import { fireEvent, render, waitFor } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Form from "../Form";
// const queryClient = new QueryClient();

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

test("can submit contact form", async () => {
  expect(true).toBe(true);

  fetchMocker.mockResponses(
    [
      JSON.stringify({
        setup: "Why did the chicken cross the road?",
        punchline: "To get to the other side!",
      }),
      { status: 200 },
    ],
    [
      JSON.stringify({ setup: "Joke with ID 10", punchline: "Ha!" }),
      { status: 200 },
    ],
    [JSON.stringify({ status: "ok" }), { status: 200 }]
  );

  // const screen = render(
  //   <QueryClientProvider client={queryClient}>
  //   <Reso
  //   </QueryClientProvider>
  // );

  const screen = render(<Form />);

  fireEvent.click(screen.getByRole("button", { name: "Submit" }));

  const request = fetchMocker.requests();
  expect(request.length).toBe(2);
  expect(request[0].url).toBe(
    "https://official-joke-api.appspot.com/jokes/random"
  );

  const requests = fetchMocker.requests();

  await waitFor(() => {
    expect(fetchMocker.requests().length).toBe(2);
  });

  expect(requests[0].url).toBe(
    "https://official-joke-api.appspot.com/jokes/random"
  );

  expect(requests[1].url).toBe(
    "https://official-joke-api.appspot.com/jokes/10"
  );

  const h3 = await screen.findByRole("heading", { level: 4 });

  expect(h3.innerText).toContain("Joke with ID 10");
});
