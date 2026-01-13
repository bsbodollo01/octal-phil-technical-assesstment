import { useState, useEffect } from "react";

type Rates = {
  [date: string]: { [currency: string]: number };
};

export const useCurrencyRates = (base: string, dates: string[]) => {
  const [rates, setRates] = useState<Rates>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRates = async () => {
      setLoading(true);
      setError(null);
      try {
        const allRates: Rates = {};

        for (const date of dates) {
          const response = await fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${base}.json`
          );

          if (!response.ok) {
            throw new Error(`Failed to fetch rates for ${date}`);
          }

          const data = await response.json();
          allRates[date] = data[base];
        }

        setRates(allRates);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch currency rates.");
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [base, dates]);

  return { rates, loading, error };
};
