import DeleteTask from "./DeleteTask";
import DeleteTaskHandler from "./deleteTaskHandler";

export default function DeleteTaskButton(props) {
  return (
    <DeleteTaskHandler {...props}>
      {(props) => <DeleteTask {...props} />}
    </DeleteTaskHandler>
  );
}
