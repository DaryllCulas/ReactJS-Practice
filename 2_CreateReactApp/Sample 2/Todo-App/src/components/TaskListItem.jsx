import styles from "./css/TaskListItem.module.css";
const TaskListItem = ({ item, TaskList, setTaskList }) => {
  const handleDelete = (item) => {
    console.log("delete button", item);
    setTaskList(TaskList.filter((task) => task !== item));
  };
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
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
