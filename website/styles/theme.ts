import { extendTheme } from "@chakra-ui/react";

const themeExtension: Record<any, any> = extendTheme({
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
