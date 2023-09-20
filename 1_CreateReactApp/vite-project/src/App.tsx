import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "New York",
    "Davao City",
    "Negros Oriental",
    "Brooklyn",
    "San Francisco",
  ];
  return (
    <div>
      <ListGroup items={items} headings="Cities" />
    </div>
  );
}

export default App;
