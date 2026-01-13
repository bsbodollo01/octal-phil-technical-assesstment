import { Chip, Stack, Autocomplete, TextField, Box } from "@mui/material";

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
    <Stack
      direction="row"
      spacing={1}
      flexWrap="wrap"
      gap={1}
      alignItems="center"
      sx={{
        p: 1,
        borderRadius: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      {selected.map((cur) => (
        <Chip
          key={cur}
          label={cur.toUpperCase()}
          onDelete={() => handleRemove(cur)}
          sx={{
            borderRadius: "16px",
            px:0.5,
            py: 0.5,
            fontWeight: 500,
            backgroundColor: "#1976d2",
            color: "#fff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
            "&:hover": {
              opacity: 0.9,
            },
          }}
        />
      ))}

      {selected.length < 7 && (
        <Box sx={{ minWidth: 200, flex: 1 }}>
          <Autocomplete
            options={allCurrencies.filter((c) => !selected.includes(c))}
            onChange={(_, value) => handleAdd(value ?? "")}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Add Currency"
                size="small"
                variant="outlined"
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#cfd8dc",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#1976d2",
                  },
                  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#1976d2",
                  },
                }}
              />
            )}
          />
        </Box>
      )}
    </Stack>
  );
}
