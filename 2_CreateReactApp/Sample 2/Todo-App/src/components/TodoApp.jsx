import { useState } from "react";
import Form from "./Form";
import GetTaskList from "./getTaskList";

const TodoApp = () => {
  const [TaskList, setTaskList] = useState([]);
  return (
    <div>
      <Form TaskList={TaskList} setTaskList={setTaskList} />
      <GetTaskList TaskList={TaskList} setTaskList={setTaskList} />
    </div>
  );
};

export { TodoApp };
