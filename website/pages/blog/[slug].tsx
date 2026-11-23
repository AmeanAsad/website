import "katex/dist/katex.min.css";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "../../components/Layout";
import { getAllPosts, getPost, Post } from "../../utils/posts";

interface Props {
    post: Post;
}

const BlogPost: NextPage<Props> = ({ post }) => {
    return (
        <Layout title={post.title} description={post.summary} current="/blog">
            <article className="post">
                <h1>{post.title}</h1>
                <div className="muted">{post.dateText}</div>
                {/* eslint-disable-next-line react/no-danger */}
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    return { props: { post: await getPost(String(params?.slug)) } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: getAllPosts().map((post) => ({ params: { slug: post.slug } })),
        fallback: false,
    };
};

export default BlogPost;
