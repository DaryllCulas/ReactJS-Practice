import TaskListItem from "./TaskListItem";
import styles from "./css/getTaskList.module.css";

const GetTaskList = ({ TaskList, setTaskList }) => {
  return (
    <div className={styles.getList}>
      {TaskList.map((item) => (
        <TaskListItem
          key={item.name}
          item={item}
          TaskList={TaskList}
          setTaskList={setTaskList}
        />
      ))}
    </div>
  );
};

export default GetTaskList;
