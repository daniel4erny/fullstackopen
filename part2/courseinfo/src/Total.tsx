type Props = {
  parts: { name: string; exercises: number }[];
};

export default function Total({ parts }: Props) {
  return (
    <p>
      Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}
    </p>
  );
}
