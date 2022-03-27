import { ActionFunction, LinksFunction, LoaderFunction } from "remix";
import { Form, Link, useLoaderData, useTransition } from "remix";

import {
  Carts,
  deleteCurrentCart,
  deleteCurrentEdible,
  deleteCurrentFlower,
  deleteCurrentPreRoll,
  deleteCurrentWax,
  Edibles,
  Flowers,
  getCarts,
  getEdibles,
  getFlowers,
  getPreRolls,
  getWaxes,
  PreRolls,
  Waxes,
} from "~/exotics";

import execStyles from "../../styles/exec.css";

interface LoaderData {
  carts: Carts;
  edibles: Edibles;
  flowers: Flowers;
  preRolls: PreRolls;
  waxes: Waxes;
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const cartSelected = formData.get("cart");
  const edibleSelected = formData.get("edible");
  const flowerSelected = formData.get("flower");
  const preRollSelected = formData.get("preRoll");
  const waxSelected = formData.get("wax");

  if (cartSelected) {
    return await deleteCurrentCart(+cartSelected);
  }

  if (edibleSelected) {
    return await deleteCurrentEdible(+edibleSelected);
  }

  if (flowerSelected) {
    return await deleteCurrentFlower(+flowerSelected);
  }

  if (preRollSelected) {
    return await deleteCurrentPreRoll(+preRollSelected);
  }

  if (waxSelected) {
    return await deleteCurrentWax(+waxSelected);
  }

  return null;
};

export const loader: LoaderFunction = async () => {
  const [carts, edibles, flowers, preRolls, waxes] = await Promise.all([
    getCarts(),
    getEdibles(),
    getFlowers(),
    getPreRolls(),
    getWaxes(),
  ]);

  return { carts, edibles, flowers, preRolls, waxes };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: execStyles }];
};

export default function Executive() {
  const { carts, edibles, flowers, preRolls, waxes } =
    useLoaderData<LoaderData>();
  const transition = useTransition();

  return (
    <div className="row space wrap ">
      <section className="content" data-light="">
        <span className="row alignCenter spaceBetween">
          <h2>Flowers</h2>
          <Link className="button" to="/executive/new/flower">
            Add
          </Link>
        </span>
        <ul className="col space">
          {flowers.current.map((flower, index) => (
            <li key={`${flower.name}-${index}`}>
              <Form name="flower" method="post">
                <input type="hidden" name="flower" value={index} />
                <div className="row spaceBetween alignCenter space">
                  <span>{flower.name}</span>
                  <button className="button" type="submit">
                    Delete
                  </button>
                </div>
              </Form>
            </li>
          ))}
        </ul>
      </section>
      <section className="content" data-light="">
        <span className="row alignCenter spaceBetween">
          <h2>Carts</h2>
          <Link className="button" to="/executive/new/cart">
            Add
          </Link>
        </span>
        <ul className="col space">
          {carts.current.map((cart, index) => (
            <li key={`${cart.name}-${index}`}>
              <Form name="cart" method="post">
                <input type="hidden" name="cart" value={index} />
                <div className="row spaceBetween alignCenter space">
                  <span>{cart.name}</span>
                  <button className="button" type="submit">
                    Delete
                  </button>
                </div>
              </Form>
            </li>
          ))}
        </ul>
      </section>
      <section className="content" data-light="">
        <span className="row alignCenter spaceBetween">
          <h2>Pre Rolls</h2>
          <Link className="button" to="/executive/new/pre-roll">
            Add
          </Link>
        </span>
        <ul className="col space">
          {preRolls.current.map((preRoll, index) => (
            <li key={`${preRoll.name}-${index}`}>
              <Form name="preRoll" method="post">
                <input type="hidden" name="preRoll" value={index} />
                <div className="row spaceBetween alignCenter space">
                  <span>{preRoll.name}</span>
                  <button className="button" type="submit">
                    Delete
                  </button>
                </div>
              </Form>
            </li>
          ))}
        </ul>
      </section>
      <section className="content" data-light="">
        <span className="row alignCenter spaceBetween">
          <h2>Waxes</h2>
          <Link className="button" to="/executive/new/wax">
            Add
          </Link>
        </span>
        <ul className="col space">
          {waxes.current.map((wax, index) => (
            <li key={`${wax.name}-${index}`}>
              <Form name="wax" method="post">
                <input type="hidden" name="wax" value={index} />
                <div className="row spaceBetween alignCenter space">
                  <span>{wax.name}</span>
                  <button className="button" type="submit">
                    Delete
                  </button>
                </div>
              </Form>
            </li>
          ))}
        </ul>
      </section>
      <section className="content" data-light="">
        <span className="row alignCenter spaceBetween">
          <h2>Edibles</h2>
          <Link className="button" to="/executive/new/edible">
            Add
          </Link>
        </span>
        <ul className="col space">
          {edibles.current.map((edible, index) => (
            <li key={`${edible.name}-${index}`}>
              <Form name="edible" method="post">
                <input type="hidden" name="edible" value={index} />
                <div className="row spaceBetween alignCenter space">
                  <span>{edible.name}</span>
                  <button className="button" type="submit">
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
