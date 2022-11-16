import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CommonColor } from '../../commonStyle/CommonColor';
import { CommonStyle } from '../../commonStyle/CommonStyle';
import CustomButton from '../../components/commonComponent/customButton/CustomButton';
import CustomTextInput from '../../components/commonComponent/customTextInput/CustomTextInput';
import { RegexValidation } from '../../utils/Regex';

export default function PrimaryDetailScreen() {
  const navigate = useNavigate();
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  const [firstName, setFirstName] = useState<string>('');
  const [firstNameErr, setFirstNameErr] = useState<boolean>(false);
  const [secondName, setSecondName] = useState<string>('');
  const [secondNameErr, setSecondNameErr] = useState<boolean>(false);

  useEffect(() => {
    updateButtonStatus();
  }, [firstName, secondName]);

  const updateButtonStatus = () => {
    setButtonDisabled(
      firstName.match(RegexValidation.NamePattern) &&
        secondName.match(RegexValidation.NamePattern)
        ? false
        : true
    );
  };

  const submitButtonAction = () => {
    navigate('/secondary');
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
              handleChange={(text: string) => {
                setFirstName(text);
                setFirstNameErr(
                  text !== '' ? !RegexValidation.NamePattern.test(text) : false
                );
              }}
              value={firstName}
              error={firstNameErr}
              errorMessage={'Please enter valid name'}
            />
          </Box>

          <Box
            sx={{
              margin: '20px 0',
            }}
          >
            <CustomTextInput
              placeholder={'Last Name'}
              handleChange={(text: string) => {
                setSecondName(text);
                setSecondNameErr(
                  text !== '' ? !RegexValidation.NamePattern.test(text) : false
                );
              }}
              value={secondName}
              error={secondNameErr}
              errorMessage={'Please enter valid name'}
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
