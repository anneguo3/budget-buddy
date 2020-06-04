import React from "react";
import "./Add.css";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import {
  TextField,
  InputAdornment,
  InputLabel,
  Input,
} from "@material-ui/core";

export default class AddMessage extends React.Component {
  componentDidMount() {
    //
  }
  render() {
    return (
      // add code here
      <div className="addForm">
        <form>
          <ToggleButtonGroup className="addFormItem">
            <ToggleButton>Expense</ToggleButton>
            <ToggleButton>Income</ToggleButton>
          </ToggleButtonGroup>
          <InputLabel>Name</InputLabel>
          <Input />
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />{" "}
          <TextField
            id="date"
            label="Purchase Date"
            type="date"
            defaultValue="2020-05-24"
            InputLabelProps={{
              shrink: true,
            }}
            className="addFormItem"
          />
        </form>
      </div>
    );
  }
}
