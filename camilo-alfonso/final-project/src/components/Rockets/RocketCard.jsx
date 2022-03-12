import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectRocket, removeRocket } from "../../redux/actions/rocketActions";
import { MdOutlineAttachMoney, MdFormatListNumberedRtl } from "react-icons/md";
import { GiRocketFlight, GiHammerNails } from "react-icons/gi";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Icon,
  Tab,
  TabPanel,
  Image,
  Box,
  Spinner,
  VStack,
  Heading,
  Link,
  HStack,
  Badge,
  Stack,
  Table,
  Thead,
  Tbody,
  TableCaption,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { SPACE_API } from "../../apis/apiLink";

const RocketCard = () => {
  const rocket = useSelector((state) => state.rocket);

  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    name,
    description,
    active,
    height,
    diameter,
    first_flight,
    first_stage,
    second_stage,
    cost_per_launch,
    engines,
    landing_legs,
    stages,
    flickr_images: rocketsImages,
    wikipedia,
  } = rocket;

  const fetchRocket = async () => {
    const response = await axios
      .get(SPACE_API + `/v4/rockets/${id}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectRocket(response.data));
  };

  useEffect(() => {
    if (id && id !== "") fetchRocket();
    return () => {
      dispatch(removeRocket());
    };
  }, [id]);

  return (
    <Stack>
      {Object.keys(rocket).length === 0 ? (
        <Spinner color="primary" />
      ) : (
        <>
          <Flex p="2" justify="space-between" align="center">
            <Tabs
              mr="8"
              borderRadius="xl"
              bg="cardBg"
              align="center"
              variant="solid-rounded"
              colorScheme="gray"
            >
              <TabPanels w={400}>
                <TabPanel>
                  <Image
                    borderRadius="xl"
                    boxSize="500px"
                    h={320}
                    objectFit="cover"
                    src={rocketsImages[0]}
                  />
                </TabPanel>
                <TabPanel>
                  <Image
                    borderRadius="xl"
                    boxSize="500px"
                    h={320}
                    objectFit="cover"
                    src={rocketsImages[1]}
                  />
                </TabPanel>
              </TabPanels>
              <TabList color="primary" m="2">
                <Tab>1</Tab>
                <Tab>2</Tab>
              </TabList>
            </Tabs>
            <VStack p="4" align="stretch" w="60%">
              <Flex pb="8" justify="space-between" align="center">
                <Heading as="h2" size="2xl">
                  {name}
                </Heading>
                <Box>
                  {active ? (
                    <Badge
                      ml="3"
                      fontSize="1x2"
                      h="6"
                      variant="solid"
                      bg="primary"
                      color="black"
                    >
                      Active
                    </Badge>
                  ) : (
                    <Badge
                      ml="3"
                      fontSize="1x2"
                      h="6"
                      variant="solid"
                      colorScheme="red"
                    >
                      Inactive{" "}
                    </Badge>
                  )}
                  <Badge
                    ml="3"
                    fontSize="1x2"
                    h="6"
                    variant="solid"
                    bg="cardBg"
                  >
                    {engines?.type}
                  </Badge>
                </Box>
              </Flex>

              <Text>{description}</Text>
              <Box pt="8">
                <Table variant="simple">
                  <TableCaption color="primary">
                    Rocket height and diameter statistics
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th color="primary">OVERVIEW</Th>
                      <Th isNumeric color="primary">
                        Feet
                      </Th>
                      <Th isNumeric color="primary">
                        Meters
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Height:</Td>
                      <Td isNumeric>{height?.feet}</Td>
                      <Td isNumeric>{height?.meters}</Td>
                    </Tr>
                    <Tr>
                      <Td>Diameter:</Td>
                      <Td isNumeric>{diameter?.feet}</Td>
                      <Td isNumeric>{diameter?.meters}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            </VStack>
          </Flex>
          <Flex py={40} align="center" justifyContent="center" gap={20}>
            <Box align="center" borderRadius="xl" bg="cardBg" w="auto" p="8">
              <Text fontSize="2xl">Cost Per Launch</Text>
              <HStack align="center" justify="center">
                <Icon as={MdOutlineAttachMoney} w={6} h={6} color="primary" />
                <Text fontSize="2xl">{cost_per_launch}</Text>
              </HStack>
            </Box>
            <Box align="center" borderRadius="xl" bg="cardBg" w="auto" p="8">
              <Text fontSize="2xl">First Flight</Text>
              <HStack align="center" justify="center">
                <Icon as={GiRocketFlight} w={6} h={6} color="primary" />
                <Text fontSize="2xl">{first_flight}</Text>
              </HStack>
            </Box>
            <Box align="center" borderRadius="xl" bg="cardBg" w="auto" p="8">
              <Text fontSize="2xl">Material</Text>
              <HStack align="center" justify="center">
                <Icon as={GiHammerNails} w={6} h={6} color="primary" />
                <Text fontSize="2xl">
                  {!landing_legs?.material ? (
                    <Text>Unknow</Text>
                  ) : (
                    landing_legs?.material
                  )}
                </Text>
              </HStack>
            </Box>
            <Box borderRadius="xl" bg="cardBg" w="auto" p="8">
              <Text fontSize="2xl">Stages</Text>
              <HStack align="center" justify="center">
                <Icon
                  as={MdFormatListNumberedRtl}
                  w={6}
                  h={6}
                  color="primary"
                />
                <Text fontSize="2xl">{stages}</Text>
              </HStack>
            </Box>
          </Flex>
          <Tabs isFitted variant="line" colorScheme="gray">
            <TabList color="primary" mb="1em">
              <Tab>First Stage</Tab>
              <Tab>Second Stage</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Table variant="simple" size="lg">
                  <TableCaption>
                    <Link color="primary" href={wikipedia} isExternal>
                      More info about {name}
                      <Icon
                        as={FaExternalLinkAlt}
                        w={6}
                        h={6}
                        color="primary"
                        pl="2"
                        pt="2"
                      />
                    </Link>
                  </TableCaption>
                  <Tbody>
                    <Tr>
                      <Td>Engine</Td>
                      <Td></Td>
                      <Td isNumeric>{first_stage?.engines}</Td>
                    </Tr>
                    <Tr>
                      <Td>Burn Time</Td>
                      <Td></Td>
                      <Td isNumeric>{first_stage?.burn_time_sec} sec</Td>
                    </Tr>
                    <Tr>
                      <Td>Fuel Amount</Td>
                      <Td></Td>
                      <Td isNumeric>{first_stage?.fuel_amount_tons} ton</Td>
                    </Tr>
                    <Tr>
                      <Td>Reusable</Td>
                      <Td></Td>
                      <Td isNumeric>
                        {first_stage?.reusable ? (
                          <Badge
                            ml="3"
                            fontSize="1x2"
                            h="6"
                            variant="solid"
                            bg="primary"
                            color="black"
                          >
                            YES
                          </Badge>
                        ) : (
                          <Badge
                            ml="3"
                            fontSize="1x2"
                            h="6"
                            variant="solid"
                            colorScheme="red"
                          >
                            NO
                          </Badge>
                        )}
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TabPanel>
              <TabPanel>
                <Table variant="simple" size="lg">
                  <TableCaption>
                    <Link color="primary" href={wikipedia} isExternal>
                      More info about {name}
                      <Icon
                        as={FaExternalLinkAlt}
                        w={6}
                        h={6}
                        color="primary"
                        pl="2"
                        pt="2"
                      />
                    </Link>
                  </TableCaption>
                  <Tbody>
                    <Tr>
                      <Td>Engine</Td>
                      <Td></Td>
                      <Td isNumeric>{second_stage?.engines}</Td>
                    </Tr>
                    <Tr>
                      <Td>Burn Time</Td>
                      <Td></Td>
                      <Td isNumeric>{second_stage?.burn_time_sec} sec</Td>
                    </Tr>
                    <Tr>
                      <Td>Fuel Amount</Td>
                      <Td></Td>
                      <Td isNumeric>{second_stage?.fuel_amount_tons} ton</Td>
                    </Tr>
                    <Tr>
                      <Td>Reusable</Td>
                      <Td></Td>
                      <Td isNumeric>
                        {second_stage?.reusable ? (
                          <Badge
                            ml="3"
                            fontSize="1x2"
                            h="6"
                            variant="solid"
                            bg="primary"
                            color="black"
                          >
                            YES
                          </Badge>
                        ) : (
                          <Badge
                            ml="3"
                            fontSize="1x2"
                            h="6"
                            variant="solid"
                            colorScheme="red"
                          >
                            NO
                          </Badge>
                        )}
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </>
      )}
    </Stack>
  );
};

export default RocketCard;
