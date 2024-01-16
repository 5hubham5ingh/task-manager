import CompleteTask from "./CompleteTask";
import CompleteTaskHandler from "./completeTaskHandler";

export default function CompleteTaskButton(props) {
  return (
    <CompleteTaskHandler {...props}>
      {(props) => <CompleteTask {...props} />}
    </CompleteTaskHandler>
  );
}
