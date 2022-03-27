import { FC } from "react";

import { Price } from "~/exotics";
import getAssetUrl from "~/utils/getAssetUrl";

import Flavors from "./Flavors";
import PreRollDescription from "./PreRollDescription";
import Prices from "./Prices";

interface ProductCardProps {
  amountAbbreviation?: string;
  amount?: string;
  description?: string;
  disposable?: boolean;
  flavors?: string[];
  name: string;
  price: Price;
  quantityAbbreviation?: string;
  src?: string;
  supplier?: string;
  supplierUrl?: string;
  type: string;
  wrap?: string;
}

const ProductCard: FC<ProductCardProps> = ({
  amountAbbreviation,
  amount,
  description,
  disposable,
  flavors = [],
  name,
  price,
  quantityAbbreviation,
  src,
  supplier,
  supplierUrl,
  type,
  wrap,
}) => {
  return (
    <article className="column card topPad" data-light="">
      <header className="sideMargin">
        <h3>{name}</h3>
      </header>
      <div className="grow column sideMargin bottomPad">
        <span className="row spaceBetween alignCenter">
          <span>{type}</span>
          {disposable !== undefined ? (
            <span>
              {disposable ? <span>&#9989;</span> : <span>&#10060;</span>}{" "}
              Disposable
            </span>
          ) : null}
        </span>
        {src ? (
          <div className="cardImageWrap">
            <img
              className="cardImage"
              alt={`${name}-image`}
              src={getAssetUrl(src)}
            />
          </div>
        ) : null}
        <div className="grow column end">
          <PreRollDescription
            amount={amount}
            amountAbbreviation={amountAbbreviation}
            wrap={wrap}
          />
          <Flavors flavors={flavors} />
          {description ? <p>{description}</p> : null}
          <Prices
            quantityAbbreviation={quantityAbbreviation}
            name={name}
            prices={price}
          />
        </div>
      </div>
      <footer className="dark sidePad vertPad">
        {supplierUrl ? (
          <a target="_blank" href={supplierUrl}>
            {supplier}
          </a>
        ) : null}
      </footer>
    </article>
  );
};

export default ProductCard;
