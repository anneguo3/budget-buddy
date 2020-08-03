import React from "react";
import logo from './../../../images/bank.png';
import './SummaryPage.css';
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from "@material-ui/core";
import Textbox from './../Textbox'
import { connect } from 'react-redux';
import aggregateReducer from '../../../reducers/aggregateReducer';

class SummaryPage extends React.Component {
  constructor(props) {
    super(props)
}
  render() {
    const netAmt = Number(this.props.aggregateReducer.totalInflow) - Number(this.props.aggregateReducer.totalOutflow);
    return (
      <div style={{ display : 'inline-flex'}} className="overViewContainer">
        <Card className="textbox" style={{ width: '50%' }}>
          <CardContent>
          <Typography variant="h5" align='center'>This Month</Typography>
            <Textbox isMonth = {true} />
          </CardContent>
        </Card>
        <Card className="textbox" style={{ width: '50%' }}>
          <CardContent>
            <Typography variant="h5" align='center'>Year to Date</Typography>
            <Textbox isMonth = {false} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
      aggregateReducer: state.aggregateReducer
  };
};

export default connect(mapStateToProps)(SummaryPage);
