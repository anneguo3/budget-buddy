import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Box, FormControl, InputLabel, Input, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
const incomeCategories = ["Chequing", "Savings"];

const expenseCategories = [
  "Entertainment",
  "Groceries",
  "Restaurants",
  "Housing",
  "Miscellaneous",
];

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incomeCategories: incomeCategories,
      expenseCategories: expenseCategories,
    };
  }

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
      <Box display="flex" flexDirection="column" justifyContent="centre">
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
          class="list-item"
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
      <Box display="flex" flexDirection="column" justifyContent="centre">
        <FormControl>
          <InputLabel>Expense Category</InputLabel>
          <Input />
        </FormControl>
        <Box m={2}>
          <Button variant="outlined"> Add Expense Category</Button>
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
  };
};

export default connect(mapStateToProps)(ProfilePage);
