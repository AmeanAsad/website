import "@fontsource/pt-sans-caption";
import "@fontsource/gilda-display";
import Head from "next/head";

import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="theme-color" content="#ffffff" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
