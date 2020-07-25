import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { connect } from "react-redux";
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
import "./AddEntry.css";
import { addTransactionItem } from "../../../actions/action";

const incomeCategories = ["Chequing", "Savings"];

const expenseCategories = [
  "Entertainment",
  "Groceries",
  "Restaurants",
  "Housing",
  "Miscellaneous",
];

class AddEntry extends React.Component {
  constructor(props) {
    super(props);
    // Set default values for this class
    this.state = {
      transName: "",
      amount: "",
      isMoneyIncrease: false,
      date: moment().format().substring(0, 10),
      category: "",
      categories: expenseCategories,
    };

    this.handleName = this.handleName.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  // Handle all event triggers
  handleName(event) {
    this.setState({ transName: event.target.value });
  }
  handleIncrease(event) {
    if (event.target.value === "false") {
      this.setState({
        isMoneyIncrease: false,
        categories: expenseCategories,
      });
    } else {
      this.setState({
        isMoneyIncrease: true,
        categories: incomeCategories,
      });
    }
  }
  handleDate(event) {
    this.setState({ date: event.target.value });
  }
  handleAmount(event) {
    this.setState({ amount: event.target.value });
  }
  handleCategory(event) {
    this.setState({ category: event.target.value });
  }

  render() {
    const self = this;
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
            value={this.state.isMoneyIncrease.toString()}
            exclusive
            onChange={this.handleIncrease}
          >
            <ToggleButton value="false">Expense</ToggleButton>
            <ToggleButton value="true">Income</ToggleButton>
          </ToggleButtonGroup>
          <FormControl>
            <InputLabel>Category</InputLabel>
            <Select
              className="categories"
              onChange={this.handleCategory}
              value={this.state.category}
            >
              {this.state.categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Transaction</InputLabel>
            <Input onChange={this.handleName} />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
            <Input
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              onChange={this.handleAmount}
            />{" "}
          </FormControl>
          <TextField
            id="date"
            label="Purchase Date"
            type="date"
            value={this.state.date}
            onChange={this.handleDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            variant="outlined"
            onClick={() => {
              // trigger add action when clicked, scraping values from this.state
              var regex = /^[0-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;
              if (
                !(
                  this.state.transName === "" ||
                  this.state.amount === "" ||
                  this.state.category === ""
                ) &&
                regex.test(this.state.amount)
              ) {
                this.props.addTransaction(
                  uuid.v4(),
                  this.state.transName,
                  this.state.amount,
                  this.state.isMoneyIncrease,
                  this.state.category,
                  this.state.date,
                  this.props.userID
                );
              }
            }}
          >
            Submit Entry
          </Button>
        </Box>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
    hasError: state.hasError,
    transName: state.transName,
    amount: state.amount,
    isMoneyIncrease: state.isMoneyIncrease,
    date: state.date,
    category: state.category,
    userID: state.reducer.user.googleID
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTransaction: (id, name, amount, isInc, category, date, googleID) =>
      dispatch(addTransactionItem(id, name, amount, isInc, category, date, googleID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEntry);
