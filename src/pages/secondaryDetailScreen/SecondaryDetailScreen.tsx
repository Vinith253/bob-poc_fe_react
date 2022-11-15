import { Box, Typography, Link } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';
import { CommonColor } from '../../commonStyle/CommonColor';
import { CommonStyle } from '../../commonStyle/CommonStyle';
import CustomButton from '../../components/commonComponent/customButton/CustomButton';
import CustomTextInput from '../../components/commonComponent/customTextInput/CustomTextInput';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';

export default function SecondaryDetailScreen() {
  const navigate = useNavigate();
  const [value, setValue] = useState(null);
  const submitButtonAction = () => {
    navigate('/otpverification');
  };

  const gobackAction = () => {
    navigate('/');
  };

  return (
    <>
      <Box sx={CommonStyle.authLayoutcard}>
        <Box style={{ backgroundColor: 'success.light' }}>
          <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography sx={CommonStyle.authLayoutTitleText}>
              USER DETAILS
            </Typography>
            <Typography sx={CommonStyle.backButton} onClick={gobackAction}>
              Back
            </Typography>
          </Stack>
          <Typography sx={CommonStyle.authLayoutDescriptionText}>
            Enter the below details to login via OTP
          </Typography>
          <Box>
            <CustomTextInput placeholder={'Mobile Number'} />
          </Box>
          <Box
            sx={{
              margin: '20px 0',
            }}
          >
            <CustomTextInput placeholder={'PAN Number'} />
          </Box>
          <Box
            sx={{
              margin: '20px 0',
            }}
          >
            <CustomTextInput placeholder={'Date of Birth'} />
          </Box>
        </Box>
        <Box
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ marginBottom: '15px', marginTop: '20px' }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <Checkbox sx={CommonStyle.checkBox} size="small" />
              <Typography sx={CommonStyle.termsAndCondition}>
                I hereby consent to get my Credit Report from Credit Bureau
                though PAN verification.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <Checkbox sx={CommonStyle.checkBox} size="small" />
              <Typography
                sx={CommonStyle.termsAndCondition}
                style={{ paddingRight: '70px' }}
              >
                I accept the{' '}
                <Link
                  href="https://www.google.co.in/"
                  style={{
                    color: CommonColor.otpTextBlue,
                    fontSize: '12px',
                    cursor: 'pointer',
                  }}
                >
                  Terms & Conditions
                </Link>{' '}
                and{' '}
                <Link
                  href="https://www.google.co.in/"
                  style={{
                    color: CommonColor.otpTextBlue,
                    fontSize: '12px',
                    cursor: 'pointer',
                  }}
                >
                  Privacy
                </Link>{' '}
                Notice.
              </Typography>
            </Box>
          </Box>
          <CustomButton
            title={'Get OTP'}
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
