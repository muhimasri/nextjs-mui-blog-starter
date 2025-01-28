import React, { ReactNode } from "react";
import MuiTextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

type TextFieldProps = {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  sx?: object;
  other?: object;
};

const TextField = ({
  iconLeft,
  iconRight,
  sx,
  ...other
}: TextFieldProps): JSX.Element => {
  return (
    <MuiTextField
      fullWidth
      label="Label"
      sx={{
        ...sx,
      }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position={iconLeft ? "start" : "end"}>
              {iconLeft ?? iconRight}
            </InputAdornment>
          ),
        },
      }}
      {...other}
    />
  );
};

export default TextField;
