import { useState } from "react";

const InputForm = () => {
  const [name, setName] = useState("");
  // function handleForm(e) {
  //   setName(e.target.value);
  //   console.log(e.target.value);
  // }
  return (
    <div>
      <form>
        {/* <input onChange={(e) => handleForm(e)} type="text" value={name}></input> */}
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        ></input>
      </form>
    </div>
  );
};

export { InputForm };
