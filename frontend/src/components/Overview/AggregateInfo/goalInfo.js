import React, { Component } from 'react'

class GoalInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
           goal: props.goal,
           isSave: props.isSave,
           isOver: props.isOver,
           diff: props.diff
        };
    }
    render() {
         let category = (this.state.isSave) ? "savings" : "spending";
         let progress = (this.state.isOver) ? "over" : "under";
         return (
            <div>
               Your current {category} goal is ${this.state.goal}.
               You are {progress} your {category} goal by ${this.state.diff}.
            </div>
         )
    }
}

export default GoalInfo;