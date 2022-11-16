import { CommonColor } from './CommonColor';

export const CommonStyle = {
  authLayoutTitleText: {
    fontSize: '1vw',
    fontWeight: '700',
  },
  authLayoutDescriptionText: {
    marginTop: '10px',
    marginBottom: '25px',
    fontWeight: 400,
    fontSize: '1vw',
    color: '#58585C',
  },
  authLayoutcard: {
    height: '70%',
    width: '40%',
    backgroundColor: CommonColor.White,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.12)',
  },
  backButton: {
    fontSize: '14px',
    fontWeight: '700',
    color: CommonColor.otpTextBlue,
    cursor: 'pointer',
  },
  termsAndCondition: {
    fontSize: "14px",
    fontWeight: "400",
    color: "#58585C",
    margin: "3px",
    
  },
  checkBox: {
    padding: '3px',
    // margin: "9px 0px",
  },
  otpTextColor: {
    fontSize: '14px',
    color: CommonColor.otpTextBlue,
    fontWeight: '700',
    cursor: 'pointer',
  },
  otpTextColorFaded: {
    fontSize: '14px',
    color: CommonColor.otpTextFadedBlue,
    fontWeight: '700',
    cursor: 'pointer',
  },
  otpTimerColor: {
    textAlign: 'center',
    marginTop: '40px',
    color: CommonColor.otpTextOrange,
    fontSize: '14px',
    fontWeight: '700',
  },
  otpInputBox: {
    width: '45px',
    margin: '4px',
  },
};

export const LandingPageStyle = {
  landingBtn: {
    fontSize: '12px',
    textTransform: 'capitalize',
    width: '200px',
    background: '#EBEBEB',
    color: '#333333',
    fontWeight: '700',
    padding: '11px',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#EBEBEB',
      boxShadow: 'none',
    },
  },
  landingContainer: {
    margin: '30px',
    backgroundColor: CommonColor.White,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '30px 30px 60px 30px',
    borderRadius: '10px',
    boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.12)',
  },
  landingHeading: {
    fontSize: '14px',
    fontWeight: '700',
    textAlign: 'center',
    color: '#333333',
  },
};
