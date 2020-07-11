import React from "react";
import "./Textbox.css"
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from "@material-ui/core";
import AggregateInfo from '../AggregateInfo/index';
import CategoriesBarChart from '../AggregateInfo/categoriesBarChart';
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
        const categoryChart = <CategoriesBarChart/>

        return (
            <div>
                <Card className="textbox">
                    <CardContent>
                        <Typography variant="h5">
                            Your Budget Overview
                        </Typography>
                        <div>
                            <Typography variant="body1">
                                Here is a comparison of your overall spending and saving habits.
                            </Typography>
                            {aggregateInfo}
                        </div>
                        <div>
                            {categoryChart}
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
