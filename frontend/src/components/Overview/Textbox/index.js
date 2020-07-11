import React from "react";
import "./Textbox.css"
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from "@material-ui/core";
import AggregateInfo from '../AggregateInfo/index';
import { connect } from "react-redux";

class TextBox extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const aggregateInfo = <AggregateInfo 
            inflow={this.props.aggregateReducer.totalInflow} 
            outflow={this.props.aggregateReducer.totalOutflow}
            />
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
                        {aggregateInfo}
                        {aggregateInfo}
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
