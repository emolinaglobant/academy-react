import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAstronauts } from "../../redux/actions/crewActions";
import { Box, VStack, Heading } from "@chakra-ui/react";
import CrewList from "./CrewList";

const Crew = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAstronauts());
  }, []);

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
