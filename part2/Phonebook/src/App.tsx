import { useState } from "react";
import PersonForm from "./PersonForm";
import NumberList from "./NumberList";
import Filter from "./Filter";

type Person = {
  name: string;
  number: string;
  id: number;
};

export default function App() {
  const [persons, setPersons] = useState<Person[]>([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState<string>("");
  const [newPhoneNum, setNewPhoneNum] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const personsFiltered = updateNums();

  function appendPersons() {
    const isPresent = persons.some(
      (person) => person.name.toLowerCase() === newName,
    );

    if (isPresent) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const helper = [...persons];
    helper.push({ name: newName, number: newPhoneNum, id: helper.length + 1 });
    setPersons(helper);
    setNewName("");
    setNewPhoneNum("");
  }

  function updateNums() {
    if (filter === "") {
      return persons;
    }
    const helper = persons.filter((person) =>
      person.name.toLowerCase().includes(filter),
    );
    return helper;
  }

  return (
    <>
      <h2>Filter</h2>
      <Filter newFilter={setFilter} />
      <h2>Phonebook</h2>
      <PersonForm
        currName={newName}
        currPhoneNum={newPhoneNum}
        updateName={setNewName}
        updatePhone={setNewPhoneNum}
        newName={appendPersons}
      ></PersonForm>
      <h2>Numbers</h2>
      <NumberList persons={personsFiltered} />
    </>
  );
}
