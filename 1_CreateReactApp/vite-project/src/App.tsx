// import ListGroup from "./components/ListGroup";

import Alert from "./components/Alert";

function App() {
  // let items = [
  //   "New York",
  //   "Davao City",
  //   "Negros Oriental",
  //   "Brooklyn",
  //   "San Francisco",
  // ];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  return (
    <div>
      {/* <ListGroup
        items={items}
        headings="Cities"
        onSelectItem={handleSelectItem}
      /> */}

      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;
