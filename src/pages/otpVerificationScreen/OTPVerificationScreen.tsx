import { Box, Typography, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { CommonColor } from "../../commonStyle/CommonColor";
import { CommonStyle } from "../../commonStyle/CommonStyle";
import CustomButton from "../../components/commonComponent/customButton/CustomButton";
import { useNavigate } from "react-router-dom";
export default function OtpVerificationScreen() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState<string>("04:59");
  const submitButtonAction = () => {
    navigate("/verification");
  };
  return (
    <>
      <Box sx={CommonStyle.authLayoutcard}>
        <Box style={{ backgroundColor: "success.light" }}>
          <Stack>
            <Typography sx={CommonStyle.authLayoutTitleText}>
              OTP VERIFICATION
            </Typography>
          </Stack>
          <Typography
            sx={CommonStyle.authLayoutDescriptionText}
            style={{ paddingRight: "13px" }}
          >
            We have sent OTP to your entered mobile number +91 XXXXXXXX10
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              variant="outlined"
              size="small"
              sx={CommonStyle.otpInputBox}
            ></TextField>
            <TextField
              variant="outlined"
              size="small"
              sx={CommonStyle.otpInputBox}
            ></TextField>
            <TextField
              variant="outlined"
              size="small"
              sx={CommonStyle.otpInputBox}
            ></TextField>
            <TextField
              variant="outlined"
              size="small"
              sx={CommonStyle.otpInputBox}
            ></TextField>
            <TextField
              variant="outlined"
              size="small"
              sx={CommonStyle.otpInputBox}
            ></TextField>
            <TextField
              variant="outlined"
              size="small"
              sx={CommonStyle.otpInputBox}
            ></TextField>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Typography sx={CommonStyle.otpTextColorFaded}>
              Resend OTP
            </Typography>
            <Typography
              sx={CommonStyle.otpTextColor}
              onClick={() => navigate("/")}
            >
              Change Mobile number
            </Typography>
          </Box>
          <Box>
            <Typography sx={CommonStyle.otpTimerColor}>{timer}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomButton
            title={"Verify"}
            buttonColor={CommonColor.ThemeOrange}
            textColor={CommonColor.White}
            disabled={false}
            callBackFunction={submitButtonAction}
          />
        </Box>
      </Box>
    </>
  );
}