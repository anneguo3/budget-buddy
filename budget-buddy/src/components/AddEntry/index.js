import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
import uuid from "uuid";
import { addItem } from "../../app/listReducer";

export function AddEntry() {
  const [date, setDate] = useState(moment().format().substring(0, 10));
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [isMoneyIncrease, setIsMoneyIncrease] = useState("false");

  const dispatch = useDispatch();
  const submitForm = () => {
    const entry = {
      id: uuid.v4(),
      date: date,
      name: name,
      amount: amount,
      isMoneyIncrease: isMoneyIncrease,
    };
    dispatch(addItem(entry));
  };

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
          value={isMoneyIncrease}
          exclusive
          onChange={(e) => setIsMoneyIncrease(e.target.value)}
        >
          <ToggleButton value="false">Expense</ToggleButton>
          <ToggleButton value="true">Income</ToggleButton>
        </ToggleButtonGroup>
        <FormControl>
          <InputLabel>Transaction</InputLabel>
          <Input onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            onChange={(e) => setAmount(e.target.value)}
          />{" "}
        </FormControl>
        <TextField
          id="date"
          label="Purchase Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="outlined" onClick={submitForm}>
          Submit Entry
        </Button>
      </Box>
    </div>
  );
}
