import styles from "./css/TaskListItem.module.css";
const TaskListItem = ({ item, TaskList, setTaskList }) => {
  const handleDelete = (item) => {
    setTaskList(TaskList.filter((task) => task !== item));
  };

  const handleClick = (name) => {
    const TaskListArray = TaskList.map((task) =>
      task.name === name ? { ...task, done: !task.done } : task
    );
    setTaskList(TaskListArray);
  };

  const markAsDone = item.done ? styles.markAscomplete : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={markAsDone} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
};

export default TaskListItem;
