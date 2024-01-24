export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your list</em>
      </p>
    );

  const numItems = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  const pourcentage = Number((packedItem / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {pourcentage === 100
          ? `You got everything! Ready to go ✈️`
          : `💼 You have ${numItems} items  on your list, and
          you already packed ${packedItem} (${pourcentage}%)`}
      </em>
    </footer>
  );
}
