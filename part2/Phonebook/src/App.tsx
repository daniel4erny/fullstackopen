import { useState, useEffect } from "react";
import PersonForm from "./PersonForm";
import NumberList from "./NumberList";
import Filter from "./Filter";
import axios from "axios";

type Person = {
  name: string;
  number: string;
  id: number;
};

export default function App() {
  const [persons, setPersons] = useState<Person[]>([]);
  const [newName, setNewName] = useState<string>("");
  const [newPhoneNum, setNewPhoneNum] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const personsFiltered = updateNums();

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

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
