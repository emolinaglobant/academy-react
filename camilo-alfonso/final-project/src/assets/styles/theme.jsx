import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: "#bfd732",
    cardBg: "#25213F",
    numberBg: "#161036",
  },
  fonts: {
    heading: "Lato",
    body: "Lato",
  },
  styles: {
    global: {
      body: {
        bg: ` linear-gradient(
          to right top,
          #04030c,
          #0b0719,
          #110c23,
          #130f2e,
          #171138
        )`,
      },
    },
  },
});

/* 04030C
171138
646797 

background-image: linear-gradient(to left bottom, #171138, #130f2e, #110c23, #0b0719, #04030c);
*/
