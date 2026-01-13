import { Chip, Stack, Autocomplete, TextField } from "@mui/material";

interface Props {
  selected: string[];
  setSelected: (currencies: string[]) => void;
  allCurrencies: string[];
}

export default function CurrencySelector({ selected, setSelected, allCurrencies }: Props) {
  const handleRemove = (currency: string) => {
    if (selected.length <= 3) return;
    setSelected(selected.filter((c) => c !== currency));
  };

  const handleAdd = (currency: string) => {
    if (!currency || selected.includes(currency) || selected.length >= 7) return;
    setSelected([...selected, currency]);
  };

  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" alignItems="center">
      {selected.map((cur) => (
        <Chip key={cur} label={cur.toUpperCase()} onDelete={() => handleRemove(cur)} />
      ))}

      {selected.length < 7 && (
        <Autocomplete
          options={allCurrencies.filter((c) => !selected.includes(c))}
          onChange={(_, value) => handleAdd(value ?? "")}
          renderInput={(params) => <TextField {...params} label="Add Currency" />}
          sx={{ width: 200 }}
        />
      )}
    </Stack>
  );
}
