import { useGetRandomJoke } from "./hooks/useRandomJoke";
export default function RandomJoke() {
  const randomJoke = useGetRandomJoke();
  return <div>RandomJoke : {randomJoke}</div>;
}
