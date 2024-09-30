import { Box, Button, Typography } from "@mui/material";
import CallOutlined from "@mui/icons-material/CallOutlined";

import HomeCard from "../Card/HomeCard";
import PropTypes from "prop-types";

const Home = ({ isSmallScreen, links }) => {
  const urlToImage = isSmallScreen
    ? "url(/assets/zodiac-pc.webp)"
    : "url(/assets/zodiac-mb.webp)";

  return (
    <>
      <Box
        height={"calc(85vh - 4rem)"}
        width={"100%"}
        borderRadius={1}
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "flex-end", sm: "flex-start" }}
        alignItems={"flex-end"}
        mb={5}
        sx={{
          background: `#2C3E50 ${urlToImage}`,
          backgroundSize: "cover",
          backgroundBlendMode: "color-dodge",
          filter: "drop-shadow(0 2px 4px #111111cc)",
        }}
      >
        <Box
          width={isSmallScreen ? "calc(50% - 1rem)" : "calc(100% - 1rem)"}
          height={isSmallScreen ? "calc(100% - 1rem)" : "calc(50% - 1rem)"}
          padding={1}
          borderRadius={1}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            background: "rgba(183, 110, 121, 0.9)",
            backgroundBlendMode: "multiply",
            color: "#F8F8FF",
          }}
        >
          <Typography
            variant="h5"
            fontFamily={"var(--font-title)"}
            fontWeight={700}
            color={"#F8F8FF"}
            align="center"
          >
            Guaranteed Instant Solutions
          </Typography>
          <Typography
            variant="subtitle1"
            fontFamily={"var(--font-title)"}
            color={"#F8F8FF"}
            align="center"
            gutterBottom
          >
            By Pandith Prasad Poduval
          </Typography>
          <Typography
            variant="h6"
            fontFamily={"var(--font-title)"}
            fontWeight={600}
            color={"#F8F8FF"}
            align="center"
            gutterBottom
          >
            An opportunity to make your life better
          </Typography>
          <Button
            variant="outlined"
            href={`tel:${links.phone[0]}`}
            startIcon={<CallOutlined />}
            sx={{
              color: "#B76E79", // Text color
              borderColor: "var(--light)", // Border color
              backgroundColor: "white", // Background color set to white
              "&:hover": {
                color: "white", // Optional hover effect
                backgroundColor: "#B76E79", // Optional hover effect
                borderColor: "var(--dark)", // Optional border color change on hover
              },
            }}
          >
            Call now
          </Button>
          <Typography
            variant="body2"
            fontFamily={"cursive"}
            color={"#F8F8FF"}
            mt={4}
            align="center"
            component={"a"}
            href={links.locationLink}
            target="_blank"
          >
            ಶ್ರೀ ಕೇರಳ ಭಗವತಿ ಜ್ಯೋತಿಷ್ಯರು <br /> ವೈಭವ ಕಾಂಪ್ಲೆಕ್ಸ್, ಫೆಡರಲ್ ಬ್ಯಾಂಕ್ ಮುಂಬಾಗ ಮುಖ್ಯರಸ್ತೆ ಕಡಬ - 574221
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="h4"
        fontFamily={"var(--font-title)"}
        fontWeight={600}
        color={"var(--dark)"}
        align="center"
        gutterBottom
      >
        {`No.1 Enchantment Specialist`}
      </Typography>
      <Box
        display={"flex"}
        flex={1}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={1}
      >
        <HomeCard
          imageSrc="/assets/home/1395711.webp"
          altTitle="Results"
          mainTitle="Vasheekarana Specialist"
          subTitle="100% results within 24 Hours"
        />
        <HomeCard
          imageSrc="/assets/home/world.webp"
          altTitle="Worldwide"
          mainTitle="Worldwide"
          subTitle="services"
        />
        <HomeCard
          imageSrc="/assets/116656.webp"
          altTitle="Friendly"
          mainTitle="Friendly"
          subTitle="Astrologer"
        />
        <HomeCard
          imageSrc="/assets/services/love_problem.webp"
          altTitle="Results"
          mainTitle="Guaranteed Solution"
          subTitle="on Relationship Problems"
        />
      </Box>
    </>
  );
};

Home.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired,
  links: PropTypes.shape({
    phone: PropTypes.string.isRequired,
    locationLink: PropTypes.string.isRequired,
  }),
};

export default Home;
