import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { ProjectPage2 } from "../../components/Projects/ProjectPage2";
import fs from "fs";
import path from "path";

const Page = () => {
    return (
        <h1> Hello World </h1>
    );
};

export const getStaticProps = async ({ params }) => {
    const postFilePath = path.join(POSTS_PATH, `${params.projectId}.mdx`);
    const source = fs.readFileSync(postFilePath, "utf-8");
    const mdxSource = await serialize(source, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
    });

    return {
        props: {
            source: mdxSource,
            projectId: params.projectId
        },
    };
};

export const getStaticPaths = async () => {
    console.log(postFilePaths);
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
