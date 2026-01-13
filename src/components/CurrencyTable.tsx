import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";

interface Props {
  dates: string[];
  currencies: string[];
  rates: Record<string, Record<string, number>>;
  loading: boolean;
  error: string | null;
  baseCurrency?: string;
}

export default function CurrencyTable({
  dates,
  currencies,
  rates,
  loading,
  error,
  baseCurrency,
}: Props) {
  if (loading)
    return (
      <Box display="flex" justifyContent="center" p={4}>
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Box display="flex" justifyContent="center" p={4}>
        <Typography color="error">{error}</Typography>
      </Box>
    );

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Table sx={{ minWidth: 650 }}>
        <TableHead
          sx={{
            backgroundColor: "#1976d2",
            "& .MuiTableCell-head": { color: "#fff", fontWeight: 600 },
          }}
        >
          <TableRow>
            <TableCell>Date</TableCell>
            {currencies.map((cur) => (
              <TableCell key={cur}>{cur.toUpperCase()}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dates.map((date, rowIndex) => (
            <TableRow
              key={date}
              sx={{
                backgroundColor: rowIndex % 2 === 0 ? "#f5f7fa" : "#fff",
                "&:hover": {
                  backgroundColor: "#e3f2fd",
                },
              }}
            >
              <TableCell sx={{ fontWeight: 500 }}>{date}</TableCell>
              {currencies.map((cur) => (
                <TableCell
                  key={cur}
                  sx={{
                    fontWeight: cur === baseCurrency ? 700 : 400,
                    color: cur === baseCurrency ? "#1976d2" : "inherit",
                  }}
                >
                  {rates[date]?.[cur] ?? "-"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
