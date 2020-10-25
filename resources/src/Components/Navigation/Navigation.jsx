import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography,
    Divider,
    ListItemIcon,
} from '@material-ui/core'
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined'
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person'
import CreateIcon from '@material-ui/icons/Create'

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
        color: '#000',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}))

export default function Navigation(props) {
    const classes = useStyles()

    const navDictMain = [
        {
            path: '/',
            name: 'Главная страница',
            role: '',
            icon: <HomeIcon color="primary" />,
        },
        {
            path: '/lessons',
            name: 'Мои уроки',
            role: '',
            icon: <MenuBookOutlinedIcon color="primary" />,
        },
        {
            path: '/lessons',
            name: 'Каталог',
            role: '',
            icon: <CollectionsBookmarkOutlinedIcon color="primary" />,
        },
    ]

    const navDictSecond = [
        {
            path: '/cabinet',
            name: 'Личный кабинет',
            role: '',
            icon: <PersonIcon color="primary" />,
        },
        {
            path: '/createLesson',
            name: 'Создание урока',
            role: '',
            icon: <CreateIcon color="primary" />,
        },
        {
            path: '/cart',
            name: 'Корзина',
            role: '',
            icon: <ShoppingCartIcon color="primary" />,
        },
    ]

    const renderNavMainList = (value) =>
        value.map((item, idx) => (
            <ListItem
                key={idx}
                button
                onClick={() => props.redirect(`${item.path}`)}
            >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <div>
                    <h2>sdsad</h2>
                </div>
                <ListItemText
                    primary={
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {item.name}
                        </Typography>
                    }
                />
            </ListItem>
        ))

    return (
        <List component="nav" className={classes.root}>
            {renderNavMainList(navDictMain)}
            <Divider />
            {renderNavMainList(navDictSecond)}
        </List>
    )
}
