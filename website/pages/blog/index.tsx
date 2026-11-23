import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPosts, PostMeta } from "../../utils/posts";

interface Props {
    posts: Array<PostMeta>;
}

const Blog: NextPage<Props> = ({ posts }) => {
    return (
        <Layout
            title="Blog"
            description="Amean Asad writing about tech, math, and experience"
            current="/blog"
        >
            <h1>Blog</h1>
            <ul className="post-list">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>
                            <a>{post.title}</a>
                        </Link>
                        <div className="muted">{post.dateText}</div>
                        <p>{post.summary}</p>
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    return { props: { posts: getAllPosts() } };
};

export default Blog;
