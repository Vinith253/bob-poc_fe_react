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
 
  let obj = {
    FirstName: "",
    LastName: "",
  };
  const [userData, setUserData] = useState(obj);

  const getUserValue = (e: any, value: string) => {
    setUserData((prev) => ({ ...prev, [value]: e }));
  };
let continueBtn =true;

  continueBtn =((userData.FirstName !=='' && userData.LastName !== '') ? false : true)
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
            <CustomTextInput placeholder={"First Name"}   handleChange={getUserValue}
              keyValue={"FirstName"}/>
          </Box>

          <Box
            sx={{
              margin: "20px 0",
            }}
          >
            <CustomTextInput placeholder={"Last Name"} handleChange={getUserValue} keyValue={"LastName"}
              
              />
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
            disabled={continueBtn}
          />
        </Box>
      </Box>
    </>
  );
}
