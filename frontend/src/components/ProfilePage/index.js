import React, { Component } from 'react'
import {connect} from 'react-redux'

class ProfilePage extends Component {
    render() {
        if (!this.props.user){
            this.props.history.push('/')
          }
        return (
            <div>
                profile page homies
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return { 
        aggregateReducer: state.aggregateReducer,
        user: state.reducer.user
    };
};

export default connect(mapStateToProps)(ProfilePage);
