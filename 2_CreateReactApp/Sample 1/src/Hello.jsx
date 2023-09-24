// First creation of component here with destructured props

// immutability of Props
function Hello(props) {
  return (
    <h1>
      Hello World!, Hey there {props.name}, I'm {props.age} years old
    </h1>
  );
}

// Export here
export default Hello;
