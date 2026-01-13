import { Autocomplete, TextField } from "@mui/material";

interface Props {
  baseCurrency: string;
  setBaseCurrency: (currency: string) => void;
  allCurrencies?: string[];
}

export default function BaseCurrencySelector({ baseCurrency, setBaseCurrency, allCurrencies }: Props) {

  return (
    <Autocomplete
      options={allCurrencies?.filter((c) => c !== baseCurrency) || []}
      value={baseCurrency}
      onChange={(_, value) => value && setBaseCurrency(value)}
      renderInput={(params) => <TextField {...params} label="Base Currency" />}
      sx={{ width: 200 }}
    />
  );
}
