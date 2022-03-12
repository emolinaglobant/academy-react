import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLaunches } from "../redux/actions/launchActions";
import { SPACE_API } from "../apis/apiLink";
import { Box, VStack, Heading } from "@chakra-ui/react";
import LaunchesList from "../components/Launches/LaunchesList";

const Launches = () => {
  const dispatch = useDispatch();

  const fetchLaunches = async () => {
    const response = await axios
      .get(SPACE_API + "/v4/launches")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setLaunches(response.data));
  };

  useEffect(() => {
    fetchLaunches();
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
