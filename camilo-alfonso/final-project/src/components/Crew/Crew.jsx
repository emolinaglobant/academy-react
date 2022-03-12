import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCrew } from "../../redux/actions/crewActions";
import { SPACE_API } from "../../apis/apiLink";
import { Box, VStack, Heading } from "@chakra-ui/react";
import CrewList from "./CrewList";

const Crew = () => {
  const dispatch = useDispatch();

  const fetchAstronauts = async () => {
    const response = await axios.get(SPACE_API + "/v4/crew").catch((err) => {
      console.log("Err", err);
    });
    dispatch(setCrew(response.data));
  };

  useEffect(() => {
    fetchAstronauts();
  });

  return (
    <>
      <VStack pt="20" spacing="16">
        <Box>
          <Heading as="h1" size="3xl">
            Meet the Crew
          </Heading>
        </Box>
        <CrewList />
      </VStack>
    </>
  );
};

export default Crew;
