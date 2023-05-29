import React from "react";
import Person from "./Person";

function NameList() {
  //   const names = ["Ravina", "Malhar", "Bhavyam"];
  const persons = [
    { name: "Ravina", age: 28, id: "ABC123", skill: "JavaScript" },
    { name: "Malhar", age: 30, id: "DEF456", skill: "React" },
    { name: "Bhavyam", age: 25, id: "GHI789", skill: "Node.js" },
  ];

  //   const nameList = names.map((name) => <h2>{name}</h2>);
  //   return <div>{nameList}</div>;

  const personsList = persons.map((person) => (
    // <h2>
    //   I am {person.name}. I am {person.age} years old. I know {person.skill}
    // </h2>
    <Person person={person} />
  ));

  return <div>{personsList}</div>;
}

export default NameList;
