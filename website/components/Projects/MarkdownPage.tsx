import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import styles from "../MarkdownFiles/markdown.module.scss";
import dynamic from "next/dynamic";
import { Spinner } from "@chakra-ui/react";

const ResponsiveImage = (props: any) => (
    <Image alt={props.alt} layout="responsive" {...props} />
);

const spinner = (
    <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="brand.red"
        size="xl"
    />
);

const projectPages = {
    "covid-19-tracker": dynamic(
        () => import("../MarkdownFiles/covid-19-tracker.mdx"),
        { loading: () => spinner }
    ),
    "disease-simulation-module": dynamic(
        () => import("../MarkdownFiles/disease-simulation-module.mdx"),
        { loading: () => spinner }
    ),
    "convergence-of-sgd": dynamic(
        () => import("../MarkdownFiles/convergence-of-sgd.mdx"),
        { loading: () => spinner }
    ),
    "hamming-error-decoding": dynamic(
        () => import("../MarkdownFiles/hamming-error-decoding.mdx"),
        { loading: () => spinner }
    ),
    "turnover-analysis": dynamic(
        () => import("../MarkdownFiles/turnover-analysis.mdx"),
        { loading: () => spinner }
    ),
    "firespread-simulator": dynamic(
        () => import("../MarkdownFiles/firespread-simulator.mdx"),
        { loading: () => spinner }
    ),
    "linear-optimization": dynamic(
        () => import("../MarkdownFiles/linear-optimization.mdx"),
        { loading: () => spinner }
    ),
};

const components = {
    img: ResponsiveImage,

};

interface Props {
    projectId: string
}

const MarkdownPage = ({ projectId }: Props) => {
    const Project = projectPages[projectId as keyof typeof projectPages];
    return (
        <MDXProvider components={components}>
            <div className={styles["markdown-body"]}>
                <Project />
            </div>
        </MDXProvider>
    );
};

export default MarkdownPage;
