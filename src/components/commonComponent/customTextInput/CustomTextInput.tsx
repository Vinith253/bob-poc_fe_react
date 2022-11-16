import * as React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { CommonColor } from '../../../commonStyle/CommonColor';

const CustomTextInput = (props: any) => {
  return (
    <Box>
      {props.title && (
        <Typography
          sx={{
            margin: 0,
            fontSize: '16px',
            fontWeight: '500',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
          variant="body1"
          color="textPrimary"
        >
          {props.title}
        </Typography>
      )}

      <TextField
        fullWidth
        label={props.placeholder}
        variant="filled" //"outlined"
        placeholder={''}
        size="medium"
        onChange={(e) => props.handleChange(e.target.value)}
        value={props.value}
      >
        {props.placeholder}
      </TextField>

      {props.error && (
        <Box>
          <Typography
            sx={{
              color: 'red',
              fontSize: '14px',
              fontWeight: '500',
              marginTop: '5px',
            }}
          >
            {props.errorMessage}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default CustomTextInput;
