import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const fetchAllCurrencies = createAsyncThunk(
  "currency/fetchAllCurrencies",
  async () => {
    const res = await fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
    );
    const data = await res.json();
    return Object.keys(data);
  }
);

interface CurrencyState {
  baseCurrency: string;
  selectedCurrencies: string[];
  selectedDate: string;
  allCurrencies: string[];
}

const initialState: CurrencyState = {
  baseCurrency: "gbp",
  selectedCurrencies: ["usd", "eur", "jpy", "chf", "cad", "aud", "zar"],
  selectedDate: new Date().toISOString(), // store as string
  allCurrencies: [],
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setBaseCurrency(state, action: PayloadAction<string>) {
      state.baseCurrency = action.payload;
    },
    setSelectedCurrencies(state, action: PayloadAction<string[]>) {
      state.selectedCurrencies = action.payload;
    },
    setSelectedDate(state, action: PayloadAction<string>) {
      state.selectedDate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCurrencies.fulfilled, (state, action: PayloadAction<string[]>) => {
      state.allCurrencies = action.payload;
    });
  },
});

export const { setBaseCurrency, setSelectedCurrencies, setSelectedDate } = currencySlice.actions;
export default currencySlice.reducer;
