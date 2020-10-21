import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemText, Paper, Typography, Divider, ListItemIcon } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
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
}))

export default function Navigation(props) {
    const classes = useStyles()

    const navDictMain = [
        { path: '/', name: 'Главная страница'},
        { path: '/lessons', name: 'Список уроков'},
        { path: '/login', name: 'Авторизация'},
        { path: '/createLesson', name: 'Создание урока'},
    ]

    const navDictSecond = [
        { path: '/cabinet', name: 'Личный кабинет'},
        { path: '/cart', name: 'Корзина'}
    ]

    const renderNavMainList = (value) => (
        value.map((item, idx) => 
            <ListItem key={idx} button onClick={ () => props.redirect(`${item.path}`) }>
                <ListItemText primary={
                    <Typography
                        component="span"
                        variant="body2"
                        className={ classes.inline }
                        color="textPrimary">
                            { item.name }
                    </Typography> }
                />
            </ListItem>
        )
    )

    return(
        <List component="nav" className={ classes.root }>
            { renderNavMainList(navDictMain) }
            <Divider />
            { renderNavMainList(navDictSecond) }
       </List>
    )
}
