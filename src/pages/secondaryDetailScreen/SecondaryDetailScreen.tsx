import { Box, Typography, Link } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { CommonColor } from "../../commonStyle/CommonColor";
import { CommonStyle } from "../../commonStyle/CommonStyle";
import CustomButton from "../../components/commonComponent/customButton/CustomButton";
import CustomTextInput from "../../components/commonComponent/customTextInput/CustomTextInput";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { RegexValidation } from "../../utils/Regex";
import { verification } from "../../utils/Constants";
import CheckedIcon from "../../assets/icons/check_box_square_icon.svg";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { Style } from "@mui/icons-material";
import './style.scss';

export default function SecondaryDetailScreen() {
  const navigate = useNavigate();

  const [mobileNo, setMobileNo] = useState<string>("");
  const [mobileNoErr, setMobileNoErr] = useState<boolean>(false);
  const [panNo, setPanNo] = useState<string>("");
  const [panNoErr, setPanNoNoErr] = useState<boolean>(false);
  const [dateValue, setDateValue] = useState(null);
  const [isConsentChecked, setIsConsentChecked] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    upadateButtonStatus();
  }, [mobileNo, panNo, dateValue, isConsentChecked, isTermsChecked]);

  const upadateButtonStatus = () => {
    setButtonDisabled(
      mobileNo.match(RegexValidation.MobilePattern) &&
        panNo.match(RegexValidation.PanPattern) &&
        dateValue &&
        isConsentChecked &&
        isTermsChecked
        ? false
        : true
    );
  };

  const submitButtonAction = () => {
    navigate("/otpverification", {
      state: { content: verification.VERIFY },
    });
  };

  return (
    <>
      <Box sx={CommonStyle.authLayoutcard}>
        <Box style={{ backgroundColor: "success.light" }}>
          <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Typography sx={CommonStyle.authLayoutTitleText}>
              USER DETAILS
            </Typography>
            <Typography
              sx={CommonStyle.backButton}
              onClick={() => navigate(-1)}
            >
              Back
            </Typography>
          </Stack>
          <Typography sx={CommonStyle.authLayoutDescriptionText}>
            Enter the below details to login via OTP
          </Typography>
          <Box>
            <CustomTextInput
              placeholder={"Mobile Number"}
              handleChange={(text: string) => {
                setMobileNo(text);
                setMobileNoErr(
                  text !== ""
                    ? !RegexValidation.MobilePattern.test(text)
                    : false
                );
              }}
              value={mobileNo}
              error={mobileNoErr}
              errorMessage={"Please enter valid mobile number"}
              maxLength={10}
            />
          </Box>
          <Box
            sx={{
              margin: "20px 0",
            }}
          >
            <CustomTextInput
              placeholder={"PAN Number"}
              handleChange={(text: string) => {
                setPanNo(text.toUpperCase());
                setPanNoNoErr(
                  text !== "" ? !RegexValidation.PanPattern.test(text) : false
                );
              }}
              value={panNo}
              error={panNoErr}
              errorMessage={"Please enter valid PAN"}
              maxLength={10}
            />
          </Box>
          <Box
          className="date_picker"
            sx={{
              margin: "20px 0",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label={"Date Of Birth"}
                value={dateValue}
                inputFormat={"DD-MM-YYYY"}
                components={{
                  OpenPickerIcon: CalendarTodayOutlinedIcon,
                }}
                toolbarFormat={"DD-MM-YYYY"}
                maxDate={new Date()}
                onChange={(newValuee: any) => setDateValue(newValuee)}
                // readOnly
                renderInput={(params) => (
                  <TextField
                    {...params}
                    
                    fullWidth
                    placeholder="Date Of Birth"
                    onKeyDown={(e: any) => {
                      e.preventDefault();
                    }}
                  />
                )}
              />
            </LocalizationProvider>
          </Box>
        </Box>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ marginBottom: "15px", marginTop: "20px" }}>
            <Box sx={{ display: "flex", alignItems: "flex-start" }}>
              <Checkbox
                sx={CommonStyle.checkBox}
                size="medium"
                checkedIcon={<img src={CheckedIcon} alt={CheckedIcon} />}
                checked={isConsentChecked}
                style={{
                  opacity: isConsentChecked ? "100%" : "30%",
                }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setIsConsentChecked(e.target.checked)
                }
              />
              <Typography sx={CommonStyle.termsAndCondition}>
                I hereby consent to get my Credit Report from Credit Bureau
                though PAN verification.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-start" }}>
              <Checkbox
                sx={CommonStyle.checkBox}
                size="medium"
                checkedIcon={<img src={CheckedIcon} alt={CheckedIcon} />}
                style={{
                  opacity: isTermsChecked ? "100%" : "30%",
                }}
                checked={isTermsChecked}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setIsTermsChecked(e.target.checked)
                }
              />
              <Typography
                sx={CommonStyle.termsAndCondition}
                style={{ paddingRight: "70px" }}
              >
                I accept the{" "}
                <Link
                  href="https://www.google.co.in/"
                  style={{
                    color: CommonColor.otpTextBlue,
                    fontSize: "14px",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                  target={"_blank"}
                  underline="none"
                >
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link
                  href="https://www.google.co.in/"
                  style={{
                    color: CommonColor.otpTextBlue,
                    fontSize: "14px",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                  target={"_blank"}
                  underline="none"
                >
                  Privacy
                </Link>{" "}
                Notice.
              </Typography>
            </Box>
          </Box>
          <CustomButton
            title={"Get OTP"}
            buttonColor={CommonColor.ThemeOrange}
            textColor={CommonColor.White}
            disabled={buttonDisabled} //todo revert it - buttonDisabled
            callBackFunction={submitButtonAction}
          />
        </Box>
      </Box>
    </>
  );
}
