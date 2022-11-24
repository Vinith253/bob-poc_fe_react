import { Box, Grid, Typography } from '@mui/material';
import { CommonColor } from '../../../commonStyle/CommonColor';
import BoBImage from '../../../assets/images/bob_image.svg';
import { Outlet } from 'react-router-dom';
import BGImage from '../../../assets/images/background_image.svg';

export default function AuthLayout() {
  return (
    <>
      <Grid
        container
        style={{ height: '100%', backgroundColor: CommonColor.ThemeOrange }}
      >
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <Box
            sx={{
              height: '100%',
              backgroundColor: CommonColor.ThemeOrange,
              // padding: '20px',
              backgroundImage:`url(${BGImage})`
            }}
          >
            <img src={BoBImage} alt="BoBImage" style={{ padding: '30px' }} />

            <Box
              sx={{
                padding: '0 40px',
              }}
            >
              <Typography
                sx={{
                  color: CommonColor.White,
                  textAlign: 'left',
                  fontSize: '3vw',
                }}
              >
                Get a new card from your existing Credit Card
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: CommonColor.White,
                  marginTop: '30px',
                  textAlign: 'left',
                  fontSize: '1.2vw',
                }}
              >
                From Shopping to Lifestyle and Premium to Co-branding, you can
                find any card here.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
          <Box
            sx={{
              backgroundColor: CommonColor.BackgroundColor,
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: '10px',
              borderBottomLeftRadius: '10px',
            }}
          >
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
