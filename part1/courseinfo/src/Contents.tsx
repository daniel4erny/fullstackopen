type Props = {
  parts: string[];
  excercises: number[];
};

export default function Content({ parts, excercises }: Props) {
  return (
    <>
      {parts.map((part, i) => (
        <p key={i}>
          {part} {excercises[i]}
        </p>
      ))}
    </>
  );
}
