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
}

export default function CurrencyTable({ dates, currencies, rates, loading, error }: Props) {
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
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            {currencies.map((cur) => (
              <TableCell key={cur}>{cur.toUpperCase()}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dates.map((date) => (
            <TableRow key={date}>
              <TableCell>{date}</TableCell>
              {currencies.map((cur) => (
                <TableCell key={cur}>{rates[date]?.[cur] ?? "-"}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
