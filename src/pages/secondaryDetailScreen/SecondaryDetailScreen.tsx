import { Box, Typography, Link } from '@mui/material';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import { CommonColor } from '../../commonStyle/CommonColor';
import { CommonStyle } from '../../commonStyle/CommonStyle';
import CustomButton from '../../components/commonComponent/customButton/CustomButton';
import CustomTextInput from '../../components/commonComponent/customTextInput/CustomTextInput';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const obj = {
  mobileNum: '',
  panNum: '',
};

export default function SecondaryDetailScreen() {
  const navigate = useNavigate();
  const [dateValue, setDateValue] = useState(null);
  const [isConsentChecked, setIsConsentChecked] = useState(false);
  const [setIsTermsChecked, setTermsChecked] = useState(false);
  const [formData, setFormData] = useState(obj);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    upadateButtonStatus();
  }, [
    formData,
    dateValue,
    isConsentChecked,
    setIsTermsChecked,
  ]);

  const upadateButtonStatus = () => {
    setButtonDisabled(
      formData.mobileNum !== '' &&
        formData.panNum &&
        dateValue &&
        isConsentChecked &&
        setIsTermsChecked
        ? false
        : true
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsConsentChecked(event.target.checked);
  };

  const termVerifyHandleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTermsChecked(event.target.checked);
  };

  const submitButtonAction = () => {
    navigate('/otpverification');
  };

  const updateFormValue = (e: any, value: string) => {
    setFormData((prev) => ({ ...prev, [value]: e }));
  };  

  return (
    <>
      <Box sx={CommonStyle.authLayoutcard}>
        <Box style={{ backgroundColor: 'success.light' }}>
          <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography sx={CommonStyle.authLayoutTitleText}>
              USER DETAILS
            </Typography>
            <Typography
              sx={CommonStyle.backButton}
              onClick={() => navigate(-1)}
            >
              Back
            </Typography>
          </Stack>
          <Typography sx={CommonStyle.authLayoutDescriptionText}>
            Enter the below details to login via OTP
          </Typography>
          <Box>
            <CustomTextInput
              placeholder={'Mobile Number'}
              handleChange={updateFormValue}
              keyValue={'mobileNum'}
            />
          </Box>
          <Box
            sx={{
              margin: '20px 0',
            }}
          >
            <CustomTextInput
              placeholder={'PAN Number'}
              handleChange={updateFormValue}
              keyValue={'panNum'}
            />
          </Box>
          <Box
            sx={{
              margin: '20px 0',
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={dateValue}
                onChange={(newValuee: any) => setDateValue(newValuee)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    placeholder="Date Of Birth"
                  />
                )}
              />
            </LocalizationProvider>
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
              <Checkbox
                sx={CommonStyle.checkBox}
                size="small"
                checked={isConsentChecked}
                onChange={handleChange}
              />
              <Typography sx={CommonStyle.termsAndCondition}>
                I hereby consent to get my Credit Report from Credit Bureau
                though PAN verification.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <Checkbox
                sx={CommonStyle.checkBox}
                size="small"
                checked={setIsTermsChecked}
                onChange={termVerifyHandleChange}
              />
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
                  target={'_blank'}
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
                  target={'_blank'}
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
            disabled={buttonDisabled}
            callBackFunction={submitButtonAction}
          />
        </Box>
      </Box>
    </>
  );
}
