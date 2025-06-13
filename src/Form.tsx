import { useEffect, useState } from "react";

export default function Form() {
  const [joke, setJoke] = useState(null);
  const [jokeWithId, setJokeWithId] = useState(null);
  const [click, setClick] = useState(false);

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/jokes/random")
      .then((res) => res.json())
      .then((data) => setJoke(data))
      .catch((error) => console.error("Error fetching joke:", error));
  }, []);

  useEffect(() => {
    if (click) {
      fetch(`https://official-joke-api.appspot.com/jokes/10`)
        .then((res) => res.json())
        .then((data) => {
          setJokeWithId(data.setup);
        })
        .catch((err) => {
          console.error("Failed to fetch joke:", err);
          setJokeWithId(null);
        });
    }
  }, [click]);

  return (
    <>
      <button role="button" onClick={() => setClick((prev) => !prev)}>
        Submit
      </button>
      <h3>joke : {joke ? joke.setup : "empty"}</h3>
      <br />

      <h4>joke : {jokeWithId ? jokeWithId : "empty"}</h4>
    </>
  );
}
