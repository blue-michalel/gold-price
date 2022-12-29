import dayjs from "dayjs";

class DateFormatter {
  constructor(private data: string | Date) {}

  get getFormattedDate() {
    const date = dayjs(this.data).format("YYYY-MM-DD");

    return date;
  }
}

export default DateFormatter;
