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

export default class AddMessage extends React.Component {
  componentDidMount() {
    //
  }

  render() {
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
          <ToggleButtonGroup className="addFormItem">
            <ToggleButton>Expense</ToggleButton>
            <ToggleButton>Income</ToggleButton>
          </ToggleButtonGroup>

          <FormControl className="addFormItem">
            <InputLabel>Name</InputLabel>
            <Input />
          </FormControl>

          <FormControl className="addFormItem">
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
            defaultValue="2020-05-24"
            InputLabelProps={{
              shrink: true,
            }}
            className="addFormItem"
          />
          <Button variant="outlined">Submit Entry</Button>
        </Box>
      </div>
    );
  }
}
