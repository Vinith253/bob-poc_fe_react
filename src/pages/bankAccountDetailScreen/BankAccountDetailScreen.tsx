import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { CommonColor } from "../../commonStyle/CommonColor";
import { CommonStyle } from "../../commonStyle/CommonStyle";
import CustomButton from "../../components/commonComponent/customButton/CustomButton";

export default function BankAccountDetailScreen() {
  const submitButtonAction = () => {
    console.log("btn clicked...");
  };

  const renderTextComponent = (title: string, value: string) => {
    return (
      <Box>
        <Typography>{title}</Typography>
        <Typography>{value}</Typography>
      </Box>
    );
  };

  return (
    <>
      <Box sx={CommonStyle.authLayoutcard}>
        <Box>
          <Typography sx={CommonStyle.authLayoutTitleText}>
            YOUR ACCOUNT DETAILS
          </Typography>
          <Typography sx={CommonStyle.authLayoutDescriptionText}>
            Enter your full name
          </Typography>
        </Box>

        <Box>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Button>
              <Typography
                sx={{
                  fontSize: "0.75vw"
                }}
              >
                Choose Different Account
              </Typography>
               
            </Button>
          </Box>

          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              bottom: 0,
            }}
          >
            <CustomButton
              title={"Continue"}
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
