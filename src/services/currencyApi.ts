
export const fetchCurrencies = async () => {
  const res = await fetch(
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
  );
  return res.json();
};

export const fetchRatesByDate = async (base: string, date: string) => {
  const res = await fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${base}.json`
  );
  return res.json();
};
