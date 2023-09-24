// import { Hello, Hello2 } from "./Hello";
// import { FruitsDisplay } from "./fruitsArr";
import { ConditionalComponentsDisplayHere } from "./components/ConditionalComponents/mainConditional";
import { FruitsObj } from "./components/fruitsObj";

// Displaying component here from imported module ('Hello.jsx');
function App() {
  return (
    <div>
      <h1>
        <ConditionalComponentsDisplayHere />
      </h1>
    </div>
  );
}

export default App;
