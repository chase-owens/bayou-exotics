import { ActionFunction, LinksFunction, LoaderFunction } from "remix";
import { Form, Link, useLoaderData } from "remix";
import invariant from "tiny-invariant";

import { deleteAsset, getAssets } from "~/assets";
import getAssetUrl from "~/utils/getAssetUrl";

import execStyles from "../../styles/exec.css";

interface LoaderData {
  assets: string[];
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const asset = formData.get("asset");

  if (!asset) {
    return;
  }

  invariant(typeof asset === "string");

  return await deleteAsset(asset);
};

export const loader: LoaderFunction = async () => {
  const data: LoaderData = { assets: await getAssets() };

  return data;
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: execStyles }];
};

export default function Executive() {
  const { assets } = useLoaderData<LoaderData>();

  return (
    <div className="col media">
      <section className="">
        <span className="row space-2">
          <h2>Images</h2>
          <Link className="button" to="/executive/new/media">
            Add
          </Link>
        </span>
        <ul className="row space wrap">
          {assets.map((asset, index) => (
            <li className="content relative" key={`${asset}-${index}`}>
              <Form method="post">
                <input type="hidden" name="asset" value={asset} />
                <div className="">
                  <img alt="" src={getAssetUrl(asset)} width="100%" />
                  <button
                    className="button absolute asset-delete-position"
                    type="submit"
                  >
                    Delete
                  </button>
                </div>
              </Form>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
