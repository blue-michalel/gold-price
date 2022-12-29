import { AxiosInstance } from "axios";
import axios from "./config";
import DateFormatter from "../date/date";

export interface PriceRequest {
  data: string;
  cena: number;
}

export interface FiltersRequest {
  startDate?: Date;
  endDate?: Date;
}

class ClientApi {
  constructor(private http: AxiosInstance) {}

  async getData(filter: FiltersRequest = {}) {
    const { data } = await this.http.get<PriceRequest[]>(
      this.filterDate(filter)
    );
    console.log("this.filterDate(filter)", this.filterDate(filter));
    console.log("data", data);
    return data;
  }

  private filterDate({ startDate, endDate }: FiltersRequest) {
    if (!startDate) return this.handleNoFilters();
    const filters =
      this.handleDates(startDate) + "/" + this.handleDates(endDate);

    return filters;
  }

  private handleNoFilters() {
    return "";
  }

  private handleDates(data: Date | undefined) {
    if (!data) return "/";
    return new DateFormatter(data).getFormattedDate;
  }
}

const clientApi = new ClientApi(axios);
export default clientApi;
