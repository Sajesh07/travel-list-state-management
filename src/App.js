import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

function App() {
  const [items, setItem] = useState([]);

  function handleAddItems(item) {
    setItem((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList onDeleteItems={handleDeleteItem} items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> 🏝️Far Away👜</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newitem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    console.log(newitem);

    onAddItems(newitem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 🤩 trip?</h3>
      {/* <input type="textarea">Item...</input> */}
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {/* Number(e.target.value)*/}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function PackingList({ items, onDeleteItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItems={onDeleteItems} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItems }) {
  return (
    <li>
      <span>
        <input type="checkbox"></input>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
      {/* () => onDeleteItems(item.id) because the we want to directly the id and to not call the event object */}
    </li>
  );
}

function Stats() {
  return <div className="stats">Stats</div>;
}
export default App;
