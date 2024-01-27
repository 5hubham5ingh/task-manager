import SelectParticipants from "./SelectParticipants";
import SelectParticipantsHandler from "./selectParticipantsHandler";

export default function SearchUsers(props) {
  return (
    <SelectParticipantsHandler {...props}>
      {(props) => <SelectParticipants {...props} />}
    </SelectParticipantsHandler>
  );
}
