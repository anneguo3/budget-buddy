import React from "react";
import "./Textbox.css"
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from "@material-ui/core";
import MonthAggregateInfo from '../AggregateInfo/index'
import AggregateInfo from '../AggregateInfo/index';
import CategoriesBarChart from '../AggregateInfo/categoriesBarChart';
import TimeLineGraph from '../AggregateInfo/timeLineGraph';
import { connect } from "react-redux";

class TextBox extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let aggregatePie = (this.props.isMonth) ? <MonthAggregateInfo/> : <AggregateInfo/>

        return (
            <div>
                <Card className="textbox">
                    <CardContent>
                        <Typography variant="h5">
                            Your Budget Overview
                        </Typography>
                        <Typography variant="body1">
                            Here is a comparison of your overall spending and saving habits.
                        </Typography>
                        <div>
                            <Typography variant="h6" className = "subtitle">
                                Spending vs Saving
                            </Typography>
                            {aggregatePie}
                        </div>
                        <div>
                            <CategoriesBarChart/>
                        </div>
                        <div>
                            <Typography variant="h6" className = "subtitle">
                                Your Budget Timeline
                            </Typography>
                            <TimeLineGraph />
                        </div>
                        
                    </CardContent>
                </Card>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        aggregateReducer: state.aggregateReducer
    };
};

export default connect(mapStateToProps)(TextBox);
