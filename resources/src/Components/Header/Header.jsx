import React, { Fragment } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography, Hidden, SwipeableDrawer,
        InputBase, Badge, MenuItem, Menu, Drawer, Divider, CardMedia } from '@material-ui/core'
import Profile from 'components/Profile/Profile'
import Navigation from 'components/Navigation/Navigation'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'

const drawerWidth = 150
const image = 'https://i.ibb.co/TtFYWTL/logo.png'
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

    appBar: {
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        }
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },

    drawerPaper: {
        width: drawerWidth,
    },

    media: {
        height: 100,
    },

    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },

        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },

    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputRoot: {
        color: 'inherit',
    },

    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
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
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
    const [drawerAnchorEl, setDrawerAnchorEl] = React.useState(null)
    const isMenuOpen = Boolean(anchorEl)
    const [mobileDrawer, setMobileDrawer] = React.useState(false)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
        handleMobileMenuClose()
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }
    
    const handleMobileDrawerOpen = () => {
        setMobileDrawer(!mobileDrawer)
    }

    const menuId = 'primary-search-account-menu'

    const renderMenu = (
        <>
            <Menu >
                <Profile profile={ props.profile }/>
            </Menu>
        </>
    )
    const mobileMenuId = 'primary-search-account-menu-mobile'
    const renderMobileMenu = (
        <Menu
            anchorEl={ mobileMoreAnchorEl }
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={ mobileMenuId }
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={ isMobileMenuOpen }
            onClose={ handleMobileMenuClose }
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                  <p>Сообщения</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <p>Уведомления</p>
            </MenuItem>
            <MenuItem>
                <Profile profile={ props.profile } />
                <p>Профиль</p>
          </MenuItem>
        </Menu>
    )

    return (
        <div className={ classes.grow }>
            <AppBar position="fixed" className={ classes.appBar } >
                <Toolbar variant="dense">
                    <IconButton
                        edge="start"
                        className={ classes.menuButton }
                        color="inherit"
                        aria-label="open drawer"
                        aria-controls={ mobileMenuId }
                        aria-haspopup="true"
                        onClick={ handleMobileDrawerOpen }
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to='/' replace>
                        <Typography className={classes.title} variant="h6" noWrap component="h2">
                            {props.title}
                        </Typography>
                    </Link>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                          <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={ classes.grow } />
                    <div className={ classes.sectionDesktop }>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={ handleProfileMenuOpen }
                            color="inherit"
                        >
                            <Profile profile={ props.profile }/>
                        </IconButton>
                    </div>
                    <div className={ classes.sectionMobile }>
                        <IconButton
                            aria-label="show more"
                            aria-controls={ mobileMenuId }
                            aria-haspopup="true"
                            onClick={ handleMobileMenuOpen }
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                  </div>
                </Toolbar>
            </AppBar>
            { renderMobileMenu }
            { renderMenu }
            <Hidden xsDown implementation="css">
                <Drawer
                    className={ classes.drawer }
                    variant="permanent"
                    classes={{ paper: classes.drawerPaper }}
                    anchor="left">

                        <div className={ classes.toolbar } />
                        <CardMedia image={image} className={ classes.media }/>
                        <Divider />
                        <Navigation />

                </Drawer>
            </Hidden> 
            <Hidden smUp implementation="css">
                <SwipeableDrawer
                    onClose={ handleMobileDrawerOpen }
                    onOpen={ handleMobileDrawerOpen }
                    onClick={ handleMobileDrawerOpen }
                    className={ classes.drawer }
                    classes={{ paper: classes.drawerPaper }}
                    anchor="left"
                    open={ mobileDrawer }>

                        <div className={ classes.toolbar } />
                        <CardMedia image={image} className={ classes.media }/>
                        <Divider />
                        <Navigation />

                </SwipeableDrawer>
            </Hidden>
        </div>
    )
}