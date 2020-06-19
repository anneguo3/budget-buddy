import React from "react";
import "./Textbox.css"
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from "@material-ui/core";
import { AggregateInfo } from "../AggregateInfo";

export function Textbox() {
    const aggregateInfo = <AggregateInfo />

    return (
        <div>
            <Card className="textbox">
                <CardContent>
                    <Typography variant="h5">
                        Recent Spending
                    </Typography>

                    <Typography variant="body1">
                        Looks like you've spent the most money at Walmart this month.
                    </Typography>
                    {aggregateInfo}
                </CardContent>
            </Card>
            
        </div>
    )
}