import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import "./EntryList.css";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import {
  InputLabel,
  FormControl,
  Box,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";

import SpinningIcon from "../../SpinnerPage/index"

import {
  itemsFetchData,
  deleteTransaction,
  filterChange,
} from "../../../actions/action";
import {
  handleDelete,
} from "./../../../actions/aggregateAction";

const months = [
  "All",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const years = ["All", 2020, 2019, 2018];

class EntryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterType: "all", month: "", year: "" };

    this.handleFilter = this.handleFilter.bind(this);
    this.handleMonth = this.handleMonth.bind(this);
    this.handleYear = this.handleYear.bind(this);
  }

  componentDidMount() {
    // axios call to get transactions
    this.props.fetchData(this.props.googleID);
<<<<<<< HEAD
    // TODO sum for aggregation action to initialize
=======
  
>>>>>>> master
  }

  colorDecide(flagInc) {
    if (flagInc) {
      return "rgb(184, 255, 201)";
    } else {
      return "rgb(255, 153, 153)";
    }
  }

  handleFilter(event) {
    this.setState({ filterType: event.target.value });
    let updatedState = {
      filterType: event.target.value,
      month: this.state.month,
      year: this.state.year,
    };
    this.props.filterChangeTrigger(updatedState);
  }

  handleMonth(event) {
    this.setState({ month: event.target.value });
    let updatedState = {
      filterType: this.state.filterType,
      month: event.target.value,
      year: this.state.year,
    };
    this.props.filterChangeTrigger(updatedState);
  }

  handleYear(event) {
    this.setState({ year: event.target.value });
    let updatedState = {
      filterType: this.state.filterType,
      month: this.state.month,
      year: event.target.value,
    };
    this.props.filterChangeTrigger(updatedState);
  }

  render() {
    const self = this;
    if (this.props.reducer.hasError) {
      return (
        <p>
          Sorry! There was an error loading the transactions list. Please
          refresh the page!
        </p>
      );
    }

    if (this.props.reducer.isLoading) {
      return (
        < SpinningIcon />
      )
    }

    let renderList;
    if (this.props.reducer.transactionsFiltered.length > 0) {
      renderList = (
        <List component="nav" aria-label="list of entries">
          <div>
            {this.props.reducer.transactionsFiltered.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: `${self.colorDecide(item.isMoneyIncrease)}`,
                }}
              >
                <ListItem button>
                  <Typography id="date" variant="body1">
                    {item.date}
                  </Typography>

                  <ListItemText
                    id="item"
                    primary={item.name}
                    secondary={`$ ${item.amount} | ${item.category}`}
                  />
                  <IconButton
                    value={item}
                    edge="end"
                    aria-label="delete"
                    onClick={() => this.props.delTrans(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              </div>
            ))}
          </div>
        </List>
      );
    } else {
      renderList = <p>No entries available for the selected options!</p>;
    }

<<<<<<< HEAD
=======
    if (this.props.aggregateReducer.totalInflow == 0 && this.props.aggregateReducer.totalOutflow == 0) {
          this.props.reducer.transactions.map((item) => {
            this.props.initializeTotals(item)
          })
        }

>>>>>>> master
    return (
      <div className="entryList">
        <Box
          p={1}
          display="flex"
          flexDirection="row"
          justifyContent="space-evenly"
        >
          <ToggleButtonGroup
            value={this.state.filterType}
            exclusive
            onChange={this.handleFilter}
          >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="exp">Expense</ToggleButton>
            <ToggleButton value="inc">Income</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <FormControl>
            <InputLabel>Month</InputLabel>
            <Select
              className="months"
              onChange={this.handleMonth}
              value={this.state.month}
            >
              {months.map((month) => (
                <MenuItem key={month} value={month}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Year</InputLabel>
            <Select
              className="years"
              onChange={this.handleYear}
              value={this.state.year}
            >
              {years.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        {renderList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reducer: state.reducer,
    aggregateReducer: state.aggregateReducer,
    googleID: state.reducer.user.googleID
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (googleID) => dispatch(itemsFetchData(googleID)),
    delTrans: (id) => dispatch(deleteTransaction(id)),
    filterChangeTrigger: (filter) => dispatch(filterChange(filter)),
    handleDelete: (item) => dispatch(handleDelete(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryList);
