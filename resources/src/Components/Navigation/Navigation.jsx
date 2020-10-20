import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { List, ListItem, ListItemText, Paper, Typography, Divider, ListItemIcon } from '@material-ui/core'
import CreateLesson from 'components/CreateLesson/CreateLesson'

const styles = theme => ({
    root: {
        width: '100%',
        // backgroundColor: theme.palette.background.paper,
        fontSize: '12px',
    },
    inline: {
        display: 'inline',
    },
    link: {
        textDecoration: 'none',
        color: '#000'
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
})

class Navigation extends Component{

    render() {
        const { classes } = this.props
        
        return(
            <List component="nav" className={classes.root}>
                <Link className={classes.link} to='/' replace>
                    <ListItem button>
                        <ListItemText primary={
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary">
                                    Главная страница
                            </Typography> }
                        />
                    </ListItem>
                </Link>
                <Link className={classes.link} to='/lessons' replace>
                    <ListItem button>
                        <ListItemText primary={
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary">
                                    Список уроков
                            </Typography> }
                        />
                    </ListItem>
                </Link>
                <Link className={classes.link} to='/login' replace>
                    <ListItem button>
                        <ListItemText primary={
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary">
                                    Авторизация
                            </Typography> }
                        />
                    </ListItem>
                </Link>
                <Link className={classes.link} to='/createLesson' replace>
                    <ListItem button>
                        <ListItemText primary={
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary">
                                    Создание урока
                            </Typography> }
                        />
                    </ListItem>
                </Link>
                <Divider />
                <Link className={classes.link} to='/cabinet' replace>
                    <ListItem button>
                        <ListItemText primary={
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary">
                                    Личный кабинет
                            </Typography> }
                        />
                    </ListItem>
                </Link>
                <Link className={classes.link} to='/cart' replace>
                    <ListItem button>
                        <ListItemText primary={
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary">
                                    Корзина
                            </Typography> }
                        />
                    </ListItem>
                </Link>
            </List>
            
        )
    }
}

export default withStyles(styles)(Navigation)