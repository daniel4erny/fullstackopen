import Content from "./Contents";
import Header from "./Header";
import Total from "./Total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const parts = [part1, part2, part3];
  const exercises_list = [exercises1, exercises2, exercises3];

  return (
    <div>
      <Header course_name={course}></Header>
      <Content parts={parts} excercises={exercises_list}></Content>
      <Total total={exercises_list.reduce((a,b) => a + b)}></Total>
    </div>
  );
};

export default App;
