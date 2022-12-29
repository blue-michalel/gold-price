import React, { Component } from "react";
import "./App.css";
import DatePicker from "./components/DatePicker/DatePicket";
import Box from "./components/layout/Box";
import Button from "./components/Button/Button";
import Table from "./containers/Table/Table";
import clientApi, { PriceRequest } from "./services/api/client";

export interface Props {}

export interface State {
  startDate: Date;
  endDate: Date;
  loading: boolean;
  data: PriceRequest[] | null;
}

const initState: State = {
  startDate: new Date(),
  endDate: new Date(),
  loading: false,
  data: null,
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initState;
  }

  handleDate = (date: Date, key: string) => {
    console.log({ date, key });
    const obj = {
      [key]: date,
    };

    this.setState({ ...obj, loading: false });
  };

  handleChoice = async () => {
    console.log("handleChoice", this.state);
    if (this.state.loading) return;
    this.setState({ loading: true });
    const { startDate, endDate } = this.state;
    const data = await clientApi.getData({ startDate, endDate });
    this.setState({ data });
  };

  render() {
    return (
      <div className="App">
        <Box>
          <DatePicker
            onChange={(date) => this.handleDate(date, "startDate")}
            title="Start date"
            date={this.state.startDate}
          />
          <DatePicker
            onChange={(date) => this.handleDate(date, "endDate")}
            title="End Date"
            date={this.state.endDate}
          />
          <Button
            disabled={this.state?.loading}
            onClick={this.handleChoice}
            text="Find"
            style={{ marginTop: 10 }}
          />
        </Box>
        {this.state.loading && this.state.data?.length && (
          <Box
            center
            style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
          >
            <Table data={this.state.data} />
          </Box>
        )}
      </div>
    );
  }
}

export default App;
