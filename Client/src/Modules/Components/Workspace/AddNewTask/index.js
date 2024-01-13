import AddNewTask from "./AddNewTask";
import AddNewTaskHandler from "./addNewTaskHandler";

export default function AddNewTaskView() {
  return (
    <AddNewTaskHandler>
      {(props) => <AddNewTask {...props} />}
    </AddNewTaskHandler>
  );
}
