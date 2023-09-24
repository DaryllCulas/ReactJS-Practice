// Rendering Arrays in React using map()

function FruitsDisplay() {
  const fruits = [
    "Apply",
    "Banana",
    "Cherry",
    "Dalandan",
    "Eggplant",
    "Orange",
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruitList) => (
          <li key={fruitList}>{fruitList}</li>
        ))}
      </ul>
    </div>
  );
}

export { FruitsDisplay };
