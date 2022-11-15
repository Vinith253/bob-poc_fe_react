import { Button, IconButton, Stack, Typography } from "@mui/material";
import logo from "../../assets/images/logo.svg";
import arrow from "../../assets/icons/arrow.svg";
import profile from "../../assets/images/profile.svg";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.svg";
import card4 from "../../assets/images/card4.svg";
import card5 from "../../assets/images/card5.svg";
import benefits from "../../assets/icons/benefitsIcon.svg";
import cupIcon from "../../assets/icons/cupIcon.svg";
import { CommonColor } from "../../commonStyle/CommonColor";
import "../cardListScreen/cardStyle.scss";
export interface cardInterface {
  title: string;
  cardImage: string;
}

export const CardList = () => {
  return (
    <Stack className="container">
      <Stack className="headerContainer">
        <Stack>
          <img src={logo} alt="logo" />
        </Stack>
        {/* <Stack className="login">
          <Stack className="userImage">
            <img src={profile} alt="profile"></img>
          </Stack>
          <Stack className="login">
            <Typography className="userName">Rajesh Kumar</Typography>
            <IconButton id="basic-button">
              <img src={arrow} className="arrow" />
            </IconButton>
          </Stack>
        </Stack> */}
      </Stack>

      <Stack
        sx={{
          backgroundColor: CommonColor.darkBlue,
          color: CommonColor.White,
        }}
        className="applySmartCard"
      >
        <Typography className="applySmartCardTitle">
          Apply Smart, Digitally
        </Typography>
        <Typography className="applySmartCardContent">
          {`From Shopping & Lifestyle to Premium along with co-branding cards, you
          find everything here.`}
        </Typography>
      </Stack>

      <Stack className="listContainer">
        <Stack className="existingCardList">
          {existingCardData.map((items: cardInterface, index: number) => {
            return (
              <Stack className="existingSingleCard" key={index}>
                <Typography
                  sx={{
                    color: CommonColor.descriptionColor,
                  }}
                  className="existingSingleCardTitle"
                >
                  {items.title}
                </Typography>
                <Stack sx={{ paddingTop: "10px" }}>
                  <img
                    src={items.cardImage}
                    alt="card"
                    width="89%"
                    height="89%"
                  />
                </Stack>
              </Stack>
            );
          })}
        </Stack>

        <Stack className="recommendedCardContainer">
          <Typography
            sx={{
              color: CommonColor.darkGrey,
            }}
            className="recommendedCard"
          >
            Recommended cards for you
          </Typography>
          <Stack
            sx={{
              borderBottom: `1px solid ${CommonColor.lineColorGrey}`,
            }}
            className="recommendedCardBorder"
          />
        </Stack>

        <Stack className="cardListingContainer">
          {cardDetails.map((items: any, index: number) => {
            return (
              <Stack className="cardListing">
                <Stack className="cardListingImage">
                  <img src={items.image} alt="Recommended cards for you" />
                </Stack>
                <Stack className="cardListingTitleHeader">
                  <Stack className="cardListingIcon">
                    <img
                      src={items.benefitsIcon}
                      alt="Recommended cards for you"
                      className="img"
                    />
                    <Typography
                      sx={{
                        color: CommonColor.darkGrey,
                      }}
                      className="cardListingTitle"
                    >
                      {items.Benefits}
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      color: CommonColor.descriptionColor,
                    }}
                    className="cardListingDetail"
                  >
                    {items.benefitsContent}
                  </Typography>
                </Stack>

                <Stack className="cardListingTitleHeader">
                  <Stack className="cardListingIcon">
                    <img
                      src={items.cupIcon}
                      alt="Recommended cards for you"
                      className="img"
                    />
                    <Typography
                      sx={{
                        color: CommonColor.darkGrey,
                      }}
                      className="cardListingTitle"
                    >
                      {items.distinctiveBenefits}
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      color: CommonColor.descriptionColor,
                    }}
                    className="cardListingDetail"
                  >
                    {items.distinctiveBenefitsContent}
                  </Typography>
                </Stack>

                <Stack className="buttonContainer">
                  <Button
                    variant="contained"
                    color="secondary"
                    className="buttonCard"
                  >
                    {items.applyBtn}
                  </Button>
                  <Button
                    variant="text"
                    sx={{
                      border: `1px solid ${CommonColor.darkBlue}`,
                      color: CommonColor.darkBlue,
                    }}
                    className="buttonCard"
                  >
                    {items.knowMoreBtn}
                  </Button>
                </Stack>
              </Stack>
            );
          })}
        </Stack>

        <Stack className="recommendedCardContainer">
          <Typography
            sx={{
              color: CommonColor.darkGrey,
            }}
            className="recommendedCard"
          >
            Other cards for you
          </Typography>
          <Stack
            sx={{
              borderBottom: `1px solid ${CommonColor.lineColorGrey}`,
            }}
            className="recommendedCardBorder"
          />
        </Stack>

        <Stack className="cardListingContainer">
          {cardDetails.map((items: any, index: number) => {
            return (
              <Stack className="cardListing">
                <Stack className="cardListingImage">
                  <img src={items.image} alt="Recommended cards for you" />
                </Stack>
                <Stack className="cardListingTitleHeader">
                  <Stack className="cardListingIcon">
                    <img
                      src={items.benefitsIcon}
                      alt="Recommended cards for you"
                      className="img"
                    />
                    <Typography
                      sx={{
                        color: CommonColor.darkGrey,
                      }}
                      className="cardListingTitle"
                    >
                      {items.Benefits}
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      color: CommonColor.descriptionColor,
                    }}
                    className="cardListingDetail"
                  >
                    {items.benefitsContent}
                  </Typography>
                </Stack>

                <Stack className="cardListingTitleHeader">
                  <Stack className="cardListingIcon">
                    <img
                      src={items.cupIcon}
                      alt="Recommended cards for you"
                      className="img"
                    />
                    <Typography
                      sx={{
                        color: CommonColor.darkGrey,
                      }}
                      className="cardListingTitle"
                    >
                      {items.distinctiveBenefits}
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      color: CommonColor.descriptionColor,
                    }}
                    className="cardListingDetail"
                  >
                    {items.distinctiveBenefitsContent}
                  </Typography>
                </Stack>

                <Stack className="buttonContainer">
                  <Button
                    variant="contained"
                    color="secondary"
                    className="buttonCard"
                  >
                    {items.applyBtn}
                  </Button>
                  <Button
                    variant="text"
                    sx={{
                      border: `1px solid ${CommonColor.darkBlue}`,
                      color: CommonColor.darkBlue,
                    }}
                    className="buttonCard"
                  >
                    {items.knowMoreBtn}
                  </Button>
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

const existingCardData = [
  {
    title: "Existing Card Limit",
    cardImage: card1,
  },
  {
    title: "Your BoB Card Limit",
    cardImage: card2,
  },
];

const cardDetails = [
  {
    image: card3,
    benefitsIcon: benefits,
    Benefits: "Benefits",
    benefitsContent:
      "15 Reward Points for every 100 spent on travel,dining,online & international transactions",
    cupIcon: cupIcon,
    distinctiveBenefits: "Distinctive Benefits",
    distinctiveBenefitsContent:
      "Welcome gift worth 15000 complimentary 6-months FITPASS PRO Membership",
    applyBtn: "Apply",
    knowMoreBtn: "Know More",
  },
  {
    image: card4,
    benefitsIcon: benefits,
    Benefits: "Benefits",
    benefitsContent:
      "15 Reward Points for every 100 spent on travel,dining,online & international transactions",
    cupIcon: cupIcon,
    distinctiveBenefits: "Distinctive Benefits",
    distinctiveBenefitsContent:
      "Welcome gift worth 15000 complimentary 6-months FITPASS PRO Membership",
    applyBtn: "Apply",
    knowMoreBtn: "Know More",
  },
  {
    image: card5,
    benefitsIcon: benefits,
    Benefits: "Benefits",
    benefitsContent:
      "15 Reward Points for every 100 spent on travel,dining,online & international transactions",
    cupIcon: cupIcon,
    distinctiveBenefits: "Distinctive Benefits",
    distinctiveBenefitsContent:
      "Welcome gift worth 15000 complimentary 6-months FITPASS PRO Membership",
    applyBtn: "Apply",
    knowMoreBtn: "Know More",
  },
];
