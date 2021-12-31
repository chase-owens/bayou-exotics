import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { marked } from "marked";
import { TransformedMarkdown } from "./routes/models";

export type ExtraMarkdownAttributes = {
  title: string;
};

export interface Extra extends ExtraMarkdownAttributes {
  type: string;
}

export type TransformedExtra = TransformedMarkdown;

const extrasPath = path.join(__dirname, "..", "extras");

function isValidPostAttributes(
  attributes: any
): attributes is ExtraMarkdownAttributes {
  return attributes?.title;
}

export const getExtras = async () => {
  const dir = await fs.readdir(extrasPath);
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(extrasPath, filename));
      const { attributes, body } = parseFrontMatter(file.toString());

      invariant(
        isValidPostAttributes(attributes),
        `${filename} has bad metadata`
      );

      const html = marked(body);

      return {
        html,
        title: attributes.title,
      };
    })
  );
};
