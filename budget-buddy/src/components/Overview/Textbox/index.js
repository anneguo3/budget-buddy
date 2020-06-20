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
