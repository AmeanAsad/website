import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"; // eslint-disable-line

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    xl2: "86em",
});

const themeExtension: Record<any, any> = extendTheme({
    breakpoints,
    colors: {
        brand: {
            darkBlue: "#151247",
            red: "#FF4D5B",
            lightBlue: "#EAF0FF",
            mediumBlue: "#3C3483",
            white: "#FFFFF7",
        },
    },
    fonts: {
        body: "PT Sans Caption",
        heading: "Gilda Display",
        mono: "PT Sans Caption",
    },
});

export default themeExtension;
