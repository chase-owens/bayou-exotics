import { useLoaderData } from "remix";
import { getExotics, TransformedExotics } from "../../exotics";

export const loader = () => getExotics();

export default function Exotics() {
  const exotics = useLoaderData<TransformedExotics[]>();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {exotics.map((exotic) => (
          <div dangerouslySetInnerHTML={{ __html: exotic.html }} />
        ))}
      </ul>
    </div>
  );
}
