import "./index.css";

import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  const [item, setItem] = useState([]);

  function addHandle(e) {
    e.preventDefault();
    console.log("jdjs");
    console.log(item);

    setItem([...item]);
  }
  return (
    <div className="app">
      <Logo />
      <Form addh={addHandle} />
      <Packinglist item={item} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form({ addh }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onClick={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button onClick={addh}>Add</button>
    </form>
  );
}

function Packinglist({ item }) {
  return (
    <div className="list">
      <ul>
        {item.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>X</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>
        You got everything! Ready to go ✈️ 💼 You have items on your list, and
        you already packed
      </em>
    </footer>
  );
}

export default App;
