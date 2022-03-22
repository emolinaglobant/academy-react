import React from "react";
import { useSelector } from "react-redux";
import { FaExternalLinkAlt } from "react-icons/fa";

import {
  Grid,
  GridItem,
  Icon,
  Text,
  Image,
  Badge,
  HStack,
  Link,
  Flex,
  Box,
} from "@chakra-ui/react";

const CrewList = () => {
  const astronauts = useSelector((state) => state.allAstronauts.astronauts);

  return (
    <>
      <Grid align="center" templateColumns="repeat(4, 1fr)" gap={8}>
        {astronauts.map((astronaut) => {
          const { name, id, agency, status, image, wikipedia } = astronaut;
          return (
            <GridItem borderRadius="xl" bg="cardBg" key={id} w="auto" p="2">
              <Image
                borderRadius="xl"
                w="100%"
                h={320}
                objectFit="cover"
                src={image}
              />
              <Flex direction="column" p={2}>
                <Text fontSize="2xl" p="2">
                  {name}
                </Text>
                <HStack justify="center" direction="row">
                  <Badge variant="solid" colorScheme="blue">
                    {agency}
                  </Badge>
                  {status ? (
                    <Badge variant="subtle" colorScheme="green">
                      Active
                    </Badge>
                  ) : (
                    <Badge variant="outline" colorScheme="red">
                      No Active
                    </Badge>
                  )}
                </HStack>
                <Box pt={4}>
                  <Link color="primary" href={wikipedia} isExternal>
                    Need More info?
                    <Icon
                      as={FaExternalLinkAlt}
                      w={6}
                      h={6}
                      color="primary"
                      pl="2"
                      pt="2"
                    />
                  </Link>
                </Box>
              </Flex>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

export default CrewList;
