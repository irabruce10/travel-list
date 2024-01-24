import { useState } from "react";
import Item from "./Item";

export default function Packinglist({
  items,
  onDeleteItem,
  onToggleItem,
  onReset,
}) {
  const [sortItem, setSortItem] = useState("input");
  let n;

  if (sortItem === "input") n = items;
  if (sortItem === "description")
    n = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortItem === "packed")
    n = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {n.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortItem} onChange={(e) => setSortItem(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button value={items} onClick={onReset}>
          Clear List
        </button>
      </div>
    </div>
  );
}
