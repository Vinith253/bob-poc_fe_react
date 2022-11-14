import { CommonColor } from "./CommonColor";

export const CommonStyle = {
    authLayoutTitleText: {
        fontSize: "1vw",
        fontWeight: "700",
    },
    authLayoutDescriptionText: {
        marginTop: "10px",
        marginBottom: "25px",
        fontWeight: 400,
        fontSize: "1vw",
        color: "#58585C",
    },
    authLayoutcard: {
        height: "70%",
        width: "45%",
        backgroundColor: CommonColor.White,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.12)",
    }
}

export const LandingPageStyle={
    landingBtn:{
        fontSize: "10px",
        textTransform: "capitalize",
        width:'180px',
        background:'#EBEBEB',
        color:'#333333',
        fontWeight:'600',
        padding:'11px'
    },
    landingContainer:{
        margin: "30px",
        backgroundColor: CommonColor.White,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "30px 30px 60px 30px",
        borderRadius: "10px",
        boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.12)",
    },
    landingHeading:{
        fontSize: "12px", 
        fontWeight: "600",
        textAlign: "center",
        color:'#333333'
    }
}