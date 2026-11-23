import type { NextPage } from "next";
import HomePage from "../components/Homepage/Homepage";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Amean Asad</title>
                <meta
                    name="description"
                    content="Amean Asad's personal website"
                />
                <meta
                    property="og:image"
                    content="https://www.ameanasad.xyz/metaLink.png"
                />
            </Head>
            <HomePage />
        </>
    );
};

export default Home;
