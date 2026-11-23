// Server-side only: used from getStaticProps / getStaticPaths.
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";

const POSTS_PATH = path.join(process.cwd(), "content", "blog");

export interface PostMeta {
    slug: string;
    title: string;
    date: string;
    // human readable, e.g. "April 1, 2025"
    dateText: string;
    summary: string;
}

export interface Post extends PostMeta {
    html: string;
}

const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });
};

const readPost = (slug: string) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, `${slug}.md`), "utf-8");
    const { data, content } = matter(source);
    const meta: PostMeta = {
        slug,
        title: String(data.title).trim(),
        date: String(data.date),
        dateText: formatDate(String(data.date)),
        summary: data.summary ? String(data.summary).trim() : "",
    };
    return { meta, content, draft: Boolean(data.draft) };
};

// Published posts, newest first. Posts with `draft: true` are left out.
export const getAllPosts = (): Array<PostMeta> => {
    return fs
        .readdirSync(POSTS_PATH)
        .filter((file) => /\.md$/.test(file))
        .map((file) => readPost(file.replace(/\.md$/, "")))
        .filter((post) => !post.draft)
        .map((post) => post.meta)
        .sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getPost = async (slug: string): Promise<Post> => {
    const { meta, content } = readPost(slug);
    const html = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkMath)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeSlug)
        .use(rehypeKatex)
        .use(rehypeStringify)
        .process(content);
    return { ...meta, html: String(html) };
};
