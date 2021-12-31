import { Link, useLoaderData } from "remix";
import { getPosts, TransformedPost } from "~/post";

export const loader = () => getPosts();

export default function Posts() {
  const posts = useLoaderData<TransformedPost[]>();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        ))}
      </ul>
    </div>
  );
}
