import { useState } from "react";

const TodoApp = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    setTaskList([...TaskList, Task]);
    setTask("");
  };

  const [Task, setTask] = useState("");
  const [TaskList, setTaskList] = useState([]);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setTask(e.target.value)}
          type="text"
          value={Task}
        ></input>
        <button type="submit">ADD TASK</button>
      </form>
      {console.log(TaskList)}
    </div>
  );
};

export { TodoApp };
