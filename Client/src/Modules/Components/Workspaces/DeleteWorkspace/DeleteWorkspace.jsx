import DeleteIcon from "@mui/icons-material/Delete";
import { CircularProgress } from "@mui/material";

export default function DeleteWorkspace({ isPending, deleteWorkspace }) {
  return isPending ? (
    <CircularProgress sx={style} />
  ) : (
    <DeleteIcon onClick={deleteWorkspace} sx={style} />
  );
}

const style = { position: "absolute", right: "5%", bottom: "5%" };
