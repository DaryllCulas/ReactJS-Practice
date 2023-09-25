// import { Hello, Hello2 } from "./Hello";
// import { FruitsDisplay } from "./fruitsArr";
import { TernaryComponentHere } from "./components/ConditionalComponents/TernaryComponent";
import { ConditionalComponentsDisplayHere } from "./components/ConditionalComponents/mainConditional";
import { FruitsObj } from "./components/fruitsObj";

// Displaying component here from imported module ('Hello.jsx');
function App() {
  return (
    <div>
      <h1>
        <TernaryComponentHere />
      </h1>
    </div>
  );
}

export default App;
