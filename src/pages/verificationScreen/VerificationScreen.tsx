import { Box, CircularProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CommonColor } from "../../commonStyle/CommonColor";
import { CommonStyle } from "../../commonStyle/CommonStyle";
import CustomButton from "../../components/commonComponent/customButton/CustomButton";

export default function VerificationScreen() {
  const navigate = useNavigate();

  const submitButtonAction = () => {
    navigate("/landingscreen"); //banklist
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
          <CircularProgress variant="determinate" value={100} size="5rem" />

          <Typography
            sx={{
              color: CommonColor.descriptionColor,
              width: "75%",
              textAlign: "center",
              fontSize: "1vw",
              marginTop: "3vw",
            }}
          >
            Fetching account details mapped with your number
          </Typography>
        </Box>

        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            bottom: 0,
          }}
        >
          <CustomButton
            title={"Fetching..."}
            buttonColor={CommonColor.ThemeOrange}
            textColor={CommonColor.White}
            callBackFunction={submitButtonAction}
            disabled={false}
          />
        </Box>
      </Box>
    </>
  );
}
