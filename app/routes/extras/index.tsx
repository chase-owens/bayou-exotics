import { useLoaderData } from "remix";
import { TransformedExtra, getExtras } from "../../extra";

export const loader = () => getExtras();

export default function Extras() {
  const extras = useLoaderData<TransformedExtra[]>();
  return (
    <div>
      <h1>Extras</h1>
      <ul>
        {extras.map((extra) => (
          <div dangerouslySetInnerHTML={{ __html: extra.html }} />
        ))}
      </ul>
    </div>
  );
}
