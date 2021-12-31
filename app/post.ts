import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { marked } from "marked";
import { TransformedMarkdown } from "./routes/models";

export type PostMarkdownAttributes = {
  title: string;
};

interface NewPost extends Post {
  markdown: string;
}

export interface Post extends PostMarkdownAttributes {
  slug: string;
}

export interface TransformedPost extends TransformedMarkdown {
  slug: string;
  title: string;
}

const postsPath = path.join(__dirname, "..", "posts");

function isValidPostAttributes(
  attributes: any
): attributes is PostMarkdownAttributes {
  return attributes?.title;
}

export async function createPost(post: NewPost) {
  const md = `---\ntitle: ${post.title}\n---\n\n${post.markdown}`;
  await fs.writeFile(path.join(postsPath, post.slug + ".md"), md);

  return getPost(post.slug.toString());
}

export async function getPost(slug: string): Promise<TransformedPost> {
  const filePath = path.join(postsPath, slug + ".md");
  const file = await fs.readFile(filePath);
  const { attributes, body } = parseFrontMatter(file.toString());

  invariant(
    isValidPostAttributes(attributes),
    `Post ${filePath} has bad metadata`
  );

  const html = marked(body);

  return { html, slug, title: attributes.title };
}

export async function getPosts() {
  const dir = await fs.readdir(postsPath);

  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(postsPath, filename));
      const { attributes, body } = parseFrontMatter(file.toString());

      invariant(
        isValidPostAttributes(attributes),
        `${filename} has bad metadata`
      );

      const html = marked(body);

      return {
        html,
        slug: filename.replace(/\.md$/, ""),
        title: attributes.title,
      };
    })
  );
}
