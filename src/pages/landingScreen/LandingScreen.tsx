import { Box, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img3 from "../../assets/images/aqb_image.svg";
import img2 from "../../assets/images/bob_image.svg";
import img1 from "../../assets/images/c2c_image.svg";
import { CommonColor } from "../../commonStyle/CommonColor";
import { LandingPageStyle } from "../../commonStyle/CommonStyle";
export default function LandingScreen() {
  const navigate = useNavigate();

  const submitButtonAction = () => {
    navigate("/banklist");
  };
  return (
    <>
      <Stack sx={LandingPageStyle.landingContainer}>
        <Box>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "14px",
              color: "#333333",
              fontWeight: "700",
            }}
          >
            New to Credit Card or already have a credit card
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              width: "48%",
              marginTop: "5px",
              fontWeight: "400",
            }}
          >
            You can apply Bank of Baroda credit card based on your Income or
            based on other bank’s card
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "40px",
          }}
        >
          <Box sx={{ borderRight: "1px solid red", marginTop: "10px" }}>
            <Typography sx={LandingPageStyle.landingHeading}>
              Alredy Have a Credit Card
            </Typography>
            <img src={img1} alt="dd" />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {" "}
              <Button sx={LandingPageStyle.landingBtn} variant="contained">
                Based on Other Bank's Card
              </Button>
            </Box>
          </Box>
          <Box sx={{ borderRight: "1px solid red", marginTop: "10px" }}>
            <Typography sx={LandingPageStyle.landingHeading}>
              New To Credit Card
            </Typography>
            <img src={img1} alt="dd" />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button sx={LandingPageStyle.landingBtn} variant="contained">
                Based on Income
              </Button>
            </Box>
          </Box>
          <Box sx={{ marginTop: "10px" }}>
            <Typography sx={LandingPageStyle.landingHeading}>
              Get Card With Bank Account
            </Typography>
            <img src={img3} alt="dd" />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                sx={LandingPageStyle.landingBtn}
                variant="contained"
                onClick={submitButtonAction}
              >
                Based On Quarterly Balance
              </Button>
            </Box>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
