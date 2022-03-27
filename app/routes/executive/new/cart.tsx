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
import { Cart, createCart, FlowerType } from "~/exotics";
import getCartPrice, { PriceError } from "~/utils/getPriceForTwo";

interface PostError extends PriceError {
  name?: boolean;
  flavors?: boolean;
}

interface LoaderData {
  assets: string[];
}

const availableCartQuantities = ["1", "2"];

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const descriptionFormData = formData.get("description");

  const name = formData.get("name");
  const description = !descriptionFormData
    ? undefined
    : (descriptionFormData as string);
  const disposable = formData.get("disposable");
  const flavors = formData.get("flavors");
  const flowerType = formData.get("type") as FlowerType;
  const image = formData.get("image");

  const { price, errors: priceErrors } = getCartPrice(formData);

  const errors: PostError = priceErrors ? { ...priceErrors } : {};

  if (!name) {
    errors.name = true;
  }
  if (!flavors) {
    errors.flavors === true;
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  invariant(typeof name === "string");
  invariant(typeof flavors === "string");
  invariant(typeof flowerType === "string");
  invariant(typeof image === "string");
  invariant(typeof price !== "undefined");

  const cart: Cart = {
    class: "thc",
    description,
    disposable: Boolean(disposable),
    flavors: flavors.split(",").map((flavor) => flavor.trim()),
    src: image === "None" ? "assets/bayou-logo.png" : image,
    name,
    price,
    type: flowerType,
  };

  await createCart(cart);

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
        <h2>Create Cart</h2>
        <Form className="col space-2" method="post">
          <label>
            Name: {errors?.name ? <em>Name is required</em> : null}{" "}
            <input type="text" name="name" />
          </label>
          <fieldset>
            <legend className="sr-only">Indica, Hybrid, or Both</legend>
            <label>
              <input type="radio" name="type" value="indica" defaultChecked />{" "}
              Indica
            </label>
            <label>
              <input type="radio" name="type" value="sativa" /> Sativa
            </label>
            <label>
              <input type="radio" name="type" value="hybrid" /> Hybrid
            </label>
          </fieldset>
          <fieldset>
            <legend className="sr-only">Disposable</legend>
            <label>
              <input type="radio" name="disposable" value="1" defaultChecked />{" "}
              Disposable
            </label>
            <label>
              <input type="radio" name="disposable" value="" /> Non-disposable
            </label>
          </fieldset>
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
              {transition.submission ? "Creating..." : "Create Cart"}
            </button>
          </p>
        </Form>
      </div>
    </div>
  );
}
