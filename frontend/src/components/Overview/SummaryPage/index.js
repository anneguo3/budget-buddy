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
        {/* <Card className="textbox" style={{ width: '50%', float: 'left'}}>
          <CardContent>
            <div className="SummaryPage" style={{ backgroundColor: '#616ca5' }}>
              <header className="App-header" style={{ backgroundColor: '#616ca5' }}> 
                <img src={logo} className="App-logo" alt="logo" />
                <div style={{ display: 'flex' }}>
                  <p style={{ marginRight: '50px' , marginLeft: '50px'}}>Funds Inflow</p>
                  <p style={{ marginRight: '50px' }}>Funds Outflow</p>
                  <p style={{ marginRight: '50px' }}>Net Amount</p>
                </div>
                <div style={{ display: 'flex' }}>
                  <p style={{ fontSize: '200%', marginRight: '50px' }}>${this.props.aggregateReducer.totalInflow}</p>
                  <p style={{ fontSize: '200%', marginRight: '50px' }}>${this.props.aggregateReducer.totalOutflow}</p>
                  <p style={{ fontSize: '200%', marginRight: '50px' }}>
                    ${netAmt.toFixed(2)}
                  </p>
                </div>
              </header>

            </div>
          </CardContent>
        </Card> */}
        <Card className="textbox" style={{ width: '50%' }}>
          <CardContent>
          <Typography variant="h5" align='center'>This Month</Typography>
            <Textbox totalInflow={this.props.aggregateReducer.totalInflow} totalOutflow={this.props.aggregateReducer.totalOutflow}  />
          </CardContent>
        </Card>
        <Card className="textbox" style={{ width: '50%' }}>
          <CardContent>
            <Typography variant="h5" align='center'>Year to Date</Typography>
            <Textbox totalInflow={this.props.aggregateReducer.totalInflow} totalOutflow={this.props.aggregateReducer.totalOutflow}  />
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
