import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

import { addTransactionItem } from '../../../actions/action';
import { increaseInflow, increaseOutflow } from '../../../actions/aggregateAction';

/* DEPRECATED
import { addItem } from "../../../app/listReducer";
import { updateTotalInflow, updateTotalOutflow, aggregate } from "../../../app/aggregateReducer";
*/

class AddEntry extends React.Component {
  constructor(props) {
    super(props);
    // Set default values for this class
    this.state = {
      transName: '',
      amount: '',
      isMoneyIncrease: false,
      date: moment().format().substring(0, 10)
      // ,
      // totalInflow: 0,
      // totalOutflow: 0
    };

    this.handleName = this.handleName.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleAmount = this.handleAmount.bind(this);

  }

  // Handle all event triggers
  handleName(event) {
    this.setState({ transName: event.target.value });
  }
  handleIncrease(event) {
    console.log(event.target.value === "false" ? false : true)
    this.setState({ isMoneyIncrease: event.target.value === "false" ? false : true });
  }
  handleDate(event) {
    this.setState({ date: event.target.value });
  }
  handleAmount(event) {
    const currAmt = event.target.value;
    this.setState({ amount: currAmt });

    if (this.isMoneyIncrease) {
      this.props.inflow(currAmt);
    } else {
      this.props.outflow(currAmt);
    }

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
            <InputLabel>Transaction</InputLabel>
            <Input onChange={this.handleName} />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
            <Input
              id="standard-adornment-amount"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
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
          <Button variant="outlined" onClick={() => {
            // trigger add action when clicked, scraping values from this.state
            this.props.addTransaction(uuid.v4(), this.state.transName, this.state.amount, this.state.isMoneyIncrease, this.state.date)
          }}>
            Submit Entry
        </Button>
        </Box>
      </div>
    );
  }
}

AddEntry.propTypes = {
  addTransaction: PropTypes.func.isRequired,
  transactions: PropTypes.array.isRequired,
  hasError: PropTypes.bool.isRequired,
  transName: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  isMoneyIncrease: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  inflow: PropTypes.func.isRequired,
  outflow: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
    hasError: state.hasError,
    transName: state.transName,
    amount: state.amount,
    isMoneyIncrease: state.isMoneyIncrease,
    date: state.date
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTransaction: (id, name, amount, isInc, date) => dispatch(addTransactionItem(id, name, amount, isInc, date)),
    inflow: amount =>  dispatch(increaseInflow(amount)),
    outflow: amount => dispatch(increaseOutflow(amount))  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEntry);