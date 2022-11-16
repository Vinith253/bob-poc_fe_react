import { Box, Typography, TextField, Button } from '@mui/material';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import OTPInputContainer from './OTPInputContainer';
import { CommonColor } from '../../commonStyle/CommonColor';
import { CommonStyle } from '../../commonStyle/CommonStyle';
import CustomButton from '../../components/commonComponent/customButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import TimerComponent from '../../utils/Timer';
export default function OtpVerificationScreen() {
  const navigate = useNavigate();

  const [enableResendButton, setEnableResendButton] = useState<boolean>(false);
  const [mobileNo, setMobileNo] = useState<String>('+91 986543210');
  const [otp, setOtp] = useState<number>(0);
  const [showError, setShowError] = useState<boolean>(false);
  const [otpStatus, setOtpStatus] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateTimer = (value: number) => {
    setEnableResendButton(value === 0 ? true : false);
  };

  const submitButtonAction = () => {
    navigate('/verification');
  };

  const onChangeOtp = (e: any) => {
    console.log('e', e);
    setOtp(e);
    setShowError(false);
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
          <OTPInputContainer
            otpError={showError}
            otpValue={otp}
            onOTPChange={onChangeOtp}
          />
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
                sx={
                  !enableResendButton
                    ? CommonStyle.otpTextColorFaded
                    : CommonStyle.otpTextColor
                }
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
