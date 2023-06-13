import React, { useState } from "react";

export default function ShoppingList() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (item.trim() !== "") {
      setItems([...items, item]);
      setItem("");
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter an item"
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
