import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { ListItemSecondaryAction, Typography } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';

export class SimpleList extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            listItems: this.props.listProp
        };
    }

    colorDecide(flagInc) {
        if (flagInc) {
            return 'green';
        } else {
            return 'red';
        }
    }
    render() {
        const self = this;
        const retChunk = (
            <div>
                {this.state.listItems.map((item, index) => (
                    <div style={{backgroundColor: `${self.colorDecide(item.isMoneyIncrease)}`}}>
                        <ListItem button>
                            <Typography id="date" variant="body1">
                                {item.date}
                            </Typography>

                            <ListItemText id="item" primary={item.name} secondary={`$ ${item.price}`} />

                            <IconButton aria-label="edit">
                                <EditIcon />
                            </IconButton>

                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                    </div>
                ))}
            </div>
        )
        return (
            <div>
                {retChunk}
            </div>
        )
    }
}

export default SimpleList