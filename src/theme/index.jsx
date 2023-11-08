import { extendTheme } from "@chakra-ui/react";
import { textTheme } from "./components/text";
import { tableTheme } from "./components/table";
import { progressTheme } from "./components/progress";
import { tabsTheme } from "./components/tabs";
import { containerTheme } from "./components/container";

const theme = extendTheme({
  components: {
    // Container: containerTheme,
    Text: textTheme,
    Tabs: tabsTheme,
    Table: tableTheme,
    Progress: progressTheme,
    Container: containerTheme,
  },
  styles: {
    global: {
      html: {
        width: "100%",
        height: "100%",
      },
      body: {
        bg: "white",
        fontFamily: "Noto Sans KR",
        fontSize: "16px",
        fontWeight: "400",
        color: "#2B3674",
      },
      // styles for the `a`
      a: {
        color: "#2B3674",
        _hover: {
          textDecoration: "none !important",
        },
      },
      li: {
        listStyle: "none",
      },
    },
  },
  space: {
    4: "25px",
  },
  colors: {
    primary: "#4318FF",
    secondary_grey_700: "#707EAE",
    Secondary_Grey_600: "#A3AED0",
  },
});

export default theme;
