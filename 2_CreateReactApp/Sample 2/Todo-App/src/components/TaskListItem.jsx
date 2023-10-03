import styles from "./css/TaskListItem.module.css";
const TaskListItem = ({ item }) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
        <span>
          <button className={styles.deleteButton}>X</button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
};

export default TaskListItem;
