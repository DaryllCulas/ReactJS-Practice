import Hello from "./Hello";

// Displaying component here from imported module ('Hello.jsx');
function App() {
  return (
    <div>
      <h1>
        <Hello name="Daryll" age="24" />
        <Hello name="Luffy" age="20" />
        <Hello name="Zoro" age="22" />
      </h1>
    </div>
  );
}

export default App;
