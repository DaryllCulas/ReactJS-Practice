import { FruitsObjComponents } from "./fruitsObjComponents";

function FruitsObj() {
  const fruits = [
    { name: "Apple", price: 23, looksLike: "🍎", isSoldOut: false },
    { name: "Banana", price: 34, looksLike: "🍌", isSoldOut: true },
    { name: "Cherry", price: 64, looksLike: "🍒", isSoldOut: false },
    { name: "Tomato", price: 53, looksLike: "🍅", isSoldOut: true },
    { name: "Pineapple", price: 100, looksLike: "🍍", isSoldOut: true },
    { name: "Kiwifruit", price: 83, looksLike: "🥝", isSoldOut: false },
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
            isSoldOut={fruit.isSoldOut}
          />
        ))}
      </ul>
    </div>
  );
}

export { FruitsObj };
