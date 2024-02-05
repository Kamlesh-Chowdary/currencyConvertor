import { useState } from "react";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";
import { Inputform } from "./Components";
function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyValue = useCurrencyInfo(from);
  const options = Object.keys(currencyValue);

  const swap = () => {
    setTo(from);
    setFrom(to);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyValue[to]);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <Inputform
          label="From"
          amount={amount}
          onAmountChange={(amount) => setAmount(amount)}
          selectCurrency={from}
          onCurrencyChange={(currency) => setFrom(currency)}
          currencyOptions={options}
        />
        <button onClick={swap}>swap</button>
        <Inputform
          label="To"
          amount={convertedAmount}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          currencyOptions={options}
          amountDisable
        />
        <button type="submit">
          convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </>
  );
}

export default App;
