import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CommonColor } from "../../commonStyle/CommonColor";
import { CommonStyle } from "../../commonStyle/CommonStyle";
import CustomButton from "../../components/commonComponent/customButton/CustomButton";
import CustomTextInput from "../../components/commonComponent/customTextInput/CustomTextInput";
import AxisBankImage from "../../assets/images/axis_bank_image.svg";
import BOBImage from "../../assets/images/yes_bank_image.svg";
import RBLImage from "../../assets/images/rbl_bank_image.svg";
import YesBankImage from "../../assets/images/rbl_bank_image.svg";
import Radio from "@mui/material/Radio";
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
  {
    id: 4,
    acc_no: '123456789012',
    src: YesBankImage,
  },
];
export default function BankListScreen() {
  const [selectedValue, setSelectedValue] = useState(null);
  const navigate = useNavigate();

  const buttonClickAction = () => {
    navigate('/bankaccountdetail');
  };
  
  // const handleChange = (index:any) => {
  //   setSelectedValue(index);
  // };
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
            <Button onClick={()=>navigate('/landingscreen')}>
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
              <Grid container>
                {Array.from(dummyBankList).map((item, index) => (
                  <Grid item xs={2} sm={4} md={12} key={index}>
                    <Box
                      sx={{
                        borderWidth: '1px',
                        padding: '5px',
                        border: '1px solid rgba(187, 188, 188, 0.5)',
                        background: ' #FFFFFF',
                        margin: '5px',
                        width: '100%',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          margin: '0 16px',
                        }}
                      >
                        <Box>
                          {' '}
                          <img src={item.src} />
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: '14px',
                              fontWeight: '400',
                              color: ' rgba(88, 88, 92, 0.5)',
                            }}
                          >
                            Account Number
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '500',
                              color: '#58585C',
                            }}
                          >
                            {item.acc_no}
                          </Typography>
                        </Box>
                        <Radio
                          size="small"
                          checked={selectedValue==index}
                          onChange={(e:any)=>setSelectedValue(e.target.value)}
                          value={index}
                          name="radio-buttons"
                          
                        />
                      </Box>
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
            marginTop: '30px',
          }}
        >
          <CustomButton
            title={'Continue'}
            buttonColor={CommonColor.ThemeOrange}
            textColor={CommonColor.White}
            callBackFunction={buttonClickAction}
            disabled={false}
          />
        </Box>
      </Box>
    </>
  );
}
