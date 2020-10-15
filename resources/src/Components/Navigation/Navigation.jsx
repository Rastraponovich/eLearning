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
    link: {
        textDecoration: 'none',
        color: '#000'
    }
})

class Navigation extends Component{
    render() {
        const { classes } = this.props
        return(
            <Paper elevation={5} square>
            <List component="nav" className={classes.root}>
                <Link className={classes.link} to='/' replace>
                    <ListItem button>
                        <ListItemText primary="Главная страница" />
                    </ListItem>
                </Link>
                <Link className={classes.link} to='/lessons' replace>
                    <ListItem button>
                        <ListItemText primary="Список уроков" />
                    </ListItem>
                </Link>
                <Link className={classes.link} to='/login' replace>
                    <ListItem button>
                        <ListItemText primary="Авторизация" />
                    </ListItem>
                </Link>
                <Link className={classes.link} to='/createLesson' replace>
                    <ListItem button>
                        <ListItemText primary="Создание урока" />
                    </ListItem>
                </Link>
            </List>
            </Paper>
        )
    }
}

export default withStyles(styles)(Navigation)