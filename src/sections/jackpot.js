import React from "react";
import { Box, Container, Flex, Image, Text, Heading } from "theme-ui";
import JackpotCard from "components/cards/jackpot-card";
import jackpotImage from "assets/jackpot.png";
import jackpotImage1 from "assets/download.png";
import jackpotImage2 from "assets/install.png";
import DashTwo from "assets/dashTwo.png";

const JACKPOT_DATA = [
  {
    image: jackpotImage1,
    text: `Get More Done with UNISITY's Free Windows App Download Today!`,
    heading: "Free Download",
  },
  {
    image: jackpotImage2,
    text: "Say Goodbye to Complicated Installation Processes with UNISITY.",
    heading: "Easy Installation",
  },
];

const Jackpot = () => {
  return (
    <Box as="section" sx={styles.jackpot}>
      <Container>
        <Flex sx={styles.flex}>
          <Box sx={styles.image}>
            <div style={{ paddingTop: "50px" }}>
              <img
                style={{ borderRadius: "20px", height: "450px" }}
                src={DashTwo}
                alt="jackpot image"
              />
            </div>
          </Box>
          <Box sx={styles.content}>
            <Box sx={styles.heading}>
              <Heading as="h3">Unisity Windows Application</Heading>
              <Text as="span">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1VMja_XJ_VgLYoB3imUyLBe-DCTf0rnRo/view?usp=sharing"
                >
                  Download Now
                </a>
              </Text>
            </Box>
            <Box sx={styles.jackpotCardBox}>
              {JACKPOT_DATA.map(({ image, heading, text }, index) => (
                <JackpotCard
                  image={image}
                  heading={heading}
                  text={text}
                  key={index}
                />
              ))}
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Jackpot;

const styles = {
  jackpot: {
    pt: ["65px", null, null, null, "85px", null, "125px"],
  },
  flex: {
    flexWrap: "wrap",
  },
  image: {
    flex: ["0 0 100%", null, null, null, null, "0 0 62.5%"],
    img: {
      maxWidth: ["100%", null, null, null, null, null, "none"],
      float: "right",
    },
  },
  content: {
    flex: ["0 0 100%", null, null, null, null, "0 0 37.5%"],
  },
  heading: {
    mb: "30px",
    pt: "60px",
    textAlign: ["center", null, null, null, null, "left"],
    pl: ["0", null, null, "30px"],
    maxWidth: ["80%", null, null, "100%"],
    mx: ["auto", null, null, "0"],
    span: {
      display: "block",
      fontSize: "18px",
      color: "primary",
      fontWeight: 700,
      lineHeight: 1,
      mt: "20px",
      cursor: "pointer",
    },
    h3: {
      color: "#0F2137",
      fontSize: ["23px", null, null, null, "30px", "36px", "44px"],
      maxWidth: ["100%", null, null, null, null, "90%", "100%"],
      fontWeight: 700,
      letterSpacing: "-1.5px",
      lineHeight: 1.36,
    },
  },
  jackpotCardBox: {
    display: ["grid", null, null, null, null, "block"],
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
  },
};
