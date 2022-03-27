import { FC } from "react";

interface FlavorsProps {
  flavors?: string[];
}

type ListFormatOptions = {
  type?: "conjunction" | "disjunction" | "unit";
  style?: "long" | "short" | "narrow";
  localeMatcher?: "lookup" | "best fit";
};

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Intl {
  class ListFormat {
    constructor(locale: string, options: ListFormatOptions);
    public format: (items: Array<string>) => string;
  }
}

const listFormatter = new Intl.ListFormat("en", {});

const Flavors: FC<FlavorsProps> = ({ flavors = [] }) => {
  const transformedFlavors = listFormatter.format(flavors);

  return transformedFlavors ? (
    <p className="cap">{transformedFlavors}</p>
  ) : null;
};

export default Flavors;
