import { Price } from "~/exotics";

import getFormPrice from "./getFormPrice";

export type PriceError = {
  "1"?: boolean;
  "5"?: boolean;
  "10"?: boolean;
};

export default function getPreRollPrice(formData: globalThis.FormData) {
  const errors: PriceError = {};

  const priceData: Price = {
    1: 0,
    5: 0,
    10: 0,
  };

  const one = getFormPrice(formData.get("1"));
  const five = getFormPrice(formData.get("5"));
  const ten = getFormPrice(formData.get("10"));

  if (!one) {
    errors["1"] = true;
  } else {
    priceData["1"] = one;
  }

  if (!five) {
    errors["5"] = true;
  } else {
    priceData["5"] = five;
  }

  if (!ten) {
    errors["10"] = true;
  } else {
    priceData["10"] = ten;
  }

  return {
    errors: Object.keys(errors).length ? errors : undefined,
    price: Object.keys(errors).length ? undefined : priceData,
  };
}
