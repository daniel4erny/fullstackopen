type Props = {
  course_name: string;
};

export default function Header({ course_name }: Props) {
  return <h1>{course_name}</h1>;
}
