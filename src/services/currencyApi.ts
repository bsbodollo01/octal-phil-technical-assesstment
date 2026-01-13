
export const fetchCurrencies = async () => {
  const res = await fetch(
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
  );
  return res.json();
};