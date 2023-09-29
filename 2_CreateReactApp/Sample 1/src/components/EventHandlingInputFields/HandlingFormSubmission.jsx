import { useState } from "react";

const HandlingFormSubmission = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);
  };

  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <h3>First Name:</h3>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          name={name.firstName}
        />
        <br />
        <h3>Last Name</h3>
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          name={name.lastName}
        />
        <br />
        <br />
        <button onClick={submitHandler}>Add</button>
      </form>
    </div>
  );
};

export { HandlingFormSubmission };
