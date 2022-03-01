import type { NextPage } from "next";
import HomePage from "../components/Homepage/Homepage";
import PageComponent from "../components/PageComponent";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Amean Asad</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta
                    name="description"
                    content="Amean Asad's personal website"
                />
                <meta property="og:image" content="https://www.ameanasad.xyz/metaLink.png" />
            </Head>
            <PageComponent pageId="home" Component={<HomePage />} />
        </>
    );
};

export default Home;
