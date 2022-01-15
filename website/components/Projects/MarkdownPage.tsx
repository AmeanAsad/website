import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import styles from "../MarkdownFiles/markdown.module.scss";
// import Test from "../MarkdownFiles/test.mdx";
import dynamic from "next/dynamic";

const ResponsiveImage = (props: any) => (
    <Image alt={props.alt} layout="responsive" {...props} />
);

const projectPages = {
    "covid-19-tracker": dynamic(() => import("../MarkdownFiles/covid-19-tracker.mdx")),
    "disease-simulation-module": dynamic(() => import("../MarkdownFiles/disease-simulation-module.mdx")),
    "convergence-of-sgd": dynamic(() => import("../MarkdownFiles/convergence-of-sgd.mdx")),
    "hamming-error-decoding": dynamic(() => import("../MarkdownFiles/hamming-error-decoding.mdx")),
    "turnover-analysis": dynamic(() => import("../MarkdownFiles/turnover-analysis.mdx")),
    "firespread-simulator": dynamic(() => import("../MarkdownFiles/firespread-simulator.mdx")),
    "linear-optimization": dynamic(() => import("../MarkdownFiles/linear-optimization.mdx")),
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
