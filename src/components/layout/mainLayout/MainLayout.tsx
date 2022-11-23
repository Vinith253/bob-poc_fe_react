import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { CommonColor } from '../../../commonStyle/CommonColor';
import BoBImage from '../../../assets/images/bob_image.svg';
import { Outlet } from 'react-router-dom';
import BGImage from '../../../assets/images/background_image.svg';

export default function MainLayout() {
  return (
    <>
      <Grid
        container
        style={{ height: '100%', backgroundColor: CommonColor.ThemeOrange }}
      >
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          <Box
            sx={{
              height: '100%',
              backgroundColor: CommonColor.ThemeOrange,
              backgroundImage: {BGImage}
              // padding: '20px',
            }}
          >
            <img src={BoBImage} alt="BoBImage" style={{ padding: '30px' }} />
          </Box>
        </Grid>

        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
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
