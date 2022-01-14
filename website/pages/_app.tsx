import "@fontsource/pt-sans-caption";
import "@fontsource/gilda-display";

import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Component {...pageProps} />
    );
};

export default MyApp;
