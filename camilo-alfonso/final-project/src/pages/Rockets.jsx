import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setRockets } from "../redux/actions/rocketActions";
import RocketsList from "../components/Rockets/RocketsList";
import { SPACE_API } from "../apis/apiLink";
import { Box, VStack, Heading } from "@chakra-ui/react";

const Rockets = () => {
  const dispatch = useDispatch();

  const fetchRockets = async () => {
    const response = await axios.get(SPACE_API + "/v4/rockets").catch((err) => {
      console.log("Err", err);
    });
    dispatch(setRockets(response.data));
  };

  useEffect(() => {
    fetchRockets();
  });

  return (
    <>
      <VStack spacing="16">
        <Box>
          <Heading as="h1" size="3xl">
            Rockets
          </Heading>
        </Box>
        <RocketsList />
      </VStack>
    </>
  );
};

export default Rockets;
