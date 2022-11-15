import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CommonColor } from "../../commonStyle/CommonColor";
import { CommonStyle } from "../../commonStyle/CommonStyle";
import CustomButton from "../../components/commonComponent/customButton/CustomButton";
import CustomTextInput from "../../components/commonComponent/customTextInput/CustomTextInput";

export default function PrimaryDetailScreen() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const submitButtonAction = () => {
    navigate("/secondary"); //"/banklist" , "verification"
  };

  return (
    <>
      <Box sx={CommonStyle.authLayoutcard}>
        <Box>
          <Typography sx={CommonStyle.authLayoutTitleText}>
            USER DETAILS
          </Typography>
          <Typography sx={CommonStyle.authLayoutDescriptionText}>
            Enter your full name
          </Typography>

          <Box>
            <CustomTextInput placeholder={"First Name"} />
          </Box>

          <Box
            sx={{
              margin: "20px 0",
            }}
          >
            <CustomTextInput placeholder={"Last Name"} />
          </Box>
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
    </>
  );
}
