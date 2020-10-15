import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { List, ListItem, ListItemText, Paper} from '@material-ui/core'

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
})

class Navigation extends Component{
    render() {
        const { classes } = this.props
        return(
            <Paper elevation={5} square>
            <List component="nav" className={classes.root}>
                <Link to='/login' replace>
                    <ListItem button>
                        <ListItemText primary="Login Page" />
                    </ListItem>
                </Link>
                <Link to='/' replace>
                    <ListItem button>
                        <ListItemText primary="Main" />
                    </ListItem>
                </Link>
                <Link to='/createLesson' replace>
                    <ListItem button>
                        <ListItemText primary="CreateLesson" />
                    </ListItem>
                </Link>
            </List>
            </Paper>
        )
    }
}

export default withStyles(styles)(Navigation)