type Props = {
  part: string;
  excercise: number;
};

export default function Part({ part, excercise }: Props) {
  return (
    <p>
      {part} {excercise}
    </p>
  );
}
