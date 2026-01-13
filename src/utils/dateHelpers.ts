
export const getLast7Days = (date: Date) => {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(date);
    d.setDate(d.getDate() - i);
    days.push(d.toISOString().split("T")[0]);
  }
  return days;
};