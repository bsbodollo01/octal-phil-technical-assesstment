import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

interface Props {
  value: string;
  onChange: (date: string | null) => void;
}

export default function DatePicker({ value, onChange }: Props) {
  const dayjsValue = value ? dayjs(value) : null;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        label="Select Date"
        value={dayjsValue}
        onChange={(date: Dayjs | null) => onChange(date ? date.toISOString() : null)}
        disableFuture
        minDate={dayjs().subtract(90, "day")}
      />
    </LocalizationProvider>
  );
}
