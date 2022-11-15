import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CommonColor } from '../../commonStyle/CommonColor';
import { CommonStyle } from '../../commonStyle/CommonStyle';
import CustomButton from '../../components/commonComponent/customButton/CustomButton';
import CustomTextInput from '../../components/commonComponent/customTextInput/CustomTextInput';

import AxisBankImage from '../../assets/images/axis_bank_image.svg';
import BOBImage from '../../assets/images/axis_bank_image.svg';
import RBLImage from '../../assets/images/axis_bank_image.svg';
import YesBankImage from '../../assets/images/axis_bank_image.svg';

const dummyBankList = [
  {
    id: 1,
    acc_no: '123456789012',
    src: AxisBankImage,
  },
  { id: 2, acc_no: '123456789012', src: BOBImage },
  {
    id: 3,
    acc_no: '123456789012',
    src: RBLImage,
  },
  {
    id: 4,
    acc_no: '123456789012',
    src: YesBankImage,
  },
];

export default function BankListScreen() {
  const navigate = useNavigate();

  const buttonClickAction = () => {
    console.log('Ashwini is badddddd uhhhhh');
    navigate('/banklist');
  };

  return (
    <>
      <Box sx={CommonStyle.authLayoutcard}>
        <Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography sx={CommonStyle.authLayoutTitleText}>
              CHOOSE YOUR BANK ACCOUNT
            </Typography>

            <Button>
              <Typography sx={CommonStyle.authLayoutTitleText}>Back</Typography>
            </Button>
          </Box>
          <Typography sx={CommonStyle.authLayoutDescriptionText}>
            Choose the bank to be linked for your credit card
          </Typography>

          <Box>
            <Grid
              container
              // spacing={{ xs: 1, md: 1 }}
              columns={{ xs: 12, sm: 12, md: 12 }}
            >
              <Grid item>
                {Array.from(dummyBankList).map((item, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Box
                      sx={{
                        borderWidth: '1px',
                        borderColor: 'success.light',
                        backgroundColor: 'success.dark',
                        padding: '10px',
                        width: '100%',
                      }}
                    >
                      <Typography>{item.id}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'success.light',
          }}
        >
          <CustomButton
            title={'Continue'}
            buttonColor={CommonColor.ThemeOrange}
            textColor={CommonColor.White}
            callBackFunction={buttonClickAction}
            disabled={true}
          />
        </Box>
      </Box>
    </>
  );
}
