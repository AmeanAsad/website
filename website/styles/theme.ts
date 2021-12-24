import { extendTheme } from "@chakra-ui/react";

const themeExtension: any = extendTheme({
    colors: {
        brand: {
            darkBlue: "#151247",
            red: "#FF4D5B",
            lightBlue: "#EAF0FF",
            mediumBlue: "#262153",
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
