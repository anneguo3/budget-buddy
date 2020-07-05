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
  MenuItem,
  Select,
} from "@material-ui/core";
import moment from "moment";
import uuid from "uuid";
import { addItem } from "../../../app/listReducer";
import {
  updateTotalInflow,
  updateTotalOutflow,
  aggregate,
} from "../../../app/aggregateReducer";

const incomeCategories = ["Chequing", "Savings"];

const expenseCategories = [
  "Entertainment",
  "Groceries",
  "Restaurants",
  "Housing",
];

export function AddEntry() {
  const [date, setDate] = useState(moment().format().substring(0, 10));
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [isMoneyIncrease, setIsMoneyIncrease] = useState("true");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const submitForm = () => {
    const entry = {
      id: uuid.v4(),
      date: date,
      name: name,
      amount: amount,
      isMoneyIncrease: isMoneyIncrease,
    };
    var regex = /^[0-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;
    if (!(name === "" || amount === "") && regex.test(amount)) {
      dispatch(addItem(entry));
      isMoneyIncrease
        ? dispatch(updateTotalInflow(entry.amount))
        : dispatch(updateTotalOutflow(entry.amount));
    }
  };
  const categories = isMoneyIncrease ? incomeCategories : expenseCategories;
  // {
  //   if (isMoneyIncrease === "true") {
  //     console.log(incomeCategories);
  //     incomeCategories;
  //   } else {
  //     console.log(incomeCategories);
  //     expenseCategories;
  //   }

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
          <ToggleButton
            value="false"
            onChange={(e) => setIsMoneyIncrease(e.target.value)}
          >
            Expense
          </ToggleButton>
          <ToggleButton
            value="true"
            onChange={(e) => setIsMoneyIncrease(e.target.value)}
          >
            Income
          </ToggleButton>
        </ToggleButtonGroup>
        <FormControl>
          <InputLabel id="category">Category</InputLabel>
          <Select
            id="selected-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
