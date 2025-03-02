export const getExperienceDateTimeString = (
  dateTime: Date | undefined
): string => {
  if (dateTime === undefined) return "Currently";
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = monthNames[dateTime.getMonth()];
  const year = dateTime.getFullYear().toString().slice(-2);

  return `${month} '${year}`;
};
