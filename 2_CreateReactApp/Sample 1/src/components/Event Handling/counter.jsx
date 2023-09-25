import { useState } from "react";

export default function Counter() {
  const increment = () => {
    setCount(count + incrementor);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - incrementor);
    }
  };
  const increaseBy = () => {
    setIncrementor(incrementor + 1);
  };

  const decreaseBy = () => {
    setIncrementor(incrementor - 1);
  };

  const [count, setCount] = useState(0);
  const [incrementor, setIncrementor] = useState(1);
  return (
    <div>
      <h1>My Count:{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1>Incrementor: {incrementor}</h1>
      <button onClick={increaseBy}>Increase</button>
      <button onClick={decreaseBy}>Decrease</button>
    </div>
  );
}
