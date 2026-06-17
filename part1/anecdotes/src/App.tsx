import { useState } from "react";

export default function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [ratings, setRatings] = useState(Array(anecdotes.length).fill(0));
  const [highest, setHighest] = useState<string | number>("No votes");

  function setRandomIndex() {
    let random_num = Math.random();
    random_num *= anecdotes.length;
    random_num = Math.floor(random_num);
    setSelected(random_num);
  }

  function vote() {
    const copy = [...ratings];
    copy[selected] += 1;
    const max = copy.reduce((a, b) => Math.max(a, b), -Infinity);
    const max_index = copy.indexOf(max);
    setHighest(max_index);
    setRatings(copy);
  }

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <div>this anecdote has {ratings[selected]} votes</div>
      {typeof highest == "string" && <div>{highest}</div>}
      {typeof highest == "number" && (
        <>
          <p>
            {anecdotes[highest]} <br></br> has {ratings[highest]} votes
          </p>
        </>
      )}
      <button onClick={vote}>vote</button>
      <button onClick={setRandomIndex}>Next Anecdote</button>
    </>
  );
}
