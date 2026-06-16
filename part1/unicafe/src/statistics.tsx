type Props = {
  good: number;
  neutral: number;
  bad: number;
};

export default function Stats({ good, neutral, bad }: Props) {
  const total = good + neutral + bad;

  if (total == 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    );
  }

  const average = (bad * -1 + neutral * 0 + good * 1) / (bad + good + neutral);
  const positive = (good / (bad + good + neutral)) * 100;

  return (
    <>
      <h1>Statistics: </h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </>
  );
}
