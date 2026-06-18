import Part from "./Part";

type Props = {
  parts: { name: string; excercices: number }[];
};

export default function Content({ parts }: Props) {
  return (
    <>
      {parts.map((part) => (
        <Part part={part.name} excercise={part.excercices}></Part>
      ))}
    </>
  );
}
