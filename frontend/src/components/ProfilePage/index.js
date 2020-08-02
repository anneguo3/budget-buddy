import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Box, FormControl, InputLabel, Input, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { uploadTransactions } from "../../actions/action";
import uuid from "uuid";
// import aggregateReducer from "../../reducers/aggregateReducer";
import reducer from "../../reducers/reducer";
import XLSX from "xlsx";
const incomeCategories = ["Chequing", "Savings"];

const expenseCategories = [
  "Entertainment",
  "Groceries",
  "Restaurants",
  "Housing",
  "Miscellaneous",
];

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incomeCategories: incomeCategories,
      expenseCategories: expenseCategories,
      transactions: null,
    };
    this.handleFileUpload = this.handleFileUpload.bind(this);
    // this.handleFileSubmit = this.handleFileSubmit.bind(this);
  }

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
            {this.state.incomeCategories.map((category) => (
              <div style={{ backgroundColor: "rgb(184, 255, 201)" }}>
                <ListItem button>
                  <ListItemText id="category" primary={category}></ListItemText>
                  <IconButton value={category} edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
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
          <Input />
        </FormControl>
        <Box m={2}>
          <Button variant="outlined"> Add Income Category</Button>
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
            {this.state.expenseCategories.map((category) => (
              <div style={{ backgroundColor: "rgb(255, 153, 153)" }}>
                <ListItem button>
                  <ListItemText id="category" primary={category}></ListItemText>
                  <IconButton value={category} edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
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
          <Input />
        </FormControl>
        <Box m={2}>
          <Button variant="outlined"> Add Expense Category</Button>
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
    // userID: state.reducer.user.googleID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    upload: (transactions) => dispatch(uploadTransactions(transactions)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
