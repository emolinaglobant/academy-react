import {
  Container,
  Stack,
  ButtonGroup,
  Text,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <Container
      as="footer"
      role="contentinfo"
      borderColor="red"
      textAlign="center"
      m="0 auto"
      maxWidth="100%"
      mt={20}
      mb={12}
      borderTop="2px solid"
      color="primary"
    >
      <Stack pt="4" spacing={{ base: "4", md: "5" }}>
        <Text fontSize="lg">
          Code by RedKamo
          <br /> &copy; {new Date().getFullYear()}
        </Text>
        <Stack justify="center" direction="row" align="center">
          <ButtonGroup variant="ghost">
            <Link href="https://www.linkedin.com/in/camiloasuarez/" isExternal>
              <Icon as={FaLinkedin} color="white" fontSize="1.25rem" />
            </Link>
            <Link href="https://github.com/RedKamo" isExternal>
              <Icon as={FaGithub} color="white" mx="2" fontSize="1.25rem" />
            </Link>
            <Link href="https://twitter.com/RedKamo_" isExternal>
              <Icon as={FaTwitter} color="white" fontSize="1.25rem" />
            </Link>
          </ButtonGroup>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Footer;
