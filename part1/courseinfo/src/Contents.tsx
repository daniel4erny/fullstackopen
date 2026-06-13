import Part from "./Part";

type Props = {
  parts: string[];
  excercises: number[];
};

export default function Content({ parts, excercises }: Props) {
  return (
    <>
      {parts.map((part, i) => (
        <Part part={part} excercise={excercises[i]}></Part>
      ))}
    </>
  );
}
