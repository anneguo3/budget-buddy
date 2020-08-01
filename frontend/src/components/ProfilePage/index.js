import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import { Box, FormControl, InputLabel, Input, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import {addExpenseCategory, addIncomeCategory} from '../../actions/action'

class ProfilePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  addExpense = () => {
    if (this.props) {
      let expense = document.querySelector('#add_expense').value;
      let googleID = this.props.user.googleID;
      if (expense && googleID) this.props.addExpense(expense, googleID);
      else alert('Please enter a value that is not null.');
    }
  }

  addIncome = () => {
    if (this.props) {
      let income = document.querySelector('#add_income').value;
      let googleID = this.props.user.googleID;
      if (income && googleID) this.props.addIncome(income, googleID);
      else alert('Please enter a value that is not null.');
    }
  }

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
                  <IconButton value={category} edge="end" aria-label="delete">
                  </IconButton>
                </ListItem>
              </div>
            ))}
          </div>
        </List>
      </div>
    );

    let addIncome = (
      <Box display="flex" flexDirection="column" justifyContent="centre">
        <FormControl>
          <InputLabel>Income Category</InputLabel>
          <Input id="add_income"/>
        </FormControl>
        <Box m={2}>
          <Button variant="outlined" onClick={this.addIncome}> Add Income Category</Button>
        </Box>
      </Box>
    );

    let expenseList = (
      <div>
        <Typography variant="h6">Current Expense Categories</Typography>
        <List
          class="list-item"
          component="nav"
          aria-label="list of income categories"
        >
          <div>
            {this.props.expenseCategories.map((category) => (
              <div style={{ backgroundColor: "rgb(255, 153, 153)" }}>
                <ListItem button>
                  <ListItemText id="category" primary={category}></ListItemText>
                  <IconButton value={category} edge="end" aria-label="delete">
                  </IconButton>
                </ListItem>
              </div>
            ))}
          </div>
        </List>
      </div>
    );

    let addExpense = (
      <Box display="flex" flexDirection="column" justifyContent="centre">
        <FormControl>
          <InputLabel>Expense Category</InputLabel>
          <Input id="add_expense"/>
        </FormControl>
        <Box m={2}>
          <Button variant="outlined" onClick={this.addExpense}> Add Expense Category</Button>
        </Box>
      </Box>
    );

    return (
      <div>
        <Box
          m={5}
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    aggregateReducer: state.aggregateReducer,
    user: state.reducer.user,
    expenseCategories: state.reducer.expenseCategories,
    incomeCategories: state.reducer.incomeCategories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addExpense: (expense, googleID) => {dispatch(addExpenseCategory(expense, googleID))},
    addIncome: (income, googleID) => {dispatch(addIncomeCategory(income, googleID))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
