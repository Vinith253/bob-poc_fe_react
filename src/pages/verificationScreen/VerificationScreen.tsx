import { Box, CircularProgress, Typography } from "@mui/material";
import { verify } from "crypto";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isFunctionDeclaration } from "typescript";
import { CommonColor } from "../../commonStyle/CommonColor";
import { CommonStyle } from "../../commonStyle/CommonStyle";
import CustomButton from "../../components/commonComponent/customButton/CustomButton";
import { verification } from "../../utils/Constants";
const otpVerification = [
  "Verifying OTP please wait for a few seconds",
  "Validating your PAN card details",
  "Validating your Credit score.",
];
export default function VerificationScreen() {
  const [index, setIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location", location);
  const content = location?.state?.content ?? verification.VERIFY;
  console.log("content", content);
  const changeMessage = () => {
    setTimeout(() => {
      setIndex(index + 1);
    }, 2000);
  };
  useEffect(() => {
    if (content === verification.VERIFY) {
      if (index !== 3) {
        changeMessage();
      } else {
        navigate("/LandingScreen");
        // setActive(false);
      }
    }
  }, [index]);
  const fetchingData = () => {
    setTimeout(() => {
      navigate("/banklist");
    }, 2000);
  };
  useEffect(() => {
    if (content === verification.VALIDATE) {
      fetchingData();
    }
  }, []);
  const renderTitle = () => {
    if (content === verification.VERIFY) {
      return "Verifying  OTP . . .";
    }
    if (content === verification.VALIDATE) {
      return "Fetching...";
    }
    return "";
  };
  return (
    <>
      <Box sx={CommonStyle.authLayoutcard}>
        <Box
          sx={{
            height: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: "column",
            paddingBottom: "1vw",
          }}
        >
          <CircularProgress
            variant="determinate"
            value={100}
            size="5rem"
            sx={{ opacity: "0.5", color: CommonColor.loaderColor }}
          />
          <Typography
            sx={{
              color: CommonColor.descriptionColor,
              width: "75%",
              textAlign: "center",
              fontSize: "1vw",
              marginTop: "3vw",
            }}
          >
            {content === verification.VERIFY && otpVerification[index]}
            {content === verification.VALIDATE &&
              "Fetching account details mapped with your number"}
          </Typography>
        </Box>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            bottom: 0,
          }}
        >
          {/* <CustomButton
            title={"Verifying  OTP . . ."}
            buttonColor={CommonColor.ThemeOrange}
            textColor={CommonColor.White}
            disabled={true}
          /> */}
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