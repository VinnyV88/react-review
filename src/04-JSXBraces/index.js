import React from 'react';

const me = {
  name: "Vincent",
  age: 41,
  hobbies: ["Islanders", "Jets", "Mets", "Coding"],
  hobbyList: function() {
    return this.hobbies.map((hobby) => <li>{hobby}</li>)
  }
};

function App() {
  return (
    <div>
      <h1>About Me</h1>
      <p>Name: {me.name}</p>
      <p>Age: {me.age}</p>
      <p>Hobbies:</p>
      <ul>{me.hobbyList()}</ul>
    </div>
  );
}

export default App;
