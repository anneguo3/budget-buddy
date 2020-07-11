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
    return (
      <div style={{ display : 'inline-flex'}}>
        <Card className="textbox" style={{ width: '50%', float: 'left'}}>
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
                  <p style={{ fontSize: '200%', marginRight: '50px' }}>$480</p>
                  <p style={{ fontSize: '200%', marginRight: '50px' }}>$120</p>
                  <p style={{ fontSize: '200%', marginRight: '50px' }}>$360</p>
                </div>
              </header>

            </div>
          </CardContent>
        </Card>
        <Card className="textbox" style={{ width: '50%' }}>
          <CardContent>
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