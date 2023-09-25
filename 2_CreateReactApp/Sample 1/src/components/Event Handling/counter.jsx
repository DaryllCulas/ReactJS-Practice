import { useState } from "react";

export default function Counter() {
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>My Count:{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
