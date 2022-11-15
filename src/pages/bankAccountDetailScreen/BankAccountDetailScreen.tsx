import { Box, Button, Typography } from '@mui/material';
import { CommonColor } from '../../commonStyle/CommonColor';
import { CommonStyle } from '../../commonStyle/CommonStyle';
import CustomButton from '../../components/commonComponent/customButton/CustomButton';
import InfoIcon from '../../assets/icons/info_circle_icon.svg';
import { useNavigate } from 'react-router-dom';

export default function BankAccountDetailScreen() {
  const navigate = useNavigate();

  const submitButtonAction = () => {
    console.log('btn clicked...');
    navigate('/cardlist');
  };

  const renderTextComponent = (title: string, value: string) => {
    return (
      <Box>
        <Typography sx={{ fontWeight: 500 }}>{title}</Typography>
        <Typography sx={{ fontWeight: 700 }}>{value}</Typography>
      </Box>
    );
  };

  return (
    <>
      <Box sx={CommonStyle.authLayoutcard}>
        <Box sx={{ margin: '20px' }}>
          <Typography sx={CommonStyle.authLayoutTitleText}>
            YOUR ACCOUNT DETAILS
          </Typography>

          <Box>
            <Box
              sx={{
                height: '2px',
                width: '100%',
                backgroundColor: CommonColor.BackgroundColor,
                margin: '10px 0',
              }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                // padding: "0 30px",
                marginTop: '20px',
              }}
            >
              <Box sx={{ width: '50%' }}>
                {renderTextComponent('Name', 'Vinith')}
              </Box>
              <Box sx={{ width: '50%' }}>
                {renderTextComponent('DOB', '10-05-1995')}
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                // padding: "0 30px",
                marginTop: '20px',
              }}
            >
              <Box sx={{ width: '50%' }}>
                {renderTextComponent('Account Number', '1234567890')}
              </Box>
              <Box sx={{ width: '50%' }}>
                {renderTextComponent('IFSC Code', 'HDFC0000012')}
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                // padding: "0 30px",
                marginTop: '20px',
              }}
            >
              <Box sx={{ width: '50%' }}>
                {renderTextComponent('Current Account Balance', '₹ 400,000.00')}
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              height: '2px',
              width: '100%',
              backgroundColor: CommonColor.BackgroundColor,
              margin: '10px 0',
            }}
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              // justifyContent: "center",
              marginTop: '10px',
            }}
          >
            <Typography>AQB</Typography>
            <Button>
              <img src={InfoIcon} style={{ width: '20px', height: '20px' }} />
            </Button>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              // justifyContent: "space-between",
              alignItems: 'center',
              // padding: "0 30px",
              marginTop: '10px',
            }}
          >
            <Box sx={{ width: '30%' }}>
              {renderTextComponent('Name', 'Vinith')}
            </Box>
            <Box sx={{ width: '30%' }}>
              {renderTextComponent('DOB', '10-05-1995')}
            </Box>
          </Box>

          <Box
            sx={{
              height: '2px',
              width: '100%',
              backgroundColor: CommonColor.BackgroundColor,
              margin: '10px 0',
            }}
          />
        </Box>

        <Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '10px',
            }}
          >
            <Button>
              <Typography
                sx={{
                  fontSize: '0.75vw',
                }}
              >
                Choose Different Account
              </Typography>
               
            </Button>
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
              disabled={false}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
