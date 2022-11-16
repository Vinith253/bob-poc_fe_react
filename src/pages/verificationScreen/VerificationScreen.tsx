import {
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CommonColor } from '../../commonStyle/CommonColor';
import { CommonStyle } from '../../commonStyle/CommonStyle';
import CustomButton from '../../components/commonComponent/customButton/CustomButton';
import { verification } from '../../utils/Constants';
const otpVerification = [
  'Verifying OTP please wait for a few seconds',
  'Validating your PAN card details',
  'Validating your Credit score.',
];
const chooseBankVerification = [
  'Verifying OTP please wait for a few seconds',
  'Fetching your account details',
];
export default function VerificationScreen() {
  const [index, setIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  console.log('location', location);
  const content = location?.state?.content ?? verification.VERIFY;
  let displayArray: string[] = [];
  if (content === verification.VERIFY) {
    displayArray = otpVerification;
  }
  if (content === verification.CHOOSE_YOU_BANK_VALIDATION) {
    displayArray = chooseBankVerification;
  }

  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 550);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const changeMessage = () => {
    setTimeout(() => {
      setIndex(index + 1);
    }, 2000);
  };
  useEffect(() => {
    if (content === verification.VERIFY) {
      if (index !== displayArray.length) {
        changeMessage();
      } else {
        navigate('/LandingScreen');
        // setActive(false);
      }
    }
    if (content === verification.CHOOSE_YOU_BANK_VALIDATION) {
      if (index !== displayArray.length) {
        changeMessage();
      } else {
        navigate('/bankaccountdetail');
        // setActive(false);
      }
    }
  }, [index]);
  const fetchingData = () => {
    setTimeout(() => {
      navigate('/banklist');
    }, 2000);
  };
  useEffect(() => {
    if (content === verification.VALIDATE) {
      fetchingData();
    }
  }, []);
  const findingSuitableCard = () => {
    setTimeout(() => {
      navigate('/cardlist');
    }, 2000);
  };
  useEffect(() => {
    if (content === verification.FINDING_SUITABLE_CARD) {
      findingSuitableCard();
    }
  }, []);
  const renderTitle = () => {
    if (
      content === verification.VERIFY ||
      (content === verification.CHOOSE_YOU_BANK_VALIDATION && index === 0)
    ) {
      return 'Verifying  OTP . . .';
    }
    if (
      content === verification.VALIDATE ||
      (content === verification.CHOOSE_YOU_BANK_VALIDATION && index === 1)
    ) {
      return 'Fetching...';
    }
    if (content === verification.FINDING_SUITABLE_CARD) {
      return 'Finding suitable cards . . .';
    }
    return '';
  };
  return (
    <>
      <Box sx={CommonStyle.authLayoutcard}>
        <Box
          sx={{
            height: '80%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            paddingBottom: '1vw',
          }}
        >
          {content === verification.FINDING_SUITABLE_CARD ? (
            <Box sx={{ width: '100%', color: CommonColor.loaderColor }}>
              <LinearProgress
                value={0}
                sx={{
                  padding: '8px',
                  borderRadius: '15px',
                  opacity: '0.5',
                  color: CommonColor.loaderColor,
                }}
              />
            </Box>
          ) : (
            <CircularProgress
              // variant="determinate"
              // value={progress}
              // size="5rem"
              // sx={{ opacity: '0.5', color: CommonColor.loaderColor }}
            />
          )}
          <Typography
            sx={{
              color: CommonColor.descriptionColor,
              width: '75%',
              textAlign: 'center',
              fontSize: '1vw',
              marginTop: '3vw',
            }}
          >
            {(content === verification.VERIFY ||
              content === verification.CHOOSE_YOU_BANK_VALIDATION) &&
              displayArray[index]}
            {content === verification.VALIDATE &&
              'Fetching account details mapped with your number'}
            {content === verification.FINDING_SUITABLE_CARD &&
              'Finding cards best suited to your profile . . .'}
          </Typography>
        </Box>
        <Box
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            bottom: 0,
          }}
        >
          <CustomButton
            title={renderTitle()}
            buttonColor={CommonColor.ThemeOrange}
            textColor={CommonColor.White}
            disabled={true}
          />
        </Box>
      </Box>
    </>
  );
}
