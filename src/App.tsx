import { useEffect, useMemo } from "react";
import { Stack, Card, CardContent, Typography, Divider, Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import {
  setBaseCurrency,
  setSelectedCurrencies,
  setSelectedDate,
  fetchAllCurrencies,
} from "./store/slices/currencySlice";

import DatePicker from "./components/DatePicker";
import BaseCurrencySelector from "./components/BaseCurrencySelector";
import CurrencySelector from "./components/CurrencySelector";
import CurrencyTable from "./components/CurrencyTable";

import { getLastNDays } from "./utils/dateHelpers";
import { useCurrencyRates } from "./hooks/useCurrencyRates";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const baseCurrency = useSelector((state: RootState) => state.currency.baseCurrency);
  const selectedCurrencies = useSelector((state: RootState) => state.currency.selectedCurrencies);
  const selectedDate = useSelector((state: RootState) => state.currency.selectedDate);
  const allCurrencies = useSelector((state: RootState) => state.currency.allCurrencies);

  useEffect(() => {
    dispatch(fetchAllCurrencies());
  }, [dispatch]);

  const dates = useMemo(() => getLastNDays(selectedDate, 7), [selectedDate]);
  const { rates, loading, error } = useCurrencyRates(baseCurrency, dates);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f7fa",
        p: 2,
      }}
    >
      <Stack spacing={4} width={{ xs: "100%", sm: "80%", md: "60%" }}>
        {/* Header */}
        <Stack spacing={0.5} textAlign="center">
          <Typography variant="h4" color="primary" fontWeight={700}>
            Currency Exchange Rates
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Compare exchange rates for the last 7 days
          </Typography>
        </Stack>

        {/* Cards */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems="stretch"
        >
          {/* Controls Card */}
          <Card elevation={3} sx={{ flex: 1, borderRadius: 2 }}>
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="subtitle1" fontWeight={600}>
                  Filters
                </Typography>
                <Divider />
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <DatePicker
                    value={selectedDate}
                    onChange={(date) => date && dispatch(setSelectedDate(date))}
                  />
                  <BaseCurrencySelector
                    baseCurrency={baseCurrency}
                    setBaseCurrency={(c) => dispatch(setBaseCurrency(c))}
                    allCurrencies={allCurrencies}
                  />
                </Stack>
              </Stack>
            </CardContent>
          </Card>

          {/* Currency Selector Card */}
          <Card elevation={1} sx={{ flex: 1, borderRadius: 2 }}>
            <CardContent>
              <Stack spacing={1.5}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" fontWeight={700}>
                    Selected Currencies
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    (Minimum 3, maximum 7)
                  </Typography>
                </Stack>

                <Divider />

                <CurrencySelector
                  selected={selectedCurrencies}
                  setSelected={(c) => dispatch(setSelectedCurrencies(c))}
                  allCurrencies={allCurrencies}
                />
              </Stack>
            </CardContent>
          </Card>
        </Stack>

        {/* Currency Table */}
        <CurrencyTable
          dates={dates}
          currencies={selectedCurrencies}
          rates={rates}
          loading={loading}
          error={error}
        />
      </Stack>
    </Container>
  );
}

export default App;
