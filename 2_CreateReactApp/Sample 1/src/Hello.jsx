// First creation of component here with destructured props
// immutability of Props
function Hello({ name, age, seatNumbers }) {
  return (
    <div>
      <h1>
        Hello World!, Hey there {name}, I'm {age} years old and my seat numbers
        are {seatNumbers}
      </h1>
    </div>
  );
}

function Hello2({ personObj }) {
  return (
    <div>
      <h1>
        Hello World!, Hey there {personObj.name}, I'm {personObj.age} years old
        and my seat numbers are {personObj.seatNumbers}
      </h1>
    </div>
  );
}

// Export here
export { Hello, Hello2 };
