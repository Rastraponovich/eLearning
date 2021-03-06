import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    Button,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AuthMenu from './AuthMenu'
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined'
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined'

const drawerWidth = 150

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },

    menuButton: {
        marginRight: theme.spacing(2),
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },

    nav: {
        '& button:not(:last-child)': {
            marginRight: '1rem',
        },
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },

    navButton: {
        color: theme.palette.common.white,
    },

    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    appBar2: {
        [theme.breakpoints.up('sm')]: {
            width: '100%',
        },
    },

    title: {
        // display: 'none',
        cursor: 'pointer',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },

    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },

    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}))

export default function Header(props) {
    const classes = useStyles()
    const menuId = 'primary-search-account-menu'
    const mobileMenuId = 'primary-search-account-menu-mobile'

    return (
        <div className={classes.grow}>
            <AppBar
                position="fixed"
                className={classes.appBar2}
                color="primary"
            >
                <Toolbar>
                    {props.token !== null ? (
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={props.mobileDrawerStateSetAction}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : null}

                    <Typography
                        onClick={() => props.redirect('/')}
                        className={classes.title}
                        variant="h6"
                        noWrap
                        component="h2"
                    >
                        {props.title}
                    </Typography>

                    <div className={classes.grow} />

                    <nav className={classes.nav}>
                        <Button
                            className={classes.navButton}
                            startIcon={<MenuBookOutlinedIcon />}
                            size="small"
                        >
                            <Typography variant="body2" component="span">
                                Мои уроки
                            </Typography>
                        </Button>
                        <Button
                            onClick={() => props.redirect('/lessons')}
                            className={classes.navButton}
                            startIcon={<CollectionsBookmarkOutlinedIcon />}
                            size="small"
                        >
                            <Typography variant="body2" component="span">
                                Каталог
                            </Typography>
                        </Button>
                    </nav>

                    <div className={classes.grow} />
                    {props.token !== null ? (
                        <AuthMenu
                            redirect={props.redirect}
                            logoutAction={props.logoutAction}
                            profile={props.profile}
                            menuId={menuId}
                            mobileMenuId={mobileMenuId}
                            cart={props.cart}
                        />
                    ) : (
                        <>
                            <div className={classes.sectionDesktop}>
                                <Button
                                    onClick={() => props.redirect('/login')}
                                    color="primary"
                                    variant="contained"
                                >
                                    Вход / Регистрация
                                </Button>
                            </div>
                            <div className={classes.sectionMobile}>
                                <Button
                                    onClick={() => props.redirect('/login')}
                                    color="primary"
                                    variant="contained"
                                    size="small"
                                >
                                    <Typography
                                        variant="body2"
                                        component="span"
                                    >
                                        Вход / Регистрация
                                    </Typography>
                                </Button>
                            </div>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
}
