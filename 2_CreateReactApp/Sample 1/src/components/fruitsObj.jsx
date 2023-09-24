import { FruitsObjComponents } from "./fruitsObjComponents";

function FruitsObj() {
  const fruits = [
    { name: "Apple", price: 23, looksLike: "🍎" },
    { name: "Banana", price: 34, looksLike: "🍌" },
    { name: "Cherry", price: 64, looksLike: "🍒" },
    { name: "Tomato", price: 53, looksLike: "🍅" },
    { name: "Pineapple", price: 100, looksLike: "🍍" },
    { name: "Kiwifruit", price: 83, looksLike: "🥝" },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          // <li key={fruit.name}>
          //   {fruit.looksLike} {fruit.name} = ${fruit.price}
          // </li>

          // Rendering components inside a loop here
          <FruitsObjComponents
            key={fruit.name}
            figure={fruit.looksLike}
            name={fruit.name}
            prices={fruit.price}
          />
        ))}
      </ul>
    </div>
  );
}

export { FruitsObj };
