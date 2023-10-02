import { useState } from "react";
import styles from "./css/Form.module.css";

const Form = ({ TaskList, setTaskList }) => {
  const [Task, setTask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default submission
    setTaskList([...TaskList, Task]);
    setTask("");
  };

  return (
    <form className={styles.formElement} onSubmit={submitHandler}>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputElement}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          value={Task}
          placeholder="Enter Todo here..."
        />
        <button className={styles.buttonElement} type="submit">
          ADD TASK
        </button>
      </div>
    </form>
  );
};

export default Form;
