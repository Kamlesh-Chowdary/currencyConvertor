/*eslint-disable*/
import { useId } from "react";
const Inputform = ({
  label,
  amount,
  onAmountChange,
  selectCurrency = "usd",
  onCurrencyChange,
  currencyOptions = [],
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) => {
  const amountInputId = useId();
  return (
    <div>
      <div>
        <label htmlFor={amountInputId}>{label}</label>
        <input
          id={amountInputId}
          type="number"
          value={amount}
          placeholder="Amount"
          onChange={(e) => {
            if (e.target.value < 0) e.target.value = 0;
            onAmountChange && onAmountChange(e.target.value);
          }}
          disabled={amountDisable}
        />
      </div>
      <div>
        <p>Currency Type</p>
        <select
          disabled={currencyDisable}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Inputform;
