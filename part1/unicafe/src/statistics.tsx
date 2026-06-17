import Stats_line from "./Stats_line";

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
      <table>
        <h1>Statistics: </h1>
        <Stats_line info="good" value={String(good)}></Stats_line>
        <Stats_line info="neutral" value={String(neutral)}></Stats_line>
        <Stats_line info="bad" value={String(bad)}></Stats_line>
        <Stats_line info="average" value={String(average)}></Stats_line>
        <Stats_line info="good" value={String(bad)}></Stats_line>
        <Stats_line info="positive" value={String(`${positive}%`)}></Stats_line>
      </table>
    </>
  );
}
