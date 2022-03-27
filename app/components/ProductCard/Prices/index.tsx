import { FC } from "react";

interface PricesProps {
  name: string;
  prices: Record<string, number>;
  quantityAbbreviation?: string;
}

const Prices: FC<PricesProps> = ({ quantityAbbreviation, name, prices }) => {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th scope="col">
              Quantity {quantityAbbreviation && quantityAbbreviation}
            </th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(Object.keys(prices))
            .sort((a, b) => (+a < +b ? -1 : 0))
            .map((quantity, index) => {
              return (
                <tr key={`${name}-${index}-${quantity}`}>
                  <td>{quantity} </td>
                  <td data-type="price">${prices[quantity] ?? "NA"}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Prices;
