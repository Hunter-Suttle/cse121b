let amountInput = document.getElementById("amount-input");
let fromInput = document.getElementById("from-input");
let toInput = document.getElementById("to-input");
let exchangeButton = document.getElementById("exchange-button");
let exchangeRate = document.getElementById("exchange-rate");
let outputText = document.getElementById("output-text");

let exchangeRates = {
  "USD_EUR": 0.85,
  "USD_GBP": 0.73,
  "USD_JPY": 113.58,
  "USD_INR": 74.42,
  "EUR_USD": 1.18,
  "EUR_GBP": 0.86,
  "EUR_JPY": 133.66,
  "EUR_INR": 87.55,
  "GBP_USD": 1.37,
  "GBP_EUR": 1.16,
  "GBP_JPY": 155.97,
  "GBP_INR": 101.92,
  "JPY_USD": 0.0088,
  "JPY_EUR": 0.0075,
  "JPY_GBP": 0.0064,
  "JPY_INR": 0.6536,
  "INR_USD": 0.0134,
  "INR_EUR": 0.0114,
  "INR_GBP": 0.0098,
  "INR_JPY": 1.53
};

function fetchExchangeRate(from, to) {
  let currencyPair = `${from}_${to}`;
  if (exchangeRates[currencyPair]) {
    return exchangeRates[currencyPair];
  } else {
    return null;
  }
}

async function convertCurrency() {
  let amount = amountInput.value;
  let from = fromInput.value;
  let to = toInput.value;
  if (amount && from && to && !isNaN(amount)) {
    let rate = fetchExchangeRate(from, to);
    if (rate) {
      let convertedAmount = rate * amount;
      exchangeRate.value = `${from} 1 = ${to} ${rate.toFixed(4)}`;
      outputText.textContent = `${from} ${amount} is equal to ${to} ${convertedAmount.toFixed(2)}`;
    } else {
      alert("Sorry, we could not get the exchange rate for this currency pair.");
    }
  } else {
    alert("Please enter a valid amount and currency codes.");
  }
}

exchangeButton.addEventListener("click", convertCurrency);