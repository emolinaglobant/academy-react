import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRockets } from "../redux/actions/rocketActions";
import RocketsList from "../components/Rockets/RocketsList";
import { Box, VStack, Heading } from "@chakra-ui/react";

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

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
