type Part = {
  name: string;
  exercises: number;
  id: number;
};

type Props = {
  parts: Part[];
};

export default function ({ parts }: Props) {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return <strong>total of {total} exercises</strong>;
}
