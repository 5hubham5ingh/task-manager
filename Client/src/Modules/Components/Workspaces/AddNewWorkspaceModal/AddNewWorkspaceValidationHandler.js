import { useState } from "react";
import { useUser } from "../../../Features/User/userSelectors";

export default function AddNewWorkspaceValidationHandler({children,handleSubmit, ...rest}){

    const [validationError, setError] = useState("");
    const { _id, userName } =  useUser();
  
    const handleValidation = async (workspaceToAdd) => {
      if (workspaceToAdd.name === "") {
        setError("Name is required!");
        return;
      }
      const workspace = {
       ...workspaceToAdd,
        owner: { _id, userName },
      };
  
      handleSubmit(workspace);
    };

    return children({handleValidation, validationError, ...rest})
}