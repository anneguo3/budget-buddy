import React from "react";
import "./Textbox.css"
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from "@material-ui/core";
import AggregateInfo from '../AggregateInfo/index';
import CategoriesBarChart from '../AggregateInfo/categoriesBarChart';
import TimeLineGraph from '../AggregateInfo/timeLineGraph';
import { connect } from "react-redux";

class TextBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMonth: props.isMonth
        };
    }
    render() {
        const placeholder = <p>You have no data to display.</p>
        const dataExists = (this.props.reducer.transactions.length > 0 && 
            this.props.reducer.transactions !== null);  
        let timeline = (!this.state.isMonth) ? 
            <div>
               <Typography variant="h6" className = "subtitle">
                    Your Budget Timeline
                </Typography>
                <TimeLineGraph/>  
            </div>
            : null;

        let data = 
            <div>
                <Typography variant="body1">
                    Here is a comparison of your overall spending and saving habits.
                </Typography>
                <div>
                    <Typography variant="h6" className = "subtitle">
                        Spending vs Saving
                    </Typography>
                    <AggregateInfo isMonth = {this.state.isMonth}/>
                </div>
                <div>
                    <CategoriesBarChart isMonth = {this.state.isMonth}/>
                </div>
                <div>
                    
                   {timeline}
                </div>
            </div>
            
        let display = dataExists ? data : placeholder;
        return (
            <div>
                <Card className="textbox">
                    <CardContent>
                        <Typography variant="h5">
                            Your Budget Overview
                        </Typography>
                        {display}
                        
                    </CardContent>
                </Card>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        reducer: state.reducer,
        aggregateReducer: state.aggregateReducer
    };
};

export default connect(mapStateToProps)(TextBox);
