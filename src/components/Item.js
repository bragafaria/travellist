export default function Item({ itemObject, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemObject.packed}
        onChange={() => onToggleItems(itemObject.id)}
      />
      <span style={itemObject.packed ? { textDecoration: "line-through" } : {}}>
        {itemObject.quantity} {itemObject.description}
      </span>
      <button onClick={() => onDeleteItem(itemObject.id)}>❌</button>
    </li>
  );
}
