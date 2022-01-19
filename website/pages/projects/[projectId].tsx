import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import ProjectPage2 from "../../components/Projects/ProjectPage2";
import PageComponent from "../../components/PageComponent";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import path from "path";

interface pageProps {
    projectId: string;
    source: MDXRemoteSerializeResult;
}

const Page: NextPage<pageProps> = (props) => {
    return (
        <PageComponent
            pageId="project-page"
            Component={<ProjectPage2 {...props} />}
            noSideBar
        />
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postFilePath = path.join(POSTS_PATH, `${params?.projectId}.mdx`);
    const source = fs.readFileSync(postFilePath, "utf-8");
    const mdxSource = await serialize(source, {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
    });

    return {
        props: {
            source: mdxSource,
            projectId: params?.projectId
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = postFilePaths
    // Remove file extensions for page paths
        .map((filePath) => filePath.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
        .map((projectId) => ({ params: { projectId } }));

    return {
        paths,
        fallback: false,
    };
};

export default Page;
