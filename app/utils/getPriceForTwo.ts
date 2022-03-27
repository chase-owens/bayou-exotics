import { Price } from "~/exotics";

import getFormPrice from "./getFormPrice";

export type PriceError = {
  "1"?: boolean;
  "2"?: boolean;
};

export default function getPriceForTwo(formData: globalThis.FormData) {
  const errors: PriceError = {};

  const priceData: Price = {
    1: 0,
    2: 0,
  };

  const one = getFormPrice(formData.get("1"));
  const two = getFormPrice(formData.get("2"));

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

  return {
    errors: Object.keys(errors).length ? errors : undefined,
    price: Object.keys(errors).length ? undefined : priceData,
  };
}
