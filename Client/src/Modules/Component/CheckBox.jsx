import { Checkbox, FormControlLabel } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";

function CheckBox(props, ref) {
  const [check, setCheck] = useState(false);
  
  useImperativeHandle(ref, () => {
    return check;
  });

  return (
    <FormControlLabel
  style={{ color: "#3268a8" }}
  control={
    <Checkbox
      style={{ color: "#3268a8" }}
      checked={check}
      onChange={() => setCheck(!check)}
      inputProps={{ "aria-label": "controlled" }}
    />
  }
  label={props.label}
/>

  
  );
}

export default forwardRef(CheckBox);
