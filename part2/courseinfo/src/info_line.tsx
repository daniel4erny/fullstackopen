type Props = {
  name: string;
  exercises: number;
  id: number;
};

export default function Info_line({ name, exercises, id }: Props) {
  return (
    <div key={id}>
      {name} {exercises}
    </div>
  );
}
