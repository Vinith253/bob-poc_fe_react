import { Box, Typography, TextField, Button, capitalize } from '@mui/material';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import OTPInputContainer from './OTPInputContainer';
import { CommonColor } from '../../commonStyle/CommonColor';
import { CommonStyle } from '../../commonStyle/CommonStyle';
import CustomButton from '../../components/commonComponent/customButton/CustomButton';
import { useLocation, useNavigate } from 'react-router-dom';
import TimerComponent from '../../utils/Timer';
import { verification } from '../../utils/Constants';
export default function OtpVerificationScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [enableResendButton, setEnableResendButton] = useState<boolean>(false);
  const [mobileNo, setMobileNo] = useState<String>('+91 *******210');
  const [otp, setOtp] = useState<number>(0);
  // const
  const [showError, setShowError] = useState<boolean>(false);
  const [otpStatus, setOtpStatus] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  const updateTimer = (value: number) => {
    setEnableResendButton(value === 0 ? true : false);
  };

  const submitButtonAction = () => {
    const content = location?.state?.content ?? verification.VERIFY;

    navigate('/verification', {
      state: { content: content },
    });
  };

  useEffect(() => {
    updateButtonStatus();
  }, [otp]);

  const updateButtonStatus = () => {
    setButtonDisabled(otp && String(otp).length === 6 ? false : true);
  };

  const onChangeOtp = (e: any) => {
    setOtp(e);
    setShowError(false);
  };

  return (
    <>
      <Box sx={CommonStyle.authLayoutcard}>
        <Box style={{ backgroundColor: 'success.light' }}>
          {/* <Stack> */}
            <Typography sx={CommonStyle.authLayoutTitleText}>
              OTP VERIFICATION
            </Typography>
          {/* </Stack> */}
          <Typography
            sx={[CommonStyle.authLayoutDescriptionText,{fontSize: '1vw'}]}
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
              alignItems: 'center',
            }}
          >
            {/* <Button disabled={!enableResendButton}> */}
              <Typography
              onClick={() => console.log("resend otp clicked")}
                sx={
                  !enableResendButton
                    ? CommonStyle.otpTextColorFaded
                    : CommonStyle.otpTextColor
                }
              >
                Resend OTP
              </Typography>
            {/* </Button> */}
            <Typography
              sx={CommonStyle.otpTextColor}
              onClick={() => navigate(-1)}
            >
              Change Mobile number
              {/* todo have to check which clicking this button after landing screen flow */}
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
            disabled={buttonDisabled}
            callBackFunction={submitButtonAction}
          />
        </Box>
      </Box>
    </>
  );
}
