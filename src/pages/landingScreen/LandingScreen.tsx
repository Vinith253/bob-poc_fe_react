import { Box, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img3 from "../../assets/images/aqb_image.svg";
import img2 from "../../assets/images/bob_image.svg";
import img1 from "../../assets/images/c2c_image.svg";
import { CommonColor } from "../../commonStyle/CommonColor";
import { LandingPageStyle } from "../../commonStyle/CommonStyle";
import { verification } from "../../utils/Constants";

export default function LandingScreen() {
  const navigate = useNavigate();

  const submitButtonAction = () => {
    navigate("/verification", { state: { content: verification.VALIDATE } });
  };
  return (
    <>
      <Stack
        sx={LandingPageStyle.landingContainer}
        style={{ width: "70%", height: "460px" }}
      >
        <Box>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "1vw",
              color: CommonColor.darkGrey,
              fontWeight: "600",
            }}
          >
            New to Credit Card or already have a credit card
          </Typography>
          <Typography
            sx={{
              fontSize: "1vw",
              width: "48%",
              marginTop: "5px",
              fontWeight: "400",
              color: CommonColor.descriptionColor,
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
            alignItems: 'center',
            justifyContent: "space-evenly"
          }}
        >
          <Box sx={{ marginTop: "10px" }}>
            <Typography sx={LandingPageStyle.landingHeading}>
              ALREADY HAVE A CREDIT CARD
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
          <Box sx = {{ borderRight: "1px solid #E16E38", height: '100%', width: '2px'}}/>
          <Box sx={{  marginTop: "10px" }}>
            <Typography sx={LandingPageStyle.landingHeading}>
              NEW TO CREDIT CARD
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
          <Box sx = {{ borderRight: "1px solid #E16E38", height: '100%', width: '2px'}}/>
          <Box sx={{ marginTop: "10px" }}>
            <Typography sx={LandingPageStyle.landingHeading}>
              GET CARD WITH BANK ACCOUNT
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
