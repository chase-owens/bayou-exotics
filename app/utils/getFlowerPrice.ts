import { Price } from "~/exotics";

import getFormPrice from "./getFormPrice";

export type PriceError = {
  "1"?: boolean;
  "2"?: boolean;
  "3.5"?: boolean;
  "7"?: boolean;
  "14"?: boolean;
  "28"?: boolean;
};

export default function getFlowerPrice(formData: globalThis.FormData) {
  const errors: PriceError = {};

  const priceData: Price = {
    1: 0,
    2: 0,
    3.5: 0,
    7: 0,
    14: 0,
    28: 0,
  };

  const one = getFormPrice(formData.get("1"));
  const two = getFormPrice(formData.get("2"));
  const eighth = getFormPrice(formData.get("3.5"));
  const quarter = getFormPrice(formData.get("7"));
  const half = getFormPrice(formData.get("14"));
  const zone = getFormPrice(formData.get("28"));

  if (!one) {
    errors["1"] = true;
  } else {
    priceData["1"] = one;
  }

  if (!two) {
    errors["2"] = true;
  } else {
    priceData["2"] = two;
  }

  if (!eighth) {
    errors["3.5"] = true;
  } else {
    priceData["3.5"] = eighth;
  }

  if (!quarter) {
    errors["7"] = true;
  } else {
    priceData["7"] = quarter;
  }

  if (!half) {
    errors["14"] = true;
  } else {
    priceData["14"] = half;
  }

  if (!zone) {
    errors["28"] = true;
  } else {
    priceData["28"] = zone;
  }

  return {
    errors: Object.keys(errors).length ? errors : undefined,
    price: Object.keys(errors).length ? undefined : priceData,
  };
}
