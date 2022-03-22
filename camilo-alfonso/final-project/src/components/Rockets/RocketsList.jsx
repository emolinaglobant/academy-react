import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Grid,
  GridItem,
  Text,
  Image,
  Badge,
  HStack,
  Flex,
} from "@chakra-ui/react";

const RocketsList = () => {
  const rockets = useSelector((state) => state.allRockets.rockets);

  return (
    <>
      <Grid align="center" templateColumns="repeat(2, 400px)" gap={8}>
        {rockets.map((rocket) => {
          const {
            name,
            id,
            type,
            active,
            flickr_images: rocketsImages,
          } = rocket;
          return (
            <Link key={id} to={`${id}`}>
              <GridItem borderRadius="xl" bg="cardBg" key={id} w="auto" p="2">
                <Image
                  borderRadius="xl"
                  boxSize="auto"
                  h={320}
                  objectFit="cover"
                  src={rocketsImages[1]}
                />
                <Flex direction="column" p={2}>
                  <Text fontSize="2xl" p="2">
                    {name}
                  </Text>
                  <HStack justify="center" direction="row">
                    <Badge variant="subtle" colorScheme="green">
                      {type}
                    </Badge>
                    {active ? (
                      <Badge variant="outline" colorScheme="green">
                        Active
                      </Badge>
                    ) : (
                      <Badge variant="outline" colorScheme="red">
                        No Active
                      </Badge>
                    )}
                  </HStack>
                </Flex>
              </GridItem>
            </Link>
          );
        })}
      </Grid>
    </>
  );
};

export default RocketsList;
