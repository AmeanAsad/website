import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import styles from "../MarkdownFiles/markdown.module.scss";

import Covid19Tracker from "../MarkdownFiles/covid-19-tracker.mdx";
import DiseaseSimulationModule from "../MarkdownFiles/disease-simulation-module.mdx";
import ConvergenceOfSGD from "../MarkdownFiles/convergence-of-sgd.mdx";
import HammingErrorDecoding from "../MarkdownFiles/hamming-error-decoding.mdx";
import TurnoverAnalysis from "../MarkdownFiles/turnover-analysis.mdx";
import FirespreadSimulator from "../MarkdownFiles/firespread-simulator.mdx";
import LinearOptimization from "../MarkdownFiles/linear-optimization.mdx";

const projectPages = {
    "covid-19-tracker": Covid19Tracker,
    "disease-simulation-module": DiseaseSimulationModule,
    "convergence-of-sgd": ConvergenceOfSGD,
    "hamming-error-decoding": HammingErrorDecoding,
    "turnover-analysis": TurnoverAnalysis,
    "firespread-simulator": FirespreadSimulator,
    "linear-optimization": LinearOptimization,
};

const ResponsiveImage = (props: any) => (
    <Image alt={props.alt} layout="responsive" {...props} />
);

const components = {
    img: ResponsiveImage,
};

interface Props {
    projectId: string;
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
