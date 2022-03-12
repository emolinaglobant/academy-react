import {
  Box,
  Flex,
  Text,
  Stack,
  Image,
  HStack,
  Heading,
  Badge,
  Icon,
  Link,
  ButtonGroup,
} from "@chakra-ui/react";
import React from "react";
import {
  AiFillYoutube,
  AiFillCloseCircle,
  AiFillCheckCircle,
} from "react-icons/ai";
import { MdArticle } from "react-icons/md";
import { FaWikipediaW } from "react-icons/fa";
import { useSelector } from "react-redux";
import alfredMeme from "../../assets/images/noImage.jpg";

const LaunchesList = () => {
  const launches = useSelector((state) => state.allLaunches.launches);
  return (
    <>
      <Flex direction="column" w="100%">
        <Box
          overflowY="scroll"
          css={{
            "&::-webkit-scrollbar": {
              width: "10px",
            },
            "&::-webkit-scrollbar-track": {
              width: "122px",
              padding: "5px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#bfd732",
              borderRadius: "4px",
              height: "70px",
            },
          }}
          maxH="100vh"
        >
          {launches.map((launch) => {
            const {
              id,
              name,
              success,
              links,
              details,
              fairings,
              flight_number,
            } = launch;
            return (
              <Stack
                key={id}
                w="100%"
                direction="row"
                my={5}
                py={2}
                borderRadius="xl"
                bg="cardBg"
              >
                <HStack p="4" w="30%">
                  {links?.flickr?.original[0] ? (
                    <Image
                      borderRadius="xl"
                      w="100%"
                      h={300}
                      objectFit="fill"
                      src={links?.flickr?.original[0]}
                    />
                  ) : (
                    <Image
                      borderRadius="xl"
                      w="100%"
                      h={200}
                      objectFit="cover"
                      src={alfredMeme}
                    />
                  )}
                </HStack>
                <Flex direction="column" h="100%" w="60%" p="4">
                  <Heading size="2xl">{name}</Heading>
                  <HStack>
                    <Flex py={4} direction="row" align="center">
                      <Text fontSize="2xl">Mission status: </Text>
                      {success ? (
                        <Badge
                          ml="3"
                          fontSize="1x2"
                          h="6"
                          variant="solid"
                          bg="primary"
                          color="black"
                        >
                          SUCCESS
                        </Badge>
                      ) : (
                        <Badge
                          ml="3"
                          fontSize="1x2"
                          h="6"
                          variant="solid"
                          colorScheme="red"
                        >
                          FAILED
                        </Badge>
                      )}
                    </Flex>
                    <Flex pl={4}>
                      <Text fontSize="2xl">Recovered: </Text>
                      {fairings?.recovered ? (
                        <Icon
                          as={AiFillCheckCircle}
                          ml="2"
                          fontSize="3xl"
                          color="primary"
                        />
                      ) : (
                        <Icon
                          as={AiFillCloseCircle}
                          ml="2"
                          fontSize="3xl"
                          color="salmon"
                        />
                      )}
                    </Flex>
                  </HStack>
                  <Box pt={4}> {details}</Box>

                  <ButtonGroup py="6" variant="ghost">
                    <Link href={links?.webcast} isExternal>
                      <Icon
                        as={AiFillYoutube}
                        color="white"
                        fontSize="1.25rem"
                      />
                    </Link>
                    <Link href={links?.wikipedia} isExternal>
                      <Icon as={FaWikipediaW} color="white" mx="2" />
                    </Link>
                    <Link href={links?.article} isExternal>
                      <Icon as={MdArticle} color="white" fontSize="1.25rem" />
                    </Link>
                  </ButtonGroup>
                </Flex>
                <Flex
                  direction="column"
                  justify="center"
                  alignItems="center"
                  w="20%"
                >
                  <Text fontWeight="extrabold" fontSize="2xl" color="numberBg">
                    Flight Number
                  </Text>
                  <Text fontWeight="extrabold" fontSize="8xl" color="numberBg">
                    #{flight_number}
                  </Text>
                </Flex>
              </Stack>
            );
          })}
        </Box>
      </Flex>
    </>
  );
};

export default LaunchesList;
