import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import { Box, FormControl, InputLabel, Input, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import * as FileSaver from "file-saver";
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import {
  uploadTransactions,
  addExpenseCategory,
  addIncomeCategory,
  createSaveGoal,
  createSpendGoal
} from '../../actions/action';
import uuid from "uuid";
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
      let entry = {};
      entry["id"] = uuid.v4();
      entry["name"] = element["Transaction"].toString().trim();
      entry["userID"] = this.props.user.googleID;
      entry["amount"] = element["Amount"].toString();
      entry["isMoneyIncrease"] = element["Type"].trim() === "Income";
      entry["category"] = element["Category"].toString().trim();
      entry["date"] = element["Date"];
      transactions.push(entry);
    });
    this.setState({ transactions: transactions });
  }

  handleFileUpload = (event) => {
    let reader = new FileReader();
    reader.onload = this.excelToJson.bind(this, reader);
    reader.readAsBinaryString(event.target.files[0]);
  };

  handleTemplateDownload = (event) => {
    const sheetHeaders = [
      { Type: "" },
      { Category: "" },
      { Transaction: "" },
      { Amount: "" },
      { Date: "" },
    ];
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const ws = XLSX.utils.json_to_sheet(sheetHeaders);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, "Entries_Template.xlsx");
  };

  createSaveGoal = () => {
    if (this.props) {
      let saveGoal = document.querySelector("#save_goal").value;
      let googleID = this.props.user.googleID;
      if (saveGoal && googleID) this.props.createSave(saveGoal, googleID);
      else alert("Please enter a value that is not null.");
    }
  };

  createSpendGoal = () => {
    if (this.props) {
      let spendGoal = document.querySelector("#spend_goal").value;
      let googleID = this.props.user.googleID;
      if (spendGoal && googleID) this.props.createSpend(spendGoal, googleID);
      else alert("Please enter a value that is not null.");
    }
  };

  render() {
    let addSaveGoal = (
      <div>
        <Box display="flex" flexDirection="column" justifyContent="center">
            <FormControl>
              <InputLabel>Custom Savings Goal</InputLabel>
              <Input id="save_goal" />
            </FormControl>
            <Box m={2}>
              <Button variant="outlined" onClick={this.createSaveGoal}>
                Create Save Goal
              </Button>
            </Box>
          </Box>
      </div>
    )

    let addSpendGoal = (
      <div>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <FormControl>
            <InputLabel>Custom Spending Goal</InputLabel>
            <Input id="spend_goal" />
          </FormControl>
          <Box m={2}>
            <Button variant="outlined" onClick={this.createSpendGoal}>
              Create Spend Goal
            </Button>
          </Box>
        </Box>
      </div>
    )

    let incomeList = (
      <div>
        <Typography variant="h6">Current Income Categories</Typography>
        <List component="nav" aria-label="list of income categories">
          <div>
            {this.props.incomeCategories.map((category) => (
              <div
                key={category}
                style={{ backgroundColor: "rgb(184, 255, 201)" }}
              >
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
          {this.props.expenseCategories.map((category) => (
            <div
              key={category}
              style={{ backgroundColor: "rgb(255, 153, 153)" }}
            >
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
            inputProps={{
              accept:
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
            }}
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

    let templateDownload = (
      <Box display="flex" flexDirection="row" justifyContent="center" m={5}>
        <Button variant="outlined" onClick={this.handleTemplateDownload}>
          Download Template
        </Button>
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
          <Typography variant="h6">
            Add custom spending and saving goals for this month.
          </Typography>
        </Box>
        <Box
          m={1}
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
        >
          {addSaveGoal}
          {addSpendGoal}
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
        >
          <Typography variant="h6">
              Add custom income and expense categories.
          </Typography>
        </Box>
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
        {templateDownload}
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
    spendGoal: state.reducer.user.spendGoal,
    saveGoal: state.reducer.user.saveGoal
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
    createSave: (goal, googleID) => {
      dispatch(createSaveGoal(goal, googleID));
    },
    createSpend: (goal, googleID) => {
      dispatch(createSpendGoal(goal, googleID));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
