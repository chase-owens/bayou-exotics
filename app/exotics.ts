import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { marked } from "marked";
import { TransformedMarkdown } from "./routes/models";

export type ExoticsMarkdownAttributes = {
  title: string;
  image: string;
  description: string;
};

export interface Exotics extends ExoticsMarkdownAttributes {
  type: string;
}

export type TransformedExotics = TransformedMarkdown;

const exoticsRoot = path.join(__dirname, "..", "exotics");

function isValidExoticsAttribute(
  attributes: any
): attributes is ExoticsMarkdownAttributes {
  return attributes?.title && attributes.image && attributes.description;
}

export const getExotics = async () => {
  const dir = await fs.readdir(exoticsRoot);

  return Promise.all(
    dir.map(async (filename) => {
      const exoticsPath = path.join(exoticsRoot, filename);
      const file = await fs.readFile(exoticsPath);
      const { attributes, body } = parseFrontMatter(file.toString());

      invariant(
        isValidExoticsAttribute(attributes),
        `${filename} has bad metadata`
      );

      const html = marked(body);

      return { ...attributes, html };
    })
  );
};
