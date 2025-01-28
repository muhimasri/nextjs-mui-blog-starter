import React from "react"
import CircularProgress from "@mui/material/CircularProgress"
import MuiButton, { ButtonProps as MUIButtonProps } from "@mui/material/Button"

interface ButtonProps extends MUIButtonProps {
  loading?: boolean
  pill?: boolean
}

const Button = ({ loading, pill, ...other }: ButtonProps): JSX.Element => {
  return (
    <MuiButton
      {...other}
      sx={{
        borderRadius: pill ? theme => theme.shape.borderRadiusPill : theme => theme.shape.borderRadiusSmall,
        textTransform: "none",
        "&.Mui-disabled": {
          backgroundColor: "grey.200",
        },
        ...other.sx,
      }}
      endIcon={
        loading ? (
          <CircularProgress
            size={20}
            sx={{
              color: "grey.400",
            }}
          />
        ) : null
      }
      disabled={loading}
      disableElevation
      disableRipple
    >
      {other.children}
    </MuiButton>
  )
}

export default Button
