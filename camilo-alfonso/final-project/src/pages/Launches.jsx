import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchLaunches } from "../redux/actions/launchActions";
import { Box, VStack, Heading } from "@chakra-ui/react";
import LaunchesList from "../components/Launches/LaunchesList";

const Launches = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLaunches());
  });

  return (
    <VStack spacing="16">
      <Box>
        <Heading as="h1" size="3xl">
          Launches
        </Heading>
      </Box>
      <LaunchesList />
    </VStack>
  );
};

export default Launches;
