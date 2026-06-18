import Info_line from "./info_line";
import Total from "./Total";

type CourseType = {
  id: number;
  name: string;
  parts: {
    id: number;
    name: string;
    exercises: number;
  }[];
};

type Props = {
  course: CourseType;
};

export default function Course({ course }: Props) {
  return (
    <>
      <h1>{course.name}</h1>
      {course.parts.map((part) => (
        <Info_line
          key={part.id}
          id={part.id}
          name={part.name}
          exercises={part.exercises}
        />
      ))}
      <Total parts={course.parts}></Total>
    </>
  );
}
