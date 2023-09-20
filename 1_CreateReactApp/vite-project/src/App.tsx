import Message from "./Message";



const App = () => {

  const name = "Daryll";

  if(name) {
  return <div><h1>{name}</h1></div>;
} else {
  return <h1><Message></Message></h1>
}
}


export default App;