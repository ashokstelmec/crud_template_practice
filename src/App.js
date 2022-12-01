import { useState } from "react";
import BioItem from "./components/BioItem";
import "./App.css";

const bioData = [
  { id: 0, name: "Ashok", age: 26 },
  { id: 1, name: "Sah", age: 27 },
  { id: 2, name: "Developer", age: 28 },
  { id: 3, name: "React", age: 29 },
];

function App() {
  const [biolist, setBiolist] = useState(bioData);

  return (
    <div className="App">
      {biolist.map((el, i) => (
        <BioItem key={i} name={el.name} age={el.age} id={el.id} />
      ))}

      <button className="clear-btn">Clear All</button>
    </div>
  );
}

export default App;
