import type { ActionFunction, LoaderFunction } from "remix";
import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useTransition,
} from "remix";
import invariant from "tiny-invariant";

import { getAssets } from "~/assets";
import { createEdible, Edible } from "~/exotics";
import getEdiblePrice, { PriceError } from "~/utils/getPriceForTwo";

interface PostError extends PriceError {
  amount?: boolean;
  name?: boolean;
  flavors?: boolean;
  type?: boolean;
}

interface LoaderData {
  assets: string[];
}

const availableCartQuantities = ["1", "2"];

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const descriptionFormData = formData.get("description");

  const name = formData.get("name");
  const amount = formData.get("amount");
  const description = !descriptionFormData
    ? undefined
    : (descriptionFormData as string);
  const flavors = formData.get("flavors");
  const type = formData.get("type");
  const image = formData.get("image");

  const { price, errors: priceErrors } = getEdiblePrice(formData);

  const errors: PostError = priceErrors ? { ...priceErrors } : {};

  if (!name) {
    errors.name = true;
  }
  if (!amount) {
    errors.amount = true;
  }
  if (!flavors) {
    errors.flavors === true;
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  invariant(typeof amount === "string");
  invariant(typeof name === "string");
  invariant(typeof flavors === "string");
  invariant(typeof type === "string");
  invariant(typeof image === "string");
  invariant(typeof price !== "undefined");

  const edible: Edible = {
    amount,
    class: "thc",
    description,
    flavors: flavors.split(",").map((flavor) => flavor.trim()),
    src: image === "None" ? "assets/bayou-logo.png" : image,
    name,
    price,
    type,
  };

  await createEdible(edible);

  return redirect("/executive/exotics");
};

export const loader: LoaderFunction = async ({ request }) => {
  const assets = await getAssets();

  return { assets };
};

export default function NewCart() {
  const errors = useActionData();
  const transition = useTransition();
  const { assets } = useLoaderData<LoaderData>();

  return (
    <div className="container">
      <div className="content" data-light="">
        <h2>Create Edible</h2>
        <Form className="col space-2" method="post">
          <label>
            Name: {errors?.name ? <em>Name is required</em> : null}{" "}
            <input type="text" name="name" />
          </label>
          <label>
            Type: {errors?.type ? <em>Type is required</em> : null}{" "}
            <input type="text" name="type" />
          </label>
          <label>
            Amount (mg): {errors?.amount ? <em>Amount is required</em> : null}{" "}
            <input type="number" name="amount" step=".01" />
          </label>
          <label>
            Image:{" "}
            <select name="image">
              <option hidden>None</option>
              {assets.map((asset) => (
                <option key={asset} value={asset}>
                  {asset}
                </option>
              ))}
            </select>
          </label>
          <span>
            <label htmlFor="description">Description (optional):</label>
            <textarea id="description" rows={2} name="description" />
          </span>
          <span>
            <label htmlFor="flavors">
              Flavors:{" "}
              {errors?.name ? <em>At least 1 flavor is required</em> : null}{" "}
            </label>
            <textarea
              id="flavors"
              rows={2}
              name="flavors"
              placeholder="flavor 1, flavor 2"
            />
          </span>
          <h3>Prices </h3>
          <div className="prices col space">
            {availableCartQuantities.map((quantity) => (
              <label key={quantity}>
                <span>
                  {quantity}
                  {errors?.[quantity] ? <em>*</em> : null} :{" "}
                </span>
                $
                <input type="number" name={`${quantity}`} />
              </label>
            ))}
          </div>
          <p className="row space end">
            <button
              className="button"
              disabled={transition.submission ? true : undefined}
              type="reset"
            >
              Reset
            </button>
            <button className="button" type="submit" value="create">
              {transition.submission ? "Creating..." : "Create Edible"}
            </button>
          </p>
        </Form>
      </div>
    </div>
  );
}
