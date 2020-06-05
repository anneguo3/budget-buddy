import React from "react";
import "./Add.css";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import {
  TextField,
  InputAdornment,
  InputLabel,
  Input,
  FormControl,
  Box,
  Button,
} from "@material-ui/core";
import moment from "moment";

export default class AddMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entryType: "",
      transaction: "",
      amout: "",
      date: moment().format().substring(0, 10),
    };
  }

  handleEntryType = (event, entryType) => {
    this.setState({ entryType });
  };

  handleDate = (event, date) => {
    this.setState({ date });
  };
  render() {
    console.log(this.state.date);
    const { entryType } = this.state;

    return (
      <div>
        <Box
          border={1}
          m={5}
          p={2}
          display="flex"
          flexDirection="row"
          justifyContent="space-evenly"
        >
          <ToggleButtonGroup
            value={entryType}
            exclusive
            onChange={this.handleEntryType}
          >
            <ToggleButton value="Expense">Expense</ToggleButton>
            <ToggleButton value="Income">Income</ToggleButton>
          </ToggleButtonGroup>

          <FormControl>
            <InputLabel>Transaction</InputLabel>
            <Input />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
            <Input
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />{" "}
          </FormControl>
          <TextField
            id="date"
            label="Purchase Date"
            type="date"
            defaultValue={this.state.date}
            onChange={this.handleDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="outlined">Submit Entry</Button>
        </Box>
      </div>
    );
  }
}
