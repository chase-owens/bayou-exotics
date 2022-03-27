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
import { createPreRoll, FlowerType, PreRoll, Wrap } from "~/exotics";
import getPreRollPrice, { PriceError } from "~/utils/getPreRollPrice";

interface PostError extends PriceError {
  amount?: boolean;
  name?: boolean;
}

interface LoaderData {
  assets: string[];
}

const availablePreRollQuantities = ["1", "5", "10"];

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const descriptionFormData = formData.get("description");
  const flavorFormData = formData.get("flavors");

  const name = formData.get("name");
  const amount = formData.get("amount");
  const description = !descriptionFormData
    ? undefined
    : (descriptionFormData as string);
  const flavors = !flavorFormData ? undefined : (flavorFormData as string);
  const flowerType = formData.get("type") as FlowerType;
  const wrap = formData.get("wrap") as Wrap;
  const image = formData.get("image");

  const { price, errors: priceErrors } = getPreRollPrice(formData);

  const errors: PostError = priceErrors ? { ...priceErrors } : {};
  if (!name) {
    errors.name = true;
  }

  if (!amount) {
    errors.amount = true;
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  invariant(typeof amount === "string");
  invariant(typeof flowerType === "string");
  invariant(typeof image === "string");
  invariant(typeof name === "string");
  invariant(typeof price !== "undefined");
  invariant(typeof wrap === "string");

  const preRoll: PreRoll = {
    amount,
    class: "thc",
    description,
    flavors: flavors ? flavors.split(",") : [],
    src: image === "None" ? "assets/bayou-logo.png" : image,
    name,
    price,
    type: flowerType,
    wrap,
  };

  await createPreRoll(preRoll);

  return redirect("/executive/exotics");
};

export const loader: LoaderFunction = async ({ request }) => {
  const assets = await getAssets();

  return { assets };
};

export default function NewPreRoll() {
  const errors = useActionData();
  const transition = useTransition();
  const { assets } = useLoaderData<LoaderData>();

  return (
    <div className="container">
      <div className="content" data-light="">
        <h2>Create Pre Roll</h2>
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
            <legend className="sr-only">Wrap</legend>
            <label>
              <input type="radio" name="wrap" value="joint" defaultChecked />{" "}
              Joint
            </label>
            <label>
              <input type="radio" name="wrap" value="blunt" /> Blunt
            </label>
          </fieldset>
          <label>
            Amount (g): {errors?.amount ? <em>Amount is required</em> : null}{" "}
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
              Flavors (optional):{" "}
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
            {availablePreRollQuantities.map((quantity) => (
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
              {transition.submission ? "Creating..." : "Create Pre Roll"}
            </button>
          </p>
        </Form>
      </div>
    </div>
  );
}
