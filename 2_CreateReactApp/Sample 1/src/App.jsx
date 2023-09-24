import { Hello, Hello2 } from "./Hello";

// Displaying component here from imported module ('Hello.jsx');
function App() {
  const seatNumbers = [6, 1, 9];

  const personObj = {
    age: "19",
    name: "luffy",
    seatNumbers: [3, "d", 2, "y"],
  };

  return (
    <div>
      <h1>
        <Hello name="Daryll" age="24" seatNumbers={seatNumbers} />
        <Hello2 personObj={personObj} />
      </h1>
    </div>
  );
}

export default App;
