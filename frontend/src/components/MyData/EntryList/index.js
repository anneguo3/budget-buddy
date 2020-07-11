import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import "./EntryList.css";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

import { itemsFetchData, deleteTransaction } from "../../../actions/action";

class EntryList extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { addValue: '' };
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

  render() {
    const self = this;
    if (this.props.hasError) {
      return (
        <p>
          Sorry! There was an error loading the transactions list. Please
          refresh the page!
        </p>
      );
    }
    console.log(this.props);
    return (
      <div className="entryList">
        <List component="nav" aria-label="list of entries">
          <div>
            {this.props.transactions.map((item) => (
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
  //addMessage: PropTypes.func.isRequired,
  transactions: PropTypes.array.isRequired,
  hasError: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    transactions: state.reducer.transactions,
    hasError: state.reducer.hasError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(itemsFetchData()),
    delTrans: (id) => dispatch(deleteTransaction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryList);
