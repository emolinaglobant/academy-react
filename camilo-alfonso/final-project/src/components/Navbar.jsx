import React from "react";

import { Link } from "react-router-dom";
import gbLogo from "../assets/images/gbLogo.png";
import { Flex, Image, Text, Box, HStack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex p="8" align="center" justify="space-between">
      <Link to="/">
        <Flex align="center">
          <Image src={gbLogo} w="16" alt="Globant Logo" />
          <Text color="primary" fontWeight="bold" fontSize="2xl" pl="2">
            Space
          </Text>
        </Flex>
      </Link>
      <HStack spacing="24px">
        <Link to="/rockets">
          <Box>
            <Text fontSize="2xl" fontWeight="bold">
              Rockets
            </Text>
          </Box>
        </Link>
        <Link to="/launches">
          <Box>
            <Text fontSize="2xl" fontWeight="bold">
              Launches
            </Text>
          </Box>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
