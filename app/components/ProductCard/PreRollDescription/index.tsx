import { FC } from "react";

interface PreRollDescriptionProps {
  amountAbbreviation?: string;
  amount?: string;
  wrap?: string;
}

const PreRollDescription: FC<PreRollDescriptionProps> = ({
  amountAbbreviation,
  amount,
  wrap,
}) => {
  return amount || wrap ? (
    <p className="col">
      {wrap ? <span className="cap">{wrap}</span> : null}
      {wrap && amount ? "   -   " : null}
      {amount ? <span>{`${amount} ${amountAbbreviation ?? ""}`}</span> : null}
    </p>
  ) : null;
};

export default PreRollDescription;
