import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import dayjs, { Dayjs } from "dayjs";

// Async thunk to fetch all currencies
export const fetchAllCurrencies = createAsyncThunk(
  "currency/fetchAllCurrencies",
  async () => {
    const res = await fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
    );
    const data = await res.json();
    return Object.keys(data) as string[];
  }
);

interface CurrencyState {
  baseCurrency: string;
  selectedCurrencies: string[];
  selectedDate: Dayjs;
  allCurrencies: string[];
  loading: boolean;
  error?: string;
}

const initialState: CurrencyState = {
  baseCurrency: "gbp",
  selectedCurrencies: ["usd", "eur", "jpy", "chf", "cad", "aud", "zar"],
  selectedDate: dayjs(),
  allCurrencies: [],
  loading: false,
  error: undefined,
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
    setSelectedDate(state, action: PayloadAction<Dayjs>) {
      state.selectedDate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCurrencies.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchAllCurrencies.fulfilled, (state, action: PayloadAction<string[]>) => {
        state.loading = false;
        state.allCurrencies = action.payload;
      })
      .addCase(fetchAllCurrencies.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load currencies";
      });
  },
});

export const { setBaseCurrency, setSelectedCurrencies, setSelectedDate } = currencySlice.actions;
export default currencySlice.reducer;
