import TaskListItem from "./TaskListItem";
import styles from "./css/getTaskList.module.css";

const GetTaskList = ({ TaskList }) => {
  return (
    <div className={styles.getList}>
      {TaskList.map((item) => (
        <TaskListItem key={item} item={item} />
      ))}
    </div>
  );
};

export default GetTaskList;
