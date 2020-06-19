import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';
import styles from './styles';

class ChatViewComponent extends Component {
    render() {

        const { classes } = this.props;

        return (
            <div className={classes.content}>
                Hello from chat view component
            </div>
        )

    }
}

export default withStyles(styles)(ChatViewComponent);