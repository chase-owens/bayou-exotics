import { format } from "date-fns";

const dateFormat = "M/d/yyyy 'at' h:mm aa";

export default function formatDate(date: Date) {
  return format(date, dateFormat);
}
