import { Box, Typography, TextField, Button } from '@mui/material';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import { CommonColor } from '../../commonStyle/CommonColor';
import { CommonStyle } from '../../commonStyle/CommonStyle';
import CustomButton from '../../components/commonComponent/customButton/CustomButton';
import { useLocation, useNavigate } from 'react-router-dom';
import TimerComponent from '../../utils/Timer';
import { verification } from '../../utils/Constants';
export default function OtpVerificationScreen() {
  const navigate = useNavigate();
  const location= useLocation()
  const [enableResendButton, setEnableResendButton] = useState<boolean>(false);
  const [mobileNo, setMobileNo] = useState<String>('+91 986543210');

  const updateTimer = (value: number) => {
    setEnableResendButton(value === 0 ? true : false);
  };

  const submitButtonAction = () => {

    const content = location?.state?.content ?? verification.VERIFY;



    navigate('/verification', {

      state: { content: content },

    });

  };
  return (
    <>
      <Box sx={CommonStyle.authLayoutcard}>
        <Box style={{ backgroundColor: 'success.light' }}>
          <Stack>
            <Typography sx={CommonStyle.authLayoutTitleText}>
              OTP VERIFICATION
            </Typography>
          </Stack>
          <Typography
            sx={CommonStyle.authLayoutDescriptionText}
            style={{ paddingRight: '13px' }}
          >
            {`We have sent OTP to your entered mobile number ${mobileNo}`}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField
              variant="outlined"
              size="small"
              sx={CommonStyle.otpInputBox}
            ></TextField>
            <TextField
              variant="outlined"
              size="small"
              sx={CommonStyle.otpInputBox}
            ></TextField>
            <TextField
              variant="outlined"
              size="small"
              sx={CommonStyle.otpInputBox}
            ></TextField>
            <TextField
              variant="outlined"
              size="small"
              sx={CommonStyle.otpInputBox}
            ></TextField>
            <TextField
              variant="outlined"
              size="small"
              sx={CommonStyle.otpInputBox}
            ></TextField>
            <TextField
              variant="outlined"
              size="small"
              sx={CommonStyle.otpInputBox}
            ></TextField>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '20px',
            }}
          >
            <Button disabled={!enableResendButton}>
              <Typography 
              sx={!enableResendButton ? CommonStyle.otpTextColorFaded : CommonStyle.otpTextColor}
              >
                Resend OTP
              </Typography>
            </Button>
            <Typography
              sx={CommonStyle.otpTextColor}
              onClick={() => navigate(-1)}
            >
              Change Mobile number
            </Typography>
          </Box>
          <Box>
            <TimerComponent time={299} callBackFunction={updateTimer} />
          </Box>
        </Box>
        <Box
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CustomButton
            title={'Verify'}
            buttonColor={CommonColor.ThemeOrange}
            textColor={CommonColor.White}
            disabled={false}
            callBackFunction={submitButtonAction}
          />
        </Box>
      </Box>
    </>
  );
}
