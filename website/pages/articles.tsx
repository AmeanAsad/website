import type { NextPage } from "next";
import Articles from "../components/Articles/Articles";
import PageComponent from "../components/PageComponent";
import Head from "next/head";

const ArticlesPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Articles</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta
                    name="description"
                    content="Amean Asad personal website articles"
                />
            </Head>
            <PageComponent pageId="articles" Component={<Articles />} />
        </>
    );
};

export default ArticlesPage;
