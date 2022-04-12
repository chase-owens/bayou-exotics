import { LinksFunction, LoaderFunction, Outlet, useLoaderData } from "remix";

import Footer from "~/components/Footer";
import Header from "~/components/Header";
import ProductCard from "~/components/ProductCard";
import {
  Carts,
  Edibles,
  Flowers,
  getCarts,
  getEdibles,
  getFlowers,
  getMoonRocks,
  getPreRolls,
  getWaxes,
  MoonRocks,
  PreRolls,
  Waxes,
} from "~/exotics";
import { getProfile, Profile } from "~/profile";
import { User } from "~/users";
import { getUserBySession } from "~/utils/session.server";

import styles from "../styles/index.css";

type LoaderData = {
  carts: Carts;
  edibles: Edibles;
  flowers: Flowers;
  moonRocks: MoonRocks;
  preRolls: PreRolls;
  profile: Profile;
  user: User | null;
  waxes: Waxes;
};

export const loader: LoaderFunction = async ({ request }) => {
  const [carts, edibles, flowers, moonRocks, preRolls, profile, user, waxes] =
    await Promise.all([
      getCarts(),
      getEdibles(),
      getFlowers(),
      getMoonRocks(),
      getPreRolls(),
      getProfile(),
      getUserBySession(request),
      getWaxes(),
    ]);

  return { carts, edibles, flowers, moonRocks, preRolls, profile, user, waxes };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Exotics() {
  const { carts, edibles, flowers, moonRocks, preRolls, profile, user, waxes } =
    useLoaderData<LoaderData>();

  return (
    <div>
      <Header user={user} />
      <main className="body footer-padding">
        <h2>Flower</h2>
        <ul className="cards">
          {flowers.current.map((flower, index) => (
            <ProductCard
              quantityAbbreviation="(g)"
              key={`flower-${flower.name}-${index}`}
              {...flower}
            />
          ))}
        </ul>
        <h2>Pre-Roll</h2>
        <ul className="cards">
          {preRolls.current.map((preRoll, index) => (
            <ProductCard
              amountAbbreviation="grams"
              key={`pre-roll-${preRoll.name}-${index}`}
              {...preRoll}
            />
          ))}
        </ul>
        <h2>Carts</h2>
        <ul className="cards">
          {carts.current.map((cart, index) => (
            <ProductCard key={`cart-${cart.name}-${index}`} {...cart} />
          ))}
        </ul>
        <h2>Waxes</h2>
        <ul className="cards">
          {waxes.current.map((wax, index) => (
            <ProductCard
              key={`wax-${wax.name}-${index}`}
              quantityAbbreviation="(g)"
              {...wax}
            />
          ))}
        </ul>
        <h2>Moon Rocks</h2>
        <ul className="cards">
          {moonRocks.current.map((moonRock, index) => (
            <ProductCard
              key={`moonrock-${moonRock.name}-${index}`}
              quantityAbbreviation="(g)"
              {...moonRock}
            />
          ))}
        </ul>
        <h2>Edibles</h2>
        <ul className="cards">
          {edibles.current.map((edible, index) => (
            <ProductCard
              amountAbbreviation="mg"
              key={`edible-${edible.name}-${index}`}
              {...edible}
            />
          ))}
        </ul>
        <Outlet />
      </main>
      <Footer {...profile} />
    </div>
  );
}
