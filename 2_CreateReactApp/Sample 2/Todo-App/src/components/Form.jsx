import { useState } from "react";

const Form = ({ TaskList, setTaskList }) => {
  const [Task, setTask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default submission
    setTaskList([...TaskList, Task]);
    setTask("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={(e) => setTask(e.target.value)}
        type="text"
        value={Task}
      ></input>
      <button type="submit">ADD TASK</button>
    </form>
  );
};

export default Form;
