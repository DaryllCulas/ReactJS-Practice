import { useState } from "react";
import TaskListItem from "./TaskListItem";

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
      {TaskList.map((item) => (
        <TaskListItem key={item} item={item} />
      ))}
    </div>
  );
};

export { TodoApp };
