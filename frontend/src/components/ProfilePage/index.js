import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import { Box, FormControl, InputLabel, Input, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import {
  uploadTransactions,
  addExpenseCategory,
  addIncomeCategory,
} from "../../actions/action";
import uuid from "uuid";
// import aggregateReducer from "../../reducers/aggregateReducer";
import reducer from "../../reducers/reducer";

import XLSX from "xlsx";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: null,
    };
    this.handleFileUpload = this.handleFileUpload.bind(this);
    // this.handleFileSubmit = this.handleFileSubmit.bind(this);
  }

  addExpense = () => {
    if (this.props) {
      let expense = document.querySelector("#add_expense").value;
      let googleID = this.props.user.googleID;
      if (expense && googleID) this.props.addExpense(expense, googleID);
      else alert("Please enter a value that is not null.");
    }
  };

  addIncome = () => {
    if (this.props) {
      let income = document.querySelector("#add_income").value;
      let googleID = this.props.user.googleID;
      if (income && googleID) this.props.addIncome(income, googleID);
      else alert("Please enter a value that is not null.");
    }
  };

  excelToJson(reader) {
    let transactions = [];
    let fileData = reader.result;
    let wb = XLSX.read(fileData, { type: "binary" });
    let sheetName = wb.SheetNames[0];
    let entries = XLSX.utils.sheet_to_row_object_array(wb.Sheets[sheetName]);
    entries.forEach((element) => {
      console.log(element);
      let entry = {};
      entry["id"] = uuid.v4();
      entry["name"] = element["Transaction"];
      entry["userId"] = this.props.userID;
      entry["amount"] = element["Amount"].toString();
    });

    this.setState({ transactions: entries });
  }

  handleFileUpload = (event) => {
    let reader = new FileReader();
    reader.onload = this.excelToJson.bind(this, reader);
    reader.readAsBinaryString(event.target.files[0]);
  };

  render() {
    let incomeList = (
      <div>
        <Typography variant="h6">Current Income Categories</Typography>
        <List component="nav" aria-label="list of income categories">
          <div>
            {this.props.incomeCategories.map((category) => (
              <div style={{ backgroundColor: "rgb(184, 255, 201)" }}>
                <ListItem button>
                  <ListItemText id="category" primary={category}></ListItemText>
                  <IconButton
                    value={category}
                    edge="end"
                    aria-label="delete"
                  ></IconButton>
                </ListItem>
              </div>
            ))}
          </div>
        </List>
      </div>
    );

    let addIncome = (
      <Box display="flex" flexDirection="column" justifyContent="center">
        <FormControl>
          <InputLabel>Income Category</InputLabel>
          <Input id="add_income" />
        </FormControl>
        <Box m={2}>
          <Button variant="outlined" onClick={this.addIncome}>
            {" "}
            Add Income Category
          </Button>
        </Box>
      </Box>
    );

    let expenseList = (
      <div>
        <Typography variant="h6">Current Expense Categories</Typography>
        <List
          className="list-item"
          component="nav"
          aria-label="list of income categories"
        >
          <div>
            {this.props.expenseCategories.map((category) => (
              <div style={{ backgroundColor: "rgb(255, 153, 153)" }}>
                <ListItem button>
                  <ListItemText id="category" primary={category}></ListItemText>
                  <IconButton
                    value={category}
                    edge="end"
                    aria-label="delete"
                  ></IconButton>
                </ListItem>
              </div>
            ))}
          </div>
        </List>
      </div>
    );

    let addExpense = (
      <Box display="flex" flexDirection="column" justifyContent="center">
        <FormControl>
          <InputLabel>Expense Category</InputLabel>
          <Input id="add_expense" />
        </FormControl>
        <Box m={2}>
          <Button variant="outlined" onClick={this.addExpense}>
            {" "}
            Add Expense Category
          </Button>
        </Box>
      </Box>
    );

    let fileUpload = (
      <Box
        className="file-input"
        display="flex"
        flexDirection="row"
        justifyContent="center"
      >
        <div>
          <InputLabel>File Upload</InputLabel>
          <Input
            className="file-input"
            type="file"
            onChange={this.handleFileUpload}
          ></Input>
        </div>
        <Box m={1}>
          <Button
            variant="outlined"
            className="file-submit"
            onClick={() => {
              this.props.upload(this.state.transactions);
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    );

    return (
      <div>
        <Box
          m={1}
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
        >
          {incomeList}
          {addIncome}
        </Box>
        <Box
          m={5}
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
        >
          {expenseList}
          {addExpense}
        </Box>
        {fileUpload}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    aggregateReducer: state.aggregateReducer,
    user: state.reducer.user,
    expenseCategories: state.reducer.expenseCategories,
    incomeCategories: state.reducer.incomeCategories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    upload: (transactions) => dispatch(uploadTransactions(transactions)),
    addExpense: (expense, googleID) => {
      dispatch(addExpenseCategory(expense, googleID));
    },
    addIncome: (income, googleID) => {
      dispatch(addIncomeCategory(income, googleID));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
