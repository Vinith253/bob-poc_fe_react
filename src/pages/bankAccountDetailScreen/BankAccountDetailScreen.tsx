import { Box, Button, Typography } from "@mui/material";
import { CommonColor } from "../../commonStyle/CommonColor";
import { CommonStyle } from "../../commonStyle/CommonStyle";
import CustomButton from "../../components/commonComponent/customButton/CustomButton";
import InfoIcon from "../../assets/icons/info_circle_icon.svg";
import AxisBankImage from "../../assets/images/axis_bank_image.svg";
import AccountVerifiedIcon from "../../assets/icons/account_verified_icon.svg";
import { useNavigate } from "react-router-dom";
import { verification } from "../../utils/Constants";

export default function BankAccountDetailScreen() {
  const navigate = useNavigate();

  const submitButtonAction = () => {

    navigate('/verification', {

      state: { content: verification.FINDING_SUITABLE_CARD },

    });

  };

  const renderTextComponent = (title: string, value: string) => {
    return (
      <Box>
        <Typography sx={{ fontWeight: 500, fontSize: "0.8vw", color: "#B9B8B8" }}>{title}</Typography>
        <Typography sx={{ fontWeight: 600, fontSize: "1vw" }}>{value}</Typography>
      </Box>
    );
  };

  return (
    <>
      <Box sx={CommonStyle.authLayoutcard}>
        <Box sx={{ margin: "10px" }}>
          <Typography sx={CommonStyle.authLayoutTitleText}>
            YOUR ACCOUNT DETAILS
          </Typography>

          <Box style = {{
            marginTop: "15px"
          }}>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <img
                src={AxisBankImage}
                style={{
                  width: "90px",
                  height: "45px",
                  marginTop: "2px",
                  marginLeft: "5px",
                }}
              />

              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                  src={AccountVerifiedIcon}
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "5px",
                  }}
                />
                <Typography sx = {{ fontSize: "0.9vw", fontWeight: 500 }}>Your Account is Verified</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                height: "2px",
                width: "100%",
                backgroundColor: CommonColor.BackgroundColor,
                margin: "5px 0",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                // padding: "0 30px",
                marginTop: "15px",
              }}
            >
              <Box sx={{ width: "50%" }}>
                {renderTextComponent("Name", "Vinith")}
              </Box>
              <Box sx={{ width: "50%" }}>
                {renderTextComponent("DOB", "10-05-1995")}
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                // padding: "0 30px",
                marginTop: "15px",
              }}
            >
              <Box sx={{ width: "50%" }}>
                {renderTextComponent("Account Number", "1234567890")}
              </Box>
              <Box sx={{ width: "50%" }}>
                {renderTextComponent("IFSC Code", "HDFC0000012")}
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                // padding: "0 30px",
                marginTop: "15px",
              }}
            >
              <Box sx={{ width: "50%" }}>
                {renderTextComponent("Current Account Balance", "₹ 400,000.00")}
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              height: "2px",
              width: "100%",
              backgroundColor: CommonColor.BackgroundColor,
              margin: "20px 0",
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              // justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Typography sx = {{ fontWeight: 600, fontSize: "1vw" }}>AQB</Typography>

            <img
              src={InfoIcon}
              style={{
                width: "20px",
                height: "20px",
                marginTop: "2px",
                marginLeft: "5px",
              }}
              onClick={() => console.log("clicked")}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "15px",
            }}
          >
            <Box sx={{ width: "30%" }}>
              {renderTextComponent("3 Month AQB", "₹ 3,00,000.00")}
            </Box>
            <Box sx={{ width: "30%" }}>
              {renderTextComponent("6 Month AQB", "₹ 6,00,000.00")}
            </Box>
          </Box>

          <Box
            sx={{
              height: "2px",
              width: "100%",
              backgroundColor: CommonColor.BackgroundColor,
              margin: "20px 0",
            }}
          />
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            <Button onClick={() => navigate(-1)}>
              <Typography
                sx={{
                  fontSize: "0.75vw",
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
