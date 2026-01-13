import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

interface Props {
  value: Dayjs;
  onChange: (date: Dayjs | null) => void;
}

export default function DatePicker({ value, onChange }: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        label="Select Date"
        value={value}
        onChange={onChange}
        disableFuture
        minDate={dayjs().subtract(90, "day")}
      />
    </LocalizationProvider>
  );
}
