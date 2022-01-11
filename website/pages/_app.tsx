import "@fontsource/pt-sans-caption";
import "@fontsource/gilda-display";
import { ChakraProvider } from "@chakra-ui/react";
import themeExtension from "../styles/theme";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider theme={themeExtension}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default MyApp;
