import {} from "@chakra-ui/icons";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import React from "react";

const Home = () => {
  const [isTextBoxVisible, setIsTextBoxVisible] = useState(false);
  const [isTextBoxVisible2, setIsTextBoxVisible2] = useState(false);
  const [isTextBoxVisible3, setIsTextBoxVisible3] = useState(false);
  const [isTextBoxVisible4, setIsTextBoxVisible4] = useState(false);

  const handleBoxClick = () => {
    setIsTextBoxVisible((prevState) => !prevState);
  };
  const handleBoxClick2 = () => {
    setIsTextBoxVisible2((prevState) => !prevState);
  };
  const handleBoxClick3 = () => {
    setIsTextBoxVisible3((prevState) => !prevState);
  };
  const handleBoxClick4 = () => {
    setIsTextBoxVisible4((prevState) => !prevState);
  };

  return (
    <div className="about-container">
      <Box position="relative" h="100vh">
        <div className="home-hero">
          <img
            src="https://www.maximaltrips.com/wp-content/uploads/2018/04/Awakenings-Festival-e1638461613982.jpg"
            alt="festival1"
          ></img>
        </div>

        <div className="home_hero_text">
          <h1>Music On!</h1>
          <h1>Connect, Create and Celebrate.</h1>
        </div>
      </Box>

      <div className="home-text">
        <Heading className="about-welcome-text">
          {" "}
          Welcome to Music On Events!
        </Heading>
        <Text
          mt="1.5rem"
          lineHeight={7}
          fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
        >
          Music On is an Amsterdam-based electronic music promoter that puts
          cutting-edge dance music into unusual, breathtaking, off-limits spaces
          around the world.{" "}
        </Text>
        <Text lineHeight={7} fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)">
          <br></br>
          Music On’s mission from the start has always been to help electronic
          music transcend its traditional boundaries.{" "}
        </Text>
        <Heading mt="1rem" mb="1rem">
          What we do
        </Heading>
        <Text
          mb="1.5rem"
          lineHeight={7}
          fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
        >
          We design impressive stages within raw, industrial settings.
          Partnering with the best VJs, we create mesmerising light effects and
          visuals. In addition to celebrating electronic music and art, Music On
          is a space for experiments and exploration of revolutionary
          sustainability projects. Music On is highly aware of its environmental
          impact and aims to be the most sustainable festival on the planet and
          invests heavily in reducing carbon footprint. Not only is the festival
          known for its plant-based food court and being free of single-use
          plastics, Music On became fully sustainable and circular in 2022.{" "}
        </Text>
      </div>

      <Box w="80%" m="auto">
        <Flex
          w="100%"
          h={{ base: "30%", md: "20%", lg: "15%" }}
          flexDirection="row"
          flexWrap="wrap"
          mb="3rem"
        >
          <Box
            w={{ base: "100%", md: "50%", lg: "25%" }}
            flexGrow={{ base: 1, md: 1 }}
            h="30vh"
            backgroundImage="url('/src/images/recordlabel.jpeg')"
            backgroundSize="cover"
            backgroundPosition="center"
            _hover={{
              bg: "black",
              color: "white",
            }}
            onClick={handleBoxClick}
            bg={isTextBoxVisible ? "grey" : undefined}
            color={isTextBoxVisible ? "white" : undefined}
          >
            {" "}
            <Flex justify="center" align="center" h="100%" color="white">
              <Heading textAlign="center">Record Label</Heading>
            </Flex>
          </Box>

          {isTextBoxVisible && (
            <Box
              pt="4rem"
              pb="4rem"
              pr={{ base: "10%", md: "12%", lg: "13%" }}
              pl={{ base: "10%", md: "12%", lg: "13%" }}
              bg="gray.50"
            >
              <Text
                lineHeight={7}
                fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
              >
                <Text>
                  Music On is event organisation established in Amsterdam, with
                  events hosted in Amsterdam, Barcelona and São Paulo. With
                  Music On Records they build on their festival’s musical theme
                  of an evocative cross section of the sounds and styles;
                  showcasing forward thinking, cutting edge artists.{" "}
                </Text>
              </Text>
            </Box>
          )}
          <Box
            flexGrow={{ base: 1, md: 3 }}
            w={{ base: "100%", md: "50%", lg: "25%" }}
            h="30vh"
            backgroundImage="url('/src/images/festival.jpeg')"
            backgroundSize="cover"
            backgroundPosition="center"
            _hover={{
              bg: "black",
              color: "white",
            }}
            onClick={handleBoxClick2}
            bg={isTextBoxVisible2 ? "grey" : undefined}
            color={isTextBoxVisible2 ? "white" : undefined}
          >
            {" "}
            <Flex justify="center" align="center" h="100%" color="white">
              <Heading textAlign="center">Festivals</Heading>
            </Flex>
          </Box>
          {isTextBoxVisible2 && (
            <Box
              pt="4rem"
              pb="4rem"
              pr={{ base: "10%", md: "12%", lg: "13%" }}
              pl={{ base: "10%", md: "12%", lg: "13%" }}
              bg="gray.50"
            >
              <Text
                lineHeight={7}
                fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
              >
                <Text>
                  Having grown up within club culture, Music On went on a
                  mission to push the artform into new spaces and contexts to
                  help it to continue to evolve and reach new audiences. Music
                  On see the idea of putting raves into spaces that were
                  traditionally off-limits to club promoters as a revolutionary
                  act in the battle to ensure that electronic music garners the
                  respect, protection and support that it deserves.
                </Text>
              </Text>
            </Box>
          )}
          <Box
            flexGrow={{ base: 1, md: 2 }}
            w={{ base: "100%", md: "50%", lg: "25%" }}
            h="30vh"
            backgroundImage="url('/src/images/eventplanning.jpg')"
            backgroundSize="cover"
            backgroundPosition="center"
            _hover={{
              bg: "black",
              color: "white",
            }}
            onClick={handleBoxClick3}
            bg={isTextBoxVisible3 ? "grey" : undefined}
            color={isTextBoxVisible3 ? "white" : undefined}
          >
            {" "}
            <Flex justify="center" align="center" h="100%" color="white">
              <Heading textAlign="center">Event Planning</Heading>
            </Flex>
          </Box>
          {isTextBoxVisible3 && (
            <Box
              bg="gray.50"
              pt="4rem"
              pb="4rem"
              pr={{ base: "10%", md: "12%", lg: "13%" }}
              pl={{ base: "10%", md: "12%", lg: "13%" }}
            >
              <Text
                lineHeight={7}
                fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
              >
                <Text>
                  Music On Events is known for organising events with a strong
                  focus on music, creativity and sustainability. Driven by our
                  passion for music we’ve been turning festival sites, clubs and
                  warehouses into true playgrounds since 2004. In an ever
                  changing and challenging industry we’re proud to be one of the
                  most progressive event organisations out there.
                </Text>
                <Text mt="1.5rem">
                  The ambition and expansion drift of our Amsterdam-based HQ has
                  recently led to a worldwide campaign. Since 2015 we’ve been
                  organising events in Barcelona, São Paulo and Tel Aviv to name
                  a few. The main focus of Music On Events however, remains on
                  the Dutch market.
                </Text>
              </Text>
            </Box>
          )}
          <Box
            flexGrow={{ base: 1, md: 3 }}
            w={{ base: "100%", md: "50%", lg: "25%" }}
            h="30vh"
            color="white"
            backgroundImage="url('/src/images/merch.jpeg')"
            backgroundSize="cover"
            backgroundPosition="center"
            _hover={{
              bg: "black",
              color: "white",
            }}
            onClick={handleBoxClick4}
            bg={isTextBoxVisible4 ? "grey" : undefined}
          >
            {" "}
            <Flex justify="center" align="center" h="100%">
              <Heading textAlign="center">Merchandise</Heading>
            </Flex>
          </Box>
          {isTextBoxVisible4 && (
            <Box
              pt="4rem"
              pb="4rem"
              pr={{ base: "10%", md: "12%", lg: "13%" }}
              pl={{ base: "10%", md: "12%", lg: "13%" }}
              bg="gray.50"
            >
              <Text
                lineHeight={7}
                fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
              >
                <Text>
                  Music On works in partnership with some of the world’s most
                  recognised brands and events. Our services ranges from
                  designing and manufacturing creative products for corporate
                  requirements to selling at live events, pop up shops, from
                  devising licensing programmes to running online shops globally
                  selling direct to the consumer . Music On prides itself on its
                  ability to listen to the needs of the client, offer a
                  remarkable customer experience and deliver goods and services
                  that elevate a company’s brand perception.
                </Text>
              </Text>
            </Box>
          )}
        </Flex>
      </Box>
      <Box className="about-salesbox" m="auto" zIndex={10} w="80%">
        <Text fontSize="1.5rem">
          <br></br>Music On! Connect, Create and Celebrate.
        </Text>
        <Link to="/events">
          <Button mt="2rem" colorScheme="red" color="white">
            Book our Events
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default Home;
