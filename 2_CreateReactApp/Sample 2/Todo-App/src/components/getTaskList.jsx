import TaskListItem from "./TaskListItem";

const GetTaskList = ({ TaskList }) => {
  return (
    <div>
      {TaskList.map((item) => (
        <TaskListItem key={item} item={item} />
      ))}
    </div>
  );
};

export default GetTaskList;
