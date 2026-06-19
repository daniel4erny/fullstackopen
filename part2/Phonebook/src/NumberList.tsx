type Person = {
  name: string;
  number: string;
  id?: number;
};

type Props = {
  persons: Person[];
};

function SinglePerson({ name, number }: Person) {
  return (
    <p>
      {name} {number}
    </p>
  );
}

export default function NumberList({ persons }: Props) {
  return (
    <>
      {persons.map((person) => (
        <SinglePerson
          name={person.name}
          number={person.number}
          key={person.id}
        />
      ))}
    </>
  );
}
