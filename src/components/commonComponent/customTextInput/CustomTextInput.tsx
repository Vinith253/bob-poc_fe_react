import * as React from "react";
import { Box, TextField, Typography } from "@mui/material";

const CustomTextInput = (props: any) => {
  return (
    <Box>
      {props.title &&<Typography
        sx={{
          margin: 0,
          fontSize: "16px",
          fontWeight: "500",
          display: "flex",
          justifyContent: "flex-start",
        }}
        variant="body1"
        color="textPrimary"
      >
        {props.title}
      </Typography>}

      <TextField
        fullWidth
        placeholder={props.placeholder}
        variant="outlined"
        size="medium"
      >
        {props.placeholder}
      </TextField>
    </Box>
  );
};

export default CustomTextInput;
