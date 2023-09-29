import { useState } from "react";

const MultipleInputForm = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <b>First name: </b> {name.firstName}
      <br />
      <b>Last name: </b> {name.lastName}
      <br />
      <br />
      <form>
        First Name:
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <br />
        <br />
        Last Name:
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />
      </form>
    </div>
  );
};

export { MultipleInputForm };
