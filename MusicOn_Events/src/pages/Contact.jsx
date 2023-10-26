import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const Contact = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <img
          src="https://clubbingtv.com/wp-content/uploads/2016/02/64249152_2991462764212329_6141694063801270272_o.jpg"
          alt="music festival"
        ></img>
      </div>
      <div className="about-text">
        <Flex
          flexDirection={["column", "row"]}
          flexWrap="wrap"
          justifyContent={"space-between"}
          gap={"2rem"}
        >
          <Box>
            <Heading className="about-welcome-text"> Address</Heading>
            <Text
              mt="1rem"
              color="gray.600"
              lineHeight={7}
              fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
            >
              Archangelkade 39 <Text>1013 BC Amsterdam</Text>
              <Text>The Netherlands</Text>
            </Text>
          </Box>

          <Box>
            <Heading color="black">Contact</Heading>{" "}
            <Text
              color="gray.600"
              lineHeight={7}
              fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
            >
              <Text mt="1rem">+31 (0)20 34 56 789</Text>
              info@musicon.com
            </Text>
          </Box>

          <Box>
            <Heading color="black">Info</Heading>{" "}
            <Text
              color="gray.600"
              lineHeight={7}
              fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
            >
              <Text mt="1rem">Chamber of Commerce (KvK) 53350568 </Text>
              <Text> VAT number NL: 1234.699.65.B.01 </Text>
            </Text>
          </Box>
        </Flex>

        <div className="about-salesbox">
          <Heading>Music On!</Heading>{" "}
          <Heading>Connect, Create and Celebrate.</Heading>
          <Link to="/events">
            <Button mt="2rem" colorScheme="red" color="white">
              Book our Events
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
