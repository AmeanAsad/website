import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import ProjectPageComponent from "../../components/Projects/ProjectPage";
import PageComponent from "../../components/PageComponent";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import projectInfo from "../../components/Projects/ProjectCards.json";

// Server-Side Imports -- cannot be used in ProjectPage component
import fs from "fs";
import path from "path";
import Head from "next/head";

interface pageProps {
    projectId: string;
    source: MDXRemoteSerializeResult;
}

const ProjectPage: NextPage<pageProps> = (props) => {
    const projectId = props && props.projectId;
    const project = projectInfo[projectId as keyof typeof projectInfo];

    return (
        <>
            <Head>
                <title>{project.title}</title>
                <meta
                    name="description"
                    content={`Amean Asad project information for ${project.title}`}
                />
            </Head>
            <PageComponent
                pageId="project-page"
                Component={<ProjectPageComponent {...props} />}
                noSideBar
            />
        </>
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

export default ProjectPage;
