import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import "./EntryList.css";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { Typography, Box } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import {
  itemsFetchData,
  deleteTransaction,
  filterChange,
} from "../../../actions/action";
import { handleDelete } from "./../../../actions/aggregateAction";

class EntryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterType: "all" };

    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    // axios call to get transactions
    this.props.fetchData();
    // TODO sum for aggregation action to initialize
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
    this.props.filterChangeTrigger(event.target.value);
  }

  render() {
    console.log(this.props);
    const self = this;
    if (this.props.reducer.hasError) {
      return (
        <p>
          Sorry! There was an error loading the transactions list. Please
          refresh the page!
        </p>
      );
    }

    let transView = [];
    if (this.props.reducer.transactionsFiltered.length === 0) {
      transView = this.props.reducer.transactions;
    } else {
      transView = this.props.reducer.transactionsFiltered;
    }

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
        <List component="nav" aria-label="list of entries">
          <div>
            {transView.map((item) => (
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
      </div>
    );
  }
}

EntryList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  delTrans: PropTypes.func.isRequired,
  filterIsIncome: PropTypes.number.isRequired,
  transactions: PropTypes.array.isRequired,
  hasError: PropTypes.bool.isRequired,
  filterChangeTrigger: PropTypes.func.isRequired,
  transactionsFiltered: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    reducer: state.reducer,
    aggregateReducer: state.aggegateReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(itemsFetchData()),
    delTrans: (id) => dispatch(deleteTransaction(id)),
    filterChangeTrigger: (filtID) => dispatch(filterChange(filtID)),
    handleDelete: (item) => dispatch(handleDelete(item)),
    initializeTotals: (item) => dispatch(initializeTotals(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryList);
