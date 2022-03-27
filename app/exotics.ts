import s3, { deleteCurrentIndex, getFile, Keys } from "../aws/aws-exports";

export enum FlowerType {
  Hybrid = "hybrid",
  Indica = "indica",
  Sativa = "sativa",
}

export enum WaxType {
  Badder = "badder",
  Crumble = "crumble",
  Shatter = "shatter",
  Sauce = "sauce",
}

export enum Wrap {
  Joint = "joint",
  Blunt = "blunt",
}

export type Price = Record<string, number>;

export type Flower = {
  class: "thc";
  description?: string;
  indica?: number;
  name: string;
  price: Price;
  sativa?: number;
  src?: string;
  supplier?: string;
  supplierUrl?: string;
  type: FlowerType;
};

export interface Cart extends Flower {
  amount?: string;
  disposable: boolean;
  flavors: string[];
}

export interface Edible extends Omit<Flower, "type"> {
  amount: string;
  flavors: string[];
  type: string;
}

export interface PreRoll extends Flower {
  amount?: string;
  flavors: string[];
  wrap: Wrap;
}
export interface Wax extends Omit<Flower, "type"> {
  type: WaxType;
}

export type Flowers = {
  current: Flower[];
  upcoming: Flower[];
};
export type Carts = {
  current: Cart[];
  upcoming: Cart[];
};

export type Edibles = {
  current: Edible[];
  upcoming: Edible[];
};

export type PreRolls = {
  current: PreRoll[];
  upcoming: PreRoll[];
};

export type Waxes = {
  current: Wax[];
  upcoming: Wax[];
};

// Create
export const createCart = async (cart: Cart) => {
  const carts = await getCarts();

  carts.current.push(cart);

  const minifiedCarts = JSON.stringify(carts);

  return await s3
    .putObject({
      Bucket: "bayou-exotics",
      Key: Keys.Cart,
      Body: minifiedCarts,
    })
    .promise()
    .catch((err) => console.log(err));
};

export const createEdible = async (edible: Edible) => {
  const edibles = await getEdibles();

  edibles.current.push(edible);

  const minifiedEdibles = JSON.stringify(edibles);

  return await s3
    .putObject({
      Bucket: "bayou-exotics",
      Key: Keys.Edible,
      Body: minifiedEdibles,
    })
    .promise()
    .catch((err) => console.log(err));
};

export const createFlower = async (flower: Flower) => {
  const flowers = await getFlowers();

  flowers.current.push(flower);

  const minifiedFlowers = JSON.stringify(flowers);

  return await s3
    .putObject({
      Bucket: "bayou-exotics",
      Key: Keys.Flower,
      Body: minifiedFlowers,
    })
    .promise();
};

export const createPreRoll = async (preRoll: PreRoll) => {
  const preRolls = await getPreRolls();

  preRolls.current.push(preRoll);

  const minifiedPreRolls = JSON.stringify(preRolls);

  return await s3
    .putObject({
      Bucket: "bayou-exotics",
      Key: Keys.PreRoll,
      Body: minifiedPreRolls,
    })
    .promise()
    .catch((err) => console.log(err));
};

export const createWax = async (wax: Wax) => {
  const waxes = await getWaxes();

  waxes.current.push(wax);

  const minifiedWaxes = JSON.stringify(waxes);

  return await s3
    .putObject({
      Bucket: "bayou-exotics",
      Key: Keys.Wax,
      Body: minifiedWaxes,
    })
    .promise()
    .catch((err) => console.log(err));
};

// Read
export const getCarts = () => getFile(Keys.Cart);

export const getEdibles = () => getFile(Keys.Edible);

export const getFlowers = () => getFile(Keys.Flower);

export const getPreRolls = () => getFile(Keys.PreRoll);

export const getWaxes = () => getFile(Keys.Wax);

// Delete
export const deleteCurrentCart = (index: number) =>
  deleteCurrentIndex(Keys.Cart, index);

export const deleteCurrentEdible = (index: number) =>
  deleteCurrentIndex(Keys.Edible, index);

export const deleteCurrentFlower = (index: number) =>
  deleteCurrentIndex(Keys.Flower, index);

export const deleteCurrentPreRoll = (index: number) =>
  deleteCurrentIndex(Keys.PreRoll, index);

export const deleteCurrentWax = (index: number) =>
  deleteCurrentIndex(Keys.Wax, index);
