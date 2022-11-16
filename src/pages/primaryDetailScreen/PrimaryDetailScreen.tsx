import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CommonColor } from '../../commonStyle/CommonColor';
import { CommonStyle } from '../../commonStyle/CommonStyle';
import CustomButton from '../../components/commonComponent/customButton/CustomButton';
import CustomTextInput from '../../components/commonComponent/customTextInput/CustomTextInput';

const obj = {
  FirstName: '',
  LastName: '',
};

export default function PrimaryDetailScreen() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(obj);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    updateButtonStatus();
  }, [userData]);

  const updateButtonStatus = () => {
    setButtonDisabled(
      userData?.FirstName !== '' && userData?.LastName !== '' ? false : true
    );
  };

  const submitButtonAction = () => {
    navigate('/secondary');
  };

  const updateUserValue = (e: any, value: string) => {
    setUserData((prev) => ({ ...prev, [value]: e }));
  };

  return (
    <>
      <Box sx={CommonStyle.authLayoutcard}>
        <Box>
          <Typography sx={CommonStyle.authLayoutTitleText}>
            USER DETAILS
          </Typography>
          <Typography sx={CommonStyle.authLayoutDescriptionText}>
            Enter your full name
          </Typography>

          <Box>
            <CustomTextInput
              placeholder={'First Name'}
              handleChange={updateUserValue}
              keyValue={'FirstName'}
            />
          </Box>

          <Box
            sx={{
              margin: '20px 0',
            }}
          >
            <CustomTextInput
              placeholder={'Last Name'}
              handleChange={updateUserValue}
              keyValue={'LastName'}
            />
          </Box>
        </Box>

        <Box
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            bottom: 0,
          }}
        >
          <CustomButton
            title={'Continue'}
            buttonColor={CommonColor.ThemeOrange}
            textColor={CommonColor.White}
            callBackFunction={submitButtonAction}
            disabled={buttonDisabled}
          />
        </Box>
      </Box>
    </>
  );
}
