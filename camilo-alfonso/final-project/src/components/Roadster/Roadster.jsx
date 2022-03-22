import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoadster } from "../../redux/actions/RoadsterAction";
import { SiTesla } from "react-icons/si";
import elonCar2 from "../../assets/images/elon2.png";

import moment from "moment";

import {
  AspectRatio,
  Box,
  VStack,
  Heading,
  Text,
  Flex,
  List,
  Icon,
  ListItem,
  Image,
  Tabs,
  TabPanel,
  Tab,
  TabPanels,
  TabList,
  HStack,
} from "@chakra-ui/react";

const Roadster = () => {
  const dispatch = useDispatch();
  const roadster = useSelector((state) => state.roadster.roadster);

  const {
    details,
    earth_distance_km,
    launch_date_utc,
    orbit_type,
    flickr_images,
  } = roadster;

  useEffect(() => {
    dispatch(fetchRoadster());
  }, []);

  return (
    <>
      <Flex direction="column">
        <HStack justify="space-between" width="100%">
          <Box>
            <VStack w="100%">
              <Heading as="h1" size="3xl">
                Did you know that Elon <br /> Mask's tesla...
              </Heading>
              <List pt={4} pl="4" spacing={2}>
                <ListItem fontSize="3xl" color="primary">
                  🌎 Is {earth_distance_km} km away from earth?{" "}
                </ListItem>
                <ListItem fontSize="3xl" color="primary">
                  📅 Was launched into space on{" "}
                  {moment(launch_date_utc).format("L")}?
                </ListItem>
                <ListItem fontSize="3xl" color="primary">
                  💫 Has a {orbit_type} type?
                </ListItem>
              </List>
            </VStack>
          </Box>
          <Box w="">
            <Image
              src={elonCar2}
              boxSize="400px"
              objectFit="cover"
              borderRadius="xl"
            />
          </Box>
        </HStack>
        <Flex pt="36" pb="10" px="4" justify="around">
          <Tabs
            mr="8"
            borderRadius="xl"
            bg="cardBg"
            align="center"
            variant="solid-rounded"
            colorScheme="gray"
            defaultIndex={0}
            w="50%"
          >
            <TabPanels>
              <TabPanel>
                <Image
                  borderRadius="xl"
                  boxSize=""
                  h={320}
                  objectFit="cover"
                  src={flickr_images?.[0]}
                />
              </TabPanel>
              <TabPanel>
                <Image
                  borderRadius="xl"
                  boxSize=""
                  h={320}
                  objectFit="cover"
                  src={flickr_images?.[1]}
                />
              </TabPanel>
              <TabPanel>
                <Image
                  borderRadius="xl"
                  boxSize=""
                  h={320}
                  objectFit="cover"
                  src={flickr_images?.[3]}
                />
              </TabPanel>
            </TabPanels>
            <TabList color="primary" m="2" pb="4">
              <Tab>1</Tab>
              <Tab>2</Tab>
              <Tab>3</Tab>
            </TabList>
          </Tabs>
          <Flex justify="center" alignItems="center" w="50%" direction="column">
            <HStack pb={10}>
              <Icon as={SiTesla} color="cardBg" fontSize="5.5rem" />

              <Heading size="2xl" color="primary">
                About the Roadster
              </Heading>
            </HStack>

            <Text fontSize="xl" align="justify">
              {details}
            </Text>
          </Flex>
        </Flex>
        <Box p={4} m={4} borderRadius="xl" bg="cardBg" align="center">
          <AspectRatio maxW="100%" ratio={4 / 2}>
            <iframe
              title="Falcon Heavy Test Flight"
              src="https://www.youtube.com/embed/wbSwFU6tY1c"
            ></iframe>
          </AspectRatio>
        </Box>
      </Flex>
    </>
  );
};

export default Roadster;
