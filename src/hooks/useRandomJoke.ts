import { useState, useEffect } from "react";
export const useGetRandomJoke = () => {
  const [jokeWithId, setJokeWithId] = useState(null);

  useEffect(() => {
    fetch(`https://official-joke-api.appspot.com/jokes/10`)
      .then((res) => res.json())
      .then((data) => {
        setJokeWithId(data.setup);
      })
      .catch((err) => {
        console.error("Failed to fetch joke:", err);
        setJokeWithId(null);
      });
  }, []);
  return jokeWithId;
};
