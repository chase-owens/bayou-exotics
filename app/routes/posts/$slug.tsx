import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getPost, TransformedPost } from "~/post";
import invariant from "tiny-invariant";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "");

  return getPost(params.slug);
};

export default function PostSlug() {
  const post = useLoaderData<TransformedPost>();

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}
