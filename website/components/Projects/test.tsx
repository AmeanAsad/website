import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";

import styles from "../MarkdownFiles/markdown.module.scss";
import Test from "../MarkdownFiles/test.mdx";

const ResponsiveImage = (props: any) => (
    <Image alt={props.alt} layout="responsive" {...props} />
);

const components = {
    img: ResponsiveImage,

};

const test = (props: any) => {
    return (
        <MDXProvider components={components}>
            <div className={styles["markdown-body"]}>
                <main {...props} />
                <Test />
            </div>

        </MDXProvider>
    );
};

export default test;
