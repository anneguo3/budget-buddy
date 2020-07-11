import React from "react";
import "./Textbox.css"
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from "@material-ui/core";
import AggregateInfo from '../AggregateInfo/index';
import aggregateReducer from '../../../reducers/aggregateReducer';

export default class TextBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                inflow: 0,
                outflow: 0
        };

        aggregateReducer.subscribe(() => {
            this.setState({
                inflow: aggregateReducer.getState().totalInflow,
                outflow: aggregateReducer.getState().totalOutflow
            })
        }) 
    }
    render() {
        const aggregateInfo = <AggregateInfo inflow={this.state.totalInflow} outflow={this.state.totalOutflow} />
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

export default connect(mapStateToProps)(Overview);
