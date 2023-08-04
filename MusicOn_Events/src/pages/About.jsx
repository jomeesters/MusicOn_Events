import React from "react";
import { Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <img
          src="https://www.amsterdam-dance-event.nl/uploads/images/events/_AUTOxAUTO_crop_center-center_none/audio-donderdag-BYKIRSTENVANSANTEN-info@kirstenvansanten.nl-12.JPG"
          alt="music festival"
        ></img>
      </div>

      <div className="about-text">
        <Heading className="about-welcome-text"> Music On Events</Heading>
        <Text lineHeight={7} fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)">
          <Text mt="1.5rem">
            Music On is an Amsterdam-based electronic music promoter that puts
            cutting-edge dance music into unusual, breathtaking, off-limits
            spaces around the world.{" "}
          </Text>
          <Text>
            <br></br>
            We have changed the face of clubbing by bringing the world’s best
            electronic music acts into iconic settings from concert halls to
            train stations to museums and beyond.{" "}
          </Text>
          <p>
            <br></br>
            The venues represent only one side of the story, however. Our
            commitment to putting the DJ at the centre stage of the event has
            helped to blur the lines between concert, rave, club and
            performance. Now as we expand our horizons across the world, we are
            excited about the prospect of entering new spaces and supporting new
            talents across the world, as well as creating dialogues between
            leading artists from across the world and their global audiences.{" "}
          </p>
        </Text>
        <div className="about-salesbox">
          <Heading>Make every moment count!</Heading>{" "}
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
}
