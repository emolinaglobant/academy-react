import { Container } from "@chakra-ui/react";
import React from "react";

import Routing from "./routes/Routing";

const App = () => {
  return (
    <Container
      alignSelf="center"
      minH="100vh"
      maxWidth="container.xl"
      paddingX={0}
    >
      <Routing />
    </Container>
  );
};

export default App;
